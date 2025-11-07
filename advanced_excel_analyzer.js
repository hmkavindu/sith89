const fs = require('fs');
const path = require('path');

// More advanced Excel file analyzer using ZIP extraction
function extractExcelData(filePath) {
    try {
        console.log('=== ADVANCED EXCEL FILE ANALYSIS ===');
        console.log(`File: ${path.basename(filePath)}`);
        
        // Read the file as buffer
        const buffer = fs.readFileSync(filePath);
        
        // Since Excel files are ZIP archives, let's extract the XML content
        const AdmZip = require('adm-zip');
        const zip = new AdmZip(buffer);
        
        console.log('\n=== EXTRACTING WORKSHEET DATA ===');
        
        // Extract shared strings
        const sharedStringsEntry = zip.getEntry('xl/sharedStrings.xml');
        let sharedStrings = [];
        
        if (sharedStringsEntry) {
            const sharedStringsContent = sharedStringsEntry.getData().toString();
            console.log('✓ Found shared strings');
            
            // Parse shared strings
            const stringMatches = sharedStringsContent.match(/<t[^>]*>([^<]+)<\/t>/g);
            if (stringMatches) {
                sharedStrings = stringMatches.map(match => 
                    match.replace(/<t[^>]*>/, '').replace(/<\/t>/, '')
                );
                console.log(`Found ${sharedStrings.length} shared strings`);
            }
        }
        
        // Extract worksheet data
        const worksheetEntry = zip.getEntry('xl/worksheets/sheet1.xml');
        if (worksheetEntry) {
            const worksheetContent = worksheetEntry.getData().toString();
            console.log('✓ Found worksheet data');
            
            // Parse cell data
            const cellMatches = worksheetContent.match(/<c r="([A-Z]+)(\d+)"[^>]*>.*?<v>([^<]+)<\/v>.*?<\/c>/g);
            
            if (cellMatches) {
                console.log(`Found ${cellMatches.length} cells with data`);
                
                // Parse cells and organize by row
                const rows = {};
                
                cellMatches.forEach(cellMatch => {
                    const match = cellMatch.match(/<c r="([A-Z]+)(\d+)"[^>]*>.*?<v>([^<]+)<\/v>.*?<\/c>/);
                    if (match) {
                        const col = match[1];
                        const row = parseInt(match[2]);
                        const value = match[3];
                        
                        if (!rows[row]) {
                            rows[row] = {};
                        }
                        
                        // Convert column letter to number for sorting
                        const colNum = col.charCodeAt(0) - 65;
                        rows[row][colNum] = value;
                    }
                });
                
                // Display first few rows
                console.log('\n=== FIRST 5 ROWS ===');
                const sortedRows = Object.keys(rows).sort((a, b) => parseInt(a) - parseInt(b));
                
                sortedRows.slice(0, 5).forEach(rowNum => {
                    const row = rows[rowNum];
                    const sortedCols = Object.keys(row).sort((a, b) => parseInt(a) - parseInt(b));
                    const rowData = sortedCols.map(colNum => {
                        const value = row[colNum];
                        // Try to get string from shared strings if it's a number
                        if (sharedStrings[parseInt(value)]) {
                            return sharedStrings[parseInt(value)];
                        }
                        return value;
                    });
                    
                    console.log(`Row ${rowNum}: ${rowData.join(' | ')}`);
                });
                
                // Get column names (first row)
                if (rows[1]) {
                    console.log('\n=== COLUMN NAMES ===');
                    const firstRow = rows[1];
                    const sortedCols = Object.keys(firstRow).sort((a, b) => parseInt(a) - parseInt(b));
                    sortedCols.forEach((colNum, index) => {
                        const value = firstRow[colNum];
                        const colName = sharedStrings[parseInt(value)] || value;
                        console.log(`${index + 1}. ${colName}`);
                    });
                }
                
            } else {
                console.log('No cell data found in expected format');
            }
        }
        
    } catch (error) {
        console.error('Error analyzing file:', error.message);
        console.log('\nTrying alternative approach...');
        
        // Fallback: try to install adm-zip if not available
        try {
            const { execSync } = require('child_process');
            console.log('Installing adm-zip package...');
            execSync('npm install adm-zip', { stdio: 'inherit' });
            console.log('Package installed. Please run the script again.');
        } catch (installError) {
            console.error('Could not install required package:', installError.message);
        }
    }
}

// Run the analysis
const filePath = process.argv[2] || 'dummy_excel_file.xlsx';
extractExcelData(filePath);

