# Content Generation Workflow
## Creating Detailed Explanations for All 89 Cittas

## Quick Start

### Option 1: Manual Generation (Recommended for Quality)

1. **Open Claude AI**: https://claude.ai
2. **Use the template prompt** from `AI context/Generate-All-Cittas-Guide.md`
3. **Generate one citta at a time**
4. **Copy JSON output** to `citta-detailed-content.json`
5. **Test**: Open `citta-detail-page-template.html?id=X` in browser

### Option 2: Batch Generation with Script

```bash
# Generate all prompt files
node generate-citta-prompts.js

# This creates files in /prompts/ folder
# Then use each prompt with Claude AI
```

## Priority Order

Generate in this order for maximum impact:

### Phase 1: Core Unwholesome Cittas (High Priority)
**Why first**: These are what people struggle with daily

1. Citta 1-8: Lobha-mula cittas (Greed-rooted)
2. Citta 9-10: Dosa-mula cittas (Hatred-rooted)
3. Citta 11-12: Moha-mula cittas (Delusion-rooted)

**Time**: ~4-6 hours
**Impact**: Immediate value for visitors

### Phase 2: Wholesome Cittas (High Priority)
**Why second**: Show the positive path

13. Citta 13-20: Kamavacara Kusala (8 wholesome cittas)

**Time**: ~2-3 hours
**Impact**: Provides remedies and positive practices

### Phase 3: Jhana Cittas (Medium Priority)
**Why third**: For meditators

- Citta 21-35: Rupavacara (Form Sphere - 15 cittas)
- Citta 36-47: Arupavacara (Formless Sphere - 12 cittas)

**Time**: ~4-5 hours
**Impact**: Valuable for meditation practitioners

### Phase 4: Lokuttara Cittas (Highest Value)
**Why carefully**: Most sacred, requires deep knowledge

- Citta 82-89: Supramundane Path & Fruition (8 cittas)

**Time**: ~3-4 hours  
**Impact**: Ultimate goal - liberation

### Phase 5: Resultant & Functional (Lower Priority)
**Why last**: More technical, less daily relevance

- Citta 48-81: Vipaka and Kriya cittas

**Time**: ~6-8 hours
**Impact**: Completes the system

## Daily Workflow

### Morning Session (2-3 hours)
- Generate 3-4 cittas
- Focus on one category
- Quality over quantity

### Afternoon Session (2-3 hours)
- Review and edit morning's work
- Test on website
- Generate 2-3 more cittas

### Goal: 5-7 cittas per day = Complete in 2 weeks

## Quality Control Checklist

For each generated citta:

- [ ] All 8 levels present and complete
- [ ] Sinhala spelling verified
- [ ] Examples are clear and relatable
- [ ] Cetasika list matches your Excel data
- [ ] Remedies are practical
- [ ] Technical references are accurate
- [ ] JSON format is valid
- [ ] Tested in browser
- [ ] No rendering errors

## Content Enhancement Tips

### Make It Relatable
- Use modern examples (social media, work, family)
- Show how ancient wisdom applies today
- Include local cultural context (Sri Lankan)

### Make It Progressive
- Level 1: A child can understand
- Level 4: A beginner meditator can grasp
- Level 8: A scholar can appreciate

### Make It Interconnected
- Link to related cittas
- Reference cetasikas explained elsewhere
- Show the dhamma mesh/network

### Make It Practical
- Always include meditation practices
- Give daily-life application
- Provide self-reflection questions

## Testing Protocol

After generating each batch:

1. **JSON Validation**: Use jsonlint.com
2. **Browser Test**: Load the detail page
3. **Mobile Test**: Check responsive design
4. **Content Review**: Read for accuracy
5. **User Feedback**: Share with Dhamma friends

## Tracking Progress

Create a simple tracker:

```
Citta ID | Name | Category | Status | Date | Reviewed
---------|------|----------|--------|------|----------
1        | ... | අකුසල්   | ✅     | 2025-11-08 | ✅
2        | ... | අකුසල්   | ⏳     | - | -
...
```

## Backup Strategy

- Commit to git after each citta
- Keep separate backup of JSON file
- Version control your progress

## When Stuck

If you're unsure about a citta:

1. **Consult sources**:
   - Search Tipitaka.lk
   - Read Abhidhamma Mulika Karunu relevant section
   - Check your Google Sheets data

2. **Look for patterns**:
   - Similar cittas have similar explanations
   - Lobha-mula 1-8 are variations of same theme
   - Adapt existing content

3. **Mark for review**:
   - Add "TODO: Verify with scholar"
   - Come back after more research

## Estimated Timeline

- **Quick version** (basic content): 2-3 days (20-30 hours)
- **Quality version** (detailed + reviewed): 1-2 weeks (40-60 hours)
- **Excellence version** (enhanced + illustrated): 3-4 weeks (80-100 hours)

## Final Goal

Transform your website into:
- ✨ Most comprehensive Sinhala Abhidhamma resource online
- 📚 Complete learning system from beginner to expert
- 🧭 Interconnected knowledge network
- 💫 Inspiring guide to liberation

**සාධු! සාධු! සාධු!**





