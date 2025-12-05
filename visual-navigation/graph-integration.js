/**
 * Graph Integration Module
 * Integrates the visual navigation graph with the main website
 */

class GraphIntegration {
    constructor() {
        this.graphVisualizer = null;
        this.isGraphVisible = false;
        this.graphContainer = null;
        this.init();
    }

    /**
     * Initialize integration
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupIntegration());
        } else {
            this.setupIntegration();
        }
    }

    /**
     * Setup integration with main site
     */
    setupIntegration() {
        // Add graph button to mental states section
        this.addGraphButton();
        
        // Add graph container to page
        this.addGraphContainer();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Listen for navigation events
        this.setupNavigationListener();
    }

    /**
     * Add graph button to mental states cards
     */
    addGraphButton() {
        const mentalStatesSection = document.getElementById('mental-states');
        if (!mentalStatesSection) return;

        // Create graph launcher button
        const graphButton = document.createElement('button');
        graphButton.id = 'graphLauncher';
        graphButton.className = 'graph-launcher-btn';
        graphButton.innerHTML = `
            <i class="fas fa-project-diagram"></i>
            <span data-si="දෘශ්‍ය සංචලනය" data-en="Visual Navigation">දෘශ්‍ය සංචලනය</span>
        `;
        
        // Insert after section title
        const sectionTitle = mentalStatesSection.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.insertAdjacentElement('afterend', graphButton);
        }

        // Add click handler
        graphButton.addEventListener('click', () => this.toggleGraph());
    }

    /**
     * Add graph container to page
     */
    addGraphContainer() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.id = 'graphModal';
        modal.className = 'graph-modal';
        
        modal.innerHTML = `
            <div class="graph-modal-content">
                <button class="graph-modal-close" aria-label="Close">&times;</button>
                <h2 style="margin-bottom: 15px; text-align: center;" data-si="අභිධර්මය - දෘශ්‍ය සංචලනය" data-en="Abhidhamma - Visual Navigation">අභිධර්මය - දෘශ්‍ය සංචලනය</h2>
                <div id="abhidhammaGraph" class="graph-container"></div>
                <div class="graph-controls">
                    <button onclick="window.graphIntegration.focusRaga()" data-si="රාගය" data-en="Raga">රාගය</button>
                    <button onclick="window.graphIntegration.focusDwesha()" data-si="ද්වේශය" data-en="Dwesha">ද්වේශය</button>
                    <button onclick="window.graphIntegration.focusMoha()" data-si="මෝහය" data-en="Moha">මෝහය</button>
                    <button onclick="window.graphIntegration.resetLayout()" data-si="නැවත සකසන්න" data-en="Reset">නැවත සකසන්න</button>
                    <button onclick="window.graphIntegration.toggleGraph()" data-si="වසන්න" data-en="Close">වසන්න</button>
                </div>
                <div class="graph-filters">
                    <label><input type="checkbox" id="filterAkusala" checked onchange="window.graphIntegration.applyFilters()"> <span data-si="අකුසල්" data-en="Akusala">අකුසල්</span></label>
                    <label><input type="checkbox" id="filterKusala" checked onchange="window.graphIntegration.applyFilters()"> <span data-si="කුසල්" data-en="Kusala">කුසල්</span></label>
                    <label><input type="checkbox" id="filterVipaka" checked onchange="window.graphIntegration.applyFilters()"> <span data-si="විපාක" data-en="Vipaka">විපාක</span></label>
                    <label><input type="checkbox" id="filterKiriya" checked onchange="window.graphIntegration.applyFilters()"> <span data-si="ක්‍රියා" data-en="Kiriya">ක්‍රියා</span></label>
                    <label><input type="checkbox" id="filterCetasikas" checked onchange="window.graphIntegration.applyFilters()"> <span data-si="චෛතසික" data-en="Cetasikas">චෛතසික</span></label>
                    <label><input type="checkbox" id="filterMeshEdges" checked onchange="window.graphIntegration.applyFilters()"> <span data-si="මැෂ් සම්බන්ධතා" data-en="Mesh Connections">මැෂ් සම්බන්ධතා</span></label>
                </div>
                <div class="graph-search">
                    <input type="text" id="graphSearch" placeholder="සොයන්න... (Search...)" onkeyup="window.graphIntegration.searchNodes(this.value)">
                </div>
                <div class="graph-info">
                    <strong data-si="උපදෙස්:" data-en="Instructions:">උපදෙස්:</strong>
                    <span data-si="ග්‍රැෆයේ නෝඩ් මත ක්ලික් කරන්න. රාග, ද්වේශ, මෝහ මූල නෝඩ් වලින් ආරම්භ කරන්න." data-en="Click on graph nodes. Start from Raga, Dwesha, Moha main nodes.">ග්‍රැෆයේ නෝඩ් මත ක්ලික් කරන්න. රාග, ද්වේශ, මෝහ මූල නෝඩ් වලින් ආරම්භ කරන්න.</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.graphContainer = document.getElementById('abhidhammaGraph');
        
        // Close button handler
        modal.querySelector('.graph-modal-close').addEventListener('click', () => this.toggleGraph());
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.toggleGraph();
            }
        });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Listen for graph launcher button clicks
        const graphLauncher = document.getElementById('graphLauncher');
        if (graphLauncher) {
            graphLauncher.addEventListener('click', () => this.toggleGraph());
        }

        // Listen for card clicks to open graph
        const ragaCard = document.getElementById('ragaCard');
        const dweshaCard = document.getElementById('dveshaCard');
        const mohaCard = document.getElementById('mohaCard');

        if (ragaCard) {
            ragaCard.addEventListener('click', () => {
                this.toggleGraph();
                setTimeout(() => this.focusRaga(), 300);
            });
        }

        if (dweshaCard) {
            dweshaCard.addEventListener('click', () => {
                this.toggleGraph();
                setTimeout(() => this.focusDwesha(), 300);
            });
        }

        if (mohaCard) {
            mohaCard.addEventListener('click', () => {
                this.toggleGraph();
                setTimeout(() => this.focusMoha(), 300);
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // ESC to close
            if (e.key === 'Escape' && this.isGraphVisible) {
                this.toggleGraph();
            }
            // G to toggle graph
            if (e.key === 'g' && !e.ctrlKey && !e.metaKey) {
                const activeElement = document.activeElement;
                if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                    this.toggleGraph();
                }
            }
        });
    }

    /**
     * Setup navigation listener
     */
    setupNavigationListener() {
        document.addEventListener('graphNodeClick', (e) => {
            const { url, label, type } = e.detail;
            this.handleNavigation(url, label, type);
        });
    }

    /**
     * Handle navigation from graph
     */
    handleNavigation(url, label, type) {
        console.log('Navigating to:', url, label);
        
        // Close graph modal
        this.toggleGraph();
        
        // Small delay for smooth transition
        setTimeout(() => {
            if (url.startsWith('#')) {
                // Scroll to section
                const element = document.querySelector(url);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else if (url.startsWith('http') || url.includes('.html')) {
                // Navigate to page
                window.location.href = url;
            }
        }, 300);
    }

    /**
     * Toggle graph visibility
     */
    toggleGraph() {
        const modal = document.getElementById('graphModal');
        if (!modal) return;

        this.isGraphVisible = !this.isGraphVisible;

        if (this.isGraphVisible) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Initialize graph if not already done
            if (!this.graphVisualizer) {
                this.initializeGraph();
            }
        } else {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    /**
     * Initialize graph visualizer
     */
    async initializeGraph() {
        if (!this.graphContainer) return;

        // Check if Cytoscape is loaded
        if (typeof cytoscape === 'undefined') {
            console.error('Cytoscape.js not loaded. Please include the library.');
            this.graphContainer.innerHTML = '<div class="graph-error">Cytoscape.js library not found. Please include it in your page.</div>';
            return;
        }

        // Check if AbhidhammaGraphVisualizer is loaded
        if (typeof AbhidhammaGraphVisualizer === 'undefined') {
            console.error('AbhidhammaGraphVisualizer not loaded. Please include graph-visualizer.js');
            this.graphContainer.innerHTML = '<div class="graph-error">Graph visualizer not found. Please include graph-visualizer.js</div>';
            return;
        }

        // Show loading
        this.graphContainer.innerHTML = '<div class="graph-loading">ග්‍රැෆය පූරණය වෙමින්...</div>';

        try {
            // Initialize visualizer
            this.graphVisualizer = new AbhidhammaGraphVisualizer(
                'abhidhammaGraph',
                'visual-navigation/graph-data.json'
            );

            const success = await this.graphVisualizer.init();
            
            if (!success) {
                this.graphContainer.innerHTML = '<div class="graph-error">ග්‍රැෆය පූරණය කිරීමේ දෝෂයක් ඇත.</div>';
            }
        } catch (error) {
            console.error('Error initializing graph:', error);
            this.graphContainer.innerHTML = '<div class="graph-error">දෝෂය: ' + error.message + '</div>';
        }
    }

    /**
     * Focus on Raga
     */
    focusRaga() {
        if (this.graphVisualizer) {
            this.graphVisualizer.focusRaga();
        }
    }

    /**
     * Focus on Dwesha
     */
    focusDwesha() {
        if (this.graphVisualizer) {
            this.graphVisualizer.focusDwesha();
        }
    }

    /**
     * Focus on Moha
     */
    focusMoha() {
        if (this.graphVisualizer) {
            this.graphVisualizer.focusMoha();
        }
    }

    /**
     * Reset layout
     */
    resetLayout() {
        if (this.graphVisualizer) {
            this.graphVisualizer.resetLayout();
        }
    }

    /**
     * Search nodes
     */
    searchNodes(query) {
        if (this.graphVisualizer) {
            this.graphVisualizer.searchNodes(query);
        }
    }

    /**
     * Apply filters based on checkboxes
     */
    applyFilters() {
        if (!this.graphVisualizer) return;

        const filters = {
            akusala: document.getElementById('filterAkusala')?.checked ?? true,
            kusala: document.getElementById('filterKusala')?.checked ?? true,
            vipaka: document.getElementById('filterVipaka')?.checked ?? true,
            kiriya: document.getElementById('filterKiriya')?.checked ?? true,
            cetasikas: document.getElementById('filterCetasikas')?.checked ?? true,
            meshEdges: document.getElementById('filterMeshEdges')?.checked ?? true
        };

        this.graphVisualizer.applyFilters(filters);
    }
}

// Initialize on load
let graphIntegration = null;

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        graphIntegration = new GraphIntegration();
        window.graphIntegration = graphIntegration; // Make globally available
    });
}


