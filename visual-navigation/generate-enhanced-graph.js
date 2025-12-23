/**
 * Enhanced Graph Data Generator
 * Combines Google Drive Abhidhamma data + All Website data
 * Root: සිත (Citta) as the fundamental starting point
 */

const fs = require('fs');
const path = require('path');

// Read existing graph data
const existingDataPath = path.join(__dirname, 'graph-data.json');
const existingData = JSON.parse(fs.readFileSync(existingDataPath, 'utf8'));

// New root and Google Drive data
const googleDriveNodes = [
    // ============================================================
    // ROOT: සිත (The Supreme Root - Fundamental Phenomenon)
    // ============================================================
    {
        id: 'citta-supreme-root',
        type: 'supreme-root',
        label: 'සිත\n(මනස)',
        labelEn: 'Citta\n(Consciousness)',
        color: '#1565c0',
        description: 'අභිධර්මයේ මූලික සිදුවීම - චිත්තය යනු අරමුණ සිතන මනස',
        descriptionEn: 'The fundamental phenomenon of Abhidhamma - Citta is the mind that knows objects',
        size: 'extra-large',
        category: 'root'
    },

    // ============================================================
    // LEVEL 1: පරමාර්ථ ධර්ම 4 (4 Ultimate Realities)
    // From Google Drive 001 Tute.jpg
    // ============================================================
    {
        id: 'paramartha-citta',
        type: 'paramartha-dharma',
        label: 'චිත්තය\n(89/121)',
        labelEn: 'Citta\n(89/121)',
        color: '#3498db',
        count: 89,
        description: 'සත්ව ලොකයේ සිතුවිලි 89ක් හෝ 121ක්',
        size: 'large',
        category: 'paramartha'
    },
    {
        id: 'paramartha-cetasika',
        type: 'paramartha-dharma',
        label: 'චෛතසිකය\n(52)',
        labelEn: 'Cetasika\n(52)',
        color: '#2ecc71',
        count: 52,
        description: 'මානසික සාධක 52',
        size: 'large',
        category: 'paramartha'
    },
    {
        id: 'paramartha-rupa',
        type: 'paramartha-dharma',
        label: 'රූපය\n(28)',
        labelEn: 'Rupa\n(28)',
        color: '#e74c3c',
        count: 28,
        description: 'ද්‍රව්‍යමය ස්වභාවයන් 28',
        size: 'large',
        category: 'paramartha'
    },
    {
        id: 'paramartha-nibbana',
        type: 'paramartha-dharma',
        label: 'නිබ්බාන\n(අසංස්කත)',
        labelEn: 'Nibbana\n(Unconditioned)',
        color: '#f39c12',
        count: 1,
        description: 'එකම අසංස්කත පරමාර්ථ ධර්මය',
        size: 'large',
        category: 'paramartha'
    },

    // ============================================================
    // LEVEL 2: චිත්ත වීථිය (Citta Vithi - 17 Steps)
    // From Google Drive 008 Tute.jpg - චක්ඛුද්වාරික වීථිය
    // ============================================================
    {
        id: 'citta-vithi-group',
        type: 'citta-vithi-group',
        label: 'චිත්ත වීථිය\n(17 පියවර)',
        labelEn: 'Citta Vithi\n(17 Steps)',
        color: '#ff6f00',
        description: 'චක්ඛුද්වාරික අතිමහන්තාරම්මණ වීථිය - සිතක් ක්‍රියාත්මක වන ආකාරය',
        descriptionEn: 'Eye-door thought process - How consciousness operates',
        size: 'large',
        category: 'vithi'
    },

    // Individual Vithi Steps
    { id: 'vithi-1', type: 'vithi-step', label: '1. අතීත භවංග', labelEn: '1. Past Bhavanga', color: '#ff6f00', order: 1, size: 'small', category: 'vithi' },
    { id: 'vithi-2', type: 'vithi-step', label: '2. භවංග කලන්', labelEn: '2. Bhavanga Calana', color: '#ff6f00', order: 2, size: 'small', category: 'vithi' },
    { id: 'vithi-3', type: 'vithi-step', label: '3. භවංග උපච්ඡේද', labelEn: '3. Bhavanga Upaccheda', color: '#ff6f00', order: 3, size: 'small', category: 'vithi' },
    { id: 'vithi-4', type: 'vithi-step', label: '4. පඤ්චද්වාරාවර්ජන', labelEn: '4. Pañcadvārāvajjana', color: '#ff6f00', order: 4, size: 'small', category: 'vithi' },
    { id: 'vithi-5', type: 'vithi-step', label: '5. චක්ඛු විඤ්ඤාණ', labelEn: '5. Cakkhu Viññāṇa', color: '#ff6f00', order: 5, size: 'small', category: 'vithi' },
    { id: 'vithi-6', type: 'vithi-step', label: '6. සම්පටිච්ඡන', labelEn: '6. Sampaṭicchana', color: '#ff6f00', order: 6, size: 'small', category: 'vithi' },
    { id: 'vithi-7', type: 'vithi-step', label: '7. සන්තීරණ', labelEn: '7. Santīraṇa', color: '#ff6f00', order: 7, size: 'small', category: 'vithi' },
    { id: 'vithi-8', type: 'vithi-step', label: '8. වෝට්ඨප්බන', labelEn: '8. Voṭṭhapana', color: '#ff6f00', order: 8, size: 'small', category: 'vithi' },
    { id: 'vithi-9', type: 'vithi-step', label: '9. ජවන 1', labelEn: '9. Javana 1', color: '#ff6f00', order: 9, size: 'small', category: 'vithi' },
    { id: 'vithi-10', type: 'vithi-step', label: '10. ජවන 2', labelEn: '10. Javana 2', color: '#ff6f00', order: 10, size: 'small', category: 'vithi' },
    { id: 'vithi-11', type: 'vithi-step', label: '11. ජවන 3', labelEn: '11. Javana 3', color: '#ff6f00', order: 11, size: 'small', category: 'vithi' },
    { id: 'vithi-12', type: 'vithi-step', label: '12. ජවන 4', labelEn: '12. Javana 4', color: '#ff6f00', order: 12, size: 'small', category: 'vithi' },
    { id: 'vithi-13', type: 'vithi-step', label: '13. ජවන 5', labelEn: '13. Javana 5', color: '#ff6f00', order: 13, size: 'small', category: 'vithi' },
    { id: 'vithi-14', type: 'vithi-step', label: '14. ජවන 6', labelEn: '14. Javana 6', color: '#ff6f00', order: 14, size: 'small', category: 'vithi' },
    { id: 'vithi-15', type: 'vithi-step', label: '15. ජවන 7', labelEn: '15. Javana 7', color: '#ff6f00', order: 15, size: 'small', category: 'vithi' },
    { id: 'vithi-16', type: 'vithi-step', label: '16. තදාරම්මණ 1', labelEn: '16. Tadārammaṇa 1', color: '#ff6f00', order: 16, size: 'small', category: 'vithi' },
    { id: 'vithi-17', type: 'vithi-step', label: '17. තදාරම්මණ 2', labelEn: '17. Tadārammaṇa 2', color: '#ff6f00', order: 17, size: 'small', category: 'vithi' },

    // ============================================================
    // LEVEL 3: රූප 28 (28 Material Forms)
    // From Google Drive 001, 002, 003 Tute.jpg
    // ============================================================
    {
        id: 'rupa-mahabhuta',
        type: 'rupa-group',
        label: 'මහා භූත රූප (4)',
        labelEn: 'Mahābhūta Rūpa (4)', color: '#c0392b',
        description: 'පඨවී, ආපෝ, තේජෝ, වායෝ - චතුර් මහාභූත',
        size: 'medium',
        category: 'rupa'
    },
    {
        id: 'rupa-pasada',
        type: 'rupa-group',
        label: 'පසාද රූප (5)',
        labelEn: 'Pasāda Rūpa (5)',
        color: '#c0392b',
        description: 'චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය - පඤ්චප්‍රසාද',
        size: 'medium',
        category: 'rupa'
    },
    {
        id: 'rupa-gocara',
        type: 'rupa-group',
        label: 'ගෝචර රූප (7)',
        labelEn: 'Gocara Rūpa (7)',
        color: '#c0392b',
        description: 'වර්ණ, ගන්ධ, රස, ඔජා, ෆොට්ඨබ්බ, ඉත්ථිත්ත, පුරිසත්ත',
        size: 'medium',
        category: 'rupa'
    },
    {
        id: 'rupa-hridaya',
        type: 'rupa-special',
        label: 'හෘදය වස්තු රූප',
        labelEn: 'Hṛdaya Vatthu Rūpa',
        color: '#c0392b',
        description: 'මනෝ ද්වාරය - සිතේ වාසස්ථානය',
        size: 'medium',
        category: 'rupa'
    },

    // ============================================================
    // LEVEL 4: විඤ්ඤාණ ධාතු 7 (7 Consciousness Elements)
    // From Google Drive 004 Tute.jpg
    // ============================================================
    {
        id: 'vinnana-dhatu-group',
        type: 'vinnana-group',
        label: 'විඤ්ඤාණ ධාතු (7)',
        labelEn: 'Viññāṇa Dhātu (7)',
        color: '#8e44ad',
        description: 'චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය, මනෝ විඤ්ඤාණ',
        size: 'medium',
        category: 'vinnana'
    },

    // ============================================================
    // LEVEL 5: සිත් 89 බෙදීම් (89 Citta Classifications)
    // From Google Drive 005, 007 Tute.jpg
    // ============================================================
    {
        id: 'kamavacara-citta',
        type: 'citta-bhumi',
        label: 'කාමාවචර සිත් (54)',
        labelEn: 'Kāmāvacara Citta (54)',
        color: '#16a085',
        count: 54,
        description: 'කාම භූමියේ සිතුවිලි',
        size: 'large',
        category: 'bhumi'
    },
    {
        id: 'rupavacara-citta',
        type: 'citta-bhumi',
        label: 'රූපාවචර සිත් (15)',
        labelEn: 'Rūpāvacara Citta (15)',
        color: '#f39c12',
        count: 15,
        description: 'රූප භූමියේ ධ්‍යාන සිතුවිලි',
        size: 'large',
        category: 'bhumi'
    },
    {
        id: 'arupavacara-citta',
        type: 'citta-bhumi',
        label: 'අරූපාවචර සිත් (12)',
        labelEn: 'Arūpāvacara Citta (12)',
        color: '#8e44ad',
        count: 12,
        description: 'අරූප භූමියේ ධ්‍යාන සිතුවිලි',
        size: 'large',
        category: 'bhumi'
    },
    {
        id: 'lokuttara-citta',
        type: 'citta-bhumi',
        label: 'ලෝකෝත්තර සිත් (8)',
        labelEn: 'Lokuttara Citta (8)',
        color: '#e67e22',
        count: 8,
        description: 'මාර්ග ඵල සිතුවිලි',
        size: 'large',
        category: 'bhumi'
    },

    // Kāmāvacara subdivisions
    {
        id: 'akusala-citta-group',
        type: 'citta-jati',
        label: 'අකුසල් සිත් (12)',
        labelEn: 'Akusala Citta (12)',
        color: '#e74c3c',
        count: 12,
        description: 'ලෝභ 8, ද්වේශ 2, මෝහ 2',
        size: 'medium',
        category: 'jati'
    },
    {
        id: 'ahetuka-citta-group',
        type: 'citta-jati',
        label: 'අහේතුක සිත් (18)',
        labelEn: 'Ahetuka Citta (18)',
        color: '#95a5a6',
        count: 18,
        description: 'හේතු රහිත සිතුවිලි',
        size: 'medium',
        category: 'jati'
    },
    {
        id: 'kamavacara-kusala',
        type: 'citta-jati',
        label: 'කාමාවචර කුසල් (8)',
        labelEn: 'Kāmāvacara Kusala (8)',
        color: '#27ae60',
        count: 8,
        size: 'medium',
        category: 'jati'
    },
    {
        id: 'kamavacara-vipaka',
        type: 'citta-jati',
        label: 'කාමාවචර විපාක (8)',
        labelEn: 'Kāmāvacara Vipāka (8)',
        color: '#3498db',
        count: 8,
        size: 'medium',
        category: 'jati'
    },
    {
        id: 'kamavacara-kiriya',
        type: 'citta-jati',
        label: 'කාමාවචර ක්‍රියා (8)',
        labelEn: 'Kāmāvacara Kiriyā (8)',
        color: '#9b59b6',
        count: 8,
        size: 'medium',
        category: 'jati'
    }
];

// New edges connecting Google Drive data
const googleDriveEdges = [
    // Connect ROOT සිත to පරමාර්ථ ධර්ම 4
    { id: 'edge-root-paramartha-citta', source: 'citta-supreme-root', target: 'paramartha-citta', type: 'fundamental-division', strength: 'strong' },
    { id: 'edge-root-paramartha-cetasika', source: 'citta-supreme-root', target: 'paramartha-cetasika', type: 'fundamental-division', strength: 'strong' },
    { id: 'edge-root-paramartha-rupa', source: 'citta-supreme-root', target: 'paramartha-rupa', type: 'fundamental-division', strength: 'strong' },
    { id: 'edge-root-paramartha-nibbana', source: 'citta-supreme-root', target: 'paramartha-nibbana', type: 'fundamental-division', strength: 'strong' },

    // Connect ROOT සිත to existing navigation hub
    { id: 'edge-root-navigation', source: 'citta-supreme-root', target: 'navigation-hub', type: 'website-connection', strength: 'strong' },

    // Connect පරමාර්ථ චිත්තය to චිත්ත වීථිය
    { id: 'edge-citta-vithi', source: 'paramartha-citta', target: 'citta-vithi-group', type: 'process-connection', strength: 'strong' },

    // Connect විථි steps sequentially
    { id: 'edge-vithi-group-1', source: 'citta-vithi-group', target: 'vithi-1', type: 'vithi-contains', strength: 'medium' },
    { id: 'edge-vithi-1-2', source: 'vithi-1', target: 'vithi-2', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-2-3', source: 'vithi-2', target: 'vithi-3', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-3-4', source: 'vithi-3', target: 'vithi-4', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-4-5', source: 'vithi-4', target: 'vithi-5', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-5-6', source: 'vithi-5', target: 'vithi-6', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-6-7', source: 'vithi-6', target: 'vithi-7', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-7-8', source: 'vithi-7', target: 'vithi-8', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-8-9', source: 'vithi-8', target: 'vithi-9', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-9-10', source: 'vithi-9', target: 'vithi-10', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-10-11', source: 'vithi-10', target: 'vithi-11', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-11-12', source: 'vithi-11', target: 'vithi-12', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-12-13', source: 'vithi-12', target: 'vithi-13', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-13-14', source: 'vithi-13', target: 'vithi-14', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-14-15', source: 'vithi-14', target: 'vithi-15', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-15-16', source: 'vithi-15', target: 'vithi-16', type: 'vithi-sequence', strength: 'weak' },
    { id: 'edge-vithi-16-17', source: 'vithi-16', target: 'vithi-17', type: 'vithi-sequence', strength: 'weak' },

    // Connect පරමාර්ථ රූපය to රූප groups
    { id: 'edge-rupa-mahabhuta', source: 'paramartha-rupa', target: 'rupa-mahabhuta', type: 'rupa-division', strength: 'strong' },
    { id: 'edge-rupa-pasada', source: 'paramartha-rupa', target: 'rupa-pasada', type: 'rupa-division', strength: 'strong' },
    { id: 'edge-rupa-gocara', source: 'paramartha-rupa', target: 'rupa-gocara', type: 'rupa-division', strength: 'strong' },
    { id: 'edge-rupa-hridaya', source: 'paramartha-rupa', target: 'rupa-hridaya', type: 'rupa-division', strength: 'strong' },

    // Connect විඤ්ඤාණ ධාතු
    { id: 'edge-vinnana-dhatu', source: 'paramartha-citta', target: 'vinnana-dhatu-group', type: 'consciousness-element', strength: 'medium' },

    // Connect සිත් 89 බෙදීම් (Bhumi divisions)
    { id: 'edge-citta-kamavacara', source: 'paramartha-citta', target: 'kamavacara-citta', type: 'bhumi-division', strength: 'strong' },
    { id: 'edge-citta-rupavacara', source: 'paramartha-citta', target: 'rupavacara-citta', type: 'bhumi-division', strength: 'strong' },
    { id: 'edge-citta-arupavacara', source: 'paramartha-citta', target: 'arupavacara-citta', type: 'bhumi-division', strength: 'strong' },
    { id: 'edge-citta-lokuttara', source: 'paramartha-citta', target: 'lokuttara-citta', type: 'bhumi-division', strength: 'strong' },

    // Connect කාමාවචර subdivisions
    { id: 'edge-kamavacara-akusala', source: 'kamavacara-citta', target: 'akusala-citta-group', type: 'jati-division', strength: 'medium' },
    { id: 'edge-kamavacara-ahetuka', source: 'kamavacara-citta', target: 'ahetuka-citta-group', type: 'jati-division', strength: 'medium' },
    { id: 'edge-kamavacara-kusala', source: 'kamavacara-citta', target: 'kamavacara-kusala', type: 'jati-division', strength: 'medium' },
    { id: 'edge-kamavacara-vipaka', source: 'kamavacara-citta', target: 'kamavacara-vipaka', type: 'jati-division', strength: 'medium' },
    { id: 'edge-kamavacara-kiriya', source: 'kamavacara-citta', target: 'kamavacara-kiriya', type: 'jati-division', strength: 'medium' },

    // Connect to existing citta groups
    { id: 'edge-paramartha-existing-akusala', source: 'akusala-citta-group', target: 'akusala-citta-group', type: 'integration', strength: 'medium' },
    { id: 'edge-paramartha-existing-kusala', source: 'kamavacara-kusala', target: 'kusala-citta-group', type: 'integration', strength: 'medium' },
    { id: 'edge-paramartha-existing-vipaka', source: 'kamavacara-vipaka', target: 'vipaka-citta-group', type: 'integration', strength: 'medium' },
    { id: 'edge-paramartha-existing-kiriya', source: 'kamavacara-kiriya', target: 'kiriya-citta-group', type: 'integration', strength: 'medium' },

    // Connect to existing cetasika groups
    { id: 'edge-paramartha-existing-cetasikas', source: 'paramartha-cetasika', target: 'universal-cetasikas-group', type: 'integration', strength: 'strong' },
    { id: 'edge-paramartha-existing-particular', source: 'paramartha-cetasika', target: 'particular-cetasikas-group', type: 'integration', strength: 'strong' },
    { id: 'edge-paramartha-existing-akusala-cet', source: 'paramartha-cetasika', target: 'akusala-cetasikas-group', type: 'integration', strength: 'strong' },
    { id: 'edge-paramartha-existing-sobhana', source: 'paramartha-cetasika', target: 'sobhana-cetasikas-group', type: 'integration', strength: 'strong' }
];

// Combine all data
const enhancedData = {
    metadata: {
        ...existingData.metadata,
        version: '4.0',
        description: 'Complete knowledge mesh: Google Drive Abhidhamma data + All website content - Starting from සිත',
        lastUpdated: new Date().toISOString(),
        entryPoints: ['citta-supreme-root'],
        rootNode: 'citta-supreme-root',
        totalNodes: existingData.nodes.length + googleDriveNodes.length,
        totalEdges: existingData.edges.length + googleDriveEdges.length,
        googleDriveIntegrated: true,
        paramarathaDharmaIncluded: true,
        cittaVithiIncluded: true,
        rupa28Included: true
    },
    nodes: [
        ...googleDriveNodes,
        ...existingData.nodes
    ],
    edges: [
        ...googleDriveEdges,
        ...existingData.edges
    ]
};

// Write enhanced data
const outputPath = path.join(__dirname, 'graph-data-enhanced.json');
fs.writeFileSync(outputPath, JSON.stringify(enhancedData, null, 2), 'utf8');

console.log('✅ Enhanced graph data generated successfully!');
console.log(`📊 Total Nodes: ${enhancedData.nodes.length}`);
console.log(`🔗 Total Edges: ${enhancedData.edges.length}`);
console.log(`📁 Output: ${outputPath}`);
console.log('\n🎯 New Root: සිත (citta-supreme-root)');
console.log('⚡ පරමාර්ථ ධර්ම 4 included');
console.log('📊 චිත්ත වීථිය (17 steps) included');
console.log('🎨 රූප 28 groups included');
console.log('🔗 All website data connected');
