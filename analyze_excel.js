const fs = require('fs');
const path = require('path');

// Simple Excel file analyzer
function analyzeExcelFile(filePath) {
    try {
        console.log('=== EXCEL FILE ANALYSIS ===');
        console.log(`File: ${path.basename(filePath)}`);
        
        // Read the file as buffer
        const buffer = fs.readFileSync(filePath);
        console.log(`File size: ${buffer.length} bytes`);
        
        // Excel files are ZIP archives, let's try to extract basic info
        console.log('\n=== FILE STRUCTURE ===');
        
        // Look for Excel signature
        const signature = buffer.toString('hex', 0, 4);
        console.log(`File signature: ${signature}`);
        
        if (signature === '504b0304') {
            console.log('✓ Valid ZIP/Excel file format detected');
            
            // Try to find worksheet data patterns
            const content = buffer.toString('binary');
            
            // Look for common Excel patterns
            const patterns = [
                'xl/sharedStrings.xml',
                'xl/worksheets/sheet1.xml',
                'xl/workbook.xml',
                'xl/styles.xml'
            ];
            
            console.log('\n=== EXCEL COMPONENTS FOUND ===');
            patterns.forEach(pattern => {
                if (content.includes(pattern)) {
                    console.log(`✓ ${pattern}`);
                } else {
                    console.log(`✗ ${pattern}`);
                }
            });
            
            // Try to extract some basic text content
            console.log('\n=== ATTEMPTING TEXT EXTRACTION ===');
            
            // Look for text patterns in the binary content
            const textMatches = content.match(/[A-Za-z][A-Za-z0-9\s]{2,50}/g);
            if (textMatches) {
                console.log('Found text patterns:');
                textMatches.slice(0, 10).forEach((match, index) => {
                    console.log(`${index + 1}. ${match.trim()}`);
                });
            }
            
        } else {
            console.log('✗ Not a valid Excel/ZIP file format');
        }
        
    } catch (error) {
        console.error('Error analyzing file:', error.message);
    }
}

// Run the analysis
const filePath = process.argv[2] || 'dummy_excel_file.xlsx';
analyzeExcelFile(filePath);

