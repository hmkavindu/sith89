// Enhanced Features for Abhidhamma Website
// Based on Google Sheets analysis and improvements

// Source URL Mapping for References
// Make it globally available
window.sourceUrls = {
    // Tipitaka - General
    'ත්‍රිපිටකය': 'https://tipitaka.lk/',
    'Tipitaka': 'https://tipitaka.lk/',

    // Abhidhamma Pitaka - Specific section (links to Tipitaka.lk Abhidhamma section)
    'අභිධර්ම පිටකය': 'https://tipitaka.lk/',
    'Abhidhamma Pitaka': 'https://tipitaka.lk/',

    // Specific Abhidhamma texts - Cetasikas are primarily in these
    'ධම්මසඞ්ගණී': 'https://tipitaka.lk/abhidhamma',
    'Dhammasangani': 'https://tipitaka.lk/abhidhamma',
    'ධම්මසංගණී': 'https://tipitaka.lk/abhidhamma',
    'අට්ඨසාලිනී': 'https://tipitaka.lk/abhidhamma',
    'Atthasalini': 'https://tipitaka.lk/abhidhamma',
    'අභිධම්මත්ථ සඞ්ගහ': 'https://tipitaka.lk/abhidhamma',
    'Abhidhammatthasangaha': 'https://tipitaka.lk/abhidhamma',
    'විසුද්ධිමග්ග': 'https://tipitaka.lk/abhidhamma',
    'Visuddhimagga': 'https://tipitaka.lk/abhidhamma',

    // Rerukane Chandawimala Thero's Books - Archive.org link
    'රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ': 'https://archive.org/details/books-on-buddhism-by-ven.-rerukane-chandawimala-thero/%E0%B6%BB%E0%B7%9A%E0%B6%BB%E0%B7%94%E0%B6%9A%E0%B7%8F%E0%B6%B1%E0%B7%9A%20%E0%B6%A0%E0%B6%B1%E0%B7%8A%E0%B6%AF%E0%B7%80%E0%B7%92%E0%B6%B8%E0%B6%BD%20%E0%B6%B8%E0%B7%84%E0%B6%B1%E0%B7%8F%E0%B7%84%E0%B7%92%E0%B6%B8%E0%B7%92%20-%20%E0%B6%85%E0%B6%B7%E0%B7%92%E0%B6%B0%E0%B6%BB%E0%B7%8A%E0%B6%B8%20%E0%B6%B8%E0%B7%8F%E0%B6%BB%E0%B7%8A%E0%B6%9C%E0%B6%BA/',
    'රේනුකානේ චන්දවිමල හිමි': 'https://archive.org/details/books-on-buddhism-by-ven.-rerukane-chandawimala-thero/%E0%B6%BB%E0%B7%9A%E0%B6%BB%E0%B7%94%E0%B6%9A%E0%B7%8F%E0%B6%B1%E0%B7%9A%20%E0%B6%A0%E0%B6%B1%E0%B7%8A%E0%B6%AF%E0%B7%80%E0%B7%92%E0%B6%B8%E0%B6%BD%20%E0%B6%B8%E0%B7%84%E0%B6%B1%E0%B7%8F%E0%B7%84%E0%B7%92%E0%B6%B8%E0%B7%92%20-%20%E0%B6%85%E0%B6%B7%E0%B7%92%E0%B6%B0%E0%B6%BB%E0%B7%8A%E0%B6%B8%20%E0%B6%B8%E0%B7%8F%E0%B6%BB%E0%B7%8A%E0%B6%9C%E0%B6%BA/',
    'Rerukane Chandawimala Thero': 'https://archive.org/details/books-on-buddhism-by-ven.-rerukane-chandawimala-thero/%E0%B6%BB%E0%B7%9A%E0%B6%BB%E0%B7%94%E0%B6%9A%E0%B7%8F%E0%B6%B1%E0%B7%9A%20%E0%B6%A0%E0%B6%B1%E0%B7%8A%E0%B6%AF%E0%B7%80%E0%B7%92%E0%B6%B8%E0%B6%BD%20%E0%B6%B8%E0%B7%84%E0%B6%B1%E0%B7%8F%E0%B7%84%E0%B7%92%E0%B6%B8%E0%B7%92%20-%20%E0%B6%85%E0%B6%B7%E0%B7%92%E0%B6%B0%E0%B6%BB%E0%B7%8A%E0%B6%B8%20%E0%B6%B8%E0%B7%8F%E0%B6%BB%E0%B7%8A%E0%B6%9C%E0%B6%BA/',
    'Ven. Rerukane Chandawimala Thero': 'https://archive.org/details/books-on-buddhism-by-ven.-rerukane-chandawimala-thero/%E0%B6%BB%E0%B7%9A%E0%B6%BB%E0%B7%94%E0%B6%9A%E0%B7%8F%E0%B6%B1%E0%B7%9A%20%E0%B6%A0%E0%B6%B1%E0%B7%8A%E0%B6%AF%E0%B7%80%E0%B7%92%E0%B6%B8%E0%B6%BD%20%E0%B6%B8%E0%B7%84%E0%B6%B1%E0%B7%8F%E0%B7%84%E0%B7%92%E0%B6%B8%E0%B7%92%20-%20%E0%B6%85%E0%B6%B7%E0%B7%92%E0%B6%B0%E0%B6%BB%E0%B7%8A%E0%B6%B8%20%E0%B6%B8%E0%B7%8F%E0%B6%BB%E0%B7%8A%E0%B6%9C%E0%B6%BA/',

    // Abhidhamma Marga - Specific book link (pitaka.lk version)
    'අභිධර්ම මාර්ගය': 'https://pitaka.lk/books/abhidharma-margaya/index.html',
    'Abhidhamma Marga': 'https://pitaka.lk/books/abhidharma-margaya/index.html',

    // Keles Ekadasa Pansiyaya - Specific book link
    'කෙලෙස් එකදහස් පන්සියය': 'https://pitaka.lk/books/keles-1500/index.html',
    'Keles Ekadasa Pansiyaya': 'https://pitaka.lk/books/keles-1500/index.html'
};

const sourceUrls = window.sourceUrls;

// Function to create source links from sources array
function createSourceLinks(sources) {
    if (!sources || !Array.isArray(sources) || sources.length === 0) {
        return null;
    }

    const container = document.createElement('div');
    container.className = 'explanation-reference';

    const referenceStrong = document.createElement('strong');
    referenceStrong.textContent = currentLanguage === 'si' ? 'මුලාශ්‍ර: ' : 'References: ';
    container.appendChild(referenceStrong);

    const links = [];

    sources.forEach((source, index) => {
        if (source && source.url && source.label) {
            const link = document.createElement('a');
            link.href = source.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'reference-link';
            link.textContent = source.label;
            link.title = currentLanguage === 'si' ? `${source.label} වෙත යන්න` : `Go to ${source.label}`;
            links.push(link);

            // Add separator (comma) except for last item
            if (index < sources.length - 1) {
                const separator = document.createTextNode(', ');
                links.push(separator);
            }
        }
    });

    // Append all links to container
    links.forEach(item => {
        container.appendChild(item);
    });

    return links.length > 0 ? container : null;
}

// Function to parse bookReference and create clickable links
function createReferenceLinks(referenceText) {
    if (!referenceText) return null;

    const container = document.createElement('div');
    container.className = 'explanation-reference';

    const referenceStrong = document.createElement('strong');
    referenceStrong.textContent = currentLanguage === 'si' ? 'මුලාශ්‍ර: ' : 'References: ';
    container.appendChild(referenceStrong);

    // Split by comma and process each source
    const sources = referenceText.split(',').map(s => s.trim());
    const links = [];
    const urlMap = window.sourceUrls || sourceUrls;

    sources.forEach((source, index) => {
        // Handle combined formats like "ත්‍රිපිටකය - අභිධර්ම පිටකය"
        if (source.includes(' - ')) {
            const parts = source.split(' - ').map(p => p.trim());

            parts.forEach((part, partIndex) => {
                const url = urlMap[part] || null;

                if (url) {
                    const link = document.createElement('a');
                    link.href = url;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.className = 'reference-link';
                    link.textContent = part;
                    link.title = currentLanguage === 'si' ? `${part} වෙත යන්න` : `Go to ${part}`;
                    links.push(link);
                } else {
                    const span = document.createElement('span');
                    span.textContent = part;
                    span.className = 'reference-text';
                    links.push(span);
                }

                // Add dash separator between parts (except for last part)
                if (partIndex < parts.length - 1) {
                    const dashSeparator = document.createTextNode(' - ');
                    links.push(dashSeparator);
                }
            });
        } else {
            // Direct source without dash separator
            const url = urlMap[source] || null;

            if (url) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'reference-link';
                link.textContent = source;
                link.title = currentLanguage === 'si' ? `${source} වෙත යන්න` : `Go to ${source}`;
                links.push(link);
            } else {
                // If no URL found, show as plain text
                const span = document.createElement('span');
                span.textContent = source;
                span.className = 'reference-text';
                links.push(span);
            }
        }

        // Add separator (comma) except for last item
        if (index < sources.length - 1) {
            const separator = document.createTextNode(', ');
            links.push(separator);
        }
    });

    // Append all links to container
    links.forEach(item => {
        container.appendChild(item);
    });

    return container;
}

// Helper function to get chaithasika data source
function getChaithasikaSource() {
    if (window.chaithasikaData && window.chaithasikaData.length > 0) {
        return window.chaithasikaData;
    }
    if (meditationData && meditationData.chaithasikas) {
        return meditationData.chaithasikas;
    }
    return [];
}

// Enhanced Explanations Management
class ExplanationsManager {
    constructor() {
        this.explanationsGrid = document.getElementById('explanationsGrid');
        this.categoryFilter = document.getElementById('explanationCategoryFilter');
        this.searchInput = document.getElementById('explanationSearch');
        this.statsContainer = document.getElementById('explanationsStats');
        // Use window.chaithasikaData if available, otherwise fall back to meditationData.chaithasikas
        this.filteredChaithasikas = [...getChaithasikaSource()];

        this.initialize();
    }

    initialize() {
        this.populateExplanations();
        this.setupEventListeners();
        this.updateStats();
    }

    populateExplanations() {
        this.explanationsGrid.innerHTML = '';

        this.filteredChaithasikas.forEach(chaithasika => {
            const card = this.createExplanationCard(chaithasika);
            this.explanationsGrid.appendChild(card);
        });
    }

    createExplanationCard(chaithasika) {
        const card = document.createElement('div');
        const categoryClass = (chaithasika.categoryEn || chaithasika.category || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        card.className = `explanation-card ${categoryClass}`;

        const displayName = currentLanguage === 'si' ? chaithasika.name : chaithasika.nameEn;
        const displayCategory = currentLanguage === 'si' ? chaithasika.category : chaithasika.categoryEn;
        const displayDescription = currentLanguage === 'si' ? chaithasika.description : chaithasika.descriptionEn;

        // Check if this is a universal cetasika (සාධාරණ)
        const isUniversal = chaithasika.category === 'සාධාරණ' || chaithasika.categoryEn === 'Universal';

        // Create elements properly to avoid HTML injection issues
        const header = document.createElement('div');
        header.className = 'explanation-header';

        const title = document.createElement('h3');
        title.className = 'explanation-title';
        title.textContent = displayName;

        const categorySpan = document.createElement('span');
        categorySpan.className = 'explanation-category';
        categorySpan.textContent = displayCategory || '';

        header.appendChild(title);
        header.appendChild(categorySpan);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'explanation-description';
        descriptionDiv.textContent = displayDescription || '';

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'explanation-details';
        const detailsP = document.createElement('p');
        detailsP.textContent = chaithasika.detailedExplanation || 'Detailed explanation coming soon...';
        detailsDiv.appendChild(detailsP);

        // Create reference links from sources array (fallback to legacy reference text)
        let referenceDiv = createSourceLinks(chaithasika.sources);
        if (!referenceDiv && chaithasika.bookReference) {
            referenceDiv = createReferenceLinks(chaithasika.bookReference);
        }

        card.appendChild(header);
        card.appendChild(descriptionDiv);
        card.appendChild(detailsDiv);
        if (referenceDiv) {
            card.appendChild(referenceDiv);
        }

        // Add deep content section for universal cetasikas
        if (isUniversal && window.getUniversalCetasikaDeepContent) {
            const deepContent = window.getUniversalCetasikaDeepContent(chaithasika.name);

            if (deepContent) {
                card.classList.add('expandable');

                const deepContentDiv = document.createElement('div');
                deepContentDiv.className = 'deep-content';

                const deepContentPre = document.createElement('pre');
                deepContentPre.className = 'deep-content-text';
                deepContentPre.textContent = deepContent;

                deepContentDiv.appendChild(deepContentPre);
                card.appendChild(deepContentDiv);

                // Create footer with expand button at the bottom
                const footer = document.createElement('div');
                footer.className = 'card-footer';

                const expandButton = document.createElement('button');
                expandButton.className = 'expand-button';
                expandButton.innerHTML = '<span class="expand-text">ගැඹුරු විග්‍රහය බලන්න</span> <span class="expand-indicator">▼</span>';

                footer.appendChild(expandButton);
                card.appendChild(footer);

                // Add click handler to the button only
                expandButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent card click

                    const isExpanded = card.classList.contains('expanded');

                    // Close all other expanded cards
                    document.querySelectorAll('.explanation-card.expanded').forEach(otherCard => {
                        if (otherCard !== card) {
                            otherCard.classList.remove('expanded');
                            const otherButton = otherCard.querySelector('.expand-button');
                            if (otherButton) {
                                otherButton.innerHTML = '<span class="expand-text">ගැඹුරු විග්‍රහය බලන්න</span> <span class="expand-indicator">▼</span>';
                            }
                        }
                    });

                    // Toggle this card
                    card.classList.toggle('expanded');
                    if (card.classList.contains('expanded')) {
                        expandButton.innerHTML = '<span class="expand-text">හකුළන්න</span> <span class="expand-indicator">▲</span>';
                    } else {
                        expandButton.innerHTML = '<span class="expand-text">ගැඹුරු විග්‍රහය බලන්න</span> <span class="expand-indicator">▼</span>';
                    }
                });
            }
        }

        // Add deep content section for particular cetasikas (පක්ෂික)
        const isParticular = chaithasika.category === 'පක්ෂික' || chaithasika.categoryEn === 'Particular';
        if (isParticular && window.getParticularCetasikaDeepContent) {
            const deepContent = window.getParticularCetasikaDeepContent(chaithasika.name);

            if (deepContent) {
                card.classList.add('expandable');

                const deepContentDiv = document.createElement('div');
                deepContentDiv.className = 'deep-content';

                const deepContentPre = document.createElement('pre');
                deepContentPre.className = 'deep-content-text';
                deepContentPre.textContent = deepContent;

                deepContentDiv.appendChild(deepContentPre);
                card.appendChild(deepContentDiv);

                // Create footer with expand button at the bottom
                const footer = document.createElement('div');
                footer.className = 'card-footer';

                const expandButton = document.createElement('button');
                expandButton.className = 'expand-button';
                expandButton.innerHTML = '<span class="expand-text">ගැඹුරු විග්‍රහය බලන්න</span> <span class="expand-indicator">▼</span>';

                footer.appendChild(expandButton);
                card.appendChild(footer);

                // Add click handler to the button only
                expandButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent card click

                    const isExpanded = card.classList.contains('expanded');

                    // Close all other expanded cards
                    document.querySelectorAll('.explanation-card.expanded').forEach(otherCard => {
                        if (otherCard !== card) {
                            otherCard.classList.remove('expanded');
                            const otherButton = otherCard.querySelector('.expand-button');
                            if (otherButton) {
                                otherButton.innerHTML = '<span class="expand-text">ගැඹුරු විග්‍රහය බලන්න</span> <span class="expand-indicator">▼</span>';
                            }
                        }
                    });

                    // Toggle this card
                    card.classList.toggle('expanded');
                    if (card.classList.contains('expanded')) {
                        expandButton.innerHTML = '<span class="expand-text">හකුළන්න</span> <span class="expand-indicator">▲</span>';
                    } else {
                        expandButton.innerHTML = '<span class="expand-text">ගැඹුරු විග්‍රහය බලන්න</span> <span class="expand-indicator">▼</span>';
                    }
                });
            }
        }


        return card;
    }



    setupEventListeners() {
        if (this.categoryFilter) {
            this.categoryFilter.addEventListener('change', () => {
                this.filterByCategory();
            });
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => {
                this.filterBySearch();
            });
        }
    }

    filterByCategory() {
        const selectedCategory = this.categoryFilter.value;
        const chaithasikaSource = getChaithasikaSource();

        if (selectedCategory === '') {
            this.filteredChaithasikas = [...chaithasikaSource];
        } else {
            this.filteredChaithasikas = chaithasikaSource.filter(
                chaithasika => {
                    const category = chaithasika.category || chaithasika.categorySi || '';
                    return category.includes(selectedCategory);
                }
            );
        }

        this.populateExplanations();
        this.updateStats();
    }

    filterBySearch() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const chaithasikaSource = getChaithasikaSource();

        this.filteredChaithasikas = chaithasikaSource.filter(chaithasika => {
            const nameMatch = chaithasika.name.toLowerCase().includes(searchTerm) ||
                chaithasika.nameEn.toLowerCase().includes(searchTerm);
            const descMatch = chaithasika.description.toLowerCase().includes(searchTerm) ||
                chaithasika.descriptionEn.toLowerCase().includes(searchTerm);
            const categoryMatch = chaithasika.category.toLowerCase().includes(searchTerm) ||
                chaithasika.categoryEn.toLowerCase().includes(searchTerm);

            return nameMatch || descMatch || categoryMatch;
        });

        this.populateExplanations();
        this.updateStats();
    }

    updateStats() {
        if (!this.statsContainer) return;

        const total = this.filteredChaithasikas.length;
        const categories = {};

        this.filteredChaithasikas.forEach(chaithasika => {
            categories[chaithasika.category] = (categories[chaithasika.category] || 0) + 1;
        });

        this.statsContainer.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">${total}</span>
                    <span class="stat-label">${currentLanguage === 'si' ? 'සම්පූර්ණ' : 'Total'}</span>
                </div>
                ${Object.entries(categories).map(([category, count]) => `
                    <div class="stat-item">
                        <span class="stat-number">${count}</span>
                        <span class="stat-label">${category}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Enhanced Comparison Manager
class ComparisonManager {
    constructor() {
        this.selectedCittas = [];
        this.comparisonResults = document.getElementById('comparisonResults');
        this.comparisonTableBody = document.getElementById('comparisonTableBody');
        this.comparisonStats = document.getElementById('comparisonStats');
        this.chartContainer = document.getElementById('chartContainer');
        this.analysisContainer = document.getElementById('analysisContainer');

        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.setupTabs();
    }

    setupEventListeners() {
        const clearBtn = document.getElementById('clearSelection');
        const exportBtn = document.getElementById('exportComparison');
        const chartBtn = document.getElementById('generateChart');

        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearSelection());
        }

        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportComparison());
        }

        if (chartBtn) {
            chartBtn.addEventListener('click', () => this.generateChart());
        }
    }

    setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                // Remove active class from all buttons and panels
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));

                // Add active class to clicked button and corresponding panel
                btn.classList.add('active');
                document.getElementById(targetTab + 'Tab').classList.add('active');
            });
        });
    }

    updateComparison() {
        if (this.selectedCittas.length === 0) {
            this.comparisonResults.style.display = 'none';
            return;
        }

        this.comparisonResults.style.display = 'block';
        this.updateComparisonTable();
        this.updateComparisonStats();
    }

    updateComparisonTable() {
        // Create header row
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>' + (currentLanguage === 'si' ? 'චෛතසිකය' : 'Mental Factor') + '</th>';

        this.selectedCittas.forEach(cittaId => {
            const citta = meditationData.cittas.find(c => c.id === cittaId);
            const displayName = currentLanguage === 'si' ? citta.name : citta.nameEn;
            headerRow.innerHTML += `<th>${displayName}</th>`;
        });

        this.comparisonTableBody.innerHTML = '';
        this.comparisonTableBody.appendChild(headerRow);

        // Create data rows for each chaithasika
        const chaithasikaSource = getChaithasikaSource();
        chaithasikaSource.forEach(chaithasika => {
            const row = document.createElement('tr');
            const displayName = currentLanguage === 'si' ? (chaithasika.nameSi || chaithasika.name) : (chaithasika.nameEn || chaithasika.name);
            row.innerHTML = `<td>${displayName}</td>`;

            this.selectedCittas.forEach(cittaId => {
                const associations = meditationData.associations[cittaId] || [];
                const chaithasikaId = chaithasika.id || chaithasika.nameSi || chaithasika.name;
                const isPresent = associations.includes(chaithasikaId);

                const cell = document.createElement('td');
                cell.textContent = isPresent ? '✓' : '✗';
                cell.className = isPresent ? 'present' : 'absent';
                row.appendChild(cell);
            });

            this.comparisonTableBody.appendChild(row);
        });
    }

    updateComparisonStats() {
        if (!this.comparisonStats) return;

        const chaithasikaSource = getChaithasikaSource();
        const totalChaithasikas = chaithasikaSource.length;
        const commonFactors = this.findCommonFactors();
        const uniqueFactors = this.findUniqueFactors();

        this.comparisonStats.innerHTML = `
            <div class="stat-badge">${currentLanguage === 'si' ? 'සම්පූර්ණ චෛතසික' : 'Total Factors'}: ${totalChaithasikas}</div>
            <div class="stat-badge">${currentLanguage === 'si' ? 'පොදු චෛතසික' : 'Common Factors'}: ${commonFactors.length}</div>
            <div class="stat-badge">${currentLanguage === 'si' ? 'වෙනස් චෛතසික' : 'Unique Factors'}: ${uniqueFactors.length}</div>
        `;
    }

    findCommonFactors() {
        if (this.selectedCittas.length === 0) return [];

        const firstCittaAssociations = meditationData.associations[this.selectedCittas[0]] || [];

        return firstCittaAssociations.filter(factorId => {
            return this.selectedCittas.every(cittaId => {
                const associations = meditationData.associations[cittaId] || [];
                return associations.includes(factorId);
            });
        });
    }

    findUniqueFactors() {
        const allFactors = new Set();
        const commonFactors = new Set(this.findCommonFactors());

        this.selectedCittas.forEach(cittaId => {
            const associations = meditationData.associations[cittaId] || [];
            associations.forEach(factorId => {
                if (!commonFactors.has(factorId)) {
                    allFactors.add(factorId);
                }
            });
        });

        return Array.from(allFactors);
    }

    clearSelection() {
        this.selectedCittas = [];
        document.querySelectorAll('.selection-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        this.updateComparison();
    }

    exportComparison() {
        if (this.selectedCittas.length === 0) {
            alert(currentLanguage === 'si' ? 'සංසන්දනයක් නැත' : 'No comparison to export');
            return;
        }

        const comparisonData = {
            selectedCittas: this.selectedCittas.map(id => meditationData.cittas.find(c => c.id === id)),
            commonFactors: this.findCommonFactors(),
            uniqueFactors: this.findUniqueFactors(),
            timestamp: new Date().toISOString()
        };

        const dataStr = JSON.stringify(comparisonData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'abhidhamma-comparison.json';
        link.click();
    }

    generateChart() {
        if (this.selectedCittas.length === 0) {
            alert(currentLanguage === 'si' ? 'සංසන්දනයක් නැත' : 'No comparison to chart');
            return;
        }

        // Simple chart generation (can be enhanced with Chart.js)
        const chartData = this.prepareChartData();
        this.renderChart(chartData);
    }

    prepareChartData() {
        const chaithasikaSource = getChaithasikaSource();
        const data = {
            labels: chaithasikaSource.map(c => currentLanguage === 'si' ? (c.nameSi || c.name) : (c.nameEn || c.name)),
            datasets: this.selectedCittas.map(cittaId => {
                const citta = meditationData.cittas.find(c => c.id === cittaId);
                const associations = meditationData.associations[cittaId] || [];

                return {
                    label: currentLanguage === 'si' ? citta.name : citta.nameEn,
                    data: chaithasikaSource.map(c => {
                        const chaithasikaId = c.id || c.nameSi || c.name;
                        return associations.includes(chaithasikaId) ? 1 : 0;
                    }),
                    backgroundColor: this.getRandomColor()
                };
            })
        };

        return data;
    }

    renderChart(data) {
        // Simple visualization (can be enhanced with Chart.js)
        this.chartContainer.innerHTML = `
            <div class="chart-placeholder">
                <h4>${currentLanguage === 'si' ? 'චෛතසික සංසන්දන ප්‍රස්ථාරය' : 'Mental Factors Comparison Chart'}</h4>
                <p>${currentLanguage === 'si' ? 'ප්‍රස්ථාරය ජනනය කරන ලදී' : 'Chart generated successfully'}</p>
                <div class="chart-data">
                    <pre>${JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
        `;
    }

    getRandomColor() {
        const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// Enhanced Toggle Selection Function
function toggleCittaSelection(cittaId, element) {
    const comparisonManager = window.comparisonManager;
    const index = comparisonManager.selectedCittas.indexOf(cittaId);

    if (index > -1) {
        // Remove from selection
        comparisonManager.selectedCittas.splice(index, 1);
        element.classList.remove('selected');
    } else {
        // Add to selection (max 5)
        if (comparisonManager.selectedCittas.length < 5) {
            comparisonManager.selectedCittas.push(cittaId);
            element.classList.add('selected');
        } else {
            alert(currentLanguage === 'si' ? 'උපරිම චිත්ත 5 ක් පමණක් තෝරාගත හැකිය' : 'Maximum 5 consciousness states can be selected');
            return;
        }
    }

    comparisonManager.updateComparison();
}

// Initialize Enhanced Features
document.addEventListener('DOMContentLoaded', function () {
    // Initialize enhanced managers
    window.explanationsManager = new ExplanationsManager();
    window.comparisonManager = new ComparisonManager();

    // Update language switcher to handle new elements
    const originalUpdateLanguage = window.updateLanguage;
    window.updateLanguage = function () {
        originalUpdateLanguage();

        // Update explanations
        if (window.explanationsManager) {
            window.explanationsManager.populateExplanations();
            window.explanationsManager.updateStats();
        }

        // Update comparison
        if (window.comparisonManager) {
            window.comparisonManager.updateComparison();
        }
    };

    console.log('Enhanced Abhidhamma features initialized successfully!');
});

