# අභිධර්ම මාර්ගය Integration Guide
## රේරුකානේ චන්දවිමල හිමිගේ අභිධර්ම මාර්ගය පොත සමඟ website එක සම්බන්ධ කිරීම

### 📚 ලබා ගත් දත්ත

**මූලාශ්‍රය**: https://pitaka.lk/books/abhidharma-margaya/

**පොත**: අභිධර්ම මාර්ගය - රේරුකානේ චන්දවිමල හිමි

**පරිච්ඡේදය**: ප්‍රථම පරිච්ඡේදය (සිත් 89/121 ගේ සම්පූර්ණ විග්‍රහය)

**අනු මාතෘකා**: 19

---

## 📁 සාදන ලද Files

### 1. `data/abhidharma-margaya-chapter-1.json`
සම්පූර්ණ පළමු පරිච්ඡේදයේ දහම් කරුණු JSON format එකෙන්:

```json
{
  "source": "https://pitaka.lk/books/abhidharma-margaya/",
  "book_title": "අභිධර්ම මාර්ගය - රේරුකානේ චන්දවිමල හිමි",
  "chapter": {
    "number": 1,
    "title": "ප්‍රථම පරිච්ඡේදය",
    "subtopics_count": 19,
    "subtopics": [...]
  }
}
```

**අඩංගු කරුණු**:
- අභිධර්මයේ වැදගත්කම
- පරමාර්ථය හා ප්‍රඥප්තිය
- පරමාර්ථ සතර (චිත්තය, චෛතසිකය, රූපය, නිර්වාණය)
- සිත් 89/121 ගේ සම්පූර්ණ විග්‍රහය
  - කාමාවචර සිත් 54
  - රූපාවචර සිත් 15
  - අරූපාවචර සිත් 12
  - ලෝකෝත්තර සිත් 8/40

### 2. `abhidharma-margaya-references.js`
Website එකේ citta data සමඟ පොතේ කරුණු සම්බන්ධ කරන reference file:

```javascript
const abhidharmaMargayaReferences = {
    bookInfo: {...},
    paramartha: {...},
    cittaClassification: {...},
    cittaReferences: {...},
    getCittaReference: function(cittaId) {...}
}
```

---

## 🔗 භාවිතා කරන ආකාරය

### Method 1: HTML Page එකක භාවිතය

```html
<!-- Load the reference file -->
<script src="abhidharma-margaya-references.js"></script>

<script>
// Get reference for a specific citta
const citta1Ref = abhidharmaMargayaReferences.getCittaReference(1);
console.log(citta1Ref);
// Returns: { ids: [1-8], reference: "අභිධර්ම මාර්ගය - 7. ලෝභමූල සිත් අට උපදනා සැටි", url: "..." }

// Get all chapter references
const allRefs = abhidharmaMargayaReferences.getAllReferences();
allRefs.forEach(ref => {
    console.log(`${ref.title}: ${ref.url}`);
});

// Access specific classifications
const cittaCount = abhidharmaMargayaReferences.cittaClassification.total_short; // 89
const kamavacaraCount = abhidharmaMargayaReferences.cittaClassification.kamaavacara.total; // 54
</script>
```

### Method 2: Citta Detail Pages එකට Reference එකතු කිරීම

ඔබේ `citta-detail-loader.js` හෝ සමාන file එකේ:

```javascript
function loadCittaDetails(cittaId) {
    // Existing code...
    
    // Add Abhidharma Margaya reference
    const margayaRef = abhidharmaMargayaReferences.getCittaReference(cittaId);
    
    if (margayaRef) {
        const refSection = document.createElement('div');
        refSection.className = 'abhidharma-margaya-reference';
        refSection.innerHTML = `
            <h3>📖 අභිධර්ම මාර්ගය පොතෙහි සඳහන</h3>
            <p><strong>මාතෘකාව:</strong> ${margayaRef.reference}</p>
            <a href="${margayaRef.url}" target="_blank" class="reference-link">
                පොතේ මෙම කොටස කියවන්න →
            </a>
        `;
        
        // Append to detail page
        document.querySelector('.citta-details').appendChild(refSection);
    }
}
```

### Method 3: Knowledge Graph එකට සම්බන්ධ කිරීම

`knowledge-graph.html` හෝ `citta-fishbone-visualizer.js` එකේ:

```javascript
// Add book references to nodes
function enhanceNodeWithReferences(node, cittaId) {
    const ref = abhidharmaMargayaReferences.getCittaReference(cittaId);
    
    if (ref) {
        node.bookReference = {
            title: ref.reference,
            url: ref.url,
            occasions: ref.occasions || null,
            characteristics: ref.characteristics || null
        };
    }
    
    return node;
}
```

### Method 4: Tooltip/Popup එකක් ලෙස

```javascript
function showCittaTooltip(cittaId) {
    const ref = abhidharmaMargayaReferences.getCittaReference(cittaId);
    
    if (ref) {
        const tooltip = `
            <div class="margaya-tooltip">
                <h4>අභිධර්ම මාර්ගය</h4>
                <p>${ref.reference}</p>
                ${ref.occasions ? `
                    <ul>
                        ${ref.occasions.examples.map(ex => `<li>${ex}</li>`).join('')}
                    </ul>
                ` : ''}
                <a href="${ref.url}" target="_blank">වැඩි විස්තර →</a>
            </div>
        `;
        
        return tooltip;
    }
}
```

---

## 🎨 CSS Styling Suggestions

```css
.abhidharma-margaya-reference {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.abhidharma-margaya-reference h3 {
    margin-top: 0;
    font-size: 1.3em;
}

.reference-link {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    margin-top: 10px;
    font-weight: 600;
    transition: transform 0.2s;
}

.reference-link:hover {
    transform: translateX(5px);
}

.margaya-tooltip {
    background: #f8f9fa;
    border-left: 4px solid #667eea;
    padding: 15px;
    border-radius: 8px;
}
```

---

## 📊 Data Structure Examples

### Citta Reference Example (ලෝභමූල සිත්):

```javascript
{
    ids: [1, 2, 3, 4, 5, 6, 7, 8],
    total: 8,
    reference: "අභිධර්ම මාර්ගය - 7. ලෝභමූල සිත් අට උපදනා සැටි",
    url: "https://pitaka.lk/books/abhidharma-margaya/2-7.html",
    occasions: {
        reference: "අභිධර්ම මාර්ගය - 6. ලෝභමූල සිත් ඇති වන අවස්ථා",
        url: "https://pitaka.lk/books/abhidharma-margaya/2-6.html",
        examples: [
            "අදත්තාදානය (සොරකම)",
            "කාමමිථ්‍යාචාරය (අනාචාරය)",
            "මුසාවාදය (බොරු කීම)",
            "එදිනෙදා ආශාවන් සහ ඇල්ම"
        ]
    },
    classification: {
        vedana: ["සෝමනස්ස", "උපේක්ෂා"],
        ditthi: ["දිට්ඨිගත සම්ප්‍රයුක්ත", "දිට්ඨිගත විප්‍රයුක්ත"],
        sankhara: ["අසංස්කාරික", "සසංස්කාරික"]
    }
}
```

---

## ✅ Integration Checklist

- [x] JSON data file සාදන ලදි (`data/abhidharma-margaya-chapter-1.json`)
- [x] Reference mapping file සාදන ලදි (`abhidharma-margaya-references.js`)
- [x] Section loader file සාදන ලදි (`abhidharma-margaya-section-loader.js`)
- [x] Citta detail loader එකට integration කර ඇත
- [x] Sample page (citta-1) එකට references එකතු කර ඇත
- [ ] සියලුම citta detail pages එකට references load කරන්න (template ready)
- [ ] Knowledge graph එකට book links එකතු කරන්න
- [ ] Search functionality එකට book content integrate කරන්න

---

## 🔍 විශේෂ Features

### 1. Smart Citta Lookup
```javascript
// Automatically get the right reference based on citta ID
const ref = abhidharmaMargayaReferences.getCittaReference(5);
// Returns ලෝභමූල සිත් reference (IDs 1-8)
```

### 2. Complete Chapter Navigation
```javascript
// Get all 19 subtopics for navigation
const allTopics = abhidharmaMargayaReferences.getAllReferences();
// Build a sidebar or dropdown menu
```

### 3. Classification Data
```javascript
// Access citta classification summary
const classification = abhidharmaMargayaReferences.cittaClassification;
console.log(`Total cittas: ${classification.total_short} (short) or ${classification.total_detailed} (detailed)`);
```

---

## 📝 Notes

1. **No Duplication**: මෙම files website එකේ දැනටමත් ඇති data වෙනස් නොකරයි. ඒවා අතිරේක context සහ references පමණක් ලබා දෙයි.

2. **Source Links**: සෑම reference එකකම pitaka.lk website එකට direct link ඇත.

3. **Flexible Integration**: ඔබට අවශ්‍ය ඕනෑම තැනක මෙම references භාවිතා කළ හැකිය - detail pages, tooltips, knowledge graphs, search results, etc.

4. **Future Expansion**: අනෙක් පරිච්ඡේද (2-9) සඳහා ද මෙම ආකාරයටම data එකතු කළ හැකිය.

---

## 🚀 Next Steps

1. `index.html` හෝ main page එකේ reference file load කරන්න
2. Citta detail pages එකට "පොතේ සඳහන" section එකක් add කරන්න
3. Knowledge graph nodes එකට book references display කරන්න
4. Search results එකට book links show කරන්න

---

**සාදන ලද්දේ**: 2025-12-26  
**මූලාශ්‍රය**: https://pitaka.lk/books/abhidharma-margaya/  
**පොත**: අභිධර්ම මාර්ගය - රේරුකානේ චන්දවිමල හිමි
