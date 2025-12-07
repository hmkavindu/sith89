// Citta Fishbone Diagram Visualizer
// Based on Abhidhamma teachings showing hierarchical division of consciousness

class CittaFishboneVisualizer {
    constructor(containerId) {
        this.containerId = containerId;
        this.cy = null;
        this.tooltip = document.getElementById('nodeTooltip');
        this.cittaData = null;
        this.currentLanguage = 'si'; // 'si' for Sinhala, 'en' for English
    }

    async init() {
        try {
            await this.loadCittaData();
            this.initializeCytoscape();
            this.setupEventListeners();
            this.applyInitialLayout();
            console.log('🎉 Citta Fishbone Diagram initialized successfully!');
        } catch (error) {
            console.error('Error initializing fishbone diagram:', error);
        }
    }

    async loadCittaData() {
        try {
            const response = await fetch('abhidhamma-complete-data.json');
            const data = await response.json();
            this.cittaData = data.cittas;
            console.log('✅ Loaded citta data:', this.cittaData.length, 'cittas');
        } catch (error) {
            console.error('Error loading citta data:', error);
            // Fallback structure
            this.cittaData = this.getFallbackCittaData();
        }
    }

    getFallbackCittaData() {
        return [
            // Kusala Cittas (8)
            { id: 1, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍යුත්ත අසංස්කාරික කුසල් සිත", category: "කුසල්", count: 8 },
            // Akusala Cittas (12)
            { id: 2, name: "සෝමනස්ස සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික අකුසල් සිත", category: "අකුසල්", count: 12 },
            // And so on...
        ];
    }

    initializeCytoscape() {
        const elements = this.generateFishboneElements();

        this.cy = cytoscape({
            container: document.getElementById(this.containerId),
            elements: elements,
            style: this.getCytoscapeStyles(),
            layout: {
                name: 'breadthfirst',
                directed: true,
                roots: '#root-citta',
                spacingFactor: 1.5,
                padding: 50
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

    generateFishboneElements() {
        const elements = [];

        // Root Node - සිත (මූලික මනස)
        elements.push({
            data: {
                id: 'root-citta',
                label: 'සිත\n(චිත්තය)',
                labelEn: 'Citta\n(Mind)',
                type: 'root',
                description: 'අභිධර්මයේ මූලික සිදුවීම වන සිත - මනෝවිඥානධාතු වල මූලාරම්භය',
                descriptionEn: 'The fundamental principle of Abhidhamma - Citta, the origin of mind consciousness elements',
                size: 'large',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/'
                }
            }
        });

        // Main Division: Kusala vs Akusala Citta (සිතුවිලි)
        const mainDivisions = [
            {
                id: 'kusala-branch',
                label: 'කුසල් සිත\n(විරාගය, අද්වේශය, අමෝහය)',
                labelEn: 'Kusala Citta\n(Non-attachment, Non-aversion, Non-delusion)',
                color: '#27ae60',
                parent: 'root-citta',
                count: 43,
                description: 'විරාගය, අද්වේශය සහ අමෝහය යන ගුණාත්මක භාවයන්ගෙන් සමන්විත කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness composed of the qualities of non-attachment, non-aversion, and non-delusion',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/1-dhammasangani-matika/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-2.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-3.html'
                }
            },
            {
                id: 'akusala-branch',
                label: 'අකුසල් සිත\n(රාගය, ද්වේශය, මෝහය)',
                labelEn: 'Akusala Citta\n(Greed, Hatred, Delusion)',
                color: '#e74c3c',
                parent: 'root-citta',
                count: 12,
                description: 'රාගය, ද්වේශය සහ මෝහය යන අකුසල මූලයන්ගෙන් සමන්විත අකුසල් සිතුවිලි',
                descriptionEn: 'Unwholesome consciousness composed of the unwholesome roots of greed, hatred, and delusion',
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
                    source: 'root-citta',
                    target: division.id,
                    type: 'main-division'
                }
            });
        });

        // Kusala Citta Subdivisions
        const kusalaSubdivisions = [
            {
                id: 'kusala-kamavacara',
                label: 'කාමාවචර\nකුසල් සිත (8)',
                labelEn: 'Kamavacara\nKusala Citta (8)',
                color: '#2ecc71',
                count: 8,
                description: 'කාම භූමියේ විරාගය, අද්වේශය, අමෝහය සහිත කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness in sense sphere with non-attachment, non-aversion, non-delusion',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/3-dhammasangani-kusala/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-5.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-5.html'
                }
            },
            {
                id: 'kusala-rupavacara',
                label: 'රූපාවචර\nකුසල් සිත (15)',
                labelEn: 'Rupavacara\nKusala Citta (15)',
                color: '#f39c12',
                count: 15,
                description: 'රූප භූමියේ ධ්‍යානයන් තුළ විරාගය, අද්වේශය, අමෝහය සහිත කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness in form sphere meditations with non-attachment, non-aversion, non-delusion',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/7-dhammasangani-rupavacara/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-11.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-11.html'
                }
            },
            {
                id: 'kusala-arupavacara',
                label: 'අරූපාවචර\nකුසල් සිත (12)',
                labelEn: 'Arupavacara\nKusala Citta (12)',
                color: '#1abc9c',
                count: 12,
                description: 'අරූප භූමියේ ධ්‍යානයන් තුළ විරාගය, අද්වේශය, අමෝහය සහිත කුසල් සිතුවිලි',
                descriptionEn: 'Wholesome consciousness in formless sphere meditations with non-attachment, non-aversion, non-delusion',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/8-dhammasangani-arupavacara/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-12.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-12.html'
                }
            },
            {
                id: 'kusala-lokuttara',
                label: 'ලෝකෝත්තර\nකුසල් සිත (8)',
                labelEn: 'Lokuttara\nKusala Citta (8)',
                color: '#e67e22',
                count: 8,
                description: 'ලෝකෝත්තර මාර්ගයන් තුළ විරාගය, අද්වේශය, අමෝහය සම්පූර්ණ වූ කුසල් සිතුවිලි',
                descriptionEn: 'Supramundane wholesome consciousness where non-attachment, non-aversion, non-delusion are perfected',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/9-dhammasangani-lokuttara/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-13.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-13.html'
                }
            }
        ];

        // Akusala Citta Subdivisions (Three Roots)
        const akusalaSubdivisions = [
            {
                id: 'akusala-lobha-mula',
                label: 'ලෝභ මූලය\nරාගය (8)',
                labelEn: 'Lobha Mula\n(Greed) (8)',
                color: '#e74c3c',
                count: 8,
                description: 'රාගය මගින් ඇති වන අල්ලා ගැනීම සහ ආශා කිරීම',
                descriptionEn: 'Attachment and desire arising through greed',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/4-dhammasangani-akusala/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-6.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-6.html'
                }
            },
            {
                id: 'akusala-dosa-mula',
                label: 'දෝස මූලය\nද්වේශය (2)',
                labelEn: 'Dosa Mula\n(Hatred) (2)',
                color: '#c0392b',
                count: 2,
                description: 'ද්වේශය මගින් ඇති වන කෝපය සහ පටිඝය',
                descriptionEn: 'Anger and aversion arising through hatred',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/4-dhammasangani-akusala/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-7.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-7.html'
                }
            },
            {
                id: 'akusala-moha-mula',
                label: 'මෝහ මූලය\nඅවිජ්ජාව (2)',
                labelEn: 'Moha Mula\n(Delusion) (2)',
                color: '#a93226',
                count: 2,
                description: 'අවිජ්ජාව මගින් ඇති වන මෝහය සහ මෝඩකම',
                descriptionEn: 'Delusion and foolishness arising through ignorance',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/4-dhammasangani-akusala/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-8.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-8.html'
                }
            }
        ];

        // Add Kusala subdivisions
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
                    source: 'kusala-branch',
                    target: sub.id,
                    type: 'sub-division'
                }
            });
        });

        // Add Akusala subdivisions
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
                    source: 'akusala-branch',
                    target: sub.id,
                    type: 'sub-division'
                }
            });
        });

        // Vipaka Branch
        elements.push({
            data: {
                id: 'vipaka-branch',
                label: 'විපාක චිත්ත\n(Resultant)',
                labelEn: 'Vipaka Citta\n(Resultant)',
                type: 'main-branch',
                color: '#3498db',
                count: 23,
                description: 'කර්ම විපාකයන්ගේ ප්‍රතිඵල චිත්ත',
                descriptionEn: 'Resultant consciousness from karmic effects',
                size: 'medium',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/5-dhammasangani-vipaka/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-9.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-9.html'
                }
            }
        });

        elements.push({
            data: {
                source: 'root-citta',
                target: 'vipaka-branch',
                type: 'main-division'
            }
        });

        // Kiriya Branch
        elements.push({
            data: {
                id: 'kiriya-branch',
                label: 'ක්‍රියා චිත්ත\n(Functional)',
                labelEn: 'Kiriya Citta\n(Functional)',
                type: 'main-branch',
                color: '#9b59b6',
                count: 11,
                description: 'ක්‍රියාත්මක චිත්ත - අරහත් වරුන්ගේ චිත්ත',
                descriptionEn: 'Functional consciousness - consciousness of Arahants',
                size: 'medium',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/6-dhammasangani-kriya/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-10.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-10.html'
                }
            }
        });

        elements.push({
            data: {
                source: 'root-citta',
                target: 'kiriya-branch',
                type: 'main-division'
            }
        });

        // Higher Realms - Rupa-avacara
        elements.push({
            data: {
                id: 'rupa-avacara-branch',
                label: 'රූපාවචර චිත්ත\n(Form Sphere)',
                labelEn: 'Rupa-avacara Citta\n(Form Sphere)',
                type: 'higher-realm',
                color: '#f39c12',
                count: 15,
                description: 'රූප භූමියේ ධ්‍යාන චිත්ත',
                descriptionEn: 'Meditation consciousness in form sphere',
                size: 'medium',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/7-dhammasangani-rupavacara/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-11.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-11.html'
                }
            }
        });

        elements.push({
            data: {
                source: 'root-citta',
                target: 'rupa-avacara-branch',
                type: 'higher-realm-connection'
            }
        });

        // Higher Realms - Arupa-avacara
        elements.push({
            data: {
                id: 'arupa-avacara-branch',
                label: 'අරූපාවචර චිත්ත\n(Formless Sphere)',
                labelEn: 'Arupa-avacara Citta\n(Formless Sphere)',
                type: 'higher-realm',
                color: '#1abc9c',
                count: 12,
                description: 'අරූප භූමියේ ධ්‍යාන චිත්ත',
                descriptionEn: 'Meditation consciousness in formless sphere',
                size: 'medium',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/8-dhammasangani-arupavacara/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-12.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-12.html'
                }
            }
        });

        elements.push({
            data: {
                source: 'root-citta',
                target: 'arupa-avacara-branch',
                type: 'higher-realm-connection'
            }
        });

        // Lokottara Branch
        elements.push({
            data: {
                id: 'lokottara-branch',
                label: 'ලෝකෝත්තර චිත්ත\n(Supramundane)',
                labelEn: 'Lokottara Citta\n(Supramundane)',
                type: 'supramundane',
                color: '#e67e22',
                count: 40,
                description: 'ලෝකයට ඉහළ මාර්ගඵල චිත්ත',
                descriptionEn: 'Supramundane consciousness of path and fruition',
                size: 'medium',
                sources: {
                    tipitaka: 'https://tipitaka.lk/sinhala/sutta-pitaka/abhidhamma-pitaka/dhammasangani/9-dhammasangani-lokuttara/',
                    abhidharmaMargaya: 'https://pitaka.lk/books/abhidharma-margaya/chapter-13.html',
                    mulikaKarunu: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/chapter-13.html'
                }
            }
        });

        elements.push({
            data: {
                source: 'root-citta',
                target: 'lokottara-branch',
                type: 'supramundane-connection'
            }
        });

        // Add detailed citta examples for each major category
        this.addDetailedMindExamples(elements);

        return elements;
    }

    addDetailedMindExamples(elements) {
        // Add detailed mind examples from each major category in the hierarchy
        const detailedExamples = [
            // Kusala Citta Examples
            {
                id: 'kusala-example-1',
                label: 'කාමාවචර කුසල් සිත\n(විරාගය සහිත)',
                labelEn: 'Kamavacara Kusala Citta\n(with non-attachment)',
                parent: 'kusala-kamavacara',
                type: 'detailed-example',
                color: '#27ae60',
                cittaId: 1,
                description: 'කාම භූමියේ විරාගය, අද්වේශය, අමෝහය සහිත කුසල් සිතුවිල්ල',
                descriptionEn: 'Wholesome consciousness in sense sphere with non-attachment, non-aversion, non-delusion'
            },
            {
                id: 'kusala-example-2',
                label: 'රූපාවචර කුසල් සිත\n(ධ්‍යානය)',
                labelEn: 'Rupavacara Kusala Citta\n(Meditation)',
                parent: 'kusala-rupavacara',
                type: 'detailed-example',
                color: '#f39c12',
                cittaId: 101,
                description: 'රූප ධ්‍යානයන් තුළ විරාගය, අද්වේශය, අමෝහය සම්පූර්ණ වූ සිතුවිල්ල',
                descriptionEn: 'Consciousness in form meditations where non-attachment, non-aversion, non-delusion are perfected'
            },

            // Akusala Citta Examples - Three Roots
            {
                id: 'akusala-lobha-example',
                label: 'ලෝභ මූල අකුසල් සිත\n(රාගය මුල්කරගත්)',
                labelEn: 'Lobha Mula Akusala Citta\n(rooted in greed)',
                parent: 'akusala-lobha-mula',
                type: 'detailed-example',
                color: '#e74c3c',
                cittaId: 9,
                description: 'රාගය මගින් ඇති වන අල්ලා ගැනීම සහ ආශා කිරීම',
                descriptionEn: 'Attachment and desire arising through greed'
            },
            {
                id: 'akusala-dosa-example',
                label: 'දෝස මූල අකුසල් සිත\n(ද්වේශය මුල්කරගත්)',
                labelEn: 'Dosa Mula Akusala Citta\n(rooted in hatred)',
                parent: 'akusala-dosa-mula',
                type: 'detailed-example',
                color: '#c0392b',
                cittaId: 17,
                description: 'ද්වේශය මගින් ඇති වන කෝපය සහ පටිඝය',
                descriptionEn: 'Anger and aversion arising through hatred'
            },
            {
                id: 'akusala-moha-example',
                label: 'මෝහ මූල අකුසල් සිත\n(අවිජ්ජාව මුල්කරගත්)',
                labelEn: 'Moha Mula Akusala Citta\n(rooted in delusion)',
                parent: 'akusala-moha-mula',
                type: 'detailed-example',
                color: '#a93226',
                cittaId: 19,
                description: 'අවිජ්ජාව මගින් ඇති වන මෝහය සහ මෝඩකම',
                descriptionEn: 'Delusion and foolishness arising through ignorance'
            },

            // Resultant and Functional Examples
            {
                id: 'vipaka-example',
                label: 'විපාක සිත\n(කර්ම විපාකය)',
                labelEn: 'Vipaka Citta\n(Karmic Result)',
                parent: 'vipaka-branch',
                type: 'detailed-example',
                color: '#3498db',
                cittaId: 25,
                description: 'කර්ම විපාකයන්ගේ ප්‍රතිඵල ලෙස ඇති වන සිතුවිල්ල',
                descriptionEn: 'Consciousness arising as result of karmic actions'
            },
            {
                id: 'kiriya-example',
                label: 'ක්‍රියා සිත\n(අරහත් ක්‍රියාව)',
                labelEn: 'Kiriya Citta\n(Arahant Function)',
                parent: 'kiriya-branch',
                type: 'detailed-example',
                color: '#9b59b6',
                cittaId: 89,
                description: 'අරහත් වරුන්ගේ ක්‍රියාත්මක සිතුවිල්ල',
                descriptionEn: 'Functional consciousness of Arahants'
            }
        ];

        detailedCittas.forEach(citta => {
            elements.push({
                data: {
                    id: citta.id,
                    label: citta.label,
                    labelEn: citta.labelEn,
                    type: citta.type,
                    color: citta.color,
                    size: 'tiny',
                    cittaId: citta.cittaId,
                    description: citta.description,
                    descriptionEn: citta.descriptionEn
                }
            });

            elements.push({
                data: {
                    source: citta.parent,
                    target: citta.id,
                    type: 'detailed-connection'
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
                    'text-max-width': '120px',
                    'font-size': '12px',
                    'font-family': 'Noto Sans Sinhala, sans-serif',
                    'color': '#2c3e50',
                    'background-color': '#ffffff',
                    'border-width': '2px',
                    'border-color': '#bdc3c7',
                    'width': '80px',
                    'height': '80px',
                    'border-radius': '50%'
                }
            },
            {
                selector: 'node[type="root"]',
                style: {
                    'background-color': '#2c3e50',
                    'color': '#ffffff',
                    'width': '120px',
                    'height': '120px',
                    'font-size': '14px',
                    'font-weight': 'bold',
                    'border-width': '3px',
                    'border-color': '#34495e'
                }
            },
            {
                selector: 'node[type="main-branch"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '100px',
                    'height': '100px',
                    'font-size': '13px',
                    'font-weight': 'bold'
                }
            },
            {
                selector: 'node[type="sub-branch"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '90px',
                    'height': '90px',
                    'font-size': '11px'
                }
            },
            {
                selector: 'node[type="higher-realm"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '95px',
                    'height': '95px',
                    'font-size': '12px',
                    'border-style': 'double'
                }
            },
            {
                selector: 'node[type="supramundane"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '110px',
                    'height': '110px',
                    'font-size': '13px',
                    'font-weight': 'bold',
                    'border-style': 'double',
                    'border-width': '4px'
                }
            },
            {
                selector: 'node[type="sample-citta"]',
                style: {
                    'background-color': 'data(color)',
                    'color': '#ffffff',
                    'width': '70px',
                    'height': '70px',
                    'font-size': '10px',
                    'opacity': '0.8'
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
                    'width': '4px',
                    'line-color': '#34495e',
                    'target-arrow-color': '#34495e'
                }
            },
            {
                selector: 'edge[type="higher-realm-connection"]',
                style: {
                    'line-style': 'dashed',
                    'line-color': '#f39c12',
                    'target-arrow-color': '#f39c12'
                }
            },
            {
                selector: 'edge[type="supramundane-connection"]',
                style: {
                    'line-style': 'dashed',
                    'line-color': '#e67e22',
                    'target-arrow-color': '#e67e22',
                    'width': '5px'
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

            if (nodeData.type === 'sample-citta') {
                this.showCittaDetails(nodeData);
            } else {
                this.showCategoryDetails(nodeData);
            }
        });

        // Tooltip on mouseover
        this.cy.on('mouseover', 'node', (event) => {
            const node = event.target;
            this.showTooltip(event, node.data());
        });

        this.cy.on('mouseout', 'node', () => {
            this.hideTooltip();
        });

        // Language switching
        const languageSwitcher = document.getElementById('languageSwitcher');
        if (languageSwitcher) {
            languageSwitcher.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    showCittaDetails(nodeData) {
        // Navigate to citta detail page based on the citta ID
        if (nodeData.cittaId) {
            const cittaId = nodeData.cittaId;
            const detailPageUrl = `citta-${cittaId}-detailed-page.html`;

            // Check if the page exists, otherwise show information modal
            fetch(detailPageUrl, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        window.open(detailPageUrl, '_blank');
                    } else {
                        this.showCittaInfoModal(nodeData);
                    }
                })
                .catch(() => {
                    this.showCittaInfoModal(nodeData);
                });
        } else {
            this.showCittaInfoModal(nodeData);
        }
    }

    showCittaInfoModal(nodeData) {
        // Show detailed information about the citta in a modal
        const existingModal = document.getElementById('cittaInfoModal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'cittaInfoModal';
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
            ${nodeData.cittaId ? `<p style="text-align: center; color: #666; margin-bottom: 20px;">චිත්ත අංකය: ${nodeData.cittaId}</p>` : ''}
            <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">${description}</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="margin-top: 0; color: #495057;">අභිධර්මයේ ස්ථානය:</h4>
                <p style="margin: 0; color: #666;">
                    මෙම චිත්තය අභිධර්මයේ ධම්මසංගණියෙහි විස්තරාත්මකව විස්තර කර ඇත.
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
                <button onclick="document.getElementById('cittaInfoModal').remove()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer;">
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

    showCategoryDetails(nodeData) {
        // Show category information and provide source navigation options
        console.log('Showing details for category:', nodeData);

        const description = this.currentLanguage === 'si' ? nodeData.description : nodeData.descriptionEn;
        const label = this.currentLanguage === 'si' ? nodeData.label : nodeData.labelEn;

        // Create a modal-like interface for source selection
        this.showSourceSelectionModal(nodeData, label, description);
    }

    showSourceSelectionModal(nodeData, label, description) {
        // Remove existing modal if present
        const existingModal = document.getElementById('sourceSelectionModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal element
        const modal = document.createElement('div');
        modal.id = 'sourceSelectionModal';
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

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;

        modalContent.innerHTML = `
            <h3 style="margin-top: 0; color: #2c3e50; text-align: center;">${label}</h3>
            <p style="color: #666; text-align: center; margin-bottom: 25px;">${description}</p>

            <div style="margin-bottom: 25px;">
                <h4 style="color: #495057; margin-bottom: 15px;">අභිධර්මය ගැඹුරින් අධ්‍යනය කිරීම සඳහා මූලාශ්‍ර ග්‍රන්ථ:</h4>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${nodeData.sources ? `
                        <a href="${nodeData.sources.tipitaka}" target="_blank" style="display: flex; align-items: center; padding: 12px; background: #e3f2fd; color: #1976d2; text-decoration: none; border-radius: 6px; transition: background 0.3s;">
                            <i class="fas fa-book-open" style="margin-right: 10px;"></i>
                            ත්‍රිපිටකය (Tipitaka)
                        </a>
                        <a href="${nodeData.sources.abhidharmaMargaya}" target="_blank" style="display: flex; align-items: center; padding: 12px; background: #f3e5f5; color: #7b1fa2; text-decoration: none; border-radius: 6px; transition: background 0.3s;">
                            <i class="fas fa-book" style="margin-right: 10px;"></i>
                            අභිධර්ම මාර්ගය
                        </a>
                        <a href="${nodeData.sources.mulikaKarunu}" target="_blank" style="display: flex; align-items: center; padding: 12px; background: #e8f5e8; color: #388e3c; text-decoration: none; border-radius: 6px; transition: background 0.3s;">
                            <i class="fas fa-graduation-cap" style="margin-right: 10px;"></i>
                            අභිධර්මයේ මුලික කරුණු
                        </a>
                    ` : '<p style="color: #666; font-style: italic;">මූලාශ්‍ර සම්බන්ධතා නොමැති</p>'}
                </div>
            </div>

            <div style="text-align: center;">
                <button onclick="document.getElementById('sourceSelectionModal').remove()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer;">
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
            ${nodeData.count ? `<br><em>ගණන: ${nodeData.count}</em>` : ''}
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

        // Update all bilingual HTML elements
        this.updateBilingualElements();
    }

    updateBilingualElements() {
        // Update all elements with data-si and data-en attributes
        const bilingualElements = document.querySelectorAll('[data-si], [data-en]');
        bilingualElements.forEach(element => {
            const text = this.currentLanguage === 'si' ?
                element.getAttribute('data-si') :
                element.getAttribute('data-en');

            if (text) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = text;
                } else if (element.hasAttribute('data-si-text') || element.hasAttribute('data-en-text')) {
                    // For buttons with separate text attributes
                    const buttonText = this.currentLanguage === 'si' ?
                        element.getAttribute('data-si-text') :
                        element.getAttribute('data-en-text');
                    if (buttonText) {
                        // Update only the text content, keeping the icon
                        const icon = element.querySelector('i');
                        if (icon) {
                            element.innerHTML = icon.outerHTML + ' ' + buttonText;
                        } else {
                            element.textContent = buttonText;
                        }
                    }
                } else {
                    element.textContent = text;
                }
            }
        });
    }

    applyInitialLayout() {
        const layout = this.cy.layout({
            name: 'breadthfirst',
            directed: true,
            roots: '#root-citta',
            spacingFactor: 1.5,
            padding: 50,
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
                targetNode = this.cy.getElementById('kusala-branch');
                break;
            case 'akusala':
                targetNode = this.cy.getElementById('akusala-branch');
                break;
            default:
                return;
        }

        if (targetNode.length > 0) {
            this.cy.animate({
                center: { eles: targetNode },
                zoom: 1.8,
                duration: 800
            });
            targetNode.select();
        }
    }

    showOverview() {
        this.cy.animate({
            center: { eles: this.cy.getElementById('root-citta') },
            zoom: 0.8,
            duration: 1000
        });
    }

    exportDiagram() {
        // Export as PNG
        const png = this.cy.png({
            full: true,
            scale: 2,
            bgcolor: '#ffffff'
        });

        // Create download link
        const link = document.createElement('a');
        link.href = png;
        link.download = 'citta-fishbone-diagram.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    searchCitta(searchTerm) {
        if (!searchTerm || searchTerm.trim() === '') {
            this.clearSearch();
            return;
        }

        const term = searchTerm.toLowerCase().trim();
        let foundNode = null;

        // Search through all nodes
        this.cy.nodes().forEach(node => {
            const nodeData = node.data();
            const label = this.currentLanguage === 'si' ? nodeData.label : (nodeData.labelEn || nodeData.label);
            const description = this.currentLanguage === 'si' ? nodeData.description : (nodeData.descriptionEn || nodeData.description);

            if (label && label.toLowerCase().includes(term)) {
                foundNode = node;
                return false; // Break the loop
            }

            if (description && description.toLowerCase().includes(term)) {
                foundNode = node;
                return false; // Break the loop
            }

            if (nodeData.cittaId && nodeData.cittaId.toString().includes(term)) {
                foundNode = node;
                return false; // Break the loop
            }
        });

        if (foundNode) {
            // Highlight and center the found node
            this.cy.nodes().removeClass('highlighted');
            foundNode.addClass('highlighted');

            this.cy.animate({
                center: { eles: foundNode },
                zoom: 2.0,
                duration: 800
            });

            foundNode.select();

            // Show tooltip
            this.showTooltip({ originalEvent: { clientX: window.innerWidth / 2, clientY: 100 } }, foundNode.data());
        } else {
            alert('සොයන චිත්තය හෝ කාණ්ඩය සොයාගත නොහැකි විය. (Citta or category not found)');
        }
    }

    clearSearch() {
        this.cy.nodes().removeClass('highlighted');
        this.cy.nodes().unselect();

        // Clear search input
        const searchInput = document.getElementById('cittaSearchInput');
        if (searchInput) {
            searchInput.value = '';
        }

        // Reset view
        this.showOverview();
        this.hideTooltip();
    }
}
