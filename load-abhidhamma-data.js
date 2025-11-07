// Load and integrate Abhidhamma Complete Data JSON
// This file loads the comprehensive JSON data and makes cards clickable with details

let abhidhammaData = null;
let currentCittaDetail = null;

// Load JSON data
async function loadAbhidhammaData() {
    try {
        console.log('🔄 Loading Abhidhamma data...');
        const response = await fetch('abhidhamma-complete-data.json');
        
        if (!response.ok) {
            console.warn(`⚠️ Could not load abhidhamma-complete-data.json (${response.status}). Using fallback data.`);
            // Fallback: try to use existing meditationData if available
            if (window.meditationData && window.meditationData.cittas) {
                console.log('✅ Using existing meditationData as fallback');
                // Set abhidhammaData to use embedded data structure
                abhidhammaData = {
                    metadata: {
                        title: "Abhidhamma Citta Chaithasika Dataset",
                        description: "Embedded dataset from script.js",
                        source: "Chiththa Chaithasika Tool V2.2.xlsx"
                    },
                    cittas: window.meditationData.cittas,
                    cetasikas: window.meditationData.cetasikas || { factors: [] }
                };
                setTimeout(() => {
                    initializeCittaClickHandlers();
                    updateSearchFunctionality();
                    // Refresh table if it exists
                    if (window.populateTable) {
                        window.populateTable();
                    }
                }, 1000);
                return abhidhammaData;
            }
            return null;
        }
        
        abhidhammaData = await response.json();
        console.log('✅ Abhidhamma data loaded:', abhidhammaData.metadata);
        console.log(`📊 Loaded ${abhidhammaData.cittas.length} cittas`);
        
        // Integrate with existing meditationData
        if (window.meditationData && abhidhammaData.cittas) {
            // Merge or replace with complete data
            window.meditationData.cittas = abhidhammaData.cittas;
            console.log('✅ Updated meditationData with complete dataset');
        }
        
        // Wait a bit for DOM to be ready, then initialize handlers
        setTimeout(() => {
            initializeCittaClickHandlers();
            updateSearchFunctionality();
        }, 1000);
        
        return abhidhammaData;
    } catch (error) {
        console.error('❌ Error loading Abhidhamma data:', error);
        console.error('Error details:', error.message);
        // Don't break the site - use fallback data if available
        if (window.meditationData && window.meditationData.cittas) {
            console.log('✅ Using existing meditationData as fallback');
            // Set abhidhammaData to use embedded data structure
            abhidhammaData = {
                metadata: {
                    title: "Abhidhamma Citta Chaithasika Dataset",
                    description: "Embedded dataset from script.js",
                    source: "Chiththa Chaithasika Tool V2.2.xlsx"
                },
                cittas: window.meditationData.cittas,
                cetasikas: window.meditationData.cetasikas || { factors: [] }
            };
            setTimeout(() => {
                initializeCittaClickHandlers();
                updateSearchFunctionality();
                // Refresh table if it exists
                if (window.populateTable) {
                    window.populateTable();
                }
            }, 1000);
            return abhidhammaData;
        }
        return null;
    }
}

// Initialize click handlers for citta cards/rows
function initializeCittaClickHandlers() {
    console.log('🔄 Initializing citta click handlers...');
    
    // Use event delegation on table body - this works even if rows are added later
    const tableBody = document.querySelector('#mainTable tbody');
    if (tableBody) {
        // Check if handler already attached
        if (tableBody.dataset.handlerAttached === 'true') {
            console.log('✅ Handlers already attached');
            return;
        }
        
        // Use event delegation - works for dynamically added rows
        tableBody.addEventListener('click', function(e) {
            const row = e.target.closest('tr');
            if (!row || row.tagName !== 'TR') return;
            
            // Handle button clicks
            if (e.target.closest('.view-details-btn')) {
                const btn = e.target.closest('.view-details-btn');
                const cittaId = parseInt(btn.dataset.cittaId || row.cells[0]?.textContent.trim());
                e.stopPropagation();
                
                // Special handling for citta id 1 - navigate to dedicated page
                if (cittaId === 1) {
                    window.location.href = 'lobha-ditthi-citta-guide.html';
                    return;
                }
                // Special handling for citta id 2 - navigate to dedicated page
                if (cittaId === 2) {
                    window.location.href = 'lobha-ditthi-sasankharika-guide.html';
                    return;
                }
                
                if (cittaId && abhidhammaData && abhidhammaData.cittas) {
                    const citta = abhidhammaData.cittas.find(c => c.id === cittaId);
                    if (citta) {
                        console.log('Button clicked, showing citta:', citta.name);
                        showCittaDetails(citta);
                    } else {
                        console.warn('Citta not found for ID:', cittaId);
                    }
                }
                return;
            }
            
            // Don't prevent default if clicking on links or buttons
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            e.stopPropagation();
            
            const cittaId = parseInt(row.cells[0]?.textContent.trim());
            console.log('Row clicked, citta ID:', cittaId);
            
            // Special handling for citta id 1 - navigate to dedicated page
            if (cittaId === 1) {
                window.location.href = 'lobha-ditthi-citta-guide.html';
                return;
            }
            
            if (cittaId && abhidhammaData && abhidhammaData.cittas) {
                const citta = abhidhammaData.cittas.find(c => c.id === cittaId);
                if (citta) {
                    console.log('Found citta:', citta.name);
                    showCittaDetails(citta);
                } else {
                    console.warn('Citta not found for ID:', cittaId, 'Available IDs:', abhidhammaData.cittas.slice(0, 5).map(c => c.id));
                }
            } else {
                console.warn('Unable to find citta:', { cittaId, hasData: !!abhidhammaData });
            }
        });
        
        tableBody.dataset.handlerAttached = 'true';
        
        // Make all rows look clickable
        if (!document.getElementById('citta-clickable-style')) {
            const style = document.createElement('style');
            style.id = 'citta-clickable-style';
            style.textContent = `
                #mainTable tbody tr {
                    cursor: pointer;
                }
                #mainTable tbody tr:hover {
                    background-color: rgba(102, 126, 234, 0.1) !important;
                }
            `;
            document.head.appendChild(style);
        }
        
        console.log('✅ Table click handlers attached using event delegation');
    } else {
        console.warn('⚠️ Table body not found, retrying...');
        setTimeout(initializeCittaClickHandlers, 500);
    }
    
    // Add click handlers to explanation cards using event delegation
    const explanationsGrid = document.querySelector('#explanationsGrid');
    if (explanationsGrid && !explanationsGrid.dataset.handlerAttached) {
        explanationsGrid.addEventListener('click', function(e) {
            const card = e.target.closest('.explanation-card');
            if (!card) return;
            
            e.preventDefault();
            const cittaName = card.querySelector('.explanation-title')?.textContent;
            if (cittaName && abhidhammaData && abhidhammaData.cittas) {
                const citta = abhidhammaData.cittas.find(c => 
                    c.name === cittaName || c.nameEn === cittaName
                );
                if (citta) {
                    showCittaDetails(citta);
                }
            }
        });
        
        explanationsGrid.dataset.handlerAttached = 'true';
        
        if (!document.getElementById('explanation-clickable-style')) {
            const cardStyle = document.createElement('style');
            cardStyle.id = 'explanation-clickable-style';
            cardStyle.textContent = `
                .explanation-card {
                    cursor: pointer;
                }
            `;
            document.head.appendChild(cardStyle);
        }
    }
}

// Show citta details modal
function showCittaDetails(citta) {
    currentCittaDetail = citta;
    
    // Create or get modal
    let modal = document.getElementById('cittaDetailModal');
    if (!modal) {
        modal = createCittaDetailModal();
        document.body.appendChild(modal);
    }
    
    // Populate modal with citta data
    populateCittaModal(citta, modal);
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Create citta detail modal
function createCittaDetailModal() {
    // Check if modal already exists
    let modal = document.getElementById('cittaDetailModal');
    if (modal) {
        return modal;
    }
    
    modal = document.createElement('div');
    modal.id = 'cittaDetailModal';
    modal.className = 'citta-detail-modal';
    modal.innerHTML = `
        <div class="citta-detail-overlay"></div>
        <div class="citta-detail-content">
            <button class="citta-detail-close" id="closeCittaModal">&times;</button>
            <div class="citta-detail-header">
                <h2 id="cittaDetailTitle"></h2>
                <div class="citta-detail-meta">
                    <span id="cittaDetailCategory"></span>
                    <span id="cittaDetailSubcategory"></span>
                </div>
            </div>
            <div class="citta-detail-body">
                <div class="citta-detail-description" id="cittaDetailDescription"></div>
                <div class="citta-detail-cetasikas">
                    <h3 data-si="චෛතසික ධර්ම" data-en="Cetasika Factors">චෛතසික ධර්ම</h3>
                    <div id="cittaDetailCetasikas" class="cetasikas-grid"></div>
                </div>
                <div class="citta-detail-references">
                    <h3 data-si="මූලාශ්‍ර" data-en="References">මූලාශ්‍ර</h3>
                    <div id="cittaDetailReferences"></div>
                </div>
            </div>
        </div>
    `;
    
    // Close button handler
    modal.querySelector('#closeCittaModal').addEventListener('click', () => {
        closeCittaModal();
    });
    
    modal.querySelector('.citta-detail-overlay').addEventListener('click', () => {
        closeCittaModal();
    });
    
    // Escape key handler (only add once)
    if (!window.cittaModalEscapeHandler) {
        window.cittaModalEscapeHandler = (e) => {
            const modal = document.getElementById('cittaDetailModal');
            if (modal && modal.style.display === 'flex' && e.key === 'Escape') {
                closeCittaModal();
            }
        };
        document.addEventListener('keydown', window.cittaModalEscapeHandler);
    }
    
    return modal;
}

// Populate modal with citta data
function populateCittaModal(citta, modal) {
    const currentLang = window.currentLanguage || 'si';
    
    // Title
    const title = modal.querySelector('#cittaDetailTitle');
    title.textContent = currentLang === 'si' ? citta.name : (citta.nameEn || citta.name);
    
    // Category and subcategory
    const category = modal.querySelector('#cittaDetailCategory');
    const subcategory = modal.querySelector('#cittaDetailSubcategory');
    category.textContent = currentLang === 'si' ? citta.category : (citta.categoryEn || citta.category);
    subcategory.textContent = currentLang === 'si' ? citta.subcategory : (citta.subcategoryEn || citta.subcategory);
    
    // Description
    const description = modal.querySelector('#cittaDetailDescription');
    const descText = currentLang === 'si' ? citta.descriptionSi : (citta.descriptionEn || citta.descriptionSi);
    description.innerHTML = `<p>${descText}</p>`;
    
    // Cetasikas
    const cetasikasContainer = modal.querySelector('#cittaDetailCetasikas');
    cetasikasContainer.innerHTML = '';
    
    if (citta.cetasikas && abhidhammaData && abhidhammaData.cetasikas) {
        const factors = abhidhammaData.cetasikas.factors || [];
        factors.forEach(factor => {
            const isPresent = citta.cetasikas[factor] === true;
            const factorCard = document.createElement('div');
            factorCard.className = `cetasika-factor ${isPresent ? 'present' : 'absent'}`;
            factorCard.innerHTML = `
                <span class="factor-name">${factor}</span>
                <span class="factor-status">${isPresent ? '✓' : '✗'}</span>
            `;
            cetasikasContainer.appendChild(factorCard);
        });
    }
    
    // References - removed source links as requested
    const references = modal.querySelector('#cittaDetailReferences');
    if (citta.references) {
        references.innerHTML = `
            <div class="reference-item">
                <strong data-si="මූලාශ්‍ර" data-en="Source">මූලාශ්‍ර:</strong>
                <span>${citta.references.source || 'Ven. Rerukane Chandawimala Thero\'s books'}</span>
            </div>
        `;
    } else {
        references.innerHTML = '';
    }
}

// Close citta modal
function closeCittaModal() {
    const modal = document.getElementById('cittaDetailModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Update search functionality to use JSON data
function updateSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && abhidhammaData) {
        // Enhanced search with JSON data
        const originalHandler = searchInput.oninput;
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            if (abhidhammaData && abhidhammaData.cittas) {
                // Search in JSON data
                const filtered = abhidhammaData.cittas.filter(citta => {
                    const nameMatch = citta.name.toLowerCase().includes(searchTerm);
                    const nameEnMatch = citta.nameEn && citta.nameEn.toLowerCase().includes(searchTerm);
                    const categoryMatch = citta.category.toLowerCase().includes(searchTerm);
                    const subcategoryMatch = citta.subcategory.toLowerCase().includes(searchTerm);
                    return nameMatch || nameEnMatch || categoryMatch || subcategoryMatch;
                });
                
                // Update table display
                updateTableWithFilteredResults(filtered);
            }
            
            // Call original handler if exists
            if (originalHandler) {
                originalHandler.call(this, e);
            }
        });
    }
}

// Update table with filtered results
function updateTableWithFilteredResults(filteredCittas) {
    const tbody = document.querySelector('#mainTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    filteredCittas.forEach(citta => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${citta.id}</td>
            <td>${citta.name}</td>
            <td>${citta.category}</td>
            <td>${citta.subcategory}</td>
            <td>${citta.chaithasikaCount || 0}</td>
        `;
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => showCittaDetails(citta));
        tbody.appendChild(row);
    });
}

// Initialize when DOM is ready
function initializeAbhidhammaLoader() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                loadAbhidhammaData();
            }, 500);
        });
    } else {
        setTimeout(() => {
            loadAbhidhammaData();
        }, 500);
    }
}

// Start initialization
initializeAbhidhammaLoader();

// Export for use in other scripts
window.abhidhammaDataLoader = {
    loadData: loadAbhidhammaData,
    getData: () => abhidhammaData,
    showDetails: showCittaDetails,
    closeModal: closeCittaModal
};

// Also make showCittaDetails globally available
window.showCittaDetails = showCittaDetails;
window.closeCittaModal = closeCittaModal;

