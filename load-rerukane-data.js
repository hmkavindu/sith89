// Data converter for Rerukane Abhidhamma data format
// Converts from the new format (nama, bhumi, kandaya, etc.) to the existing format

async function loadRerukaneAbhidhammaData() {
    try {
        console.log('🔄 Loading Rerukane Abhidhamma data...');
        const response = await fetch('rerukane-abhidhamma-data.json');
        
        if (!response.ok) {
            console.warn(`⚠️ Could not load rerukane-abhidhamma-data.json (${response.status}). Skipping.`);
            return null;
        }
        
        const rerukaneData = await response.json();
        console.log('✅ Rerukane Abhidhamma data loaded:', rerukaneData.book);
        console.log(`📊 Loaded ${rerukaneData.cittas.length} cittas`);
        
        // Convert to existing format
        const convertedData = {
            metadata: rerukaneData.metadata,
            cittas: rerukaneData.cittas.map(citta => ({
                id: citta.id,
                name: citta.nama,
                nameEn: citta.nama_en || citta.nama,
                category: citta.kandaya || 'Unknown',
                categoryEn: translateCategoryToEnglish(citta.kandaya),
                type: citta.bhumi || 'Unknown',
                typeEn: translateBhumiToEnglish(citta.bhumi),
                subcategory: citta.mula || '',
                subcategoryEn: translateMulaToEnglish(citta.mula),
                chaithasikaCount: citta.cetasika_count || 0,
                descriptionSi: citta.explanation || citta.nama,
                descriptionEn: citta.nama_en || citta.nama,
                // New fields
                vedana: citta.vedana,
                asankharika: citta.asankharika,
                ditthigata: citta.ditthigata,
                cetasikas: citta.cetasikas,
                final_nirvana: citta.final_nirvana
            })),
            chaithasikas: [], // Will be loaded separately if needed
            associations: {} // Will be generated if needed
        };
        
        // Integrate with existing meditationData
        if (window.meditationData) {
            window.meditationData.cittas = convertedData.cittas;
            console.log('✅ Updated meditationData with Rerukane dataset');
        }
        
        // Also update abhidhammaData if it exists
        if (window.abhidhammaDataLoader && window.abhidhammaDataLoader.setData) {
            window.abhidhammaDataLoader.setData(convertedData);
        }
        
        // Store globally
        window.rerukaneAbhidhammaData = convertedData;
        
        return convertedData;
    } catch (error) {
        console.error('❌ Error loading Rerukane Abhidhamma data:', error);
        return null;
    }
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
        loadRerukaneAbhidhammaData().then(data => {
            if (data && window.populateTable) {
                // Refresh table if it exists
                setTimeout(() => {
                    if (window.populateTable) {
                        window.populateTable();
                    }
                }, 500);
            }
        });
    });
} else {
    loadRerukaneAbhidhammaData().then(data => {
        if (data && window.populateTable) {
            setTimeout(() => {
                if (window.populateTable) {
                    window.populateTable();
                }
            }, 500);
        }
    });
}

// Export for use in other scripts
window.rerukaneAbhidhammaLoader = {
    loadData: loadRerukaneAbhidhammaData,
    getData: () => window.rerukaneAbhidhammaData,
    translateCategory: translateCategoryToEnglish,
    translateBhumi: translateBhumiToEnglish,
    translateMula: translateMulaToEnglish
};

