// Chatbot Pattern Matcher
// ප්‍රශ්න විශ්ලේෂණය කර intent හඳුනාගැනීම

class ChatbotPatternMatcher {
    constructor() {
        this.patterns = this.definePatterns();
    }

    // Define all question patterns
    definePatterns() {
        return {
            // Counting questions
            counting: {
                si: ['කීයක්', 'කීයද', 'කීයෙක්', 'ගණන', 'සංඛ්‍යාව', 'කොපමණ'],
                en: ['how many', 'count', 'number of', 'total']
            },

            // Definition questions
            definition: {
                si: ['යනු කුමක්ද', 'කියන්නේ මොකක්ද', 'අර්ථය', 'විස්තර', 'පැහැදිලි කරන්න'],
                en: ['what is', 'define', 'meaning', 'explain', 'describe']
            },

            // Category/List questions
            category: {
                si: ['කුමන', 'මොනවාද', 'මොනවද', 'ලැයිස්තුව', 'වර්ග'],
                en: ['which', 'what are', 'list', 'types', 'categories']
            },

            // Association questions
            association: {
                si: ['සමඟ', 'එක්ව', 'සමග', 'සහිත', 'සම්බන්ධ'],
                en: ['with', 'associated', 'together', 'along with', 'related']
            },

            // Entities - Citta categories
            cittaCategories: {
                si: {
                    'අකුසල්': ['අකුසල්', 'අකුශල'],
                    'කුසල්': ['කුසල්', 'කුශල'],
                    'විපාක': ['විපාක', 'විපාක'],
                    'ක්‍රියා': ['ක්‍රියා', 'ක්‍රිය'],
                    'ලෝකෝත්තර': ['ලෝකෝත්තර', 'ලෝකොත්තර'],
                    'ලෝභ මූල': ['ලෝභ මූල', 'ලෝභ', 'රාග'],
                    'ද්වේශ මූල': ['ද්වේශ මූල', 'ද්වේශ', 'දෝස'],
                    'මෝහ මූල': ['මෝහ මූල', 'මෝහ']
                },
                en: {
                    'Unwholesome': ['unwholesome', 'akusala', 'akushala'],
                    'Wholesome': ['wholesome', 'kusala', 'kushala'],
                    'Resultant': ['resultant', 'vipaka'],
                    'Functional': ['functional', 'kriya'],
                    'Supramundane': ['supramundane', 'lokuttara'],
                    'Greed Root': ['greed', 'lobha', 'raga'],
                    'Hatred Root': ['hatred', 'dosa', 'dvesa'],
                    'Delusion Root': ['delusion', 'moha']
                }
            },

            // Entities - Cetasika categories
            cetasikaCategories: {
                si: {
                    'සාධාරණ': ['සාධාරණ', 'universal'],
                    'පක්ෂික': ['පක්ෂික', 'particular'],
                    'අකුසල්': ['අකුසල්'],
                    'සෝබන': ['සෝබන', 'beautiful'],
                    'විරති': ['විරති', 'වැළකීම්', 'abstinence']
                },
                en: {
                    'Universal': ['universal', 'common'],
                    'Particular': ['particular', 'occasional'],
                    'Unwholesome': ['unwholesome'],
                    'Beautiful': ['beautiful', 'sobhana'],
                    'Abstinence': ['abstinence', 'virati', 'restraint']
                }
            },

            // Common terms
            terms: {
                si: {
                    'citta': ['සිත්', 'සිත', 'චිත්ත', 'චිත්', 'සිතක්'],
                    'cetasika': ['චෛතසික', 'චෛතසික', 'චෛතසිකයක්', 'චෛතසිකයන්']
                },
                en: {
                    'citta': ['citta', 'cittas', 'consciousness', 'mind'],
                    'cetasika': ['cetasika', 'cetasikas', 'mental factor', 'mental factors']
                }
            }
        };
    }

    // Analyze question and extract intent + entities
    analyzeQuestion(question) {
        const language = this.detectLanguage(question);
        const normalized = this.normalizeText(question);
        const intent = this.detectIntent(normalized, language);
        const entities = this.extractEntities(normalized, language);

        return {
            original: question,
            normalized,
            language,
            intent,
            entities
        };
    }

    // Detect language (Sinhala or English)
    detectLanguage(text) {
        // Check for Sinhala Unicode characters
        const sinhalaChars = text.match(/[\u0D80-\u0DFF]/g);
        return sinhalaChars && sinhalaChars.length > 0 ? 'si' : 'en';
    }

    // Normalize text
    normalizeText(text) {
        return text.toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Detect intent from question
    detectIntent(text, language) {
        const intents = [];

        // Check counting patterns
        if (this.matchesPattern(text, this.patterns.counting[language])) {
            intents.push('counting');
        }

        // Check definition patterns
        if (this.matchesPattern(text, this.patterns.definition[language])) {
            intents.push('definition');
        }

        // Check category patterns
        if (this.matchesPattern(text, this.patterns.category[language])) {
            intents.push('category');
        }

        // Check association patterns
        if (this.matchesPattern(text, this.patterns.association[language])) {
            intents.push('association');
        }

        // Return primary intent or 'unknown'
        return intents.length > 0 ? intents[0] : 'unknown';
    }

    // Extract entities (categories, terms, etc.)
    extractEntities(text, language) {
        const entities = {
            cittaCategory: null,
            cetasikaCategory: null,
            term: null,
            specificName: null
        };

        // Extract citta category
        for (const [category, patterns] of Object.entries(this.patterns.cittaCategories[language])) {
            if (this.matchesPattern(text, patterns)) {
                entities.cittaCategory = category;
                break;
            }
        }

        // Extract cetasika category
        for (const [category, patterns] of Object.entries(this.patterns.cetasikaCategories[language])) {
            if (this.matchesPattern(text, patterns)) {
                entities.cetasikaCategory = category;
                break;
            }
        }

        // Extract term (citta or cetasika)
        for (const [term, patterns] of Object.entries(this.patterns.terms[language])) {
            if (this.matchesPattern(text, patterns)) {
                entities.term = term;
                break;
            }
        }

        // Try to extract specific citta/cetasika name
        entities.specificName = this.extractSpecificName(text, language);

        return entities;
    }

    // Extract specific citta or cetasika name from question
    extractSpecificName(text, language) {
        // Common Sinhala cetasika names
        const sinhalaNames = [
            'දිට්ඨිය', 'දිට්ඨි', 'මෝහය', 'මෝහ', 'ලෝභය', 'ලෝභ', 'දෝසය', 'දෝස',
            'සද්ධා', 'සති', 'හිරි', 'ඔත්තප්ප', 'පඤ්ඤා', 'කරුණා', 'මුදිතා',
            'සම්මාවාචා', 'සම්මාකම්මන්ත', 'සම්මාආජීව',
            'ඵස්සය', 'වේදනා', 'සංඤ්ඤා', 'චේතනා', 'ඒකග්ගතාවය'
        ];

        // Common English cetasika names
        const englishNames = [
            'ditthi', 'moha', 'lobha', 'dosa', 'saddha', 'sati', 'hiri', 'ottappa',
            'panna', 'karuna', 'mudita', 'sammavaca', 'sammakammanta', 'sammaajiva',
            'phassa', 'vedana', 'sanna', 'cetana', 'ekaggata'
        ];

        const names = language === 'si' ? sinhalaNames : englishNames;

        for (const name of names) {
            if (text.includes(name.toLowerCase())) {
                return name;
            }
        }

        return null;
    }

    // Check if text matches any pattern
    matchesPattern(text, patterns) {
        return patterns.some(pattern => text.includes(pattern.toLowerCase()));
    }

    // Get suggested questions based on current question
    getSuggestedQuestions(analysis) {
        const suggestions = [];
        const lang = analysis.language;

        if (lang === 'si') {
            suggestions.push(
                'අකුසල් සිත් කීයක් තිබේද?',
                'සාධාරණ චෛතසික කීයක්ද?',
                'විරති චෛතසික මොනවාද?',
                'දිට්ඨිය යනු කුමක්ද?'
            );
        } else {
            suggestions.push(
                'How many akusala cittas are there?',
                'How many universal cetasikas?',
                'What are virati cetasikas?',
                'What is ditthi?'
            );
        }

        return suggestions;
    }
}

// Create global instance
window.patternMatcher = new ChatbotPatternMatcher();
