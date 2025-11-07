const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '..', '.playwright-mcp', 'waguwa-xlsx---Sheet1.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const lines = csvContent.split('\n').map(line => line.trim()).filter(line => line);

// Extract headers (row 8)
const headerLine = lines[7]; // Row 8 (0-indexed)
const headers = parseCSVLine(headerLine);

// Extract cetasika factor names (columns 8-59, indices 8-59)
// The headers array has cetasika names starting from index 8
let cetasikaFactors = [];
for (let i = 8; i < headers.length && i < 60; i++) {
    const factor = headers[i].trim();
    if (factor && factor !== '') {
        cetasikaFactors.push(factor);
    }
}

// If no factors found, use the known list from the CSV structure
if (cetasikaFactors.length === 0) {
    cetasikaFactors = [
        'ඵස්ස', 'වේදනා', 'සංඤ්ඤා', 'චේතනා', 'ඒකග්ගතා', 'ජීවිතින්ද්‍රිය', 'මනසිකාර',
        'විතක්ක', 'විචාර', 'අධිමොක්ඛ', 'විරිය', 'පීති', 'ඡන්ද', 'මෝහ', 'අහිරික',
        'අනොත්තප්ප', 'උද්ධච්ච', 'ලෝභ', 'දිට්ඨි', 'මාන', 'දෝස', 'ඉස්සාව', 'මච්ඡරිය',
        'කුක්කුච්ච', 'ථීන', 'මිද්ධ', 'විචිකිච්ඡාව', 'සද්ධාව', 'සතිය', 'හිරිය', 'ඔත්තප්පය',
        'අලෝභය', 'අදෝසය(මෛත්‍රිය)', 'තත්‍රමජ්ඣත්තථාව', 'කායපස්සද්ධිය', 'චිත්තපස්සද්ධිය',
        'කායලහුතාව', 'චිත්තලහුතාව', 'කායමුදුතාව', 'චිත්තමුදුතාව', 'කායකම්මඤ්ඤතාව',
        'චිත්තකම්මඤ්ඤතාව', 'කායපාගුඤ්ඤතාව', 'චිත්තපාගුඤ්ඤතාව', 'කායුජ්ජුග්ගතාව',
        'චිත්තුජ්ජුග්ගතාව', 'සම්මා වාචාව', 'සම්මා කම්මන්තය', 'සම්මා ආජීවය',
        'කරුණාව', 'මුදිතාව', 'ප්‍රඥාව (අමෝහය)'
    ];
}

// Extract data rows (starting from row 9)
const dataRows = lines.slice(8);

// Cetasika factor mapping
const cetasikaMap = {
    'ඵස්ස': 'phassa',
    'වේදනා': 'vedana',
    'සංඤ්ඤා': 'sanna',
    'චේතනා': 'cetana',
    'ඒකග්ගතා': 'ekaggata',
    'ජීවිතින්ද්‍රිය': 'jivitindriya',
    'මනසිකාර': 'manasikara',
    'විතක්ක': 'vitakka',
    'විචාර': 'vicara',
    'අධිමොක්ඛ': 'adhimokkha',
    'විරිය': 'viriya',
    'පීති': 'piti',
    'ඡන්ද': 'chanda',
    'මෝහ': 'moha',
    'අහිරික': 'ahirika',
    'අනොත්තප්ප': 'anottappa',
    'උද්ධච්ච': 'uddhacca',
    'ලෝභ': 'lobha',
    'දිට්ඨි': 'ditthi',
    'මාන': 'mana',
    'දෝස': 'dosa',
    'ඉස්සාව': 'issa',
    'මච්ඡරිය': 'macchariya',
    'කුක්කුච්ච': 'kukkucca',
    'ථීන': 'thina',
    'මිද්ධ': 'middha',
    'විචිකිච්ඡාව': 'vicikiccha',
    'සද්ධාව': 'saddha',
    'සතිය': 'sati',
    'හිරිය': 'hiri',
    'ඔත්තප්පය': 'ottappa',
    'අලෝභය': 'alobha',
    'අදෝසය(මෛත්‍රිය)': 'adosa',
    'තත්‍රමජ්ඣත්තථාව': 'tatra-majjhattata',
    'කායපස්සද්ධිය': 'kayapassaddhi',
    'චිත්තපස්සද්ධිය': 'cittapassaddhi',
    'කායලහුතාව': 'kayalahuta',
    'චිත්තලහුතාව': 'cittalahuta',
    'කායමුදුතාව': 'kayamuduta',
    'චිත්තමුදුතාව': 'cittamuduta',
    'කායකම්මඤ්ඤතාව': 'kayakammannata',
    'චිත්තකම්මඤ්ඤතාව': 'cittakammannata',
    'කායපාගුඤ්ඤතාව': 'kayapagunnata',
    'චිත්තපාගුඤ්ඤතාව': 'cittapagunnata',
    'කායුජ්ජුග්ගතාව': 'kayujjugata',
    'චිත්තුජ්ජුග්ගතාව': 'cittujjugata',
    'සම්මා වාචාව': 'samma-vaca',
    'සම්මා කම්මන්තය': 'samma-kammanta',
    'සම්මා ආජීවය': 'samma-ajiva',
    'කරුණාව': 'karuna',
    'මුදිතාව': 'mudita',
    'ප්‍රඥාව (අමෝහය)': 'panna'
};

// Parse CSV line handling quoted fields
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    
    return result;
}

// Parse data rows
const cittas = [];
const references = {
    tipitaka: 'https://tipitaka.lk/',
    archive: 'https://archive.org/stream/AbhidhammaMulikaKarunu/Abhidhamma%20Mulika%20Karunu_djvu.txt',
    source: 'Ven. Rerukane Chandawimala Thero\'s books'
};

dataRows.forEach((row, index) => {
    if (!row || row.trim() === '') return;
    
    const columns = parseCSVLine(row);
    
    // Skip empty rows
    if (columns.length < 8) return;
    
    const cittaNumber = columns[0];
    const bhumidinVasayen = columns[1];
    const kamavacaraKanthaya = columns[2];
    const cittaKanthaya = columns[3];
    const cittaName = columns[4];
    const chaithasikaCount = columns[5];
    const kamavacaraCittaKanthaya = columns[6];
    const cittaKanthaya2 = columns[7];
    
    // Skip header rows
    if (cittaNumber === 'සිත් ගණන' || !cittaNumber || isNaN(parseInt(cittaNumber))) {
        return;
    }
    
    // Extract cetasika factors (columns 8-59)
    const cetasikaPresence = columns.slice(8, 8 + cetasikaFactors.length).map(val => {
        const trimmed = val.trim();
        return trimmed === '✓' || trimmed === 'true' || trimmed === '1';
    });
    
    // Create cetasika object
    const cetasikas = {};
    cetasikaFactors.forEach((factor, idx) => {
        if (idx < cetasikaPresence.length) {
            cetasikas[factor] = cetasikaPresence[idx];
        } else {
            cetasikas[factor] = false;
        }
    });
    
    // Create citta object
    const citta = {
        id: parseInt(cittaNumber),
        name: cittaName || '',
        nameEn: '', // Will be added from existing data if available
        category: kamavacaraCittaKanthaya || cittaKanthaya2 || '',
        categoryEn: translateCategory(kamavacaraCittaKanthaya || cittaKanthaya2 || ''),
        type: kamavacaraKanthaya || '',
        typeEn: translateType(kamavacaraKanthaya || ''),
        subcategory: cittaKanthaya || '',
        subcategoryEn: translateSubcategory(cittaKanthaya || ''),
        bhumidinVasayen: bhumidinVasayen || '',
        chaithasikaCount: parseInt(chaithasikaCount) || 0,
        cetasikas: cetasikas,
        descriptionSi: cittaName || '',
        descriptionEn: '',
        references: references,
        tipitakaLink: references.tipitaka,
        archiveLink: references.archive
    };
    
    cittas.push(citta);
});

// Translation helpers
function translateCategory(cat) {
    const map = {
        'අකුසල්': 'Unwholesome',
        'කාමාවචර සෝභන': 'Sensuous Sphere Beautiful',
        'අහේතුක': 'Rootless',
        'කාමාවචර සෝභන': 'Sensuous Sphere Beautiful',
        'ලෝකෝත්තර මග්ග': 'Supramundane Path',
        'ලෝකෝත්තර ඵල': 'Supramundane Fruition'
    };
    return map[cat] || cat;
}

function translateType(type) {
    const map = {
        'කාමාවචර සිත් 54': 'Sensuous Sphere Consciousness (54)',
        'කාමාවචර සෝභන සිත් 24': 'Sensuous Sphere Beautiful Consciousness (24)',
        'අහේතුක සිත් 18': 'Rootless Consciousness (18)',
        'රූපාවචර සිත් 15': 'Form Sphere Consciousness (15)',
        'අරූපාවචර සිත් 12': 'Formless Sphere Consciousness (12)',
        'ලෝකෝත්තර සිත් 40': 'Supramundane Consciousness (40)'
    };
    return map[type] || type;
}

function translateSubcategory(sub) {
    const map = {
        'ලෝභ මූල': 'Greed Root',
        'ද්වේශ මූල': 'Hatred Root',
        'මෝහ මූල': 'Delusion Root',
        'අකුසල විපාක': 'Unwholesome Resultant',
        'අහේතුක කුසල විපාක': 'Rootless Wholesome Resultant',
        'අහේතුක ක්‍රියා': 'Rootless Functional',
        'කාමාවචර කුසල්': 'Sensuous Sphere Wholesome',
        'සහේතුක කාමාවචර විපාක': 'With Root Sensuous Sphere Resultant',
        'සහේතුක කාමාවචර ක්‍රියා': 'With Root Sensuous Sphere Functional',
        'රූපාවචර කුසල්': 'Form Sphere Wholesome',
        'රූපාවචර විපාක': 'Form Sphere Resultant',
        'රූපාවචර ක්‍රියා': 'Form Sphere Functional',
        'අරූපාවචර කුසල්': 'Formless Sphere Wholesome',
        'අරූපාවචර විපාක': 'Formless Sphere Resultant',
        'අරූපාවචර ක්‍රියා': 'Formless Sphere Functional'
    };
    return map[sub] || sub;
}

// Create comprehensive JSON structure
const comprehensiveData = {
    metadata: {
        title: 'Abhidhamma Citta Chaithasika Complete Dataset',
        description: 'Complete dataset of 121 cittas (consciousness states) and 52 cetasikas (mental factors)',
        source: 'Chiththa Chaithasika Tool V2.2.xlsx',
        author: 'Ven. Rerukane Chandawimala Thero',
        version: '2.0',
        lastUpdated: new Date().toISOString(),
        references: references
    },
    cittas: cittas,
    cetasikas: {
        factors: cetasikaFactors,
        total: cetasikaFactors.length
    },
    categories: {
        'අකුසල්': cittas.filter(c => c.category === 'අකුසල්').length,
        'කාමාවචර සෝභන': cittas.filter(c => c.category === 'කාමාවචර සෝභන').length,
        'අහේතුක': cittas.filter(c => c.category === 'අහේතුක').length,
        'ලෝකෝත්තර මග්ග': cittas.filter(c => c.category === 'ලෝකෝත්තර මග්ග').length,
        'ලෝකෝත්තර ඵල': cittas.filter(c => c.category === 'ලෝකෝත්තර ඵල').length
    }
};

// Write JSON file
const outputPath = path.join(__dirname, 'abhidhamma-complete-data.json');
fs.writeFileSync(outputPath, JSON.stringify(comprehensiveData, null, 2), 'utf-8');

console.log(`✅ Successfully created ${outputPath}`);
console.log(`📊 Total cittas: ${cittas.length}`);
console.log(`📋 Total cetasika factors: ${cetasikaFactors.length}`);
console.log(`\nCategories:`);
Object.entries(comprehensiveData.categories).forEach(([cat, count]) => {
    console.log(`  - ${cat}: ${count}`);
});

