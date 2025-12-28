// Abhidhamma Knowledge Base Builder
// වෙබ් අඩවියේ සියලුම දත්ත index කර searchable knowledge base එකක් සෑදීම

class AbhidhammaKnowledgeBase {
    constructor() {
        this.cittas = [];
        this.cetasikas = [];
        this.searchIndex = {
            si: {},
            en: {}
        };
        this.categoryIndex = {};
        this.initialized = false;
    }

    // Initialize knowledge base from data files
    async initialize() {
        if (this.initialized) return;

        try {
            // Load data from script.js meditationData
            if (window.meditationData) {
                this.cittas = window.meditationData.cittas || [];
                this.cetasikas = window.meditationData.chaithasikas || [];
            }

            // Build indexes
            this.buildCittaIndex();
            this.buildCetasikaIndex();
            this.buildSearchIndex();

            this.initialized = true;
            console.log('✅ Knowledge Base initialized:', {
                cittas: this.cittas.length,
                cetasikas: this.cetasikas.length
            });
        } catch (error) {
            console.error('❌ Failed to initialize knowledge base:', error);
        }
    }

    // Build citta index by category, type, subcategory
    buildCittaIndex() {
        this.categoryIndex.cittas = {
            byCategory: {},
            byType: {},
            bySubcategory: {}
        };

        this.cittas.forEach(citta => {
            // Index by category
            const category = citta.category || citta.categoryEn;
            if (!this.categoryIndex.cittas.byCategory[category]) {
                this.categoryIndex.cittas.byCategory[category] = [];
            }
            this.categoryIndex.cittas.byCategory[category].push(citta);

            // Index by type
            const type = citta.type || citta.typeEn;
            if (!this.categoryIndex.cittas.byType[type]) {
                this.categoryIndex.cittas.byType[type] = [];
            }
            this.categoryIndex.cittas.byType[type].push(citta);

            // Index by subcategory
            const subcategory = citta.subcategory || citta.subcategoryEn;
            if (subcategory) {
                if (!this.categoryIndex.cittas.bySubcategory[subcategory]) {
                    this.categoryIndex.cittas.bySubcategory[subcategory] = [];
                }
                this.categoryIndex.cittas.bySubcategory[subcategory].push(citta);
            }
        });
    }

    // Build cetasika index by category
    buildCetasikaIndex() {
        this.categoryIndex.cetasikas = {
            byCategory: {}
        };

        this.cetasikas.forEach(cetasika => {
            const category = cetasika.category || cetasika.categoryEn;
            if (!this.categoryIndex.cetasikas.byCategory[category]) {
                this.categoryIndex.cetasikas.byCategory[category] = [];
            }
            this.categoryIndex.cetasikas.byCategory[category].push(cetasika);
        });
    }

    // Build search index for quick lookups
    buildSearchIndex() {
        // Index cittas
        this.cittas.forEach(citta => {
            // Sinhala index
            if (citta.name) {
                const words = this.tokenize(citta.name);
                words.forEach(word => {
                    if (!this.searchIndex.si[word]) {
                        this.searchIndex.si[word] = { cittas: [], cetasikas: [] };
                    }
                    this.searchIndex.si[word].cittas.push(citta);
                });
            }

            // English index
            if (citta.nameEn) {
                const words = this.tokenize(citta.nameEn);
                words.forEach(word => {
                    if (!this.searchIndex.en[word]) {
                        this.searchIndex.en[word] = { cittas: [], cetasikas: [] };
                    }
                    this.searchIndex.en[word].cittas.push(citta);
                });
            }
        });

        // Index cetasikas
        this.cetasikas.forEach(cetasika => {
            // Sinhala index
            if (cetasika.name) {
                const words = this.tokenize(cetasika.name);
                words.forEach(word => {
                    if (!this.searchIndex.si[word]) {
                        this.searchIndex.si[word] = { cittas: [], cetasikas: [] };
                    }
                    this.searchIndex.si[word].cetasikas.push(cetasika);
                });
            }

            // English index
            if (cetasika.nameEn) {
                const words = this.tokenize(cetasika.nameEn);
                words.forEach(word => {
                    if (!this.searchIndex.en[word]) {
                        this.searchIndex.en[word] = { cittas: [], cetasikas: [] };
                    }
                    this.searchIndex.en[word].cetasikas.push(cetasika);
                });
            }
        });
    }

    // Tokenize text into words
    tokenize(text) {
        return text.toLowerCase()
            .replace(/[^\u0D80-\u0DFFa-z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 0);
    }

    // Get count of cittas by category
    getCittaCount(category) {
        if (!category) {
            return this.cittas.length;
        }

        const cittas = this.categoryIndex.cittas.byCategory[category] || [];
        return cittas.length;
    }

    // Get count of cetasikas by category
    getCetasikaCount(category) {
        if (!category) {
            return this.cetasikas.length;
        }

        const cetasikas = this.categoryIndex.cetasikas.byCategory[category] || [];
        return cetasikas.length;
    }

    // Get cittas by category
    getCittasByCategory(category) {
        return this.categoryIndex.cittas.byCategory[category] || [];
    }

    // Get cittas by subcategory
    getCittasBySubcategory(subcategory) {
        return this.categoryIndex.cittas.bySubcategory[subcategory] || [];
    }

    // Get cetasikas by category
    getCetasikasByCategory(category) {
        return this.categoryIndex.cetasikas.byCategory[category] || [];
    }

    // Get citta by ID
    getCittaById(id) {
        return this.cittas.find(c => c.id === id);
    }

    // Get cetasika by ID
    getCetasikaById(id) {
        return this.cetasikas.find(c => c.id === id);
    }

    // Search for cittas and cetasikas
    search(query, language = 'si') {
        const words = this.tokenize(query);
        const results = { cittas: new Set(), cetasikas: new Set() };

        words.forEach(word => {
            const index = this.searchIndex[language][word];
            if (index) {
                index.cittas.forEach(c => results.cittas.add(c));
                index.cetasikas.forEach(c => results.cetasikas.add(c));
            }
        });

        return {
            cittas: Array.from(results.cittas),
            cetasikas: Array.from(results.cetasikas)
        };
    }

    // Get summary statistics
    getSummary() {
        return {
            totalCittas: this.cittas.length,
            totalCetasikas: this.cetasikas.length,
            cittaCategories: {
                'අකුසල්': this.getCittaCount('අකුසල්'),
                'කුසල්': this.getCittaCount('කුසල්'),
                'විපාක': this.getCittaCount('විපාක'),
                'ක්‍රියා': this.getCittaCount('ක්‍රියා'),
                'ලෝකෝත්තර': this.getCittaCount('ලෝකෝත්තර')
            },
            cetasikaCategories: {
                'සාධාරණ': this.getCetasikaCount('සාධාරණ'),
                'පක්ෂික': this.getCetasikaCount('පක්ෂික'),
                'අකුසල්': this.getCetasikaCount('අකුසල්'),
                'සෝබන': this.getCetasikaCount('සෝබන')
            }
        };
    }
}

// Create global instance
window.abhidhammaKB = new AbhidhammaKnowledgeBase();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.abhidhammaKB.initialize();
    });
} else {
    window.abhidhammaKB.initialize();
}
