# Complete Guide: Generating Detailed Explanations for All 89 Cittas

## Overview
This guide will help you create detailed 8-level explanations for all 89 cittas using AI (Claude) and the resources you have.

## System Setup ✅ COMPLETED

1. **Template HTML**: `citta-detail-page-template.html` - The display template
2. **JavaScript Loader**: `citta-detail-loader.js` - Renders the content dynamically
3. **Data File**: `citta-detailed-content.json` - Stores all explanations
4. **Example**: Citta #1 is fully completed as a template

## Resources to Use

1. **Tipitaka.lk** - https://tipitaka.lk/
2. **Abhidhamma Mulika Karunu** - https://archive.org/stream/AbhidhammaMulikaKarunu/Abhidhamma%20Mulika%20Karunu_djvu.txt
3. **Google Sheets** - Your existing data spreadsheet
4. **Abhidhamma Margaya** - https://pitaka.lk/books/abhidharma-margaya/
5. **Your PDF** - Abhidhamma Mulika Karunu_text.pdf

## Claude AI Prompt Template

Use this prompt for each citta with Claude AI:

```
You are an expert in Abhidhamma. I need a detailed explanation of the following citta:

**Citta Name**: [INSERT CITTA NAME HERE]

**Category**: [INSERT CATEGORY - e.g., අකුසල්, කුසල්, විපාක, etc.]

**Subcategory**: [INSERT SUBCATEGORY - e.g., ලෝභ මූල, දෝස මූල, etc.]

Please provide a comprehensive explanation with these 8 levels:

### Level 1: ඉතා සරල අර්ථය (Very Simple Meaning)
- 4-5 bullet points in simple Sinhala
- 1 practical daily-life example

### Level 2: වචන විග්‍රහය (Word Analysis)
- Break down each word in the citta name
- Meaning, explanation, examples for each word
- Types/variations if applicable

### Level 3: අභිධර්ම වර්ගීකරණය (Abhidhamma Classification)
- Which category (අකුසල, කුසල, etc.)
- Which subcategory (ලෝභමූල, etc.)
- Position in the classification system

### Level 4: චෛතසික සංයුතිය (Cetasika Composition)
- List all cetasikas present in this citta
- Group by: Universal, Occasional, Unwholesome/Wholesome
- Explain the main cetasikas

### Level 5: හේතු (Causes)
- Why this citta arises
- Conditions that lead to it
- 5-7 thought examples
- Mental factors involved

### Level 6: ගැඹුරු විශ්ලේෂණය (Deep Analysis)
- Position in 89/121 citta system
- Hetu analysis (roots)
- Citta process (dvara, javana, etc.)
- Citta-khana (moments)

### Level 7: විපාක හා ප්‍රතිකාර (Results & Remedies)
- Bad results: immediate, karmic, meditation obstacles
- Remedies: 5-7 methods to overcome
- Special notes

### Level 8: තාක්ෂණික විස්තර (Technical Details)
- References from Dhammasangani, Abhidhammatthasangaha, Visuddhimagga
- Pali nomenclature
- Technical composition (cetasika count, hetu count, vedana type)

### Practical Examples
- 4 real-life scenarios showing when this citta arises
- Include: situation, cetasikas involved, remedy

### Comparison (if applicable)
- Compare with similar cittas
- Show differences in a table format

### Final Message
- Inspiring Dhamma message
- Path to liberation
- Pali quote with translation

**Format the output as JSON** matching the structure in citta-detailed-content.json

Use these sources:
- Tipitaka.lk for canonical references
- Abhidhamma Mulika Karunu for explanations
- Your knowledge of Abhidhamma

Make it:
- Accurate according to Theravada Abhidhamma
- Practical for everyday understanding
- Progressive from simple to technical
- Inspiring and motivating
```

## List of All 89 Cittas to Generate

### කාමාවචර සිත් (Sensuous Sphere - 54 cittas)

#### අකුසල සිත් 12 (Unwholesome - 12)
1. ✅ සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික (COMPLETED)
2. ⏳ සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංඛාරික
3. ⏳ සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික
4. ⏳ සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංඛාරික
5. ⏳ උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික
6. ⏳ උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත සසංඛාරික
7. ⏳ උපේක්ඛා දිට්ඨි විප්‍රයුක්ත අසංඛාරික
8. ⏳ උපේක්ඛා දිට්ඨි විප්‍රයුක්ත සසංඛාරික
9. ⏳ දෝමනස්ස පටිඝ සම්ප්‍රයුක්ත අසංඛාරික
10. ⏳ දෝමනස්ස පටිඝ සම්ප්‍රයුක්ත සසංඛාරික
11. ⏳ උපේක්ඛා විචිකිච්ඡා සම්ප්‍රයුක්ත
12. ⏳ උපේක්ඛා උද්ධච්ච සම්ප්‍රයුක්ත

#### කාමාවචර කුසල සිත් 8 (Wholesome - 8)
13-20. ⏳ [8 Wholesome cittas with knowledge/without knowledge, with/without prompting]

#### කාමාවචර විපාක සිත් 23 (Resultant - 23)
21-43. ⏳ [Vipaka cittas]

#### කාමාවචර ක්‍රියා සිත් 11 (Functional - 11)
44-54. ⏳ [Kriya cittas]

### රූපාවචර සිත් (Form Sphere - 15 cittas)
55-69. ⏳ [5 Jhana levels x 3 types]

### අරූපාවචර සිත් (Formless Sphere - 12 cittas)
70-81. ⏳ [4 Arupa levels x 3 types]

### ලෝකෝත්තර සිත් (Supramundane - 8 cittas)
82-89. ⏳ [4 Path + 4 Fruition]

## Step-by-Step Process

### Step 1: Prepare Citta List
Create a spreadsheet with columns:
- ID
- Citta Name (Sinhala)
- Citta Name (English)
- Category
- Subcategory
- Cetasika Count
- Key Cetasikas
- Status (Generated/Pending)

### Step 2: Generate Content Using AI

For each citta:

1. **Copy the prompt template** above
2. **Fill in citta-specific information**:
   - Name
   - Category
   - Subcategory
   - Cetasika list (from your Excel/JSON data)
3. **Run through Claude AI**
4. **Review and edit** the output
5. **Convert to JSON** format
6. **Add to `citta-detailed-content.json`**

### Step 3: Batch Processing

Process in batches:
- **Batch 1**: Akusala cittas (12) - Most important
- **Batch 2**: Kusala cittas (8) - Second priority
- **Batch 3**: Vipaka cittas (23)
- **Batch 4**: Kriya cittas (11)
- **Batch 5**: Rupavacara cittas (15)
- **Batch 6**: Arupavacara cittas (12)
- **Batch 7**: Lokuttara cittas (8)

### Step 4: Content Enhancement

After generating basic content, enhance with:
- Real-life stories from Suttas
- Meditation instructions from Abhidhamma Margaya
- Cross-references between related cittas
- Visual diagrams/charts

## Automation Script

I'm creating a Node.js script to help automate this process:

```javascript
// generate-citta-content.js
const fs = require('fs');

const cittaList = [
  {id: 2, name: "සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංඛාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල"},
  // ... add all cittas
];

async function generatePromptForCitta(citta) {
  return `You are an expert in Abhidhamma...
  
**Citta Name**: ${citta.name}
**Category**: ${citta.category}
**Subcategory**: ${citta.subcategory}

[Rest of prompt template...]
`;
}

// Generate prompts for all cittas
cittaList.forEach(citta => {
  const prompt = generatePromptForCitta(citta);
  fs.writeFileSync(`prompts/citta-${citta.id}-prompt.txt`, prompt);
});
```

## Quality Checklist

For each generated citta explanation, verify:

- [ ] All 8 levels are complete
- [ ] Sinhala spelling is correct
- [ ] References are accurate
- [ ] Examples are practical and clear
- [ ] Cetasika list matches your data
- [ ] Comparisons are meaningful
- [ ] Remedies are practical
- [ ] JSON format is valid

## Integration Steps

1. **Test with first citta**: Open `citta-detail-page-template.html?id=1`
2. **Verify rendering**: Check all sections display correctly
3. **Link from main site**: Update click handlers to open detail pages
4. **Add navigation**: Previous/Next citta buttons
5. **Add search**: Quick search within explanations
6. **Optimize**: Lazy load images, cache data

## Timeline Estimate

- **12 Akusala cittas**: 2-3 hours (most detailed)
- **8 Kusala cittas**: 1-2 hours
- **23 Vipaka cittas**: 3-4 hours (many similarities)
- **11 Kriya cittas**: 1-2 hours
- **15 Rupavacara cittas**: 2-3 hours
- **12 Arupavacara cittas**: 2-3 hours
- **8 Lokuttara cittas**: 2-3 hours (most important)

**Total**: 15-22 hours of focused work

## Tips for Efficiency

1. **Use templates**: Many cittas have similar structures
2. **Batch similar cittas**: e.g., all "ditthi sampayutta" cittas share examples
3. **Reuse remedies**: Many remedies apply to multiple cittas
4. **Focus on differences**: Highlight what makes each citta unique
5. **Get feedback**: Test with users, refine explanations

## Next Actions

1. ✅ System setup complete
2. ⏳ Generate remaining 88 cittas
3. ⏳ Test and refine
4. ⏳ Deploy to website

## Example Usage

Once complete, users can:
1. Click any citta in the table
2. See full 8-level explanation
3. Understand from basics to advanced
4. Learn remedies and meditation practices
5. See practical examples
6. Navigate between related cittas

This will transform your website into a comprehensive Abhidhamma learning platform!

