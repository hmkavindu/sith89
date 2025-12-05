/**
 * Comprehensive Abhidhamma Knowledge Mesh Visualizer
 * Creates an interactive fishbone/graph mesh connecting ALL website content
 * Enables learning through navigation between related data points
 */

class AbhidhammaGraphVisualizer {
    constructor(containerId, dataUrl) {
        this.containerId = containerId;
        this.dataUrl = dataUrl;
        this.cy = null;
        this.graphData = null;
        this.selectedNode = null;
        this.highlightedNodes = new Set();
        this.learningPathActive = false;
        this.currentFilters = new Set();

        // Enhanced configuration for comprehensive mesh
        this.config = {
            nodeSizes: {
                large: 120,
                medium: 80,
                small: 40
            },
            colors: {
                // Mental states
                raga: '#e91e63',
                dwesha: '#ff9800',
                moha: '#9e9e9e',
                // Categories
                akusala: '#e74c3c',
                kusala: '#27ae60',
                vipaka: '#3498db',
                kiriya: '#9b59b6',
                // Cetasikas
                universal: '#3498db',
                particular: '#16a085',
                sobhana: '#2ecc71',
                // Navigation
                navigation: '#2c3e50',
                tool: '#7f8c8d'
            },
            edgeWidths: {
                strong: 4,
                medium: 2,
                weak: 1
            },
            // Learning path colors
            learningPaths: {
                path1: '#ff5722',
                path2: '#2196f3',
                path3: '#4caf50'
            }
        };
    }

    /**
     * Initialize the comprehensive knowledge mesh
     */
    async init() {
        try {
            await this.loadData();
            this.createGraph();
            this.setupInteractions();
            this.setupLayout();
            this.setupLearningPaths();
            this.setupFilteringControls();
            this.addNavigationHub();
            return true;
        } catch (error) {
            console.error('Error initializing knowledge mesh:', error);
            this.showError('නැවුම් ජාලය ලබා ගැනීමේ දෝෂයක් ඇත.');
            return false;
        }
    }

    /**
     * Load graph data from JSON file
     */
    async loadData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.graphData = await response.json();
            return this.graphData;
        } catch (error) {
            console.error('Error loading graph data:', error);
            throw error;
        }
    }

    /**
     * Convert graph data to Cytoscape format
     */
    convertToCytoscapeFormat() {
        const elements = [];

        // Add nodes
        this.graphData.nodes.forEach(node => {
            elements.push({
                data: {
                    id: node.id,
                    label: node.label,
                    labelEn: node.labelEn || node.label,
                    type: node.type,
                    color: node.color,
                    icon: node.icon || '',
                    url: node.url || '#',
                    size: node.size || 'medium',
                    parent: node.parent || null,
                    description: node.description || '',
                    descriptionEn: node.descriptionEn || ''
                },
                classes: `${node.type} ${node.size || 'medium'}`
            });
        });

        // Add edges
        this.graphData.edges.forEach(edge => {
            elements.push({
                data: {
                    id: edge.id,
                    source: edge.source,
                    target: edge.target,
                    type: edge.type,
                    strength: edge.strength || 'medium',
                    label: edge.label || ''
                },
                classes: `edge-${edge.strength || 'medium'}`
            });
        });

        return elements;
    }

    /**
     * Create Cytoscape graph
     */
    createGraph() {
        const elements = this.convertToCytoscapeFormat();

        // Performance optimization: reduce edge rendering for large graphs
        const edgeCount = elements.filter(e => !e.data.id.startsWith('node')).length;
        const shouldOptimizeEdges = edgeCount > 1000;

        this.cy = cytoscape({
            container: document.getElementById(this.containerId),
            elements: elements,
            style: this.getStyleSheet(),
            layout: {
                name: 'breadthfirst',
                roots: '#raga, #dwesha, #moha',
                directed: true,
                spacingFactor: 1.5,
                padding: 30
            },
            // Performance settings
            wheelSensitivity: 0.2,
            pixelRatio: 'auto',
            textureOnViewport: shouldOptimizeEdges,
            motionBlur: false,
            hideEdgesOnViewport: shouldOptimizeEdges,
            hideLabelsOnViewport: false
        });

        // Add stats display
        this.addStatsDisplay();
    }

    /**
     * Add stats display to graph container
     */
    addStatsDisplay() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const statsDiv = document.createElement('div');
        statsDiv.id = 'graphStats';
        statsDiv.className = 'graph-stats';
        statsDiv.style.cssText = 'position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.9); padding: 8px 12px; border-radius: 6px; font-size: 12px; z-index: 1000; font-family: monospace;';
        
        this.updateStats();
        container.appendChild(statsDiv);
    }

    /**
     * Update enhanced stats display
     */
    updateStats() {
        if (!this.cy) return;

        const statsDiv = document.getElementById('graphStats');
        if (!statsDiv) return;

        const visibleNodes = this.cy.nodes(':visible').length;
        const visibleEdges = this.cy.edges(':visible').length;
        const totalNodes = this.cy.nodes().length;
        const totalEdges = this.cy.edges().length;

        const cittaNodes = this.cy.nodes('[type = "citta"]:visible').length;
        const cetasikaNodes = this.cy.nodes('[type = "cetasika"]:visible').length;
        const analysisPages = this.cy.nodes('[type = "analysis-page"]:visible').length;

        statsDiv.innerHTML = `
            <strong>නැවුම් ජාල සංඛ්‍යාලේඛන:</strong><br>
            මුළු නෝඩ්: ${visibleNodes}/${totalNodes}<br>
            මුළු සම්බන්ධතා: ${visibleEdges}/${totalEdges}<br>
            <hr style="margin: 4px 0;">
            චිත්ත: ${cittaNodes} | චෛතසික: ${cetasikaNodes} | විශ්ලේෂණ: ${analysisPages}
        `;
    }

    /**
     * Setup learning path visualization
     */
    setupLearningPaths() {
        const learningPaths = this.graphData.metadata?.navigationPaths || [];

        // Create learning path controls
        this.addLearningPathControls(learningPaths);
    }

    /**
     * Add learning path control buttons
     */
    addLearningPathControls(paths) {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const controlsDiv = document.createElement('div');
        controlsDiv.id = 'learningPathControls';
        controlsDiv.className = 'learning-path-controls';
        controlsDiv.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(255,255,255,0.95);
            padding: 12px;
            border-radius: 8px;
            font-size: 12px;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            max-width: 250px;
        `;

        controlsDiv.innerHTML = `
            <div style="margin-bottom: 8px; font-weight: bold;">ඉගෙනීමේ මාර්ග:</div>
            ${paths.map((path, index) => `
                <button class="learning-path-btn" data-path="${index}"
                        style="display: block; width: 100%; margin: 2px 0; padding: 4px 8px;
                               border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;
                               cursor: pointer; font-size: 11px; text-align: left;">
                    මාර්ග ${index + 1}: ${path.split(' → ')[0]}...
                </button>
            `).join('')}
            <button id="clearPaths" style="display: block; width: 100%; margin: 4px 0; padding: 4px 8px;
                   border: 1px solid #ff5722; border-radius: 4px; background: #ffebee;
                   cursor: pointer; font-size: 11px; color: #c62828;">
                මාර්ග මකන්න
            </button>
        `;

        container.appendChild(controlsDiv);

        // Add event listeners
        controlsDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('learning-path-btn')) {
                const pathIndex = parseInt(e.target.dataset.path);
                this.highlightLearningPath(pathIndex);
            } else if (e.target.id === 'clearPaths') {
                this.clearLearningPaths();
            }
        });
    }

    /**
     * Highlight a specific learning path
     */
    highlightLearningPath(pathIndex) {
        this.clearLearningPaths();

        const pathColors = ['#ff5722', '#2196f3', '#4caf50', '#ff9800'];
        const color = pathColors[pathIndex] || '#9c27b0';

        // Get all edges with learning-path type
        const learningEdges = this.cy.edges('[type = "learning-path"]');

        // Filter edges for this path
        const pathEdges = learningEdges.filter(edge => {
            return edge.data('id').includes(`learning-path-${pathIndex + 1}`);
        });

        // Highlight path edges and their connected nodes
        pathEdges.forEach(edge => {
            edge.style('line-color', color);
            edge.style('width', 6);
            edge.style('z-index', 10);

            // Highlight connected nodes
            edge.source().style('border-color', color);
            edge.source().style('border-width', 3);
            edge.target().style('border-color', color);
            edge.target().style('border-width', 3);
        });

        this.learningPathActive = true;
    }

    /**
     * Clear learning path highlights
     */
    clearLearningPaths() {
        this.cy.edges('[type = "learning-path"]').forEach(edge => {
            edge.style('line-color', '#ddd');
            edge.style('width', edge.data('strength') === 'strong' ? 4 : edge.data('strength') === 'medium' ? 2 : 1);
            edge.style('z-index', 1);
        });

        this.cy.nodes().forEach(node => {
            node.style('border-color', '#fff');
            node.style('border-width', 1);
        });

        this.learningPathActive = false;
    }

    /**
     * Setup filtering controls for content types
     */
    setupFilteringControls() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const filterDiv = document.createElement('div');
        filterDiv.id = 'contentFilterControls';
        filterDiv.className = 'content-filter-controls';
        filterDiv.style.cssText = `
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(255,255,255,0.95);
            padding: 12px;
            border-radius: 8px;
            font-size: 12px;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            max-width: 280px;
        `;

        const contentTypes = [
            { type: 'citta', label: 'චිත්ත (89)', color: '#3498db' },
            { type: 'cetasika', label: 'චෛතසික (52)', color: '#2ecc71' },
            { type: 'mental-factor', label: 'මානසික සාධක (12)', color: '#ff9800' },
            { type: 'analysis-page', label: 'විශ්ලේෂණ පිටු', color: '#e74c3c' },
            { type: 'tool', label: 'මෙවලම්', color: '#9b59b6' },
            { type: 'navigation-hub', label: 'නැවුම් කේන්ද්‍රය', color: '#2c3e50' }
        ];

        filterDiv.innerHTML = `
            <div style="margin-bottom: 8px; font-weight: bold;">අන්තර්ගතය පෙරීම:</div>
            ${contentTypes.map(ct => `
                <label style="display: block; margin: 2px 0; font-size: 11px;">
                    <input type="checkbox" class="content-filter" data-type="${ct.type}"
                           style="margin-right: 6px;" checked>
                    <span style="color: ${ct.color};">●</span> ${ct.label}
                </label>
            `).join('')}
            <button id="showAllContent" style="display: block; width: 100%; margin: 6px 0; padding: 4px 8px;
                   border: 1px solid #4caf50; border-radius: 4px; background: #e8f5e8;
                   cursor: pointer; font-size: 11px; color: #2e7d32;">
                සියල්ල පෙන්වන්න
            </button>
        `;

        container.appendChild(filterDiv);

        // Add event listeners
        filterDiv.addEventListener('change', (e) => {
            if (e.target.classList.contains('content-filter')) {
                this.filterContentByType();
            }
        });

        filterDiv.addEventListener('click', (e) => {
            if (e.target.id === 'showAllContent') {
                this.showAllContent();
            }
        });
    }

    /**
     * Filter content by selected types
     */
    filterContentByType() {
        const checkedTypes = Array.from(document.querySelectorAll('.content-filter:checked'))
            .map(cb => cb.dataset.type);

        if (checkedTypes.length === 0) {
            // Hide all nodes if nothing is selected
            this.cy.nodes().style('display', 'none');
            this.cy.edges().style('display', 'none');
        } else {
            // Show selected types and their connections
            this.cy.nodes().forEach(node => {
                const nodeType = node.data('type');
                if (checkedTypes.includes(nodeType)) {
                    node.style('display', 'element');
                } else {
                    node.style('display', 'none');
                }
            });

            // Show edges between visible nodes
            this.cy.edges().forEach(edge => {
                const sourceVisible = edge.source().style('display') === 'element';
                const targetVisible = edge.target().style('display') === 'element';
                edge.style('display', sourceVisible && targetVisible ? 'element' : 'none');
            });
        }

        this.updateStats();
        this.cy.fit();
    }

    /**
     * Show all content types
     */
    showAllContent() {
        // Reset all checkboxes
        document.querySelectorAll('.content-filter').forEach(cb => {
            cb.checked = true;
        });

        // Show all nodes and edges
        this.cy.nodes().style('display', 'element');
        this.cy.edges().style('display', 'element');

        this.updateStats();
        this.cy.fit();
    }

    /**
     * Add navigation hub special handling
     */
    addNavigationHub() {
        const hubNode = this.cy.nodes('[id = "navigation-hub"]');
        if (hubNode.length > 0) {
            // Make hub node more prominent
            hubNode.style('border-color', '#2c3e50');
            hubNode.style('border-width', 4);
            hubNode.style('background-opacity', 0.9);
        }
    }

    /**
     * Get Cytoscape stylesheet
     */
    getStyleSheet() {
        return [
            // Base node style
            {
                selector: 'node[size = "small"]',
                style: {
                    'width': 50,
                    'height': 50,
                    'font-size': 10
                }
            },
            {
                selector: 'node[size = "medium"]',
                style: {
                    'width': 70,
                    'height': 70,
                    'font-size': 12
                }
            },
            {
                selector: 'node[size = "large"]',
                style: {
                    'width': 120,
                    'height': 120,
                    'font-size': 18
                }
            },
            {
                selector: 'node',
                style: {
                    'label': 'data(label)',
                    'background-color': 'data(color)',
                    'border-width': 2,
                    'border-color': '#fff',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'color': '#fff',
                    'font-weight': 'bold',
                    'text-wrap': 'wrap',
                    'text-max-width': '120px',
                    'shape': 'round-rectangle',
                    'font-family': 'Noto Sans Sinhala, sans-serif'
                }
            },
            // Main poison nodes (Raga/Dwesha/Moha)
            {
                selector: 'node[type = "main-poison"]',
                style: {
                    'width': 120,
                    'height': 120,
                    'font-size': 18,
                    'background-color': 'data(color)',
                    'border-width': 4,
                    'border-color': '#fff',
                    'shape': 'ellipse',
                    'text-outline-width': 2,
                    'text-outline-color': 'data(color)'
                }
            },
            // Analysis pages
            {
                selector: 'node[type = "analysis-page"]',
                style: {
                    'width': 90,
                    'height': 60,
                    'font-size': 12,
                    'shape': 'round-rectangle'
                }
            },
            // Citta/Cetasika groups
            {
                selector: 'node[type = "citta-group"], node[type = "cetasika-group"]',
                style: {
                    'width': 80,
                    'height': 60,
                    'font-size': 11,
                    'shape': 'round-rectangle'
                }
            },
            // Individual Cittas/Cetasikas
            {
                selector: 'node[type = "citta"], node[type = "cetasika"]',
                style: {
                    'width': 55,
                    'height': 55,
                    'font-size': 10,
                    'shape': 'ellipse'
                }
            },
            // Base edge style
            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'line-color': '#95a5a6',
                    'target-arrow-color': '#95a5a6',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    'opacity': 0.6
                }
            },
            // Strong edges
            {
                selector: 'edge[strength = "strong"]',
                style: {
                    'width': 3,
                    'opacity': 1,
                    'line-color': '#34495e'
                }
            },
            // Medium edges
            {
                selector: 'edge[strength = "medium"]',
                style: {
                    'width': 2,
                    'opacity': 0.7
                }
            },
            // Weak edges
            {
                selector: 'edge[strength = "weak"]',
                style: {
                    'width': 1,
                    'opacity': 0.4
                }
            },
            // Selected node
            {
                selector: 'node:selected',
                style: {
                    'border-width': 4,
                    'border-color': '#f39c12',
                    'background-color': 'data(color)'
                }
            },
            // Highlighted nodes
            {
                selector: 'node.highlight',
                style: {
                    'border-width': 3,
                    'border-color': '#f39c12',
                    'opacity': 1
                }
            }
        ];
    }

    /**
     * Setup event listeners and interactions
     */
    setupInteractions() {
        // Node click - navigate or show details
        this.cy.on('tap', 'node', (evt) => {
            const node = evt.target;
            this.handleNodeClick(node);
        });

        // Node hover - highlight connections
        this.cy.on('mouseover', 'node', (evt) => {
            const node = evt.target;
            this.highlightConnections(node);
        });

        this.cy.on('mouseout', 'node', (evt) => {
            this.clearHighlights();
        });

        // Edge hover
        this.cy.on('mouseover', 'edge', (evt) => {
            const edge = evt.target;
            edge.style('line-color', '#f39c12');
            edge.style('width', 4);
        });

        this.cy.on('mouseout', 'edge', (evt) => {
            const edge = evt.target;
            const strength = edge.data('strength');
            edge.style('line-color', '#95a5a6');
            edge.style('width', this.config.edgeWidths[strength] || 2);
        });
    }

    /**
     * Handle node click with enhanced navigation
     */
    handleNodeClick(node) {
        const url = node.data('url');
        const label = node.data('label');
        const type = node.data('type');
        const description = node.data('description') || '';

        // Select node
        this.cy.elements().unselect();
        node.select();
        this.selectedNode = node;

        // Highlight connected nodes
        this.highlightConnections(node);

        // Show detailed information panel
        this.showNodeDetails(node);

        // Navigate if URL exists
        if (url && url !== '#') {
            // Dispatch custom event for navigation with enhanced data
            const event = new CustomEvent('graphNodeClick', {
                detail: {
                    nodeId: node.id(),
                    url: url,
                    label: label,
                    labelEn: node.data('labelEn'),
                    type: type,
                    description: description,
                    connectedCount: node.connectedEdges().length,
                    category: this.getNodeCategory(node)
                }
            });
            document.dispatchEvent(event);

            // If no listener, navigate directly with confirmation for learning
            if (!document.hasEventListener || !document.hasEventListener('graphNodeClick')) {
                if (url.startsWith('#')) {
                    // Scroll to section with smooth animation
                    const element = document.querySelector(url);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    // Show learning prompt for page navigation
                    this.showNavigationPrompt(node, url);
                }
            }
        } else {
            // For nodes without direct URLs, show related content
            this.showRelatedContent(node);
        }
    }

    /**
     * Show navigation prompt for learning continuity
     */
    showNavigationPrompt(node, url) {
        const type = node.data('type');
        const label = node.data('label');

        const shouldNavigate = confirm(
            `ඔබ ${label} වෙත යාමට කැමතිද?\n\n` +
            `මෙය ඔබගේ ඉගෙනීමේ මාර්ගයේ පියවරක් වනු ඇත. ` +
            `ඔබට මෙම අන්තර්ගතය අධ්‍යයනය කළ පසු නැවුම් ජාලයට නැවත එමින් ` +
            `අදාළ සම්බන්ධතාවලට පිවිසිය හැක.`
        );

        if (shouldNavigate) {
            // Store current position for learning continuity
            sessionStorage.setItem('lastGraphNode', node.id());
            sessionStorage.setItem('lastGraphPosition', JSON.stringify(this.cy.pan()));
            sessionStorage.setItem('lastGraphZoom', this.cy.zoom());

            window.location.href = url;
        }
    }

    /**
     * Show detailed information about selected node
     */
    showNodeDetails(node) {
        const detailsDiv = document.getElementById('nodeDetails');
        if (!detailsDiv) {
            this.createNodeDetailsPanel();
        }

        const details = this.getNodeDetails(node);
        document.getElementById('nodeDetails').innerHTML = details;
        document.getElementById('nodeDetails').style.display = 'block';
    }

    /**
     * Create node details panel
     */
    createNodeDetailsPanel() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const detailsDiv = document.createElement('div');
        detailsDiv.id = 'nodeDetails';
        detailsDiv.className = 'node-details-panel';
        detailsDiv.style.cssText = `
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(255,255,255,0.95);
            padding: 15px;
            border-radius: 8px;
            font-size: 12px;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            max-width: 300px;
            max-height: 200px;
            overflow-y: auto;
            display: none;
        `;

        container.appendChild(detailsDiv);
    }

    /**
     * Get detailed information about a node
     */
    getNodeDetails(node) {
        const data = node.data();
        const connectedCount = node.connectedEdges().length;
        const category = this.getNodeCategory(node);

        let details = `
            <div style="font-weight: bold; margin-bottom: 8px; color: ${data.color || '#333'};">${data.label}</div>
            <div style="margin-bottom: 4px;"><strong>වර්ගය:</strong> ${this.getTypeLabel(data.type)}</div>
            <div style="margin-bottom: 4px;"><strong>කාණ්ඩය:</strong> ${category}</div>
            <div style="margin-bottom: 4px;"><strong>සම්බන්ධතා:</strong> ${connectedCount}</div>
        `;

        if (data.description) {
            details += `<div style="margin-bottom: 8px;"><strong>විස්තරය:</strong> ${data.description}</div>`;
        }

        if (data.url && data.url !== '#') {
            details += `<div style="margin-top: 8px;"><a href="${data.url}" style="color: #3498db; text-decoration: none;">🔗 වැඩි විස්තර බලන්න</a></div>`;
        }

        // Add related learning suggestions
        const related = this.getRelatedLearningSuggestions(node);
        if (related.length > 0) {
            details += `<div style="margin-top: 8px;"><strong>අදාළ ඉගෙනීම්:</strong></div>`;
            related.forEach(item => {
                details += `<div style="font-size: 11px; margin: 2px 0; color: #666;">• ${item}</div>`;
            });
        }

        return details;
    }

    /**
     * Get human-readable type label
     */
    getTypeLabel(type) {
        const labels = {
            'citta': 'චිත්ත',
            'cetasika': 'චෛතසික',
            'analysis-page': 'විශ්ලේෂණ පිටුව',
            'tool': 'මෙවලම',
            'navigation-hub': 'නැවුම් කේන්ද්‍රය',
            'homepage-entry': 'මුල් පිටුව',
            'citta-group': 'චිත්ත කණ්ඩායම',
            'cetasika-group': 'චෛතසික කණ්ඩායම'
        };
        return labels[type] || type;
    }

    /**
     * Get node category
     */
    getNodeCategory(node) {
        const data = node.data();
        if (data.category) return data.category;
        if (data.type === 'citta') return data.subcategory || 'ජනරල්';
        if (data.type === 'cetasika') return data.category || 'ජනරල්';
        return 'ජනරල්';
    }

    /**
     * Get related learning suggestions
     */
    getRelatedLearningSuggestions(node) {
        const suggestions = [];
        const connected = node.connectedEdges().connectedNodes();

        connected.forEach(n => {
            const type = n.data('type');
            const label = n.data('label');
            if (type === 'analysis-page') {
                suggestions.push(`${label} විශ්ලේෂණය කරන්න`);
            } else if (type === 'citta') {
                suggestions.push(`${label} චිත්තය අධ්‍යයනය කරන්න`);
            } else if (type === 'cetasika') {
                suggestions.push(`${label} චෛතසිකය අධ්‍යයනය කරන්න`);
            } else if (type === 'mental-factor') {
                suggestions.push(`${label} මානසික සාධකය අධ්‍යයනය කරන්න`);
            }
        });

        return suggestions.slice(0, 3); // Limit to 3 suggestions
    }

    /**
     * Show related content for nodes without direct URLs
     */
    showRelatedContent(node) {
        const connected = node.connectedEdges().connectedNodes();
        if (connected.length > 0) {
            // Highlight and show details of connected nodes
            connected.forEach(n => {
                n.addClass('related-highlight');
            });

            // Auto-hide after 3 seconds
            setTimeout(() => {
                connected.forEach(n => {
                    n.removeClass('related-highlight');
                });
            }, 3000);
        }
    }

    /**
     * Highlight connections from a node
     */
    highlightConnections(node) {
        this.clearHighlights();
        
        const connected = node.connectedEdges().connectedNodes();
        node.addClass('highlight');
        connected.addClass('highlight');
        node.connectedEdges().addClass('highlight');
        
        connected.forEach(n => this.highlightedNodes.add(n.id()));
        this.highlightedNodes.add(node.id());
    }

    /**
     * Clear all highlights
     */
    clearHighlights() {
        this.cy.elements().removeClass('highlight');
        this.highlightedNodes.clear();
    }

    /**
     * Setup initial layout
     */
    setupLayout() {
        this.cy.layout({
            name: 'breadthfirst',
            roots: '#raga, #dwesha, #moha',
            directed: true,
            spacingFactor: 1.5,
            padding: 30
        }).run();
    }

    /**
     * Focus on a specific node
     */
    focusNode(nodeId, zoom = 1.5) {
        const node = this.cy.getElementById(nodeId);
        if (node.length > 0) {
            this.cy.animate({
                center: { eles: node },
                zoom: zoom
            }, {
                duration: 500
            });
            node.select();
            this.highlightConnections(node);
        }
    }

    /**
     * Focus on Raga
     */
    focusRaga() {
        this.focusNode('raga');
    }

    /**
     * Focus on Dwesha
     */
    focusDwesha() {
        this.focusNode('dwesha');
    }

    /**
     * Focus on Moha
     */
    focusMoha() {
        this.focusNode('moha');
    }

    /**
     * Reset layout
     */
    resetLayout() {
        this.setupLayout();
        this.cy.fit();
    }

    /**
     * Filter nodes by type
     */
    filterByType(type) {
        this.cy.elements().removeClass('filtered');
        this.cy.elements(`node[type != "${type}"]`).addClass('filtered');
        this.cy.elements('.filtered').style('opacity', 0.2);
    }

    /**
     * Apply advanced filters
     */
    applyFilters(filters) {
        if (!this.cy) return;

        // Reset all filters
        this.cy.elements().removeClass('filtered');
        this.cy.elements().style('opacity', 1);
        this.cy.elements().style('display', 'element');

        // Filter by category
        const categoriesToShow = [];
        if (filters.akusala) categoriesToShow.push('අකුසල්');
        if (filters.kusala) categoriesToShow.push('කුසල්');
        if (filters.vipaka) categoriesToShow.push('විපාක', 'අහේතුක');
        if (filters.kiriya) categoriesToShow.push('ක්‍රියා');

        // Filter citta nodes by category
        this.cy.nodes('[type = "citta"]').forEach(node => {
            const category = node.data('category');
            if (category && !categoriesToShow.includes(category)) {
                node.addClass('filtered');
                node.style('opacity', 0.1);
                node.style('display', 'none');
            }
        });

        // Filter cetasika nodes
        if (!filters.cetasikas) {
            this.cy.nodes('[type = "cetasika"]').forEach(node => {
                node.addClass('filtered');
                node.style('opacity', 0.1);
                node.style('display', 'none');
            });
        }

        // Filter mesh edges (citta-cetasika connections)
        if (!filters.meshEdges) {
            this.cy.edges('[type = "has-cetasika"]').forEach(edge => {
                edge.addClass('filtered');
                edge.style('opacity', 0.1);
                edge.style('display', 'none');
            });
        }

        // Hide edges connected to filtered nodes
        this.cy.elements('.filtered').connectedEdges().forEach(edge => {
            if (!edge.hasClass('filtered')) {
                edge.addClass('filtered');
                edge.style('opacity', 0.1);
                edge.style('display', 'none');
            }
        });

        // Update layout and stats after filtering
        setTimeout(() => {
            this.cy.fit();
            this.updateStats();
        }, 100);
    }

    /**
     * Clear filters
     */
    clearFilters() {
        if (!this.cy) return;
        this.cy.elements().removeClass('filtered');
        this.cy.elements().style('opacity', 1);
        this.cy.elements().style('display', 'element');
        this.cy.fit();
        this.updateStats();
    }

    /**
     * Search nodes
     */
    searchNodes(query) {
        this.clearHighlights();
        
        if (!query || query.trim() === '') {
            return;
        }

        const lowerQuery = query.toLowerCase();
        const matches = this.cy.nodes().filter(node => {
            const label = node.data('label').toLowerCase();
            const labelEn = (node.data('labelEn') || '').toLowerCase();
            return label.includes(lowerQuery) || labelEn.includes(lowerQuery);
        });

        matches.forEach(node => {
            node.addClass('highlight');
            this.highlightConnections(node);
        });

        if (matches.length > 0) {
            this.cy.fit(matches);
        }
    }

    /**
     * Show error message
     */
    showError(message) {
        const container = document.getElementById(this.containerId);
        if (container) {
            container.innerHTML = `<div style="padding: 20px; color: red; text-align: center;">${message}</div>`;
        }
    }

    /**
     * Get graph instance
     */
    getGraph() {
        return this.cy;
    }

    /**
     * Destroy graph
     */
    destroy() {
        if (this.cy) {
            this.cy.destroy();
            this.cy = null;
        }
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AbhidhammaGraphVisualizer;
}


