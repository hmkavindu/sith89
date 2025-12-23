/**
 * Comprehensive Citta (සිත) Visualizer
 * Based on Google Drive Abhidhamma Tutorial Images
 * Creates an interactive graph mesh starting from සිත (Citta/Consciousness)
 * Integrates චිත්ත වීථිය (Thought Process), පරමාර්ථ ධර්ම, and all website data
 */

class CittaComprehensiveVisualizer {
    constructor(containerId) {
        this.containerId = containerId;
        this.cy = null;
        this.currentLanguage = 'si'; // 'si' for Sinhala, 'en' for English
        this.selectedNode = null;

        // Configuration
        this.config = {
            colors: {
                root: '#2196f3',           // සිත - Root
                paramartha: '#9c27b0',     // පරමාර්ථ ධර්ම
                cittaVithi: '#ff6f00',     // චිත්ත වීථිය
                citta: '#3498db',          // චිත්ත 89
                cetasika: '#2ecc71',       // චෛතසික 52
                rupa: '#e74c3c',           // රූප 28
                nibbana: '#f39c12',        // නිබ්බාන
                akusala: '#e74c3c',        // අකුසල්
                kusala: '#27ae60',         // කුසල්
                vipaka: '#3498db',         // විපාක
                kiriya: '#9b59b6',         // ක්‍රියා
                kamavacara: '#16a085',     // කාමාවචර
                rupavacara: '#f39c12',     // රූපාවචර
                arupavacara: '#8e44ad',    // අරූපාවචර
                lokuttara: '#e67e22'       // ලෝකෝත්තර
            }
        };
    }

    init() {
        try {
            this.initializeCytoscape();
            this.setupEventListeners();
            this.applyInitialLayout();
            this.addControls();
            console.log('✅ Citta Comprehensive Visualizer initialized successfully!');
            return true;
        } catch (error) {
            console.error('❌ Error initializing visualizer:', error);
            return false;
        }
    }

    initializeCytoscape() {
        const elements = this.generateComprehensiveElements();

        this.cy = cytoscape({
            container: document.getElementById(this.containerId),
            elements: elements,
            style: this.getCytoscapeStyles(),
            layout: {
                name: 'dagre',
                rankDir: 'TB',
                directed: true,
                padding: 50,
                rankSep: 100,
                nodeSep: 80,
                edgeSep: 10,
                animate: true,
                animationDuration: 1000
            },
            wheelSensitivity: 0.2,
            minZoom: 0.1,
            maxZoom: 3.0,
            userZoomingEnabled: true,
            userPanningEnabled: true
        });
    }

    generateComprehensiveElements() {
        const elements = [];

        // ====================================
        // ROOT: සිත (Citta/Consciousness)
        // ====================================
        elements.push({
            data: {
                id: 'citta-root',
                label: 'සිත\n(ම නස)',
                labelEn: 'Citta\n(Consciousness)',
                type: 'root',
                color: this.config.colors.root,
                description: 'අභිධර්මයේ මූලික සිදුවීම වන සිත - චිත්තය යනු අරමුණ සිතන මනස',
                descriptionEn: 'The fundamental phenomenon of Abhidhamma - Citta is the mind that knows objects',
                size: 'extra-large'
            }
        });

        // ============================================================
        // LEVEL 1: පරමාර්ථ ධර්ම 4 (Ultimate Realities)
        // From Google Drive 001 Tute.jpg
        // ============================================================
        const paramarthaDharma = [
            {
                id: 'paramartha-citta',
                label: 'චිත්තය\n(89/121)',
                labelEn: 'Citta\n(89/121)',
                color: this.config.colors.citta,
                count: 89,
                description: 'සත්ව ලොකයේ සිතුවිලි 89ක් හෝ 121ක්'
            },
            {
                id: 'paramartha-cetasika',
                label: 'චෛතසික\n(52)',
                labelEn: 'Cetasika\n(52)',
                color: this.config.colors.cetasika,
                count: 52,
                description: 'මානසික සාධක 52'
            },
            {
                id: 'paramartha-rupa',
                label: 'රූපය\n(28)',
                labelEn: 'Rupa\n(28)',
                color: this.config.colors.rupa,
                count: 28,
                description: 'ද්‍රව්‍යමය ස්වභාවයන් 28'
            },
            {
                id: 'paramartha-nibbana',
                label: 'නිබ්බාන\n(අසංස්කත)',
                labelEn: 'Nibbana\n(Unconditioned)',
                color: this.config.colors.nibbana,
                count: 1,
                description: 'එකම අසංස්කත පරමාර්ථ ධර්මය'
            }
        ];

        paramarthaDharma.forEach(dharma => {
            elements.push({
                data: {
                    ...dharma,
                    type: 'paramartha-dharma',
                    size: 'large'
                }
            });

            elements.push({
                data: {
                    source: 'citta-root',
                    target: dharma.id,
                    type: 'main-division',
                    strength: 'strong'
                }
            });
        });

        // ============================================================
        // LEVEL 2: චිත්ත වීථිය (Thought Process - Citta Vithi)
        // From Google Drive 008 Tute.jpg - චක්ඛුද්වාරික වීථිය 17 steps
        // ============================================================
        const cittaVithi = [
            { id: 'vithi-1', name: 'අතීත භවංග', nameEn: 'Past Bhavanga', order: 1 },
            { id: 'vithi-2', name: 'භවංග කලන්', nameEn: 'Bhavanga Calana', order: 2 },
            { id: 'vithi-3', name: 'භවංග උපච්ඡේද', nameEn: 'Bhavanga Upa cheda', order: 3 },
            { id: 'vithi-4', name: 'පඤ්චද්වාරාවර්ජන', nameEn: 'Pañcadvārāvajjana', order: 4 },
            { id: 'vithi-5', name: 'චක්ඛු විඤ්ඤාණ', nameEn: 'Cakkhu Viññāṇa', order: 5 },
            { id: 'vithi-6', name: 'සම්පටිච්ඡන', nameEn: 'Sampaṭicchana', order: 6 },
            { id: 'vithi-7', name: 'සන්තීරණ', nameEn: 'Santīraṇa', order: 7 },
            { id: 'vithi-8', name: 'වෝට්ඨප්බන', nameEn: 'Voṭṭhapana', order: 8 },
            { id: 'vithi-9', name: 'ජවන 1', nameEn: 'Javana 1', order: 9 },
            { id: 'vithi-10', name: 'ජවන 2', nameEn: 'Javana 2', order: 10 },
            { id: 'vithi-11', name: 'ජවන 3', nameEn: 'Javana 3', order: 11 },
            { id: 'vithi-12', name: 'ජවන 4', nameEn: 'Javana 4', order: 12 },
            { id: 'vithi-13', name: 'ජවන 5', nameEn: 'Javana 5', order: 13 },
            { id: 'vithi-14', name: 'ජවන 6', nameEn: 'Javana 6', order: 14 },
            { id: 'vithi-15', name: 'ජවන 7', nameEn: 'Javana 7', order: 15 },
            { id: 'vithi-16', name: 'තදාරම්මණ 1', nameEn: 'Tadārammaṇa 1', order: 16 },
            { id: 'vithi-17', name: 'තදාරම්මණ 2', nameEn: 'Tadārammaṇa 2', order: 17 }
        ];

        // Create Citta Vithi group node
        elements.push({
            data: {
                id: 'citta-vithi-group',
                label: 'චිත්ත වීථිය\n(17 පියවර)',
                labelEn: 'Citta Vithi\n(17 Steps)',
                type: 'citta-vithi-group',
                color: this.config.colors.cittaVithi,
                description: 'චක්ඛුද්වාරික අතිමහන්තාරම්මණ වීථිය - සිතක් ක්‍රියාත්මක වන ආකාරය',
                descriptionEn: 'Eye-door thought process with great object - How consciousness operates',
                size: 'large'
            }
        });

        elements.push({
            data: {
                source: 'paramartha-citta',
                target: 'citta-vithi-group',
                type: 'vithi-connection',
                strength: 'strong'
            }
        });

        // Add individual Vithi steps
        cittaVithi.forEach((step, index) => {
            elements.push({
                data: {
                    id: step.id,
                    label: `${step.order}. ${step.name}`,
                    labelEn: `${step.order}. ${step.nameEn}`,
                    type: 'vithi-step',
                    color: this.config.colors.cittaVithi,
                    order: step.order,
                    size: 'small'
                }
            });

            // Connect to Citta Vithi group
            elements.push({
                data: {
                    source: 'citta-vithi-group',
                    target: step.id,
                    type: 'vithi-step-connection',
                    strength: 'medium'
                }
            });

            // Sequential connection between steps
            if (index > 0) {
                elements.push({
                    data: {
                        source: cittaVithi[index - 1].id,
                        target: step.id,
                        type: 'vithi-sequence',
                        strength: 'weak'
                    }
                });
            }
        });

        // ============================================================
        // LEVEL 3: චිත්ත 89 පිරිස් බෙදීම (Citta Classifications)
        // From Google Drive 005 & 007 Tute.jpg
        // ============================================================
        const cittaClassifications = [
            // කාමාවචර (Sensuous Sphere) - 54
            {
                id: 'kamavacara-group',
                label: 'කාමාවචර\nසිත් (54)',
                labelEn: 'Kāmāvacara\nCitta (54)',
                color: this.config.colors.kamavacara,
                count: 54,
                parent: 'paramartha-citta',
                subcategories: [
                    { id: 'akusala-12', name: 'අකුසල් (12)', nameEn: 'Akusala (12)', color: this.config.colors.akusala },
                    { id: 'ahetuka-18', name: 'අහේතුක (18)', nameEn: 'Ahetuka (18)', color: '#95a5a6' },
                    { id: 'kamavacara-kusala-8', name: 'කුසල් (8)', nameEn: 'Kusala (8)', color: this.config.colors.kusala },
                    { id: 'kamavacara-vipaka-8', name: 'විපාක  (8)', nameEn: 'Vipāka (8)', color: this.config.colors.vipaka },
                    { id: 'kamavacara-kiriya-8', name: 'ක්‍රියා (8)', nameEn: 'Kiriyā (8)', color: this.config.colors.kiriya }
                ]
            },
            // රූපාවචර (Form Sphere) - 15
            {
                id: 'rupavacara-group',
                label: 'රූපාවචර\nසිත් (15)',
                labelEn: 'Rūpāvacara\nCitta (15)',
                color: this.config.colors.rupavacara,
                count: 15,
                parent: 'paramartha-citta',
                subcategories: [
                    { id: 'rupavacara-kusala-5', name: 'කුසල් (5)', nameEn: 'Kusala (5)', color: this.config.colors.kusala },
                    { id: 'rupavacara-vipaka-5', name: 'විපාක (5)', nameEn: 'Vipāka (5)', color: this.config.colors.vipaka },
                    { id: 'rupavacara-kiriya-5', name: 'ක්‍රියා (5)', nameEn: 'Kiriyā (5)', color: this.config.colors.kiriya }
                ]
            },
            // අරූපාවචර (Formless Sphere) - 12
            {
                id: 'arupavacara-group',
                label: 'අරූපාවචර\nසිත් (12)',
                labelEn: 'Arūpāvacara\nCitta (12)',
                color: this.config.colors.arupavacara,
                count: 12,
                parent: 'paramartha-citta',
                subcategories: [
                    { id: 'arupavacara-kusala-4', name: 'කුසල් (4)', nameEn: 'Kusala (4)', color: this.config.colors.kusala },
                    { id: 'arupavacara-vipaka-4', name: 'විපාක (4)', nameEn: 'Vipāka (4)', color: this.config.colors.vipaka },
                    { id: 'arupavacara-kiriya-4', name: 'ක්‍රියා (4)', nameEn: 'Kiriyā (4)', color: this.config.colors.kiriya }
                ]
            },
            // ලෝකෝත්තර (Supramundane) - 8
            {
                id: 'lokuttara-group',
                label: 'ලෝකෝත්තර\nසිත් (8)',
                labelEn: 'Lokuttara\nCitta (8)',
                color: this.config.colors.lokuttara,
                count: 8,
                parent: 'paramartha-citta',
                subcategories: [
                    { id: 'magga-4', name: 'මග්ග (4)', nameEn: 'Magga (4)', color: '#d35400' },
                    { id: 'phala-4', name: 'ඵල (4)', nameEn: 'Phala (4)', color: '#e67e22' }
                ]
            }
        ];

        cittaClassifications.forEach(classification => {
            // Add main group
            elements.push({
                data: {
                    id: classification.id,
                    label: classification.label,
                    labelEn: classification.labelEn,
                    type: 'citta-classification',
                    color: classification.color,
                    count: classification.count,
                    size: 'medium'
                }
            });

            // Connect to parent
            elements.push({
                data: {
                    source: classification.parent,
                    target: classification.id,
                    type: 'classification-division',
                    strength: 'strong'
                }
            });

            // Add subcategories
            classification.subcategories.forEach(subcat => {
                elements.push({
                    data: {
                        id: subcat.id,
                        label: subcat.name,
                        labelEn: subcat.nameEn,
                        type: 'citta-subcategory',
                        color: subcat.color,
                        size: 'small'
                    }
                });

                elements.push({
                    data: {
                        source: classification.id,
                        target: subcat.id,
                        type: 'subcategory-division',
                        strength: 'medium'
                    }
                });
            });
        });

        // ============================================================
        // LEVEL 4: චෛතසික 52 (Mental Factors)
        // From Google Drive 008 Tute.jpg
        // ============================================================
        const cetasikaGroups = [
            {
                id: 'universal-cetasika',
                label: 'සාධාරණ\nචෛතසික (7)',
                labelEn: 'Universal\nCetasika (7)',
                color: '#3498db',
                count: 7
            },
            {
                id: 'particular-cetasika',
                label: 'පක්ෂික\nචෛතසික (6)',
                labelEn: 'Particular\nCetasika (6)',
                color: '#16a085',
                count: 6
            },
            {
                id: 'akusala-cetasika',
                label: 'අකුසල\nචෛතසික (14)',
                labelEn: 'Akusala\nCetasika (14)',
                color: this.config.colors.akusala,
                count: 14
            },
            {
                id: 'sobhana-cetasika',
                label: 'සෝබන\nචෛතසික (25)',
                labelEn: 'Sobhana\nCetasika (25)',
                color: '#2ecc71',
                count: 25
            }
        ];

        cetasikaGroups.forEach(group => {
            elements.push({
                data: {
                    id: group.id,
                    label: group.label,
                    labelEn: group.labelEn,
                    type: 'cetasika-group',
                    color: group.color,
                    count: group.count,
                    size: 'medium'
                }
            });

            elements.push({
                data: {
                    source: 'paramartha-cetasika',
                    target: group.id,
                    type: 'cetasika-division',
                    strength: 'strong'
                }
            });
        });

        // ============================================================
        // LEVEL 5: රූප 28 (Material Form)
        // From Google Drive 001, 002, 003 Tute.jpg
        // ============================================================
        const rupaGroups = [
            {
                id: 'rupa-mahabhuta-4',
                label: 'මහා භූත\nරූප (4)',
                labelEn: 'Mahābhūta\nRūpa (4)',
                description: 'පඨවී, ආපෝ, තේජෝ, වායෝ'
            },
            {
                id: 'rupa-pasada-5',
                label: 'පසාද\nරූප (5)',
                labelEn: 'Pasāda\nRūpa (5)',
                description: 'චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය'
            },
            {
                id: 'rupa-gocara-7',
                label: 'ගෝචර\nරූප (7)',
                labelEn: 'Gocara\nRūpa (7)',
                description: 'වර්ණ, ගන්ධ, රස, ඔජා, ෆොට්ඨබ්බ, ඉත්ථිත්ත, පුරිසත්ත'
            },
            {
                id: 'rupa-hridaya',
                label: 'හෘදය\nවස්තු රූප',
                labelEn: 'Hṛdaya\nVatthu Rūpa',
                description: 'මනෝ ද්වාරය'
            }
        ];

        rupaGroups.forEach(group => {
            elements.push({
                data: {
                    id: group.id,
                    label: group.label,
                    labelEn: group.labelEn,
                    type: 'rupa-group',
                    color: this.config.colors.rupa,
                    description: group.description,
                    size: 'small'
                }
            });

            elements.push({
                data: {
                    source: 'paramartha-rupa',
                    target: group.id,
                    type: 'rupa-division',
                    strength: 'medium'
                }
            });
        });

        // ============================================================
        // LEVEL 6: Website Navigation Links
        // ============================================================
        const websiteLinks = [
            {
                id: 'link-main-table',
                label: 'චිත්ත චෛතසික\nවගුව',
                labelEn: 'Citta Cetasika\nTable',
                url: 'index.html#table',
                parent: 'paramartha-citta'
            },
            {
                id: 'link-raga-analysis',
                label: 'රාග\nවිශ්ලේෂණය',
                labelEn: 'Raga\nAnalysis',
                url: 'raga-analysis.html',
                parent: 'akusala-12'
            },
            {
                id: 'link-dwesha-analysis',
                label: 'ද්වේශ\nවිශ්ලේෂණය',
                labelEn: 'Dwesha\nAnalysis',
                url: 'anger-analysis.html',
                parent: 'akusala-12'
            },
            {
                id: 'link-moha-analysis',
                label: 'මෝහ\nවිශ්ලේෂණය',
                labelEn: 'Moha\nAnalysis',
                url: 'moha-analysis.html',
                parent: 'akusala-12'
            },
            {
                id: 'link-citta-index',
                label: 'සියලුම\nචිත්ත (89)',
                labelEn: 'All\nCittas (89)',
                url: 'citta-index.html',
                parent: 'paramartha-citta'
            },
            {
                id: 'link-fishbone',
                label: 'චිත්ත බෙදීම්\nජාලය',
                labelEn: 'Citta Division\nNetwork',
                url: 'citta-fishbone-diagram.html',
                parent: 'paramartha-citta'
            }
        ];

        websiteLinks.forEach(link => {
            elements.push({
                data: {
                    id: link.id,
                    label: link.label,
                    labelEn: link.labelEn,
                    type: 'website-link',
                    color: '#7f8c8d',
                    url: link.url,
                    size: 'tiny'
                }
            });

            elements.push({
                data: {
                    source: link.parent,
                    target: link.id,
                    type: 'website-connection',
                    strength: 'weak'
                }
            });
        });

        return elements;
    }

    getCytoscapeStyles() {
        return [
            // Base node style
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
                    'text-max-width': '150px',
                    'font-family': 'Noto Sans Sinhala, sans-serif',
                    'text-outline-width': 2,
                    'text-outline-color': 'data(color)'
                }
            },
            // Size variations
            {
                selector: 'node[size="extra-large"]',
                style: {
                    'width': 180,
                    'height': 180,
                    'font-size': 22
                }
            },
            {
                selector: 'node[size="large"]',
                style: {
                    'width': 140,
                    'height': 140,
                    'font-size': 18
                }
            },
            {
                selector: 'node[size="medium"]',
                style: {
                    'width': 100,
                    'height': 100,
                    'font-size': 14
                }
            },
            {
                selector: 'node[size="small"]',
                style: {
                    'width': 70,
                    'height': 70,
                    'font-size': 11
                }
            },
            {
                selector: 'node[size="tiny"]',
                style: {
                    'width': 50,
                    'height': 50,
                    'font-size': 9
                }
            },
            // Root node special styling
            {
                selector: 'node[type="root"]',
                style: {
                    'shape': 'round-octagon',
                    'border-width': 5,
                    'border-color': '#1976d2',
                    'background-gradient-direction': 'to-bottom',
                    'background-gradient-stop-colors': '#2196f3 #1976d2'
                }
            },
            // Citta Vithi steps
            {
                selector: 'node[type="vithi-step"]',
                style: {
                    'shape': 'round-rectangle',
                    'background-opacity': 0.9
                }
            },
            // Edge styles
            {
                selector: 'edge',
                style: {
                    'width': 'mapData(strength, 0, 10, 1, 4)',
                    'line-color': '#bdc3c7',
                    'target-arrow-color': '#bdc3c7',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    'opacity': 0.7
                }
            },
            {
                selector: 'edge[strength="strong"]',
                style: {
                    'width': 4,
                    'opacity': 1,
                    'line-color': '#34495e',
                    'target-arrow-color': '#34495e'
                }
            },
            {
                selector: 'edge[strength="medium"]',
                style: {
                    'width': 2,
                    'opacity': 0.7
                }
            },
            {
                selector: 'edge[strength="weak"]',
                style: {
                    'width': 1,
                    'opacity': 0.5,
                    'line-style': 'dashed'
                }
            },
            {
                selector: 'edge[type="vithi-sequence"]',
                style: {
                    'line-color': '#ff6f00',
                    'target-arrow-color': '#ff6f00'
                }
            },
            // Selected state
            {
                selector: 'node:selected',
                style: {
                    'border-width': 5,
                    'border-color': '#f39c12',
                    'z-index': 999
                }
            },
            {
                selector: 'node:active',
                style: {
                    'overlay-color': '#f39c12',
                    'overlay-padding': 8,
                    'overlay-opacity': 0.3
                }
            }
        ];
    }

    setupEventListeners() {
        // Node click
        this.cy.on('tap', 'node', (evt) => {
            const node = evt.target;
            this.handleNodeClick(node);
        });

        // Node hover
        this.cy.on('mouseover', 'node', (evt) => {
            const node = evt.target;
            this.showNodeTooltip(evt, node);
            this.highlightConnections(node);
        });

        this.cy.on('mouseout', 'node', (evt) => {
            this.hideTooltip();
            this.clearHighlights();
        });
    }

    handleNodeClick(node) {
        const data = node.data();

        // Deselect all and select this node
        this.cy.elements().unselect();
        node.select();
        this.selectedNode = node;

        // If has URL, show navigation prompt
        if (data.url) {
            this.showNavigationPrompt(data);
        } else {
            this.showNodeDetails(data);
        }
    }

    showNavigationPrompt(data) {
        const confirmed = confirm(
            `${data.label} වෙත යාමට කැමතිද?\n\nමෙය ඔබ ${data.labelEn || data.label} පිටුවට ගෙන යනු ඇත.`
        );

        if (confirmed && data.url) {
            window.location.href = data.url;
        }
    }

    showNodeDetails(data) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 500px;
            font-family: 'Noto Sans Sinhala', sans-serif;
        `;

        modal.innerHTML = `
            <h2 style="margin-top: 0; color: ${data.color};">${data.label}</h2>
            ${data.count ? `<p><strong>සංඛ්‍යාව:</strong> ${data.count}</p>` : ''}
            ${data.description ? `<p style="line-height: 1.6;">${data.description}</p>` : ''}
            <button onclick="this.parentElement.remove()" 
                    style="margin-top: 20px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 8px; cursor: pointer;">
                වසන්න
            </button>
        `;

        // Add overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9999;
        `;
        overlay.onclick = () => {
            overlay.remove();
            modal.remove();
        };

        document.body.appendChild(overlay);
        document.body.appendChild(modal);
    }

    showNodeTooltip(evt, node) {
        const data = node.data();
        let tooltip = document.getElementById('citta-tooltip');

        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'citta-tooltip';
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0,0,0,0.9);
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                font-size: 13px;
                z-index: 10000;
                max-width: 300px;
                pointer-events: none;
                font-family: 'Noto Sans Sinhala', sans-serif;
            `;
            document.body.appendChild(tooltip);
        }

        tooltip.innerHTML = `
            <strong>${data.label}</strong><br>
            ${data.description || data.labelEn || ''}
            ${data.count ? `<br><em>සංඛ්‍යාව: ${data.count}</em>` : ''}
        `;

        tooltip.style.left = evt.originalEvent.pageX + 15 + 'px';
        tooltip.style.top = evt.originalEvent.pageY + 15 + 'px';
        tooltip.style.display = 'block';
    }

    hideTooltip() {
        const tooltip = document.getElementById('citta-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }

    highlightConnections(node) {
        // Highlight connected nodes and edges
        const connectedEdges = node.connectedEdges();
        const connectedNodes = connectedEdges.connectedNodes();

        connectedEdges.style('line-color', '#f39c12');
        connectedEdges.style('target-arrow-color', '#f39c12');
        connectedEdges.style('width', 4);
        connectedEdges.style('opacity', 1);

        connectedNodes.style('border-color', '#f39c12');
        connectedNodes.style('border-width', 3);
    }

    clearHighlights() {
        // Reset all edges and nodes
        this.cy.edges().style('line-color', '#bdc3c7');
        this.cy.edges().style('target-arrow-color', '#bdc3c7');
        this.cy.edges('[strength="strong"]').style('line-color', '#34495e');
        this.cy.edges('[strength="strong"]').style('target-arrow-color', '#34495e');

        this.cy.nodes(':unselected').style('border-color', '#fff');
        this.cy.nodes(':unselected').style('border-width', 2);
    }

    applyInitialLayout() {
        setTimeout(() => {
            this.cy.fit(null, 50);
        }, 500);
    }

    addControls() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const controlsDiv = document.createElement('div');
        controlsDiv.style.cssText = `
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255,255,255,0.95);
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            z-index: 1000;
            font-family: 'Noto Sans Sinhala', sans-serif;
        `;

        controlsDiv.innerHTML = `
            <strong style="display: block; margin-bottom: 10px;">නැවුම් පාලන</strong>
            <button onclick="window.cittaVisualizer.resetView()" style="display: block; width: 100%; margin: 3px 0; padding: 6px 10px; border: none; background: #3498db; color: white; border-radius: 6px; cursor: pointer; font-size: 12px;">
                සම්පූර්ණ දර්ශනය
            </button>
            <button onclick="window.cittaVisualizer.focusOnCittaVithi()" style="display: block; width: 100%; margin: 3px 0; padding: 6px 10px; border: none; background: #ff6f00; color: white; border-radius: 6px; cursor: pointer; font-size: 12px;">
                චිත්ත වීථිය
            </button>
            <button onclick="window.cittaVisualizer.focusOnCetasika()" style="display: block; width: 100%; margin: 3px 0; padding: 6px 10px; border: none; background: #2ecc71; color: white; border-radius: 6px; cursor: pointer; font-size: 12px;">
                චෛතසික
            </button>
            <button onclick="window.cittaVisualizer.focusOnRupa()" style="display: block; width: 100%; margin: 3px 0; padding: 6px 10px; border: none; background: #e74c3c; color: white; border-radius: 6px; cursor: pointer; font-size: 12px;">
                රූප
            </button>
        `;

        container.appendChild(controlsDiv);
    }

    resetView() {
        this.cy.fit(null, 50);
    }

    focusOnCittaVithi() {
        const node = this.cy.getElementById('citta-vithi-group');
        if (node.length > 0) {
            this.cy.animate({
                center: { eles: node },
                zoom: 1.2
            }, {
                duration: 800
            });
        }
    }

    focusOnCetasika() {
        const node = this.cy.getElementById('paramartha-cetasika');
        if (node.length > 0) {
            this.cy.animate({
                center: { eles: node },
                zoom: 1.0
            }, {
                duration: 800
            });
        }
    }

    focusOnRupa() {
        const node = this.cy.getElementById('paramartha-rupa');
        if (node.length > 0) {
            this.cy.animate({
                center: { eles: node },
                zoom: 1.0
            }, {
                duration: 800
            });
        }
    }
}

// Make globally available
window.CittaComprehensiveVisualizer = CittaComprehensiveVisualizer;
