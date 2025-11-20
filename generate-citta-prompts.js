// Script to generate Claude AI prompts for all 89 cittas
// Run with: node generate-citta-prompts.js

const fs = require('fs');
const path = require('path');

// Load existing citta data
const scriptData = require('./script.js');

const cittaList = [
  {id: 1, name: "සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත අසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 20, status: "COMPLETED"},
  {id: 2, name: "සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත සසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 22},
  {id: 3, name: "සෝමනස්ස සහගත දිට්ඨිගත විප්‍රයුක්ත අසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 19},
  {id: 4, name: "සෝමනස්ස සහගත දිට්ඨිගත විප්‍රයුක්ත සසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 21},
  {id: 5, name: "උපේක්ඛා සහගත දිට්ඨිගත සම්ප්‍රයුක්ත අසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 19},
  {id: 6, name: "උපේක්ඛා සහගත දිට්ඨිගත සම්ප්‍රයුක්ත සසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 21},
  {id: 7, name: "උපේක්ඛා සහගත දිට්ඨිගත විප්‍රයුක්ත අසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 19},
  {id: 8, name: "උපේක්ඛා සහගත දිට්ඨිගත විප්‍රයුක්ත සසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල 8", cetasikaCount: 21},
  {id: 9, name: "දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත අසංඛාරික සිත", category: "අකුසල්", subcategory: "ද්වේශ මූල 2", cetasikaCount: 20},
  {id: 10, name: "දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත සසංඛාරික සිත", category: "අකුසල්", subcategory: "ද්වේශ මූල 2", cetasikaCount: 22},
  {id: 11, name: "උපේක්ඛා සහගත විචිකිච්ඡා සම්ප්‍රයුක්ත සිත", category: "අකුසල්", subcategory: "මෝහ මූල 2", cetasikaCount: 17},
  {id: 12, name: "උපේක්ඛා සහගත උද්ධච්ච සම්ප්‍රයුක්ත සිත", category: "අකුසල්", subcategory: "මෝහ මූල 2", cetasikaCount: 17},
  // Add remaining cittas...
];

function generatePrompt(citta) {
  return `You are an expert in Theravada Abhidhamma. I need a comprehensive, detailed explanation of this citta for an educational website.

**Citta Information:**
- **ID**: ${citta.id}
- **Name (Sinhala)**: ${citta.name}
- **Category**: ${citta.category}
- **Subcategory**: ${citta.subcategory}
- **Cetasika Count**: ${citta.cetasikaCount}

**Required Output**: Provide a detailed explanation with these 8 progressive levels (from simple to technical):

### Level 1: ඉතා සරල අර්ථය (Very Simple Meaning)
- Provide 4-5 bullet points explaining this citta in the simplest Sinhala
- Include 1 practical daily-life example that anyone can understand
- Make it relatable to common human experiences

### Level 2: වචන විග්‍රහය (Word-by-Word Analysis)
- Break down each term in the citta name
- For each word provide:
  - Literal meaning
  - Detailed explanation
  - Simple example
  - Related terms or variations
- Explain technical terms in everyday language

### Level 3: අභිධර්ම වර්ගීකරණය (Abhidhamma Classification)
- Which main category (අකුසල 12, කුසල 8, විපාක 23, etc.)
- Which subcategory (ලෝභමූල, දෝසමූල, etc.)
- Position in the complete citta system
- Relationship to other cittas in the same group

### Level 4: චෛතසික සංයුතිය (Cetasika Composition)
- List ALL cetasikas present (${citta.cetasikaCount} total)
- Group them by:
  1. Universal cetasikas (7)
  2. Occasional cetasikas
  3. Unwholesome/Wholesome cetasikas (as applicable)
  4. Unique cetasikas for this citta
- Explain the role of key cetasikas
- Why this specific combination?

### Level 5: හේතු විශ්ලේෂණය (Causes Analysis)
- What conditions lead to this citta arising?
- Mental states required
- Environmental triggers
- Past kamma influence
- Provide 5-7 specific thought examples that trigger this citta
- Explain asankharika vs sasankharika differences (if applicable)

### Level 6: ගැඹුරු අභිධර්ම විශ්ලේෂණය (Deep Abhidhamma Analysis)
- Position in 89/121 citta classification
- Hetu analysis (roots: lobha/dosa/moha)
- Sahagata vs Sampayutta meanings
- Citta process (Dvara → Javana → Tadara mmana)
- Citta-khana (3 moments: uppada, thiti, bhanga)
- Technical characteristics

### Level 7: විපාක හා ප්‍රතිකාර (Results & Remedies)
**Bad Results:**
- Immediate psychological effects
- Karmic consequences
- Obstacles to meditation/enlightenment

**Remedies:**
- 5-7 specific methods to overcome this citta
- Meditation practices
- Mental cultivation techniques
- Practical daily strategies
- References to Noble Eightfold Path

### Level 8: තාක්ෂණික විස්තර (Technical Abhidhamma Details)
- Canonical references:
  - Dhammasangani Pali text
  - Abhidhammatthasangaha citation
  - Visuddhimagga reference (if applicable)
- Pali nomenclature (full and abbreviated)
- Technical composition data
- Scholarly notes

### Practical Examples
Provide 4 real-world scenarios:
- Situation description
- Which citta arises
- Which cetasikas are active
- Appropriate remedy
- Make them relevant to modern life

### Comparison (if applicable)
- Compare with closely related cittas
- Show key differences
- When to distinguish between them
- Why the distinction matters

### Final Inspiring Message
- Summarize the key insight
- Connect to liberation path
- Include relevant Pali quote with translation
- Motivational closing

**Sources to Reference:**
- Tipitaka.lk for canonical texts
- Abhidhamma Mulika Karunu for detailed explanations
- Abhidhammatthasangaha for systematic presentation
- Make it accurate, practical, and inspiring

**Output Format:** Provide the response as a JSON object that can be added to citta-detailed-content.json following this structure:

\`\`\`json
{
  "id": ${citta.id},
  "name": "${citta.name}",
  "levels": {
    "level1_simple": { ... },
    "level2_wordAnalysis": { ... },
    "level3_classification": { ... },
    "level4_cetasikas": { ... },
    "level5_causes": { ... },
    "level6_deepAnalysis": { ... },
    "level7_resultsRemedies": { ... },
    "level8_technical": { ... },
    "practicalExamples": [ ... ],
    "comparison": { ... },
    "finalMessage": { ... }
  }
}
\`\`\`

Be thorough, accurate, and educational. This will help people learn Abhidhamma from scratch to advanced levels.
`;
}

// Generate prompt files
function generateAllPrompts() {
  const promptsDir = path.join(__dirname, 'prompts');
  
  if (!fs.existsSync(promptsDir)) {
    fs.mkdirSync(promptsDir);
  }
  
  cittaList.forEach(citta => {
    if (citta.status === 'COMPLETED') {
      console.log(`Skipping citta ${citta.id} (already completed)`);
      return;
    }
    
    const prompt = generatePrompt(citta);
    const filename = `citta-${String(citta.id).padStart(2, '0')}-${citta.name.substring(0, 20)}.txt`;
    const filepath = path.join(promptsDir, filename);
    
    fs.writeFileSync(filepath, prompt, 'utf8');
    console.log(`✓ Generated prompt for citta ${citta.id}: ${citta.name}`);
  });
  
  console.log(`\n✅ Generated ${cittaList.length - 1} prompt files in ${promptsDir}`);
  console.log('\nNext steps:');
  console.log('1. Open each prompt file');
  console.log('2. Copy prompt to Claude AI (https://claude.ai)');
  console.log('3. Copy JSON response');
  console.log('4. Add to citta-detailed-content.json');
  console.log('5. Test on your website');
}

// Run if called directly
if (require.main === module) {
  generateAllPrompts();
}

module.exports = { generatePrompt, cittaList };





