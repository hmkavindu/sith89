/**
 * Rich Search System with Autocomplete Suggestions
 * Provides intelligent search across all website content with clickable suggestions
 */

class RichSearchSystem {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.suggestionsContainer = null;
        this.searchData = [];
        this.currentFocus = -1;
        this.init();
    }

    init() {
        if (!this.searchInput) {
            console.warn('Search input not found');
            return;
        }

        // Create suggestions container
        this.createSuggestionsContainer();

        // Build search index
        this.buildSearchIndex();

        // Setup event listeners
        this.setupEventListeners();

        console.log('Rich Search System initialized with', this.searchData.length, 'items');
    }

    createSuggestionsContainer() {
        // Create suggestions dropdown
        this.suggestionsContainer = document.createElement('div');
        this.suggestionsContainer.id = 'searchSuggestions';
        this.suggestionsContainer.className = 'search-suggestions';
        this.suggestionsContainer.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            max-height: 400px;
            overflow-y: auto;
            display: none;
            z-index: 1000;
            margin-top: -1px;
        `;

        // Insert after search box
        const searchBox = this.searchInput.closest('.search-box');
        if (searchBox) {
            searchBox.style.position = 'relative';
            searchBox.appendChild(this.suggestionsContainer);
        }
    }

    buildSearchIndex() {
        this.searchData = [];

        // Index all cittas from meditationData
        if (window.meditationData && window.meditationData.cittas) {
            window.meditationData.cittas.forEach(citta => {
                this.searchData.push({
                    type: 'citta',
                    id: citta.id,
                    name: citta.name,
                    nameEn: citta.nameEn || citta.name,
                    category: citta.category,
                    categoryEn: citta.categoryEn || citta.category,
                    description: citta.description || '',
                    url: `citta-${citta.id}-detailed-page.html`,
                    icon: '🧠'
                });
            });
        }

        // Index all cetasikas
        if (window.meditationData && window.meditationData.chaithasikas) {
            window.meditationData.chaithasikas.forEach(cetasika => {
                this.searchData.push({
                    type: 'cetasika',
                    id: cetasika.id,
                    name: cetasika.name,
                    nameEn: cetasika.nameEn || cetasika.name,
                    category: cetasika.category || 'චෛතසික',
                    categoryEn: cetasika.categoryEn || 'Cetasika',
                    description: cetasika.description || '',
                    url: 'cetasika-52.html',
                    icon: '💫'
                });
            });
        }

        // Index category pages
        const categories = [
            { name: 'කුසල් චිත්ත', nameEn: 'Kusala Citta', url: 'kusala-citta-8.html', icon: '✨', category: 'කාණ්ඩය', keywords: 'කුසල kusala wholesome' },
            { name: 'අකුසල් චිත්ත', nameEn: 'Akusala Citta', url: 'akusala-citta-12.html', icon: '⚠️', category: 'කාණ්ඩය', keywords: 'අකුසල akusala unwholesome' },
            { name: 'විපාක චිත්ත', nameEn: 'Vipaka Citta', url: 'vipaka-citta-23.html', icon: '🔄', category: 'කාණ්ඩය', keywords: 'විපාක vipaka resultant' },
            { name: 'ක්‍රියා චිත්ත', nameEn: 'Kriya Citta', url: 'kriya-citta-11.html', icon: '⚙️', category: 'කාණ්ඩය', keywords: 'ක්‍රියා kriya functional' },
            { name: 'රූපාවචර චිත්ත', nameEn: 'Rupavacara Citta', url: 'rupavacara-citta-15.html', icon: '🌟', category: 'කාණ්ඩය', keywords: 'රූපාවචර රූප rupavacara rupa form jhana' },
            { name: 'අරූපාවචර චිත්ත', nameEn: 'Arupavacara Citta', url: 'arupavacara-citta-12.html', icon: '🌌', category: 'කාණ්ඩය', keywords: 'අරූපාවචර අරූප arupavacara arupa formless jhana' },
            { name: 'ලෝකෝත්තර චිත්ත', nameEn: 'Lokuttara Citta', url: 'lokuttara-citta-40.html', icon: '🏔️', category: 'කාණ්ඩය', keywords: 'ලෝකෝත්තර lokuttara supramundane' },
            { name: 'චෛතසික 52', nameEn: 'Cetasika 52', url: 'cetasika-52.html', icon: '💎', category: 'කාණ්ඩය', keywords: 'චෛතසික cetasika mental factors' }
        ];

        categories.forEach(cat => {
            this.searchData.push({
                type: 'category',
                name: cat.name,
                nameEn: cat.nameEn,
                category: cat.category,
                categoryEn: 'Category',
                url: cat.url,
                icon: cat.icon,
                keywords: cat.keywords || ''
            });
        });

        // Index special pages
        const specialPages = [
            { name: 'රාගය විශ්ලේෂණය', nameEn: 'Raga Analysis', url: 'raga-analysis.html', icon: '🔥', category: 'විශ්ලේෂණය' },
            { name: 'ද්වේශය විශ්ලේෂණය', nameEn: 'Dvesha Analysis', url: 'anger-analysis.html', icon: '⚡', category: 'විශ්ලේෂණය' },
            { name: 'මෝහය විශ්ලේෂණය', nameEn: 'Moha Analysis', url: 'moha-analysis.html', icon: '🌫️', category: 'විශ්ලේෂණය' },
            { name: 'සිත විශ්ලේෂණය', nameEn: 'Citta Analysis', url: 'sitha-mind-page.html', icon: '🧠', category: 'විශ්ලේෂණය' },
            { name: 'චිත්ත බෙදීම් ජාලය', nameEn: 'Citta Division Network', url: 'citta-fishbone-diagram.html', icon: '🕸️', category: 'දෘශ්‍යකරණය' },
            { name: 'සිතුවිලි සිතියම', nameEn: 'Mind Map', url: 'citta-cetasika-map.html', icon: '🗺️', category: 'දෘශ්‍යකරණය' },
            { name: 'සියලුම චිත්ත', nameEn: 'All Cittas', url: 'citta-index.html', icon: '📋', category: 'දර්ශකය' }
        ];

        specialPages.forEach(page => {
            this.searchData.push({
                type: 'page',
                name: page.name,
                nameEn: page.nameEn,
                category: page.category,
                categoryEn: page.category,
                url: page.url,
                icon: page.icon
            });
        });
    }

    setupEventListeners() {
        // Input event for search
        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                this.showSuggestions(query);
            } else {
                this.hideSuggestions();
            }
        });

        // Focus event
        this.searchInput.addEventListener('focus', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                this.showSuggestions(query);
            }
        });

        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.currentFocus++;
                if (this.currentFocus >= items.length) this.currentFocus = 0;
                this.setActive(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.currentFocus--;
                if (this.currentFocus < 0) this.currentFocus = items.length - 1;
                this.setActive(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (this.currentFocus > -1 && items[this.currentFocus]) {
                    items[this.currentFocus].click();
                }
            } else if (e.key === 'Escape') {
                this.hideSuggestions();
            }
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.suggestionsContainer.contains(e.target)) {
                this.hideSuggestions();
            }
        });
    }

    showSuggestions(query) {
        const currentLang = window.currentLanguage || 'si';
        const results = this.search(query, currentLang);

        if (results.length === 0) {
            this.suggestionsContainer.innerHTML = `
                <div style="padding: 1rem; text-align: center; color: #666;">
                    ${currentLang === 'si' ? 'ප්‍රතිඵල හමු නොවීය' : 'No results found'}
                </div>
            `;
            this.suggestionsContainer.style.display = 'block';
            return;
        }

        // Group results by type
        const grouped = this.groupResults(results);

        let html = '';

        // Show categories first
        if (grouped.category && grouped.category.length > 0) {
            html += this.renderGroup('කාණ්ඩ', 'Categories', grouped.category, currentLang);
        }

        // Show cittas
        if (grouped.citta && grouped.citta.length > 0) {
            html += this.renderGroup('චිත්ත', 'Cittas', grouped.citta.slice(0, 10), currentLang);
        }

        // Show cetasikas
        if (grouped.cetasika && grouped.cetasika.length > 0) {
            html += this.renderGroup('චෛතසික', 'Cetasikas', grouped.cetasika.slice(0, 5), currentLang);
        }

        // Show pages
        if (grouped.page && grouped.page.length > 0) {
            html += this.renderGroup('පිටු', 'Pages', grouped.page, currentLang);
        }

        this.suggestionsContainer.innerHTML = html;
        this.suggestionsContainer.style.display = 'block';
        this.currentFocus = -1;

        // Add click handlers
        this.suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const url = item.dataset.url;
                if (url) {
                    window.location.href = url;
                }
            });
        });
    }

    groupResults(results) {
        const grouped = {};
        results.forEach(result => {
            if (!grouped[result.type]) {
                grouped[result.type] = [];
            }
            grouped[result.type].push(result);
        });
        return grouped;
    }

    renderGroup(titleSi, titleEn, items, currentLang) {
        const title = currentLang === 'si' ? titleSi : titleEn;
        let html = `
            <div class="suggestion-group">
                <div class="suggestion-group-title">${title}</div>
        `;

        items.forEach(item => {
            const name = currentLang === 'si' ? item.name : item.nameEn;
            const category = currentLang === 'si' ? item.category : item.categoryEn;

            html += `
                <div class="suggestion-item" data-url="${item.url}">
                    <span class="suggestion-icon">${item.icon}</span>
                    <div class="suggestion-content">
                        <div class="suggestion-name">${this.highlightMatch(name, this.searchInput.value)}</div>
                        <div class="suggestion-category">${category}</div>
                    </div>
                    <i class="fas fa-arrow-right suggestion-arrow"></i>
                </div>
            `;
        });

        html += `</div>`;
        return html;
    }

    highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    search(query, lang = 'si') {
        const lowerQuery = query.toLowerCase();

        return this.searchData.filter(item => {
            const name = (lang === 'si' ? item.name : item.nameEn).toLowerCase();
            const category = (lang === 'si' ? item.category : item.categoryEn).toLowerCase();
            const description = (item.description || '').toLowerCase();
            const keywords = (item.keywords || '').toLowerCase();

            return name.includes(lowerQuery) ||
                category.includes(lowerQuery) ||
                description.includes(lowerQuery) ||
                keywords.includes(lowerQuery);
        }).sort((a, b) => {
            // Sort by relevance - exact matches first
            const aName = (lang === 'si' ? a.name : a.nameEn).toLowerCase();
            const bName = (lang === 'si' ? b.name : b.nameEn).toLowerCase();

            const aExact = aName.startsWith(lowerQuery);
            const bExact = bName.startsWith(lowerQuery);

            if (aExact && !bExact) return -1;
            if (!aExact && bExact) return 1;

            return aName.localeCompare(bName);
        });
    }

    setActive(items) {
        if (!items) return;

        // Remove active class from all
        items.forEach(item => item.classList.remove('suggestion-active'));

        // Add active class to current
        if (this.currentFocus >= 0 && this.currentFocus < items.length) {
            items[this.currentFocus].classList.add('suggestion-active');
            items[this.currentFocus].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    hideSuggestions() {
        this.suggestionsContainer.style.display = 'none';
        this.currentFocus = -1;
    }
}

// Add CSS styles
const style = document.createElement('style');
style.textContent = `
    .suggestion-group {
        border-bottom: 1px solid #f0f0f0;
    }

    .suggestion-group:last-child {
        border-bottom: none;
    }

    .suggestion-group-title {
        padding: 0.75rem 1rem;
        background: #f8f9fa;
        font-weight: 600;
        font-size: 0.85rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .suggestion-item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
        border-left: 3px solid transparent;
    }

    .suggestion-item:hover,
    .suggestion-item.suggestion-active {
        background: #f0f7ff;
        border-left-color: #3b82f6;
    }

    .suggestion-icon {
        font-size: 1.5rem;
        margin-right: 0.75rem;
        flex-shrink: 0;
    }

    .suggestion-content {
        flex: 1;
        min-width: 0;
    }

    .suggestion-name {
        font-weight: 500;
        color: #1f2937;
        margin-bottom: 0.25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .suggestion-name strong {
        color: #3b82f6;
        font-weight: 700;
    }

    .suggestion-category {
        font-size: 0.8rem;
        color: #6b7280;
    }

    .suggestion-arrow {
        color: #9ca3af;
        font-size: 0.875rem;
        margin-left: 0.5rem;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .suggestion-item:hover .suggestion-arrow,
    .suggestion-item.suggestion-active .suggestion-arrow {
        opacity: 1;
    }

    /* Scrollbar styling */
    .search-suggestions::-webkit-scrollbar {
        width: 8px;
    }

    .search-suggestions::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .search-suggestions::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    .search-suggestions::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.richSearchSystem = new RichSearchSystem();
    });
} else {
    window.richSearchSystem = new RichSearchSystem();
}
