// Mind Hierarchy Visualizer
// Shows the hierarchical division of consciousness from Citta to detailed states

class MindHierarchyVisualizer {
    constructor(containerId) {
        this.containerId = containerId;
        this.cy = null;
        this.tooltip = document.getElementById('mindTooltip');
        this.currentLanguage = 'si'; // 'si' for Sinhala, 'en' for English
    }

    async init() {
        try {
            this.initializeCytoscape();
            this.setupEventListeners();
            this.applyInitialLayout();
            console.log('🎉 Mind Hierarchy Diagram initialized successfully!');
        } catch (error) {
            console.error('Error initializing mind hierarchy diagram:', error);
        }
    }

    initializeCytoscape() {
        const elements = this.generateMindHierarchyElements();

        this.cy = cytoscape({
            container: document.getElementById(this.containerId),
            elements: elements,
            style: this.getCytoscapeStyles(),
            layout: {
                name: 'breadthfirst',
                directed: true,
                roots: '#mind-root',
                spacingFactor: 1.8,
                padding: 60
            },
            wheelSensitivity: 0.2,
            minZoom: 0.1,
            maxZoom: 3.0,
            userZoomingEnabled: true,
            userPanningEnabled: true,
            boxSelectionEnabled: false,
            autoungrabify: false,
            autounselectify: false
        });
    }

    generateMindHierarchyElements() {
        const elements = [];

        // Root Node - සිත (Mind/Consciousness)
        elements.push({
            data: {
                id: 'mind-root',
                label: 'සිත\n(චිත්තය)',
                labelEn: 'Citta\n(Mind)',
                type: 'root',
                description: 'අභිධර්මයේ මූලික බෙදීමක් වන සිත - අරමුණක් අරගෙන හිත හටගන්න ආකාරය',
                descriptionEn: 'The fundamental principle of Abhidhamma - Citta, the origin of mind consciousness elements',
                size: 'large',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/'
                }
            }
        });

        // Main Division: Kusala vs Akusala
        const mainDivisions = [
            {
                id: 'kusala-mind',
                label: 'කුසල් සිත\n(විරාගය, අද්වේශය, අමෝහය)',
                labelEn: 'Kusala Citta\n(Non-attachment, Non-aversion, Non-delusion)',
                color: '#27ae60',
                parent: 'mind-root',
                count: 43,
                description: 'සුභ කර්මයන් සම්බන්ධ කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness related to good actions',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/1-dhammasangani-matika/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-2.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-3.html'
                }
            },
            {
                id: 'akusala-mind',
                label: 'අකුසල් සිත\n(රාගය, ද්වේශය, මෝහය)',
                labelEn: 'Akusala Citta\n(Greed, Hatred, Delusion)',
                color: '#e74c3c',
                parent: 'mind-root',
                count: 12,
                description: 'අසුභ කර්මයන් සම්බන්ධ අකුසල් සිතුවිලි',
                descriptionEn: 'Unwholesome consciousness related to bad actions',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/2-dhammasangani-hetu/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-4.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-4.html'
                }
            }
        ];

        mainDivisions.forEach(division => {
            elements.push({
                data: {
                    id: division.id,
                    label: division.label,
                    labelEn: division.labelEn,
                    type: 'main-branch',
                    color: division.color,
                    count: division.count,
                    description: division.description,
                    descriptionEn: division.descriptionEn,
                    size: 'medium'
                }
            });

            elements.push({
                data: {
                    source: 'mind-root',
                    target: division.id,
                    type: 'main-division'
                }
            });
        });

        // Kusala Mind Subdivisions
        const kusalaSubdivisions = [
            {
                id: 'kamavacara-kusala',
                label: 'කාමාවචර\nකුසල් සිත (8)',
                labelEn: 'Kamavacara\nKusala Citta (8)',
                color: '#2ecc71',
                count: 8,
                description: 'කාම භූමියේ කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness in sense sphere'
            },
            {
                id: 'rupavacara-kusala',
                label: 'රූපාවචර\nකුසල් සිත (15)',
                labelEn: 'Rupavacara\nKusala Citta (15)',
                color: '#f39c12',
                count: 15,
                description: 'රූප භූමියේ ධ්‍යාන කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness in form sphere meditations'
            },
            {
                id: 'arupavacara-kusala',
                label: 'අරූපාවචර\nකුසල් සිත (12)',
                labelEn: 'Arupavacara\nKusala Citta (12)',
                color: '#1abc9c',
                count: 12,
                description: 'අරූප භූමියේ ධ්‍යාන කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness in formless sphere meditations'
            },
            {
                id: 'lokuttara-kusala',
                label: 'ලෝකෝත්තර\nකුසල් සිත (8)',
                labelEn: 'Lokuttara\nKusala Citta (8)',
                color: '#e67e22',
                count: 8,
                description: 'ලෝකෝත්තර මාර්ග කුසල් සිතුවිලි',
                descriptionEn: 'Supramundane path wholesome consciousness'
            }
        ];

        kusalaSubdivisions.forEach(sub => {
            elements.push({
                data: {
                    id: sub.id,
                    label: sub.label,
                    labelEn: sub.labelEn,
                    type: 'sub-branch',
                    color: sub.color,
                    count: sub.count,
                    description: sub.description,
                    descriptionEn: sub.descriptionEn,
                    size: 'small'
                }
            });

            elements.push({
                data: {
                    source: 'kusala-mind',
                    target: sub.id,
                    type: 'sub-division'
                }
            });
        });

        // Akusala Mind Subdivisions
        const akusalaSubdivisions = [
            {
                id: 'lobha-mula',
                label: 'ලෝභ මූල\nඅකුසල් සිත (8)',
                labelEn: 'Lobha Mula\nAkusala Citta (8)',
                color: '#e74c3c',
                count: 8,
                description: 'ලෝභය මුල් කරගත් අකුසල් සිතුවිලි',
                descriptionEn: 'Unwholesome consciousness rooted in greed'
            },
            {
                id: 'dosa-mula',
                label: 'දෝස මූල\nඅකුසල් සිත (2)',
                labelEn: 'Dosa Mula\nAkusala Citta (2)',
                color: '#c0392b',
                count: 2,
                description: 'දෝෂය මුල් කරගත් අකුසල් සිතුවිලි',
                descriptionEn: 'Unwholesome consciousness rooted in hatred'
            },
            {
                id: 'moha-mula',
                label: 'මෝහ මූල\nඅකුසල් සිත (2)',
                labelEn: 'Moha Mula\nAkusala Citta (2)',
                color: '#a93226',
                count: 2,
                description: 'මෝහය මුල් කරගත් අකුසල් සිතුවිලි',
                descriptionEn: 'Unwholesome consciousness rooted in delusion'
            }
        ];

        akusalaSubdivisions.forEach(sub => {
            elements.push({
                data: {
                    id: sub.id,
                    label: sub.label,
                    labelEn: sub.labelEn,
                    type: 'sub-branch',
                    color: sub.color,
                    count: sub.count,
                    description: sub.description,
                    descriptionEn: sub.descriptionEn,
                    size: 'small'
                }
            });

            elements.push({
                data: {
                    source: 'akusala-mind',
                    target: sub.id,
                    type: 'sub-division'
                }
            });
        });

        // Add Resultant and Functional branches
        const otherBranches = [
            {
                id: 'vipaka-resultant',
                label: 'විපාක සිත\n(කර්ම විපාක) (23)',
                labelEn: 'Vipaka Citta\n(Karmic Result) (23)',
                color: '#3498db',
                count: 23,
                description: 'කර්ම විපාකයන්ගේ ප්‍රතිඵල සිතුවිලි',
                descriptionEn: 'Resultant consciousness from karmic effects'
            },
            {
                id: 'kiriya-functional',
                label: 'ක්‍රියා සිත\n(අරහත් ක්‍රියා) (11)',
                labelEn: 'Kiriya Citta\n(Arahant Function) (11)',
                color: '#9b59b6',
                count: 11,
                description: 'අරහත් වරුන්ගේ ක්‍රියාත්මක සිතුවිලි',
                descriptionEn: 'Functional consciousness of Arahants'
            }
        ];

        otherBranches.forEach(branch => {
            elements.push({
                data: {
                    id: branch.id,
                    label: branch.label,
                    labelEn: branch.labelEn,
                    type: 'other-branch',
                    color: branch.color,
                    count: branch.count,
                    description: branch.description,
                    descriptionEn: branch.descriptionEn,
                    size: 'medium'
                }
            });

            elements.push({
                data: {
                    source: 'mind-root',
                    target: branch.id,
                    type: 'other-connection'
                }
            });
        });

        // Add some example detailed citta for each major category
        this.addDetailedMindExamples(elements);

        return elements;
    }

    addDetailedMindExamples(elements) {
        const detailedExamples = [
            // Kusala examples
            {
                id: 'kusala-example-1',
                label: 'සෝමනස්ස සහගත ඤාණ සම්ප්යුත්ත\nඅසංස්කාරික කුසල් සිත',
                labelEn: 'Pleasant wholesome citta\nwith knowledge, unprompted',
                parent: 'kamavacara-kusala',
                type: 'detailed-example',
                color: '#27ae60',
                cittaId: 1
            },
            // Akusala examples
            {
                id: 'akusala-example-1',
                label: 'සෝමනස්ස සහගත දෘෂ්ටිගත\nසම්ප්‍රයුක්ත අකුසල් සිත',
                labelEn: 'Pleasant unwholesome citta\nwith wrong view',
                parent: 'lobha-mula',
                type: 'detailed-example',
                color: '#e74c3c',
                cittaId: 9
            },
            // Vipaka example
            {
                id: 'vipaka-example-1',
                label: 'සෝමනස්ස සහගත උපේක්ෂාක\nරියාපථ විපාක සිත',
                labelEn: 'Pleasant resultant citta\nof sense-door cognition',
                parent: 'vipaka-resultant',
                type: 'detailed-example',
                color: '#3498db',
                cittaId: 25
            }
        ];

        detailedExamples.forEach(example => {
            elements.push({
                data: {
                    id: example.id,
                    label: example.label,
                    labelEn: example.labelEn,
                    type: example.type,
                    color: example.color,
                    size: 'tiny',
                    cittaId: example.cittaId
                }
            });

            elements.push({
                data: {
                    source: example.parent,
                    target: example.id,
                    type: 'example-connection'
                }
            });
        });
    }

    getCytoscapeStyles() {
        return [
            {
                selector: 'node',
                style: {
                    'label': 'data(label)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'text-wrap': 'wrap',
                    'text-max-width': '140px',
                    'font-size': '12px',
                    'font-family': 'Noto Sans Sinhala, sans-serif',
                    'color': '#2c3e50',
                    'background-color': '#ffffff',
                    'border-width': '2px',
                    'border-color': '#bdc3c7',
                    'width': '90px',
                    'height': '90px',
                    'border-radius': '50%'
                }
            },
            {
                selector: 'node[type="root"]',
                style: {
                    'background-color': '#2196f3',
                    'color': '#ffffff',
                    'width': '130px',
                    'height': '130px',
                    'font-size': '16px',
                    'font-weight': 'bold',
                    'border-width': '4px',
                    'border-color': '#1976d2'
                }
            },
            {
                selector: 'node[type="main-branch"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '110px',
                    'height': '110px',
                    'font-size': '14px',
                    'font-weight': 'bold'
                }
            },
            {
                selector: 'node[type="sub-branch"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '95px',
                    'height': '95px',
                    'font-size': '12px'
                }
            },
            {
                selector: 'node[type="other-branch"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '100px',
                    'height': '100px',
                    'font-size': '13px'
                }
            },
            {
                selector: 'node[type="detailed-example"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '75px',
                    'height': '75px',
                    'font-size': '10px',
                    'opacity': '0.9'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': '3px',
                    'line-color': '#7f8c8d',
                    'curve-style': 'bezier',
                    'target-arrow-shape': 'triangle',
                    'target-arrow-color': '#7f8c8d',
                    'arrow-scale': '1.5'
                }
            },
            {
                selector: 'edge[type="main-division"]',
                style: {
                    'width': '5px',
                    'line-color': '#34495e',
                    'target-arrow-color': '#34495e'
                }
            },
            {
                selector: 'edge[type="sub-division"]',
                style: {
                    'width': '3px',
                    'line-color': '#7f8c8d'
                }
            },
            {
                selector: 'edge[type="other-connection"]',
                style: {
                    'line-style': 'dashed',
                    'line-color': '#95a5a6',
                    'target-arrow-color': '#95a5a6'
                }
            },
            {
                selector: 'node:selected',
                style: {
                    'border-width': '4px',
                    'border-color': '#f1c40f',
                    'border-style': 'solid'
                }
            }
        ];
    }

    setupEventListeners() {
        // Node click events
        this.cy.on('tap', 'node', (event) => {
            const node = event.target;
            const nodeData = node.data();
            this.showNodeDetails(nodeData);
        });

        // Tooltip on mouseover
        this.cy.on('mouseover', 'node', (event) => {
            const node = event.target;
            this.showTooltip(event, node.data());
        });

        this.cy.on('mouseout', 'node', () => {
            this.hideTooltip();
        });
    }

    showNodeDetails(nodeData) {
        // Navigate to appropriate page or show modal based on node type
        if (nodeData.type === 'detailed-example' && nodeData.cittaId) {
            // Navigate to citta detail page
            const detailPageUrl = `citta-${nodeData.cittaId}-detailed-page.html`;
            window.open(detailPageUrl, '_blank');
        } else {
            // Show information modal
            this.showMindCategoryModal(nodeData);
        }
    }

    showMindCategoryModal(nodeData) {
        const existingModal = document.getElementById('mindCategoryModal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'mindCategoryModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            font-family: 'Noto Sans Sinhala', sans-serif;
        `;

        const description = this.currentLanguage === 'si' ? nodeData.description : nodeData.descriptionEn;
        const label = this.currentLanguage === 'si' ? nodeData.label : nodeData.labelEn;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 12px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;

        modalContent.innerHTML = `
            <h3 style="margin-top: 0; color: #2c3e50; text-align: center;">${label}</h3>
            ${nodeData.count ? `<p style="text-align: center; color: #666; margin-bottom: 20px;">ප්‍රමාණය: ${nodeData.count}</p>` : ''}
            <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">${description}</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="margin-top: 0; color: #495057;">අභිධර්මයේ ස්ථානය:</h4>
                <p style="margin: 0; color: #666;">
                    මෙම සිතුවිලි කාණ්ඩය අභිධර්මයේ ධම්මසංගණියෙහි විස්තරාත්මකව විස්තර කර ඇත.
                    ගැඹුරිනි අධ්‍යනය සඳහා යටින් දී ඇති මූලාශ්‍ර ග්‍රන්ථ භාවිතා කරන්න.
                </p>
            </div>

            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="https://tipitaka.lk/" target="_blank" style="display: inline-flex; align-items: center; padding: 12px 20px; background: #e3f2fd; color: #1976d2; text-decoration: none; border-radius: 6px; transition: background 0.3s;">
                    <i class="fas fa-external-link-alt" style="margin-right: 8px;"></i>
                    ත්‍රිපිටකයෙන් බලන්න
                </a>
                <a href="citta-index.html" target="_blank" style="display: inline-flex; align-items: center; padding: 12px 20px; background: #f3e5f5; color: #7b1fa2; text-decoration: none; border-radius: 6px; transition: background 0.3s;">
                    <i class="fas fa-list" style="margin-right: 8px;"></i>
                    සියලුම චිත්ත බලන්න
                </a>
            </div>

            <div style="text-align: center; margin-top: 20px;">
                <button onclick="document.getElementById('mindCategoryModal').remove()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer;">
                    වසන්න (Close)
                </button>
            </div>
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    showTooltip(event, nodeData) {
        if (!this.tooltip) return;

        const description = this.currentLanguage === 'si' ?
            (nodeData.description || 'විස්තර නොමැති') :
            (nodeData.descriptionEn || 'No description');

        this.tooltip.innerHTML = `
            <strong>${this.currentLanguage === 'si' ? nodeData.label : (nodeData.labelEn || nodeData.label)}</strong><br>
            ${description}
            ${nodeData.count ? `<br><em>ප්‍රමාණය: ${nodeData.count}</em>` : ''}
        `;

        this.tooltip.style.display = 'block';
        this.tooltip.style.left = event.originalEvent.clientX + 10 + 'px';
        this.tooltip.style.top = event.originalEvent.clientY + 10 + 'px';
    }

    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.style.display = 'none';
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'si' ? 'en' : 'si';

        // Update all node labels
        this.cy.nodes().forEach(node => {
            const data = node.data();
            const newLabel = this.currentLanguage === 'si' ? data.label : (data.labelEn || data.label);
            node.data('label', newLabel);
        });

        // Update language switcher text
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.currentLanguage === 'si' ? 'English' : 'සිංහල';
            langText.setAttribute('data-si', 'English');
            langText.setAttribute('data-en', 'සිංහල');
        }
    }

    applyInitialLayout() {
        const layout = this.cy.layout({
            name: 'breadthfirst',
            directed: true,
            roots: '#mind-root',
            spacingFactor: 1.8,
            padding: 60,
            animate: true,
            animationDuration: 1000
        });

        layout.run();
    }

    resetLayout() {
        this.applyInitialLayout();
    }

    focusBranch(branchType) {
        let targetNode;
        switch (branchType) {
            case 'kusala':
                targetNode = this.cy.getElementById('kusala-mind');
                break;
            case 'akusala':
                targetNode = this.cy.getElementById('akusala-mind');
                break;
            default:
                return;
        }

        if (targetNode.length > 0) {
            this.cy.animate({
                center: { eles: targetNode },
                zoom: 1.5,
                duration: 800
            });
            targetNode.select();
        }
    }

    showOverview() {
        this.cy.animate({
            center: { eles: this.cy.getElementById('mind-root') },
            zoom: 0.7,
            duration: 1000
        });
    }
}







