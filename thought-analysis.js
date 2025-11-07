// Thought Analysis System - Raga Dvesha Moha Analysis
// Based on Abhidhamma teachings and Buddhist psychology

class ThoughtAnalyzer {
    constructor() {
        this.currentAnalysis = null;
        this.selectedPoison = null;
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Main analysis button
        document.getElementById('analyzeThought').addEventListener('click', () => {
            this.analyzeThoughts();
        });

        // Clear button
        document.getElementById('clearThought').addEventListener('click', () => {
            this.clearAnalysis();
        });

        // Poison buttons
        document.getElementById('ragaBtn').addEventListener('click', () => {
            this.showDetailedAnalysis('raga');
        });

        document.getElementById('dveshaBtn').addEventListener('click', () => {
            this.showDetailedAnalysis('dvesha');
        });

        document.getElementById('mohaBtn').addEventListener('click', () => {
            this.showDetailedAnalysis('moha');
        });

        // Close analysis button
        document.getElementById('closeAnalysis').addEventListener('click', () => {
            this.closeDetailedAnalysis();
        });

        // Explore deeper button
        document.getElementById('exploreDeeper').addEventListener('click', () => {
            this.exploreDeeper();
        });
    }

    analyzeThoughts() {
        const thoughtText = document.getElementById('thoughtInput').value.trim();

        if (!thoughtText) {
            this.showNotification('කරුණාකර ඔබගේ සිතුවිලි ආකෘතියෙන් ලියන්න.', 'warning');
            return;
        }

        // Analyze the thoughts using the existing Abhidhamma data
        this.currentAnalysis = this.performAnalysis(thoughtText);

        // Show results
        this.displayAnalysisResults();
    }

    performAnalysis(thoughtText) {
        // Analyze the text for keywords and patterns
        const analysis = {
            text: thoughtText,
            scores: {
                raga: 0,
                dvesha: 0,
                moha: 0
            },
            dominant: null,
            details: {
                raga: {},
                dvesha: {},
                moha: {}
            }
        };

        const lowerText = thoughtText.toLowerCase();

        // Raga (Lobha/Attachment) indicators
        const ragaKeywords = [
            'අල්ලා ගැනීම', 'ආශා කිරීම', 'ලෝභය', 'අල්ලස', 'ගැනීමට ආශාව',
            'want', 'desire', 'attachment', 'greed', 'craving', 'lust',
            'යමක් ලබා ගැනීමට', 'අවශ්‍යයි', 'අවශ්‍යතාවය', 'ප්‍රිය කිරීම',
            'හිතාමතායින්', 'මගේයි', 'මට අවශ්‍යයි', 'අල්ලා ගත්තාම'
        ];

        // Dvesha (Patigha/Aversion) indicators
        const dveshaKeywords = [
            'පටිඝය', 'කෝපය', 'ද්වේශය', 'අසහනය', 'විරුද්ධ වීම',
            'anger', 'hatred', 'aversion', 'dislike', 'hate', 'resentment',
            'කෝප වීම', 'අසහනයි', 'පිරිනමීමට', 'විරුද්ධවීම',
            'නොකැමති වීම', 'අපහාසය', 'වෙනස් කිරීමට'
        ];

        // Moha (Avijja/Ignorance) indicators
        const mohaKeywords = [
            'අවිජ්ජාව', 'මෝහය', 'මෝඩකම', 'නොදැනීම', 'තදබල කිරීම',
            'ignorance', 'delusion', 'confusion', 'misunderstanding', 'blindness',
            'නොදැනුවත්ව', 'මෝඩ වීම', 'තදබලයෙන්', 'වැරදිව හිතා ගැනීම',
            'නොගැලපෙන', 'තදබල රූපයකින්', 'සැබව නොදැනීම'
        ];

        // Count occurrences and calculate scores
        ragaKeywords.forEach(keyword => {
            const count = (lowerText.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
            analysis.scores.raga += count;
        });

        dveshaKeywords.forEach(keyword => {
            const count = (lowerText.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
            analysis.scores.dvesha += count;
        });

        mohaKeywords.forEach(keyword => {
            const count = (lowerText.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
            analysis.scores.moha += count;
        });

        // Additional pattern analysis
        this.analyzePatterns(thoughtText, analysis);

        // Determine dominant poison
        const maxScore = Math.max(analysis.scores.raga, analysis.scores.dvesha, analysis.scores.moha);
        if (maxScore > 0) {
            if (analysis.scores.raga === maxScore) analysis.dominant = 'raga';
            else if (analysis.scores.dvesha === maxScore) analysis.dominant = 'dvesha';
            else analysis.dominant = 'moha';
        } else {
            // Default analysis if no clear keywords found
            analysis.dominant = this.analyzeContext(thoughtText);
        }

        return analysis;
    }

    analyzePatterns(text, analysis) {
        const lowerText = text.toLowerCase();

        // Raga patterns: possessive language, desire expressions
        if (lowerText.includes('මගේ') || lowerText.includes('මට') || lowerText.includes('මම ආශා කරමි')) {
            analysis.scores.raga += 2;
            analysis.details.raga.possessiveness = true;
        }

        // Dvesha patterns: negative emotions, resistance
        if (lowerText.includes('කෝප') || lowerText.includes('නොකැමති') || lowerText.includes('විරුද්ධ')) {
            analysis.scores.dvesha += 2;
            analysis.details.dvesha.negativeEmotions = true;
        }

        // Moha patterns: confusion, misunderstanding
        if (lowerText.includes('නොදැනීම') || lowerText.includes('තදබල') || lowerText.includes('වැරදිව')) {
            analysis.scores.moha += 2;
            analysis.details.moha.confusion = true;
        }

        // Additional sophisticated analysis
        this.analyzeEmotionalTone(text, analysis);
    }

    analyzeEmotionalTone(text, analysis) {
        // Simple sentiment analysis for emotional context
        const positiveWords = ['සතුටු', 'ප්‍රීතිය', 'සුඛය', 'හොඳ', 'අලුත්'];
        const negativeWords = ['දුක්', 'කෝප', 'නොකැමති', 'අසහන', 'පීඩාව'];

        let positiveScore = 0;
        let negativeScore = 0;

        positiveWords.forEach(word => {
            positiveScore += (text.match(new RegExp(word, 'gi')) || []).length;
        });

        negativeWords.forEach(word => {
            negativeScore += (text.match(new RegExp(word, 'gi')) || []).length;
        });

        // Adjust scores based on emotional context
        if (positiveScore > negativeScore) {
            analysis.scores.raga += 1; // Positive emotions can indicate attachment
        } else if (negativeScore > positiveScore) {
            analysis.scores.dvesha += 1; // Negative emotions can indicate aversion
        }
    }

    analyzeContext(text) {
        // Context-based analysis when keywords don't give clear indication
        const contextPatterns = {
            raga: /යමක් ලබා ගැනීමට|අල්ලා ගැනීමට|ආශා කිරීම/i,
            dvesha: /නොකැමති වීම|විරුද්ධ වීම|අසහනය කිරීම/i,
            moha: /නොදැනීම|තදබල කිරීම|වැරදිව හිතා ගැනීම/i
        };

        for (const [poison, pattern] of Object.entries(contextPatterns)) {
            if (pattern.test(text)) {
                return poison;
            }
        }

        // Default to Moha if unclear
        return 'moha';
    }

    displayAnalysisResults() {
        const resultsDiv = document.getElementById('analysisResults');
        resultsDiv.style.display = 'block';

        // Update dominant factor display
        const dominantDiv = document.getElementById('dominantFactor');
        const dominantText = this.getDominantText();
        dominantDiv.textContent = dominantText;

        // Update poison indicators
        this.updatePoisonIndicators();

        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    getDominantText() {
        const dominant = this.currentAnalysis.dominant;
        const scores = this.currentAnalysis.scores;

        const translations = {
            raga: { si: 'රාග (ලෝභ) - අල්ලා ගැනීමේ සිතුවිලි', en: 'Raga (Lobha) - Thoughts of Attachment' },
            dvesha: { si: 'ද්වේශ (පටිඝ) - පටිඝයේ සිතුවිලි', en: 'Dvesha (Patigha) - Thoughts of Aversion' },
            moha: { si: 'මෝහ (අවිජ්ජා) - අවිජ්ජාවේ සිතුවිලි', en: 'Moha (Avijja) - Thoughts of Ignorance' }
        };

        return translations[dominant][currentLanguage] || translations[dominant].si;
    }

    updatePoisonIndicators() {
        const poisons = ['raga', 'dvesha', 'moha'];

        poisons.forEach(poison => {
            const indicator = document.getElementById(`${poison}Indicator`);
            const score = this.currentAnalysis.scores[poison];

            if (score > 0) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    showDetailedAnalysis(poison) {
        this.selectedPoison = poison;

        // Update UI
        document.querySelectorAll('.poison-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`${poison}Btn`).classList.add('active');

        // Show detailed analysis
        const detailedDiv = document.getElementById('detailedAnalysis');
        detailedDiv.style.display = 'block';

        // Populate analysis content
        this.populateDetailedAnalysis(poison);

        // Scroll to detailed analysis
        detailedDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    populateDetailedAnalysis(poison) {
        const analysis = this.currentAnalysis;
        const title = document.getElementById('analysisTitle');

        const titles = {
            raga: { si: 'රාග (ලෝභ) විශ්ලේෂණය', en: 'Raga (Lobha) Analysis' },
            dvesha: { si: 'ද්වේශ (පටිඝ) විශ්ලේෂණය', en: 'Dvesha (Patigha) Analysis' },
            moha: { si: 'මෝහ (අවිජ්ජා) විශ්ලේෂණය', en: 'Moha (Avijja) Analysis' }
        };

        title.textContent = titles[poison][currentLanguage] || titles[poison].si;

        // Populate causes
        this.populateCauses(poison);

        // Populate interconnections
        this.populateInterconnections(poison);

        // Populate teachings
        this.populateTeachings(poison);

        // Populate guidance
        this.populateGuidance(poison);
    }

    populateCauses(poison) {
        const causesList = document.getElementById('causesList');
        const causes = this.getCausesForPoison(poison);

        causesList.innerHTML = '';

        causes.forEach(cause => {
            const causeItem = document.createElement('div');
            causeItem.className = 'cause-item';
            causeItem.textContent = cause;
            causesList.appendChild(causeItem);
        });
    }

    getCausesForPoison(poison) {
        const causes = {
            raga: [
                'යමක් ලබා ගැනීමට ආශා කිරීම',
                'අල්ලා ගැනීමේ සිතුවිලි',
                'ලෝභය සහ රාගය ඇති වීම',
                'සුඛයට පැහැදිලිවම ගැනීමට උත්සාහ කිරීම',
                'අනෙකෙකුගේ දේපළට ආශා කිරීම'
            ],
            dvesha: [
                'නොකැමති දේවලට පටිඝය ඇති වීම',
                'කෝපය සහ ද්වේශය ඇති වීම',
                'විරුද්ධ වීමේ සිතුවිලි',
                'අසහනය කිරීමට උත්සාහ කිරීම',
                'අනෙකෙකුගේ සුබසාධකයට විරුද්ධ වීම'
            ],
            moha: [
                'ධර්මය නොදැනීම',
                'තදබල කිරීමේ සිතුවිලි',
                'වැරදිව තේරුම් ගැනීම',
                'අවිජ්ජාව නිසා වැරදි ක්‍රියා කිරීම',
                'සැබෑ ධර්මය නොපිළිගැනීම'
            ]
        };

        return causes[poison] || [];
    }

    populateInterconnections(poison) {
        const interconnectionsDiv = document.getElementById('interconnections');
        const interconnections = this.getInterconnectionsForPoison(poison);

        interconnectionsDiv.innerHTML = '';

        interconnections.forEach(interconnection => {
            const item = document.createElement('div');
            item.className = 'interconnection-item';

            item.innerHTML = `
                <div class="icon">${interconnection.icon}</div>
                <h6>${interconnection.title}</h6>
                <p>${interconnection.description}</p>
            `;

            interconnectionsDiv.appendChild(item);
        });
    }

    getInterconnectionsForPoison(poison) {
        const interconnections = {
            raga: [
                {
                    icon: '🔗',
                    title: 'ද්වේශ සමඟ සම්බන්ධතාවය',
                    description: 'රාගය නොලැබීම නිසා ද්වේශය ඇති වේ'
                },
                {
                    icon: '🔗',
                    title: 'මෝහ සමඟ සම්බන්ධතාවය',
                    description: 'මෝහය නිසා සැබෑ අනර්ථය නොදැන රාගය ඇති වේ'
                }
            ],
            dvesha: [
                {
                    icon: '🔗',
                    title: 'රාග සමඟ සම්බන්ධතාවය',
                    description: 'රාගය නොලැබීම නිසා ද්වේශය ඇති වේ'
                },
                {
                    icon: '🔗',
                    title: 'මෝහ සමඟ සම්බන්ධතාවය',
                    description: 'මෝහය නිසා වැරදිව තේරුම් ගැනීමෙන් ද්වේශය ඇති වේ'
                }
            ],
            moha: [
                {
                    icon: '🔗',
                    title: 'රාග සමඟ සම්බන්ධතාවය',
                    description: 'මෝහය නිසා සැබෑ අනර්ථය නොදැන රාගය ඇති වේ'
                },
                {
                    icon: '🔗',
                    title: 'ද්වේශ සමඟ සම්බන්ධතාවය',
                    description: 'මෝහය නිසා වැරදිව තේරුම් ගැනීමෙන් ද්වේශය ඇති වේ'
                }
            ]
        };

        return interconnections[poison] || [];
    }

    populateTeachings(poison) {
        const teachingsDiv = document.getElementById('teachingsContent');
        const teachings = this.getTeachingsForPoison(poison);

        teachingsDiv.innerHTML = '';

        teachings.forEach(teaching => {
            const quoteDiv = document.createElement('div');
            quoteDiv.className = 'teaching-quote';
            quoteDiv.textContent = teaching;
            teachingsDiv.appendChild(quoteDiv);
        });
    }

    getTeachingsForPoison(poison) {
        const teachings = {
            raga: [
                '"යම් කිසිවක් රාගයෙන් ගත්තාම රාගයාගේ බලයෙන් යුක්ත වේ. රාගයාගේ බලයෙන් යුක්ත වූයේ රාගයාගේ බලයෙන් පීඩාවට පැමිණේය." - ධර්මය',
                '"ලෝභය නම් මහා අග්නියකි. එය ලෝකය සෑම දිගුකින්ම ගිනි තබා දවේ." - බුදුවරයන් වහන්සේ',
                '"රාගය ඇති වීමෙන් දුක් ඇති වේ. රාගය නැති වීමෙන් දුක් නැති වේ." - පටිච්ච සමුප්පාද විද්‍යාව'
            ],
            dvesha: [
                '"ද්වේශය නම් මහා විෂයකි. එය මනස සෑම දිගුකින්ම විෂ සහිත කරයි." - බුදුවරයන් වහන්සේ',
                '"කෝපය ඇති වීමෙන් දුක් ඇති වේ. කෝපය නැති වීමෙන් සුඛය ඇති වේ." - ධර්මය',
                '"පටිඝය නම් මනසේ විෂයකි. එය සියලු සුබසාධකයන් විනාශ කරයි." - බුදුවරයන් වහන්සේ'
            ],
            moha: [
                '"අවිජ්ජාව නම් මහා අන්ධකාරයකි. එය සියලු ධර්මයන් වැස්ස කරයි." - බුදුවරයන් වහන්සේ',
                '"මෝහය නම් මූලාශ්‍රයකි සියලු දුක්කම්හට." - ධර්මය',
                '"අවිජ්ජාව නැති වීමෙන් ධර්මය ප්‍රකාශ වේ. ධර්මය ප්‍රකාශ වීමෙන් පිරිනමුම ඇති වේ." - පටිච්ච සමුප්පාද විද්‍යාව'
            ]
        };

        return teachings[poison] || [];
    }

    populateGuidance(poison) {
        const guidanceDiv = document.getElementById('guidanceContent');
        const guidance = this.getGuidanceForPoison(poison);

        guidanceDiv.innerHTML = '';

        guidance.forEach(step => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'guidance-step';
            stepDiv.innerHTML = step;
            guidanceDiv.appendChild(stepDiv);
        });
    }

    getGuidanceForPoison(poison) {
        const guidance = {
            raga: [
                '<strong>පළමු පියවර:</strong> රාගය ඇති වූ කාරණය හඳුනා ගන්න සහ එය සැබෑ ස්වභාවය තේරුම් ගන්න.',
                '<strong>දෙවන පියවර:</strong> ධ්‍යානය මගින් මනස සන්සුන් කර රාගයට පහර දෙන්න.',
                '<strong>තුන්වන පියවර:</strong> අනිත්‍ය භාවනාව මගින් සියලු දේවල අනිත්‍ය ස්වභාවය තේරුම් ගන්න.',
                '<strong>හතරවන පියවර:</strong> මෛත්‍රිය සහ කරුණාව වර්ධනය කරමින් රාගය වැළකී සිටින්න.'
            ],
            dvesha: [
                '<strong>පළමු පියවර:</strong> ද්වේශය ඇති වූ කාරණය හඳුනා ගන්න සහ එයට විරුද්ධව නොවීමට උත්සාහ කරන්න.',
                '<strong>දෙවන පියවර:</strong> මෛත්‍රිය සහ කරුණාව භාවනා කරමින් ද්වේශයට පහර දෙන්න.',
                '<strong>තුන්වන පියවර:</strong> සියලු සත්වයින්ට මනසින් මෛත්‍රිය එවන්න.',
                '<strong>හතරවන පියවර:</strong> ධ්‍යානය මගින් මනස සන්සුන් කර ද්වේශය ඉවත් කරන්න.'
            ],
            moha: [
                '<strong>පළමු පියවර:</strong> ධර්මය ඉගෙන ගැනීමෙන් අවිජ්ජාව ඉවත් කරන්න.',
                '<strong>දෙවන පියවර:</strong> විචිකිච්ඡාවට පහර දීම සඳහා ධර්මය අවබෝධ කරන්න.',
                '<strong>තුන්වන පියවර:</strong> උද්ධච්චයට පහර දීම සඳහා සමාධිය වර්ධනය කරන්න.',
                '<strong>හතරවන පියවර:</strong> ප්‍රඥාව වර්ධනය කරමින් මෝහය ඉවත් කරන්න.'
            ]
        };

        return guidance[poison] || [];
    }

    closeDetailedAnalysis() {
        const detailedDiv = document.getElementById('detailedAnalysis');
        detailedDiv.style.display = 'none';

        // Remove active state from poison buttons
        document.querySelectorAll('.poison-button').forEach(btn => {
            btn.classList.remove('active');
        });

        this.selectedPoison = null;
    }

    exploreDeeper() {
        // Navigate to related Abhidhamma sections for deeper learning
        const poison = this.selectedPoison;

        switch (poison) {
            case 'raga':
                // Navigate to lobha-related cittas
                document.querySelector('a[href="#table"]').click();
                // Could filter to show lobha-related consciousness states
                break;
            case 'dvesha':
                // Navigate to dvesha-related cittas
                document.querySelector('a[href="#table"]').click();
                break;
            case 'moha':
                // Navigate to moha-related cittas
                document.querySelector('a[href="#table"]').click();
                break;
        }

        this.showNotification('අභිධර්මයේ සම්බන්ධ කාණ්ඩ වෙත යොමු කරන ලදී. වැඩිදුර අධ්‍යයනය සඳහා මෙම කාණ්ඩ අධ්‍යයනය කරන්න.', 'info');
    }

    clearAnalysis() {
        document.getElementById('thoughtInput').value = '';
        document.getElementById('analysisResults').style.display = 'none';
        document.getElementById('detailedAnalysis').style.display = 'none';

        // Reset indicators
        document.querySelectorAll('.poison-indicator').forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Reset poison buttons
        document.querySelectorAll('.poison-button').forEach(btn => {
            btn.classList.remove('active');
        });

        this.currentAnalysis = null;
        this.selectedPoison = null;
    }

    showNotification(message, type = 'info') {
        // Simple notification system
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'warning' ? '#ffc107' : type === 'error' ? '#dc3545' : '#007bff'};
            color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// Initialize the thought analyzer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const thoughtAnalyzer = new ThoughtAnalyzer();
});
