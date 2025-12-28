// Chatbot Response Generator
// Intent සහ entities භාවිතා කර නිවැරදි පිළිතුර generate කිරීම

class ChatbotResponseGenerator {
    constructor(knowledgeBase) {
        this.kb = knowledgeBase;
    }

    // Generate response based on analysis
    async generateResponse(analysis) {
        const { intent, entities, language } = analysis;

        // Wait for knowledge base to initialize
        if (!this.kb.initialized) {
            await this.kb.initialize();
        }

        let response;

        switch (intent) {
            case 'counting':
                response = this.handleCountingQuestion(entities, language);
                break;
            case 'definition':
                response = this.handleDefinitionQuestion(entities, language);
                break;
            case 'category':
                response = this.handleCategoryQuestion(entities, language);
                break;
            case 'association':
                response = this.handleAssociationQuestion(entities, language);
                break;
            default:
                response = this.handleUnknownQuestion(language);
        }

        return response;
    }

    // Handle counting questions
    handleCountingQuestion(entities, language) {
        const { cittaCategory, cetasikaCategory, term } = entities;

        // Counting cittas
        if (term === 'citta' || cittaCategory) {
            const category = cittaCategory;
            const count = this.kb.getCittaCount(category);
            const cittas = category ? this.kb.getCittasByCategory(category) : this.kb.cittas;

            if (language === 'si') {
                let answer = category
                    ? `${category} සිත් ${count}ක් තිබේ.`
                    : `සම්පූර්ණ චිත්ත ${count}ක් තිබේ.`;

                // Add breakdown for akusala
                if (category === 'අකුසල්') {
                    const lobha = this.kb.getCittasBySubcategory('ලෝභ මූල').length;
                    const dvesa = this.kb.getCittasBySubcategory('ද්වේශ මූල').length;
                    const moha = this.kb.getCittasBySubcategory('මෝහ මූල').length;
                    answer += `\n\nඒවා:\n• ලෝභ මූල සිත් ${lobha}ක්\n• ද්වේශ මූල සිත් ${dvesa}ක්\n• මෝහ මූල සිත් ${moha}ක්`;
                }

                return {
                    answer,
                    details: this.formatCittaList(cittas, language),
                    references: ['අභිධර්මයේ මූලික කරුණු', 'අභිධර්ම මාර්ගය']
                };
            } else {
                let answer = category
                    ? `There are ${count} ${category} cittas.`
                    : `There are ${count} cittas in total.`;

                if (category === 'Unwholesome') {
                    const lobha = this.kb.getCittasBySubcategory('ලෝභ මූල').length;
                    const dvesa = this.kb.getCittasBySubcategory('ද්වේශ මූල').length;
                    const moha = this.kb.getCittasBySubcategory('මෝහ මූල').length;
                    answer += `\n\nBreakdown:\n• Greed Root: ${lobha}\n• Hatred Root: ${dvesa}\n• Delusion Root: ${moha}`;
                }

                return {
                    answer,
                    details: this.formatCittaList(cittas, language),
                    references: ['Abhidhamma Basics', 'Abhidhamma Path']
                };
            }
        }

        // Counting cetasikas
        if (term === 'cetasika' || cetasikaCategory) {
            const category = cetasikaCategory;
            const count = this.kb.getCetasikaCount(category);
            const cetasikas = category ? this.kb.getCetasikasByCategory(category) : this.kb.cetasikas;

            if (language === 'si') {
                const answer = category
                    ? `${category} චෛතසික ${count}ක් තිබේ.`
                    : `සම්පූර්ණ චෛතසික ${count}ක් තිබේ.`;

                return {
                    answer,
                    details: this.formatCetasikaList(cetasikas, language),
                    references: ['අභිධර්මයේ මූලික කරුණු']
                };
            } else {
                const answer = category
                    ? `There are ${count} ${category} cetasikas.`
                    : `There are ${count} cetasikas in total.`;

                return {
                    answer,
                    details: this.formatCetasikaList(cetasikas, language),
                    references: ['Abhidhamma Basics']
                };
            }
        }

        return this.handleUnknownQuestion(language);
    }

    // Handle definition questions
    handleDefinitionQuestion(entities, language) {
        const { specificName } = entities;

        if (!specificName) {
            return this.handleUnknownQuestion(language);
        }

        // Search for the cetasika
        const results = this.kb.search(specificName, language);

        if (results.cetasikas.length > 0) {
            const cetasika = results.cetasikas[0];

            if (language === 'si') {
                const answer = `${cetasika.name} යනු ${cetasika.category} චෛතසිකයකි.\n\n${cetasika.description}`;
                const details = cetasika.detailedExplanation || cetasika.description;

                return {
                    answer,
                    details,
                    references: [cetasika.bookReference || 'අභිධර්මයේ මූලික කරුණු']
                };
            } else {
                const answer = `${cetasika.nameEn} is a ${cetasika.categoryEn} cetasika.\n\n${cetasika.descriptionEn || cetasika.description}`;
                const details = cetasika.detailedExplanation || cetasika.descriptionEn || cetasika.description;

                return {
                    answer,
                    details,
                    references: [cetasika.bookReference || 'Abhidhamma Basics']
                };
            }
        }

        return this.handleUnknownQuestion(language);
    }

    // Handle category/list questions
    handleCategoryQuestion(entities, language) {
        const { cetasikaCategory, cittaCategory } = entities;

        // Special case: Virati cetasikas
        if (cetasikaCategory === 'විරති' || cetasikaCategory === 'Abstinence') {
            const viratiCetasikas = this.kb.cetasikas.filter(c =>
                c.name === 'සම්මාවාචා' ||
                c.name === 'සම්මාකම්මන්ත' ||
                c.name === 'සම්මාආජීව'
            );

            if (language === 'si') {
                const answer = 'විරති චෛතසික 3ක් කුසල් සිත් වල විතරක් පහල වේ:';
                const details = viratiCetasikas.map((c, i) =>
                    `${i + 1}. ${c.name} - ${c.description}`
                ).join('\n\n');

                return {
                    answer,
                    details,
                    references: ['අභිධර්මයේ මූලික කරුණු', 'කෙලෙස් එකදහස් පන්සියය']
                };
            } else {
                const answer = 'There are 3 Virati (abstinence) cetasikas that arise only in wholesome cittas:';
                const details = viratiCetasikas.map((c, i) =>
                    `${i + 1}. ${c.nameEn} - ${c.descriptionEn || c.description}`
                ).join('\n\n');

                return {
                    answer,
                    details,
                    references: ['Abhidhamma Basics']
                };
            }
        }

        // General category listing
        if (cetasikaCategory) {
            const cetasikas = this.kb.getCetasikasByCategory(cetasikaCategory);

            if (language === 'si') {
                return {
                    answer: `${cetasikaCategory} චෛතසික ${cetasikas.length}ක් තිබේ:`,
                    details: this.formatCetasikaList(cetasikas, language),
                    references: ['අභිධර්මයේ මූලික කරුණු']
                };
            } else {
                return {
                    answer: `There are ${cetasikas.length} ${cetasikaCategory} cetasikas:`,
                    details: this.formatCetasikaList(cetasikas, language),
                    references: ['Abhidhamma Basics']
                };
            }
        }

        if (cittaCategory) {
            const cittas = this.kb.getCittasByCategory(cittaCategory);

            if (language === 'si') {
                return {
                    answer: `${cittaCategory} සිත් ${cittas.length}ක් තිබේ:`,
                    details: this.formatCittaList(cittas, language),
                    references: ['අභිධර්මයේ මූලික කරුණු']
                };
            } else {
                return {
                    answer: `There are ${cittas.length} ${cittaCategory} cittas:`,
                    details: this.formatCittaList(cittas, language),
                    references: ['Abhidhamma Basics']
                };
            }
        }

        return this.handleUnknownQuestion(language);
    }

    // Handle association questions
    handleAssociationQuestion(entities, language) {
        // This would require association data from meditationData.associations
        // For now, return a basic response
        return this.handleUnknownQuestion(language);
    }

    // Handle unknown questions
    handleUnknownQuestion(language) {
        if (language === 'si') {
            return {
                answer: 'කණගාටුයි, මට මෙම ප්‍රශ්නයට පිළිතුරු දීමට නොහැකිය. මම අභිධර්ම චිත්ත සහ චෛතසික පිළිබඳව පමණක් දන්නවා.',
                details: 'කරුණාකර පහත ආකාරයේ ප්‍රශ්න අසන්න:\n• "අකුසල් සිත් කීයක් තිබේද?"\n• "සාධාරණ චෛතසික කීයක්ද?"\n• "විරති චෛතසික මොනවාද?"\n• "දිට්ඨිය යනු කුමක්ද?"',
                references: []
            };
        } else {
            return {
                answer: 'Sorry, I cannot answer this question. I only know about Abhidhamma cittas and cetasikas.',
                details: 'Please ask questions like:\n• "How many akusala cittas are there?"\n• "How many universal cetasikas?"\n• "What are virati cetasikas?"\n• "What is ditthi?"',
                references: []
            };
        }
    }

    // Format citta list
    formatCittaList(cittas, language) {
        if (cittas.length === 0) return '';

        return cittas.map((c, i) => {
            const name = language === 'si' ? c.name : (c.nameEn || c.name);
            const desc = language === 'si' ?
                (c.descriptionSi || c.description) :
                (c.descriptionEn || c.description);
            return `${i + 1}. ${name}${desc ? ' - ' + desc : ''}`;
        }).join('\n\n');
    }

    // Format cetasika list
    formatCetasikaList(cetasikas, language) {
        if (cetasikas.length === 0) return '';

        return cetasikas.map((c, i) => {
            const name = language === 'si' ? c.name : (c.nameEn || c.name);
            const desc = language === 'si' ? c.description : (c.descriptionEn || c.description);
            return `${i + 1}. ${name}${desc ? ' - ' + desc : ''}`;
        }).join('\n\n');
    }
}

// Create global instance (will be initialized with knowledge base)
window.responseGenerator = null;

// Initialize when knowledge base is ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.abhidhammaKB) {
        window.responseGenerator = new ChatbotResponseGenerator(window.abhidhammaKB);
    }
});
