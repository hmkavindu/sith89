// Enhanced data loader for multiple citta data formats
// Supports: rerukane format, enhanced format, and existing format

let enhancedCittaData = null;

async function loadEnhancedCittaData() {
    try {
        console.log('🔄 Loading Enhanced Citta data...');
        const response = await fetch('citta-data-enhanced.json');
        
        if (!response.ok) {
            console.warn(`⚠️ Could not load citta-data-enhanced.json (${response.status}). Skipping.`);
            // Don't fail completely - embedded data will be used
            return null;
        }
        
        const enhancedData = await response.json();
        console.log('✅ Enhanced Citta data loaded');
        console.log(`📊 Loaded ${enhancedData.length} cittas`);
        
        // Convert to existing format with all new fields preserved
        const convertedData = {
            cittas: enhancedData.map(citta => {
                // Inherit fields from previous citta if not specified (for grouped cittas)
                const baseCitta = enhancedData.find(c => c.id === citta.id - 1 && c.bhumi && c.kandaya);
                
                return {
                    id: citta.id,
                    name: citta.name,
                    nameEn: generateEnglishName(citta),
                    short: citta.short || citta.name,
                    pali: citta.pali || '',
                    category: citta.kandaya || baseCitta?.kandaya || 'Unknown',
                    categoryEn: translateCategoryToEnglish(citta.kandaya || baseCitta?.kandaya),
                    type: citta.bhumi || baseCitta?.bhumi || 'කාමාවචර',
                    typeEn: translateBhumiToEnglish(citta.bhumi || baseCitta?.bhumi),
                    subcategory: citta.mula || baseCitta?.mula || '',
                    subcategoryEn: translateMulaToEnglish(citta.mula || baseCitta?.mula),
                    chaithasikaCount: citta.cetasika_count || 0,
                    descriptionSi: citta.name,
                    descriptionEn: generateEnglishName(citta),
                    // Enhanced fields
                    vedana: citta.vedana || baseCitta?.vedana,
                    asankharika: citta.asankharika !== undefined ? citta.asankharika : baseCitta?.asankharika,
                    ditthi: citta.ditthi !== undefined ? citta.ditthi : baseCitta?.ditthi,
                    mana: citta.mana !== undefined ? citta.mana : baseCitta?.mana,
                    patigha: citta.patigha || false,
                    vicikiccha: citta.vicikiccha || false,
                    uddhacca: citta.uddhacca || false,
                    jnana: citta.jnana !== undefined ? citta.jnana : baseCitta?.jnana,
                    group: citta.group || baseCitta?.group,
                    order: citta.order || citta.id,
                    arhat_only: citta.arhat_only || false,
                    final_nirvana: citta.final_nirvana || false,
                    // Legacy compatibility
                    ditthigata: citta.ditthi !== undefined ? citta.ditthi : (citta.ditthi === false ? false : undefined)
                };
            }),
            chaithasikas: [],
            associations: {}
        };
        
        // Integrate with existing meditationData
        if (window.meditationData) {
            // Merge: keep existing data but update with enhanced data where available
            const existingIds = new Set(window.meditationData.cittas.map(c => c.id));
            convertedData.cittas.forEach(enhancedCitta => {
                const existingIndex = window.meditationData.cittas.findIndex(c => c.id === enhancedCitta.id);
                if (existingIndex >= 0) {
                    // Merge: keep existing fields, add enhanced fields
                    window.meditationData.cittas[existingIndex] = {
                        ...window.meditationData.cittas[existingIndex],
                        ...enhancedCitta
                    };
                } else {
                    // Add new citta
                    window.meditationData.cittas.push(enhancedCitta);
                }
            });
            // Sort by order
            window.meditationData.cittas.sort((a, b) => (a.order || a.id) - (b.order || b.id));
            console.log('✅ Merged enhanced data with existing meditationData');
        } else {
            window.meditationData = {
                cittas: convertedData.cittas,
                chaithasikas: [],
                associations: {}
            };
            console.log('✅ Created new meditationData with enhanced dataset');
        }
        
        // Store globally
        enhancedCittaData = convertedData;
        window.enhancedCittaData = convertedData;
        
        // Refresh table if it exists
        if (window.populateTable) {
            setTimeout(() => {
                window.populateTable();
            }, 500);
        }
        
        return convertedData;
    } catch (error) {
        console.error('❌ Error loading Enhanced Citta data:', error);
        return null;
    }
}

// Generate English name from Sinhala name
function generateEnglishName(citta) {
    if (citta.nameEn) return citta.nameEn;
    
    // Basic translation patterns
    const translations = {
        'සෝමනස්ස': 'Pleasant feeling',
        'උපේක්ෂා': 'Equanimity',
        'දෝමනස්ස': 'Unpleasant feeling',
        'සම්ප්‍රයුක්ත': 'accompanied',
        'විප්‍රයුක්ත': 'dissociated',
        'අසංඛාරික': 'rootless',
        'සසංඛාරික': 'with prompting',
        'දිට්ඨිගත': 'with wrong view',
        'කුසල': 'wholesome',
        'විපාක': 'resultant',
        'ක්‍රියා': 'functional',
        'මග්ග': 'path',
        'ඵල': 'fruition'
    };
    
    let english = citta.name;
    Object.keys(translations).forEach(key => {
        english = english.replace(new RegExp(key, 'g'), translations[key]);
    });
    
    return english || citta.name;
}

// Translation helpers
function translateCategoryToEnglish(kandaya) {
    const translations = {
        'අකුසල්': 'Unwholesome',
        'කුසල්': 'Wholesome',
        'විපාක': 'Resultant',
        'ක්‍රියා': 'Functional',
        'මග්ග': 'Path',
        'ඵල': 'Fruition'
    };
    return translations[kandaya] || kandaya;
}

function translateBhumiToEnglish(bhumi) {
    const translations = {
        'කාමාවචර': 'Sensuous Sphere',
        'රූපාවචර': 'Form Sphere',
        'අරූපාවචර': 'Formless Sphere',
        'ලෝකෝත්තර': 'Supramundane'
    };
    return translations[bhumi] || bhumi;
}

function translateMulaToEnglish(mula) {
    const translations = {
        'ලෝභ': 'Greed Root',
        'දෝස': 'Hatred Root',
        'මෝහ': 'Delusion Root'
    };
    return translations[mula] || mula;
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadEnhancedCittaData();
    });
} else {
    loadEnhancedCittaData();
}

// Export for use in other scripts
window.enhancedCittaLoader = {
    loadData: loadEnhancedCittaData,
    getData: () => enhancedCittaData,
    translateCategory: translateCategoryToEnglish,
    translateBhumi: translateBhumiToEnglish,
    translateMula: translateMulaToEnglish,
    generateEnglishName: generateEnglishName
};

