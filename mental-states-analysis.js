// Mental States Analysis System - Raga Dvesha Moha Analysis
// Based on Buddhist teachings and Abhidhamma

class MentalStatesAnalyzer {
    constructor() {
        this.mentalStatesData = null;
        this.currentState = null;
        this.initializeEventListeners();
        this.loadMentalStatesData();
    }

    async loadMentalStatesData() {
        try {
            const response = await fetch('mental-states-data.json');
            this.mentalStatesData = await response.json();
        } catch (error) {
            console.error('Error loading mental states data:', error);
            // Fallback data
            this.mentalStatesData = {
                raga: {
                    name: "රාග (ලෝභ)",
                    nameEn: "Raga (Lobha)",
                    description: "අල්ලා ගැනීම, ආශා කිරීම, රාගය",
                    causes: [],
                    dhammaQuotes: [],
                    studyMaterials: []
                },
                dvesha: {
                    name: "ද්වේශ (පටිඝ)",
                    nameEn: "Dvesha (Patigha)",
                    description: "පටිඝය, කෝපය, ද්වේශය",
                    causes: [],
                    dhammaQuotes: [],
                    studyMaterials: []
                },
                moha: {
                    name: "මෝහ (අවිජ්ජා)",
                    nameEn: "Moha (Avijja)",
                    description: "අවිජ්ජාව, මෝහය, මෝඩකම",
                    causes: [],
                    dhammaQuotes: [],
                    studyMaterials: []
                }
            };
        }
    }

    initializeEventListeners() {
        // Card click events
        document.getElementById('ragaCard').addEventListener('click', () => {
            this.showAnalysis('raga');
        });

        document.getElementById('dveshaCard').addEventListener('click', () => {
            this.showAnalysis('dvesha');
        });

        document.getElementById('mohaCard').addEventListener('click', () => {
            this.showAnalysis('moha');
        });

        // Explore buttons
        document.querySelectorAll('.explore-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = e.target.closest('.mental-state-card');
                const state = card.dataset.state;
                this.showAnalysis(state);
            });
        });

        // Modal events
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('closeModalBtn').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('modalOverlay').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('studyDhammaBtn').addEventListener('click', () => {
            this.navigateToDhammaStudy();
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    showAnalysis(state) {
        this.currentState = state;
        const data = this.mentalStatesData[state];

        if (!data) {
            console.error('Mental state data not found:', state);
            return;
        }

        // Update modal classes
        const modal = document.getElementById('analysisModal');
        modal.className = 'analysis-modal';

        const modalContent = modal.querySelector('.modal-content');
        modalContent.className = `modal-content ${state}-modal ${state}-analysis`;

        // Update modal title
        const modalTitle = document.getElementById('modalTitle');
        modalTitle.textContent = `${data.name} - විස්තරාත්මක විශ්ලේෂණය`;

        // Populate modal content
        this.populateModalContent(data);

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Focus management
        document.getElementById('closeModal').focus();
    }

    populateModalContent(data) {
        const modalBody = document.getElementById('modalBody');
        const state = this.currentState;

        let content = '';

        // Causes section
        if (data.causes && data.causes.length > 0) {
            content += `
                <div class="analysis-section">
                    <h4>මෙම මානසික තත්ත්වය ඇති වීමට හේතු වන සිතුවිලි</h4>
                    ${data.causes.map(cause => `
                        <div class="cause-item">
                            <strong>${cause.thought}</strong><br>
                            <em>හේතුව: ${cause.reason}</em>
                        </div>
                        <div class="condition-item">
                            <strong>කාරණා:</strong><br>
                            ${cause.conditions.map(condition => `• ${condition}`).join('<br>')}
                        </div>
                        <div class="remedy-item">
                            <strong>නැති කිරීමේ මාර්ගය:</strong><br>
                            ${cause.remedies.map(remedy => `• ${remedy}`).join('<br>')}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Dhamma quotes section
        if (data.dhammaQuotes && data.dhammaQuotes.length > 0) {
            content += `
                <div class="analysis-section">
                    <h4>බුදුවරයන් වහන්සේගේ උගන්වීම්</h4>
                    ${data.dhammaQuotes.map(quote => `
                        <div class="quote-block">
                            "${quote.quote}"
                            <div class="quote-source">- ${quote.source}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Study materials section
        if (data.studyMaterials && data.studyMaterials.length > 0) {
            content += `
                <div class="analysis-section">
                    <h4>ධර්මය අධ්‍යයනය සඳහා</h4>
                    ${data.studyMaterials.map(material => `
                        <div class="study-reference">
                            <div class="reference-title">${material.title}</div>
                            <p>${material.content}</p>
                            <small><em>අධ්‍යයන මූලාශ්‍රය: ${material.reference}</em></small>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Additional guidance based on state
        content += this.getAdditionalGuidance(state);

        modalBody.innerHTML = content;
    }

    getAdditionalGuidance(state) {
        const guidance = {
            raga: `
                <div class="analysis-section">
                    <h4>රාගය නැති කිරීමේ ප්‍රායෝගික මාර්ග</h4>
                    <div class="remedy-item">
                        <strong>අනිත්‍ය භාවනාව:</strong><br>
                        සියලු දේවල අනිත්‍ය ස්වභාවය සිහිපත් කරමින් රාගයට පහර දෙන්න
                    </div>
                    <div class="remedy-item">
                        <strong>දානය සහ සීලය:</strong><br>
                        දානය කිරීම සහ පංසීලය පැවැත්වීමෙන් රාගය වැළකී සිටින්න
                    </div>
                    <div class="remedy-item">
                        <strong>විපස්සනා භාවනාව:</strong><br>
                        ධ්‍යානය මගින් මනස සන්සුන් කර රාගයේ මූලය විදිමින් රාගය නැති කරන්න
                    </div>
                </div>
            `,
            dvesha: `
                <div class="analysis-section">
                    <h4>ද්වේශය නැති කිරීමේ ප්‍රායෝගික මාර්ග</h4>
                    <div class="remedy-item">
                        <strong>මෛත්‍රිය භාවනාව:</strong><br>
                        සියලු සත්වයින්ට මෛත්‍රිය එවමින් කෝපයට පහර දෙන්න
                    </div>
                    <div class="remedy-item">
                        <strong>කරුණාව සහ මුදිතාව:</strong><br>
                        අනෙකෙකුගේ සුබසාධකයට සතුටු වීමෙන් ද්වේශය නැති කරන්න
                    </div>
                    <div class="remedy-item">
                        <strong>ධ්‍යානයෙන් මනස සන්සුන් කිරීම:</strong><br>
                        ධ්‍යානය මගින් කලබලයට පහර දීමෙන් ද්වේශය ඉවත් කරන්න
                    </div>
                </div>
            `,
            moha: `
                <div class="analysis-section">
                    <h4>මෝහය නැති කිරීමේ ප්‍රායෝගික මාර්ග</h4>
                    <div class="remedy-item">
                        <strong>ධර්මය අධ්‍යයනය කිරීම:</strong><br>
                        ධර්මය ඉගෙන ගැනීමෙන් අවිජ්ජාව ඉවත් කරන්න
                    </div>
                    <div class="remedy-item">
                        <strong>ප්‍රඥාව වර්ධනය කිරීම:</strong><br>
                        විචිකිච්ඡාවට පහර දීම සඳහා ධර්මය අවබෝධ කරන්න
                    </div>
                    <div class="remedy-item">
                        <strong>විදර්ශනා මාර්ගය අනුගමනය කිරීම:</strong><br>
                        ධ්‍යානය සහ ප්‍රඥාව මගින් මෝහය නැති කර ත්‍රිවිද්‍යාව මුළුමනින්ම ඉවත් කරන්න
                    </div>
                </div>
            `
        };

        return guidance[state] || '';
    }

    closeModal() {
        const modal = document.getElementById('analysisModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.currentState = null;
    }

    navigateToDhammaStudy() {
        // Navigate to relevant Abhidhamma sections
        const links = {
            raga: '#table', // Navigate to citta table for lobha-related cittas
            dvesha: '#table', // Navigate to citta table for dvesha-related cittas
            moha: '#table' // Navigate to citta table for moha-related cittas
        };

        const targetLink = links[this.currentState] || '#table';
        const link = document.querySelector(`a[href="${targetLink}"]`);

        if (link) {
            link.click();
        }

        this.closeModal();

        // Show notification
        this.showNotification(
            'අභිධර්මයේ සම්බන්ධ කාණ්ඩ වෙත යොමු කරන ලදී. වැඩිදුර අධ්‍යයනය සඳහා මෙම කාණ්ඩ අධ්‍යයනය කරන්න.',
            'info'
        );
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                ${message}
            </div>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'warning' ? '#ffc107' : type === 'error' ? '#dc3545' : '#007bff',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: '1000',
            maxWidth: '400px',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        });

        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Utility method to get current language
    getCurrentLanguage() {
        return currentLanguage || 'si';
    }

    // Method to update UI language
    updateLanguage(lang) {
        currentLanguage = lang;
        // Update modal content if open
        if (this.currentState && this.mentalStatesData) {
            this.populateModalContent(this.mentalStatesData[this.currentState]);
        }
    }
}

// Initialize the mental states analyzer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const mentalStatesAnalyzer = new MentalStatesAnalyzer();

    // Make it globally available for language switching
    window.mentalStatesAnalyzer = mentalStatesAnalyzer;
});
