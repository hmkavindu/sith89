/**
 * Generate Complete Visual Navigation Mesh
 * Creates a comprehensive fishbone/graph mesh connecting ALL website content
 * Allows users to learn by switching between related data points
 */

const fs = require('fs');
const path = require('path');

// Read all source data
const abhidhammaData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../abhidhamma-complete-data.json'), 'utf8')
);

// Read current graph data
const currentGraphData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'graph-data.json'), 'utf8')
);

// Read mental states data if available
let mentalStatesData = {};
try {
  mentalStatesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../mental-states-data.json'), 'utf8')
  );
} catch (e) {
  console.log('Mental states data not found, will create basic structure');
}

// Color mapping based on category
const categoryColors = {
  'අකුසල්': {
    'ලෝභ මූල 8': '#ff8e8e',  // Raga - light red
    'දෝස මූල 2': '#ffcc80',   // Dwesha - light orange
    'මෝහ මූල 2': '#adb5bd'    // Moha - light gray
  },
  'කුසල්': '#2ecc71',          // Kusala - green
  'විපාක': '#3498db',          // Vipaka - blue
  'ක්‍රියා': '#9b59b6'         // Kiriya - purple
};

// Cetasika category colors
const cetasikaCategoryColors = {
  'universal': '#3498db',      // Blue for universal
  'particular': '#16a085',     // Teal for particular
  'akusala': '#e74c3c',        // Red for unwholesome
  'sobhana': '#2ecc71'         // Green for beautiful
};

// Get parent group ID for a citta
function getParentGroupId(citta) {
  // Akusala cittas (1-12)
  if (citta.category === 'අකුසල්') {
    if (citta.subcategory === 'ලෝභ මූල 8' || (citta.id >= 1 && citta.id <= 8)) return 'raga-cittas';
    if (citta.subcategory === 'දෝස මූල 2' || (citta.id >= 9 && citta.id <= 10)) return 'dwesha-cittas';
    if (citta.subcategory === 'මෝහ මූල 2' || (citta.id >= 11 && citta.id <= 12)) return 'moha-cittas';
  }
  
  // Ahetuka (Rootless) cittas are Vipaka (13-30 approximately)
  if (citta.category === 'අහේතුක') {
    return 'vipaka-cittas';
  }
  
  // Kusala cittas
  if (citta.category === 'කුසල්' || citta.categoryEn === 'Wholesome') {
    return 'kusala-cittas';
  }
  
  // Vipaka cittas
  if (citta.category === 'විපාක' || citta.categoryEn === 'Resultant') {
    return 'vipaka-cittas';
  }
  
  // Kiriya cittas
  if (citta.category === 'ක්‍රියා' || citta.categoryEn === 'Functional') {
    return 'kiriya-cittas';
  }
  
  // Default: categorize by ID ranges if category is unclear
  // Cittas 1-12: Akusala (already handled above)
  // Cittas 13-30: Ahetuka Vipaka
  // Cittas 31-52: Sahetuka Vipaka  
  // Cittas 53-69: Kusala
  // Cittas 70-89: Kiriya/Vipaka (need to check)
  
  if (citta.id >= 13 && citta.id <= 30) return 'vipaka-cittas';
  if (citta.id >= 31 && citta.id <= 52) return 'vipaka-cittas';
  if (citta.id >= 53 && citta.id <= 69) return 'kusala-cittas';
  if (citta.id >= 70 && citta.id <= 89) return 'kiriya-cittas';
  
  // Fallback: if we can't determine, assign to vipaka (most common)
  return 'vipaka-cittas';
}

// Get color for a citta
function getCittaColor(citta) {
  if (citta.category === 'අකුසල්') {
    if (citta.id >= 1 && citta.id <= 8) return '#ff8e8e';  // Raga
    if (citta.id >= 9 && citta.id <= 10) return '#ffcc80'; // Dwesha
    if (citta.id >= 11 && citta.id <= 12) return '#adb5bd'; // Moha
    return categoryColors['අකුසල්'][citta.subcategory] || '#e74c3c';
  }
  if (citta.category === 'අහේතුක') return '#3498db'; // Vipaka blue
  if (citta.category === 'කුසල්') return '#2ecc71'; // Kusala green
  if (citta.category === 'විපාක') return '#3498db'; // Vipaka blue
  if (citta.category === 'ක්‍රියා') return '#9b59b6'; // Kiriya purple
  
  // Fallback by ID range
  if (citta.id >= 13 && citta.id <= 69) return '#3498db'; // Vipaka/Kusala
  if (citta.id >= 70 && citta.id <= 89) return '#9b59b6'; // Kiriya
  
  return '#95a5a6'; // Default gray
}

// Generate cetasika ID from Sinhala name
function getCetasikaId(sinhalaName) {
  // Convert Sinhala to simple ID
  const idMap = {
    'ඵස්ස': 'phasa',
    'වේදනා': 'vedana',
    'සංඤ්ඤා': 'sanna',
    'චේතනා': 'cetana',
    'ඒකග්ගතා': 'ekaggata',
    'ජීවිතින්ද්‍රිය': 'jivitindriya',
    'මනසිකාර': 'manasikara',
    'විතක්ක': 'vitakka',
    'විචාර': 'vicara',
    'අධිමොක්ඛ': 'adhimokkha',
    'විරිය': 'viriya',
    'පීති': 'piti',
    'ඡන්ද': 'chanda',
    'මෝහ': 'moha',
    'අහිරික': 'ahirika',
    'අනොත්තප්ප': 'anottappa',
    'උද්ධච්ච': 'uddhacca',
    'ලෝභ': 'lobha',
    'දිට්ඨි': 'ditthi',
    'මාන': 'mana',
    'දෝස': 'dosa',
    'ඉස්සාව': 'issa',
    'මච්ඡරිය': 'macchariya',
    'කුක්කුච්ච': 'kukkucca',
    'ථීන': 'thina',
    'මිද්ධ': 'middha',
    'විචිකිච්ඡාව': 'vicikiccha',
    'සද්ධාව': 'saddha',
    'සතිය': 'sati',
    'හිරිය': 'hiri',
    'ඔත්තප්පය': 'ottappa',
    'අලෝභය': 'alobha',
    'අදෝසය(මෛත්‍රිය)': 'adosa',
    'තත්‍රමජ්ඣත්තථාව': 'tatra-majjhattata',
    'කායපස්සද්ධිය': 'kayapassaddhi',
    'චිත්තපස්සද්ධිය': 'cittapassaddhi',
    'කායලහුතාව': 'kayalahuta',
    'චිත්තලහුතාව': 'cittalahuta',
    'කායමුදුතාව': 'kayamuduta',
    'චිත්තමුදුතාව': 'cittamuduta',
    'කායකම්මඤ්ඤතාව': 'kayakammannata',
    'චිත්තකම්මඤ්ඤතාව': 'cittakammannata',
    'කායපාගුඤ්ඤතාව': 'kayapagunnata',
    'චිත්තපාගුඤ්ඤතාව': 'cittapagunnata',
    'කායුජ්ජුග්ගතාව': 'kayujjugata',
    'චිත්තුජ්ජුග්ගතාව': 'cittujjugata',
    'සම්මා වාචාව': 'samma-vaca',
    'සම්මා කම්මන්තය': 'samma-kammanta',
    'සම්මා ආජීවය': 'samma-ajiva',
    'කරුණාව': 'karuna',
    'මුදිතාව': 'mudita',
    'ප්‍රඥාව (අමෝහය)': 'panna'
  };
  return idMap[sinhalaName] || sinhalaName.toLowerCase().replace(/[^\w]/g, '-');
}

// Generate comprehensive knowledge mesh
function generateCompleteGraph() {
  const newGraphData = {
    metadata: {
      ...currentGraphData.metadata,
      version: "3.0",
      description: "Complete fishbone knowledge mesh connecting ALL website content for interactive learning",
      structure: "complete-fishbone-mesh",
      lastUpdated: new Date().toISOString(),
      totalNodes: 0,
      totalEdges: 0,
      navigationPaths: [
        "homepage-cards → analysis-pages → citta-groups → individual-cittas → cetasikas",
        "mental-states → related-cittas → associated-cetasikas → dhamma-teachings",
        "categories → citta-comparison → cetasika-analysis → cross-references"
      ]
    },
    nodes: [],
    edges: []
  };

  console.log('🔗 Building comprehensive knowledge mesh...');

  // ===== CORE NAVIGATION HUB =====
  const coreHub = {
    id: 'navigation-hub',
    type: 'navigation-hub',
    label: 'අභිධර්ම නැවුම් කේන්ද්‍රය',
    labelEn: 'Abhidhamma Knowledge Hub',
    color: '#2c3e50',
    description: 'මූලික යෙදීමේ ස්ථානය සියලුම අභිධර්ම දත්ත සම්බන්ධ කරයි',
    size: 'large',
    category: 'navigation'
  };
  newGraphData.nodes.push(coreHub);

  // ===== HOMEPAGE ENTRY POINTS =====
  const homepageEntries = [
    {
      id: 'homepage-main',
      type: 'homepage-entry',
      label: 'මුල් පිටුව',
      labelEn: 'Homepage',
      color: '#34495e',
      url: '#home',
      description: 'අභිධර්ම මෙවලමේ ප්‍රධාන පිවිසීමේ ස්ථානය',
      size: 'large',
      category: 'homepage'
    },
    {
      id: 'mental-states-section',
      type: 'homepage-entry',
      label: 'ත්‍රිවිද්‍යාව',
      labelEn: 'Three Poisons',
      color: '#e74c3c',
      url: '#mental-states',
      description: 'රාග ද්වේශ මෝහ විශ්ලේෂණය',
      size: 'large',
      category: 'homepage'
    }
  ];
  newGraphData.nodes.push(...homepageEntries);

  // ===== MENTAL STATES ANALYSIS PAGES =====
  const mentalStatePages = [
    {
      id: 'raga-analysis-page',
      type: 'analysis-page',
      label: 'රාග විශ්ලේෂණය',
      labelEn: 'Raga Analysis',
      color: '#e91e63',
      url: 'raga-analysis.html',
      description: 'රාගය සම්බන්ධ සියලුම උගත් කාරණා සහ යෙදීම්',
      size: 'large',
      category: 'analysis'
    },
    {
      id: 'dwesha-analysis-page',
      type: 'analysis-page',
      label: 'ද්වේශ විශ්ලේෂණය',
      labelEn: 'Dwesha Analysis',
      color: '#ff9800',
      url: 'anger-analysis.html',
      description: 'ද්වේශය සම්බන්ධ සියලුම උගත් කාරණා සහ යෙදීම්',
      size: 'large',
      category: 'analysis'
    },
    {
      id: 'moha-analysis-page',
      type: 'analysis-page',
      label: 'මෝහ විශ්ලේෂණය',
      labelEn: 'Moha Analysis',
      color: '#9e9e9e',
      url: 'moha-analysis.html',
      description: 'මෝහය සම්බන්ධ සියලුම උගත් කාරණා සහ යෙදීම්',
      size: 'large',
      category: 'analysis'
    }
  ];
  newGraphData.nodes.push(...mentalStatePages);

  // ===== MENTAL FACTOR NODES =====
  // Mental factors that cause Raga (Lobha)
  const ragaMentalFactors = [
    {
      id: 'mental-factor-lobha',
      type: 'mental-factor',
      label: 'ලෝභය',
      labelEn: 'Lobha',
      color: '#ff8e8e',
      description: 'ඇලීම, තණ්හාව, කැමතිකම',
      mentalState: 'raga',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-ditthi',
      type: 'mental-factor',
      label: 'දිට්ඨි',
      labelEn: 'Ditthi',
      color: '#ffcc80',
      description: 'මිථ්‍යා දෘෂ්ටිය, අත්තභාවය',
      mentalState: 'raga',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-moha-raga',
      type: 'mental-factor',
      label: 'මෝහය (රාගයට)',
      labelEn: 'Moha (for Raga)',
      color: '#adb5bd',
      description: 'අවිද්‍යාව රාගයට හේතුවෙන්',
      mentalState: 'raga',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-ahirika-raga',
      type: 'mental-factor',
      label: 'අහිරිකය (රාගයට)',
      labelEn: 'Ahirika (for Raga)',
      color: '#9575cd',
      description: 'ලැජ්ජාව නැතිකම රාගයට හේතුවෙන්',
      mentalState: 'raga',
      size: 'small',
      category: 'akusala-cetasika'
    }
  ];

  // Mental factors that cause Dwesha (Dosa)
  const dweshaMentalFactors = [
    {
      id: 'mental-factor-dosa',
      type: 'mental-factor',
      label: 'දෝසය',
      labelEn: 'Dosa',
      color: '#ff8e8e',
      description: 'තරහව, කෝපය, විරුද්ධත්වය',
      mentalState: 'dwesha',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-moha-dwesha',
      type: 'mental-factor',
      label: 'මෝහය (ද්වේශයට)',
      labelEn: 'Moha (for Dwesha)',
      color: '#adb5bd',
      description: 'අවිද්‍යාව ද්වේශයට හේතුවෙන්',
      mentalState: 'dwesha',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-ahirika-dwesha',
      type: 'mental-factor',
      label: 'අහිරිකය (ද්වේශයට)',
      labelEn: 'Ahirika (for Dwesha)',
      color: '#9575cd',
      description: 'ලැජ්ජාව නැතිකම ද්වේශයට හේතුවෙන්',
      mentalState: 'dwesha',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-anottappa-dwesha',
      type: 'mental-factor',
      label: 'අනොත්තප්පය (ද්වේශයට)',
      labelEn: 'Anottappa (for Dwesha)',
      color: '#4db6ac',
      description: 'ගුණ බිය නැතිකම ද්වේශයට හේතුවෙන්',
      mentalState: 'dwesha',
      size: 'small',
      category: 'akusala-cetasika'
    }
  ];

  // Mental factors that cause Moha
  const mohaMentalFactors = [
    {
      id: 'mental-factor-moha',
      type: 'mental-factor',
      label: 'මෝහය',
      labelEn: 'Moha',
      color: '#adb5bd',
      description: 'අවිද්‍යාව, නොදැනීම',
      mentalState: 'moha',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-ahirika-moha',
      type: 'mental-factor',
      label: 'අහිරිකය (මෝහයට)',
      labelEn: 'Ahirika (for Moha)',
      color: '#9575cd',
      description: 'ලැජ්ජාව නැතිකම මෝහයට හේතුවෙන්',
      mentalState: 'moha',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-anottappa-moha',
      type: 'mental-factor',
      label: 'අනොත්තප්පය (මෝහයට)',
      labelEn: 'Anottappa (for Moha)',
      color: '#4db6ac',
      description: 'ගුණ බිය නැතිකම මෝහයට හේතුවෙන්',
      mentalState: 'moha',
      size: 'small',
      category: 'akusala-cetasika'
    },
    {
      id: 'mental-factor-uddhacca',
      type: 'mental-factor',
      label: 'උද්ධච්චය',
      labelEn: 'Uddhacca',
      color: '#ffb74d',
      description: 'සිත රිදීම, අසහනය',
      mentalState: 'moha',
      size: 'small',
      category: 'akusala-cetasika'
    }
  ];

  newGraphData.nodes.push(...ragaMentalFactors, ...dweshaMentalFactors, ...mohaMentalFactors);

  // ===== CITTA CATEGORY GROUPS =====
  const cittaCategoryGroups = [
    {
      id: 'akusala-citta-group',
      type: 'citta-category-group',
      label: 'අකුසල් සිත් (12)',
      labelEn: 'Akusala Cittas (12)',
      color: '#e74c3c',
      url: '#table',
      filter: 'akusala',
      size: 'medium',
      description: 'රාග මූල 8, ද්වේශ මූල 2, මෝහ මූල 2'
    },
    {
      id: 'kusala-citta-group',
      type: 'citta-category-group',
      label: 'කුසල් සිත් (21)',
      labelEn: 'Kusala Cittas (21)',
      color: '#27ae60',
      url: '#table',
      filter: 'kusala',
      size: 'medium',
      description: 'සුදුසු සිත් විශේෂණයන්'
    },
    {
      id: 'vipaka-citta-group',
      type: 'citta-category-group',
      label: 'විපාක සිත් (36)',
      labelEn: 'Vipaka Cittas (36)',
      color: '#3498db',
      url: '#table',
      filter: 'vipaka',
      size: 'medium',
      description: 'කර්ම විපාක සිත්'
    },
    {
      id: 'kiriya-citta-group',
      type: 'citta-category-group',
      label: 'ක්‍රියා සිත් (20)',
      labelEn: 'Kiriya Cittas (20)',
      color: '#9b59b6',
      url: '#table',
      filter: 'kiriya',
      size: 'medium',
      description: 'අරහත් විශේෂණයන්'
    }
  ];
  newGraphData.nodes.push(...cittaCategoryGroups);

  // ===== CETASIKA CATEGORY GROUPS =====
  const cetasikaCategoryGroups = [
    {
      id: 'universal-cetasikas-group',
      type: 'cetasika-category-group',
      label: 'සාධාරණ චෛතසික (7)',
      labelEn: 'Universal Cetasikas (7)',
      color: '#3498db',
      url: '#analysis',
      filter: 'universal',
      size: 'medium',
      description: 'සියලුම සිත් වල පවතින මූලික මානසික සාධක'
    },
    {
      id: 'particular-cetasikas-group',
      type: 'cetasika-category-group',
      label: 'පක්ෂික චෛතසික (6)',
      labelEn: 'Particular Cetasikas (6)',
      color: '#16a085',
      url: '#analysis',
      filter: 'particular',
      size: 'medium',
      description: 'විශේෂිත සිත් වල පවතින මානසික සාධක'
    },
    {
      id: 'akusala-cetasikas-group',
      type: 'cetasika-category-group',
      label: 'අකුසල චෛතසික (14)',
      labelEn: 'Akusala Cetasikas (14)',
      color: '#e74c3c',
      url: '#analysis',
      filter: 'akusala',
      size: 'medium',
      description: 'අකුසල් සිත් වල පවතින අශුභ මානසික සාධක'
    },
    {
      id: 'sobhana-cetasikas-group',
      type: 'cetasika-category-group',
      label: 'සෝභන චෛතසික (25)',
      labelEn: 'Sobhana Cetasikas (25)',
      color: '#2ecc71',
      url: '#analysis',
      filter: 'sobhana',
      size: 'medium',
      description: 'සුදුසු සිත් වල පවතින ශුභ මානසික සාධක'
    }
  ];
  newGraphData.nodes.push(...cetasikaCategoryGroups);

  // ===== TOOLS AND FEATURES =====
  const toolsAndFeatures = [
    {
      id: 'citta-table-tool',
      type: 'tool',
      label: 'චිත්ත චෛතසික වගුව',
      labelEn: 'Citta Chaithasika Table',
      color: '#7f8c8d',
      url: '#table',
      description: 'සියලුම චිත්ත සහ චෛතසික සංසන්දනය',
      size: 'medium',
      category: 'tool'
    },
    {
      id: 'comparison-tool-feature',
      type: 'tool',
      label: 'සංසන්දන මෙවලම',
      labelEn: 'Comparison Tool',
      color: '#f39c12',
      url: '#comparison',
      description: 'චිත්ත සංසන්දනය සහ සංසන්දනය කිරීම',
      size: 'medium',
      category: 'tool'
    },
    {
      id: 'citta-index-feature',
      type: 'tool',
      label: 'සියලුම චිත්ත',
      labelEn: 'All Cittas Index',
      color: '#8e44ad',
      url: 'citta-index.html',
      description: '89 චිත්ත වල සම්පූර්ණ ලැයිස්තුව',
      size: 'medium',
      category: 'tool'
    },
    {
      id: 'cetasika-analysis-feature',
      type: 'tool',
      label: 'චෛතසික විග්‍රහයන්',
      labelEn: 'Chaithasika Analysis',
      color: '#16a085',
      url: '#analysis',
      description: 'මානසික සාධක විශ්ලේෂණය සහ විග්‍රහයන්',
      size: 'medium',
      category: 'tool'
    }
  ];
  newGraphData.nodes.push(...toolsAndFeatures);

  // ===== GENERATE ALL 89 CITTA NODES =====
  console.log('🧠 Generating citta nodes...');
  const cittaNodes = [];
  const cittaEdges = [];

  abhidhammaData.cittas.forEach(citta => {
    const parentGroupId = getParentGroupId(citta);
    if (!parentGroupId) {
      console.warn(`Warning: No parent group for citta ${citta.id}, category: ${citta.category}`);
      return;
    }

    const cittaNode = {
      id: `citta-${citta.id}`,
      type: 'citta',
      label: citta.name || `සිත් ${citta.id}`,
      labelEn: citta.nameEn || `Citta ${citta.id}`,
      color: getCittaColor(citta),
      parent: parentGroupId,
      url: `citta-${citta.id}-detailed-page.html`,
      cittaId: citta.id,
      size: 'small',
      category: citta.category,
      subcategory: citta.subcategory,
      cetasikaCount: citta.chaithasikaCount || 0,
      description: `${citta.category} - ${citta.subcategory || 'General'}`
    };

    cittaNodes.push(cittaNode);

    // Strong connection to category group
    cittaEdges.push({
      id: `${parentGroupId}-contains-citta-${citta.id}`,
      source: parentGroupId,
      target: `citta-${citta.id}`,
      type: 'contains',
      strength: 'strong',
      label: 'අන්තර්ගතයි',
      description: 'Category contains this citta'
    });

    // Cross-reference to mental states based on category
    if (citta.category === 'අකුසල්') {
      if (citta.subcategory === 'ලෝභ මූල 8') {
        cittaEdges.push({
          id: `citta-${citta.id}-related-to-raga-analysis`,
          source: `citta-${citta.id}`,
          target: 'raga-analysis-page',
          type: 'mental-state-connection',
          strength: 'medium',
          label: 'රාග සම්බන්ධ',
          description: 'Related to Raga mental state'
        });
      } else if (citta.subcategory === 'දෝස මූල 2') {
        cittaEdges.push({
          id: `citta-${citta.id}-related-to-dwesha-analysis`,
          source: `citta-${citta.id}`,
          target: 'dwesha-analysis-page',
          type: 'mental-state-connection',
          strength: 'medium',
          label: 'ද්වේශ සම්බන්ධ',
          description: 'Related to Dwesha mental state'
        });
      } else if (citta.subcategory === 'මෝහ මූල 2') {
        cittaEdges.push({
          id: `citta-${citta.id}-related-to-moha-analysis`,
          source: `citta-${citta.id}`,
          target: 'moha-analysis-page',
          type: 'mental-state-connection',
          strength: 'medium',
          label: 'මෝහ සම්බන්ධ',
          description: 'Related to Moha mental state'
        });
      }
    }
  });

  newGraphData.nodes.push(...cittaNodes);
  newGraphData.edges.push(...cittaEdges);
  console.log(`✅ Generated ${cittaNodes.length} citta nodes with cross-references`);

  // ===== GENERATE ALL 52 CETASIKA NODES =====
  console.log('🧘 Generating cetasika nodes...');
  const cetasikaNodes = [];
  const cetasikaEdges = [];
  const cetasikaSet = new Set();

  // Collect all unique cetasikas from all cittas
  abhidhammaData.cittas.forEach(citta => {
    if (citta.cetasikas) {
      Object.keys(citta.cetasikas).forEach(cetasikaName => {
        cetasikaSet.add(cetasikaName);
      });
    }
  });

  // Also add from the cetasikas list in metadata
  if (abhidhammaData.cetasikas && abhidhammaData.cetasikas.factors) {
    abhidhammaData.cetasikas.factors.forEach(cetasikaName => {
      cetasikaSet.add(cetasikaName);
    });
  }

  // Enhanced cetasika categorization with cross-references
  function getCetasikaParentAndCategory(cetasikaName) {
    // Universal cetasikas (first 7) - present in ALL consciousness
    const universal = ['ඵස්ස', 'වේදනා', 'සංඤ්ඤා', 'චේතනා', 'ඒකග්ගතා', 'ජීවිතින්ද්‍රිය', 'මනසිකාර'];
    if (universal.includes(cetasikaName)) {
      return {
        parent: 'universal-cetasikas-group',
        category: 'universal',
        mentalStateConnection: null,
        description: 'සියලුම සිත් වල පවතී'
      };
    }

    // Particular cetasikas (next 6) - present in specific consciousness
    const particular = ['විතක්ක', 'විචාර', 'අධිමොක්ඛ', 'විරිය', 'පීති', 'ඡන්ද'];
    if (particular.includes(cetasikaName)) {
      return {
        parent: 'particular-cetasikas-group',
        category: 'particular',
        mentalStateConnection: null,
        description: 'විශේෂිත සිත් වල පවතී'
      };
    }

    // Akusala cetasikas - unwholesome mental factors
    const ragaCetasikas = ['ලෝභ', 'දිට්ඨි', 'මාන'];
    if (ragaCetasikas.includes(cetasikaName)) {
      return {
        parent: 'akusala-cetasikas-group',
        category: 'akusala',
        mentalStateConnection: 'raga-analysis-page',
        description: 'රාගයට අදාළ අකුසල මානසික සාධක'
      };
    }

    const dweshaCetasikas = ['දෝස', 'ඉස්සාව', 'මච්ඡරිය', 'කුක්කුච්ච'];
    if (dweshaCetasikas.includes(cetasikaName)) {
      return {
        parent: 'akusala-cetasikas-group',
        category: 'akusala',
        mentalStateConnection: 'dwesha-analysis-page',
        description: 'ද්වේශයට අදාළ අකුසල මානසික සාධක'
      };
    }

    const mohaCetasikas = ['මෝහ', 'අහිරික', 'අනොත්තප්ප', 'උද්ධච්ච', 'විචිකිච්ඡාව', 'ථීන', 'මිද්ධ'];
    if (mohaCetasikas.includes(cetasikaName)) {
      return {
        parent: 'akusala-cetasikas-group',
        category: 'akusala',
        mentalStateConnection: 'moha-analysis-page',
        description: 'මෝහයට අදාළ අකුසල මානසික සාධක'
      };
    }

    // Sobhana (beautiful) cetasikas - wholesome mental factors
    return {
      parent: 'sobhana-cetasikas-group',
      category: 'sobhana',
      mentalStateConnection: null,
      description: 'සුදුසු සිත් වල පවතින ශුභ මානසික සාධක'
    };
  }

  cetasikaSet.forEach(cetasikaName => {
    const cetasikaId = getCetasikaId(cetasikaName);
    const cetasikaInfo = getCetasikaParentAndCategory(cetasikaName);

    const cetasikaNode = {
      id: `cetasika-${cetasikaId}`,
      type: 'cetasika',
      label: cetasikaName,
      labelEn: cetasikaName, // Could add English translations later
      color: cetasikaInfo.category === 'akusala' ? '#e74c3c' :
             cetasikaInfo.category === 'universal' ? '#3498db' :
             cetasikaInfo.category === 'particular' ? '#16a085' :
             '#2ecc71', // sobhana
      parent: cetasikaInfo.parent,
      url: '#analysis',
      cetasikaId: cetasikaId,
      size: 'small',
      category: cetasikaInfo.category,
      description: cetasikaInfo.description
    };

    cetasikaNodes.push(cetasikaNode);

    // Strong connection to category group
    cetasikaEdges.push({
      id: `${cetasikaInfo.parent}-contains-cetasika-${cetasikaId}`,
      source: cetasikaInfo.parent,
      target: `cetasika-${cetasikaId}`,
      type: 'contains',
      strength: 'strong',
      label: 'අන්තර්ගතයි',
      description: 'Category contains this cetasika'
    });

    // Mental state connection for akusala cetasikas
    if (cetasikaInfo.mentalStateConnection) {
      cetasikaEdges.push({
        id: `cetasika-${cetasikaId}-mental-state-connection`,
        source: `cetasika-${cetasikaId}`,
        target: cetasikaInfo.mentalStateConnection,
        type: 'mental-state-connection',
        strength: 'medium',
        label: 'මානසික තත්ත්වයට අදාළ',
        description: `Connected to ${cetasikaInfo.mentalStateConnection.split('-')[0]} analysis`
      });
    }
  });

  newGraphData.nodes.push(...cetasikaNodes);
  newGraphData.edges.push(...cetasikaEdges);
  console.log(`✅ Generated ${cetasikaNodes.length} cetasika nodes with mental state connections`);

  // ===== COMPREHENSIVE CITTA-CETASIKA CONNECTIONS =====
  console.log('🔗 Creating citta-cetasika relationships...');
  const cittaCetasikaEdges = [];

  abhidhammaData.cittas.forEach(citta => {
    if (!citta.cetasikas) return;

    Object.keys(citta.cetasikas).forEach(cetasikaName => {
      if (citta.cetasikas[cetasikaName] === true) {
        const cetasikaId = getCetasikaId(cetasikaName);
        cittaCetasikaEdges.push({
          id: `citta-${citta.id}-has-cetasika-${cetasikaId}`,
          source: `citta-${citta.id}`,
          target: `cetasika-${cetasikaId}`,
          type: 'has-cetasika',
          strength: 'weak', // Weak to avoid cluttering the main view
          label: 'අන්තර්ගතයි',
          description: `${citta.name} contains ${cetasikaName}`
        });
      }
    });
  });

  newGraphData.edges.push(...cittaCetasikaEdges);
  console.log(`✅ Created ${cittaCetasikaEdges.length} citta-cetasika relationships`);

  // ===== COMPREHENSIVE CROSS-REFERENCES =====
  console.log('🌐 Building cross-reference network...');
  const crossReferenceEdges = [];

  // Connect homepage entries to navigation hub
  crossReferenceEdges.push(
    {
      id: 'hub-to-homepage',
      source: 'navigation-hub',
      target: 'homepage-main',
      type: 'navigation',
      strength: 'strong',
      label: 'ප්‍රධාන යෙදීම',
      description: 'Main navigation entry point'
    },
    {
      id: 'hub-to-mental-states',
      source: 'navigation-hub',
      target: 'mental-states-section',
      type: 'navigation',
      strength: 'strong',
      label: 'ත්‍රිවිද්‍යාව',
      description: 'Three poisons analysis section'
    }
  );

  // Connect mental states to analysis pages
  crossReferenceEdges.push(
    {
      id: 'mental-states-to-raga-analysis',
      source: 'mental-states-section',
      target: 'raga-analysis-page',
      type: 'leads-to',
      strength: 'strong',
      label: 'රාග විශ්ලේෂණයට',
      description: 'Navigate to detailed raga analysis'
    },
    {
      id: 'mental-states-to-dwesha-analysis',
      source: 'mental-states-section',
      target: 'dwesha-analysis-page',
      type: 'leads-to',
      strength: 'strong',
      label: 'ද්වේශ විශ්ලේෂණයට',
      description: 'Navigate to detailed dwesha analysis'
    },
    {
      id: 'mental-states-to-moha-analysis',
      source: 'mental-states-section',
      target: 'moha-analysis-page',
      type: 'leads-to',
      strength: 'strong',
      label: 'මෝහ විශ්ලේෂණයට',
      description: 'Navigate to detailed moha analysis'
    }
  );

  // Connect analysis pages to citta categories
  crossReferenceEdges.push(
    {
      id: 'raga-analysis-to-akusala-cittas',
      source: 'raga-analysis-page',
      target: 'akusala-citta-group',
      type: 'related-content',
      strength: 'strong',
      label: 'අදාළ චිත්ත',
      description: 'Related akusala cittas'
    },
    {
      id: 'dwesha-analysis-to-akusala-cittas',
      source: 'dwesha-analysis-page',
      target: 'akusala-citta-group',
      type: 'related-content',
      strength: 'strong',
      label: 'අදාළ චිත්ත',
      description: 'Related akusala cittas'
    },
    {
      id: 'moha-analysis-to-akusala-cittas',
      source: 'moha-analysis-page',
      target: 'akusala-citta-group',
      type: 'related-content',
      strength: 'strong',
      label: 'අදාළ චිත්ත',
      description: 'Related akusala cittas'
    }
  );

  // Connect citta categories to cetasika categories
  crossReferenceEdges.push(
    {
      id: 'akusala-cittas-to-akusala-cetasikas',
      source: 'akusala-citta-group',
      target: 'akusala-cetasikas-group',
      type: 'related-content',
      strength: 'medium',
      label: 'අදාළ චෛතසික',
      description: 'Related akusala cetasikas'
    },
    {
      id: 'kusala-cittas-to-sobhana-cetasikas',
      source: 'kusala-citta-group',
      target: 'sobhana-cetasikas-group',
      type: 'related-content',
      strength: 'medium',
      label: 'අදාළ චෛතසික',
      description: 'Related sobhana cetasikas'
    }
  );

  // Connect tools and features to main content
  crossReferenceEdges.push(
    {
      id: 'citta-table-to-all-categories',
      source: 'citta-table-tool',
      target: 'akusala-citta-group',
      type: 'tool-connection',
      strength: 'medium',
      label: 'වගුවේ දැක්වේ',
      description: 'Displayed in citta table'
    },
    {
      id: 'comparison-tool-to-citta-index',
      source: 'comparison-tool-feature',
      target: 'citta-index-feature',
      type: 'tool-connection',
      strength: 'medium',
      label: 'සංසන්දනය කිරීම සඳහා',
      description: 'Used for citta comparison'
    },
    {
      id: 'cetasika-analysis-to-cetasika-groups',
      source: 'cetasika-analysis-feature',
      target: 'universal-cetasikas-group',
      type: 'tool-connection',
      strength: 'medium',
      label: 'විශ්ලේෂණය කරයි',
      description: 'Analyzes cetasika groups'
    }
  );

  newGraphData.edges.push(...crossReferenceEdges);
  console.log(`✅ Created ${crossReferenceEdges.length} cross-reference connections`);

  // ===== LEARNING PATHS =====
  console.log('📚 Creating learning navigation paths...');
  const learningPathEdges = [];

  // Learning path 1: Homepage → Mental States → Analysis → Cittas
  const learningPath1 = [
    'homepage-main', 'mental-states-section', 'raga-analysis-page', 'akusala-citta-group',
    'dwesha-analysis-page', 'moha-analysis-page'
  ];

  for (let i = 0; i < learningPath1.length - 1; i++) {
    learningPathEdges.push({
      id: `learning-path-1-${i}`,
      source: learningPath1[i],
      target: learningPath1[i + 1],
      type: 'learning-path',
      strength: 'weak',
      label: 'ඉගෙනීමේ මාර්ගය 1',
      description: 'Learning path: Mental states to detailed analysis'
    });
  }

  // Learning path 2: Table → Individual Cittas → Cetasikas
  learningPathEdges.push({
    id: 'learning-path-2-table-to-citta1',
    source: 'citta-table-tool',
    target: 'citta-1',
    type: 'learning-path',
    strength: 'weak',
    label: 'ඉගෙනීමේ මාර්ගය 2',
    description: 'Learning path: Table exploration to individual study'
  });

  // Learning path 3: Analysis → Comparison → Index
  const learningPath3 = [
    'cetasika-analysis-feature', 'comparison-tool-feature', 'citta-index-feature'
  ];

  for (let i = 0; i < learningPath3.length - 1; i++) {
    learningPathEdges.push({
      id: `learning-path-3-${i}`,
      source: learningPath3[i],
      target: learningPath3[i + 1],
      type: 'learning-path',
      strength: 'weak',
      label: 'ඉගෙනීමේ මාර්ගය 3',
      description: 'Learning path: Analysis to comparison tools'
    });
  }

  newGraphData.edges.push(...learningPathEdges);
  console.log(`✅ Created ${learningPathEdges.length} learning path connections`);

  // ===== INTEGRATE EXISTING EDGES =====
  console.log('🔄 Integrating existing graph connections...');
  const existingEdgeIds = new Set(newGraphData.edges.map(e => e.id));
  let existingEdgesAdded = 0;

  currentGraphData.edges.forEach(edge => {
    if (!existingEdgeIds.has(edge.id)) {
      // Only add existing edges that don't conflict with our new comprehensive structure
      if (edge.type !== 'contains' && edge.type !== 'has-cetasika') {
        newGraphData.edges.push(edge);
        existingEdgesAdded++;
      }
    }
  });

  console.log(`✅ Integrated ${existingEdgesAdded} existing edges`);

  // ===== FINAL CROSS-REFERENCES =====
  const finalCrossReferences = [
    // Hub connections to all major areas
    {
      id: 'hub-to-citta-table',
      source: 'navigation-hub',
      target: 'citta-table-tool',
      type: 'navigation',
      strength: 'medium',
      label: 'චිත්ත වගුව',
      description: 'Access citta-chaithasika table'
    },
    {
      id: 'hub-to-comparison',
      source: 'navigation-hub',
      target: 'comparison-tool-feature',
      type: 'navigation',
      strength: 'medium',
      label: 'සංසන්දන මෙවලම',
      description: 'Access comparison tools'
    },
    {
      id: 'hub-to-citta-index',
      source: 'navigation-hub',
      target: 'citta-index-feature',
      type: 'navigation',
      strength: 'medium',
      label: 'සියලු චිත්ත',
      description: 'Access all 89 cittas index'
    },
    {
      id: 'hub-to-cetasika-analysis',
      source: 'navigation-hub',
      target: 'cetasika-analysis-feature',
      type: 'navigation',
      strength: 'medium',
      label: 'චෛතසික විග්‍රහයන්',
      description: 'Access cetasika analysis'
    }
  ];

  newGraphData.edges.push(...finalCrossReferences);

  // ===== MENTAL FACTOR CONNECTIONS =====
  const mentalFactorEdges = [];

  // Connect mental factors to analysis pages
  mentalFactorEdges.push(
    // Raga mental factors to raga analysis page
    {
      id: 'lobha-to-raga-analysis',
      source: 'mental-factor-lobha',
      target: 'raga-analysis-page',
      type: 'causes-mental-state',
      strength: 'strong',
      label: 'රාගයට හේතුව',
      description: 'Lobha causes Raga mental state'
    },
    {
      id: 'ditthi-to-raga-analysis',
      source: 'mental-factor-ditthi',
      target: 'raga-analysis-page',
      type: 'causes-mental-state',
      strength: 'strong',
      label: 'රාගයට හේතුව',
      description: 'Ditthi contributes to Raga mental state'
    },
    {
      id: 'moha-raga-to-raga-analysis',
      source: 'mental-factor-moha-raga',
      target: 'raga-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'රාගයට සහායක',
      description: 'Moha supports Raga mental state'
    },
    {
      id: 'ahirika-raga-to-raga-analysis',
      source: 'mental-factor-ahirika-raga',
      target: 'raga-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'රාගයට සහායක',
      description: 'Ahirika supports Raga mental state'
    },

    // Dwesha mental factors to dwesha analysis page
    {
      id: 'dosa-to-dwesha-analysis',
      source: 'mental-factor-dosa',
      target: 'dwesha-analysis-page',
      type: 'causes-mental-state',
      strength: 'strong',
      label: 'ද්වේශයට හේතුව',
      description: 'Dosa causes Dwesha mental state'
    },
    {
      id: 'moha-dwesha-to-dwesha-analysis',
      source: 'mental-factor-moha-dwesha',
      target: 'dwesha-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'ද්වේශයට සහායක',
      description: 'Moha supports Dwesha mental state'
    },
    {
      id: 'ahirika-dwesha-to-dwesha-analysis',
      source: 'mental-factor-ahirika-dwesha',
      target: 'dwesha-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'ද්වේශයට සහායක',
      description: 'Ahirika supports Dwesha mental state'
    },
    {
      id: 'anottappa-dwesha-to-dwesha-analysis',
      source: 'mental-factor-anottappa-dwesha',
      target: 'dwesha-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'ද්වේශයට සහායක',
      description: 'Anottappa supports Dwesha mental state'
    },

    // Moha mental factors to moha analysis page
    {
      id: 'moha-to-moha-analysis',
      source: 'mental-factor-moha',
      target: 'moha-analysis-page',
      type: 'causes-mental-state',
      strength: 'strong',
      label: 'මෝහයට හේතුව',
      description: 'Moha causes Moha mental state'
    },
    {
      id: 'ahirika-moha-to-moha-analysis',
      source: 'mental-factor-ahirika-moha',
      target: 'moha-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'මෝහයට සහායක',
      description: 'Ahirika supports Moha mental state'
    },
    {
      id: 'anottappa-moha-to-moha-analysis',
      source: 'mental-factor-anottappa-moha',
      target: 'moha-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'මෝහයට සහායක',
      description: 'Anottappa supports Moha mental state'
    },
    {
      id: 'uddhacca-to-moha-analysis',
      source: 'mental-factor-uddhacca',
      target: 'moha-analysis-page',
      type: 'causes-mental-state',
      strength: 'medium',
      label: 'මෝහයට සහායක',
      description: 'Uddhacca supports Moha mental state'
    }
  );

  // Connect mental factors to specific cittas (fishbone connections)
  // Raga-related cittas
  const ragaCittaConnections = [
    { factor: 'mental-factor-lobha', cittaIds: [1, 2, 3, 4, 5, 6, 7, 8] },
    { factor: 'mental-factor-ditthi', cittaIds: [1, 2, 5, 6] },
    { factor: 'mental-factor-moha-raga', cittaIds: [1, 2, 3, 4, 5, 6, 7, 8] },
    { factor: 'mental-factor-ahirika-raga', cittaIds: [1, 2, 3, 4, 5, 6, 7, 8] }
  ];

  // Dwesha-related cittas
  const dweshaCittaConnections = [
    { factor: 'mental-factor-dosa', cittaIds: [9, 10] },
    { factor: 'mental-factor-moha-dwesha', cittaIds: [9, 10] },
    { factor: 'mental-factor-ahirika-dwesha', cittaIds: [9, 10] },
    { factor: 'mental-factor-anottappa-dwesha', cittaIds: [9, 10] }
  ];

  // Moha-related cittas
  const mohaCittaConnections = [
    { factor: 'mental-factor-moha', cittaIds: [11, 12] },
    { factor: 'mental-factor-ahirika-moha', cittaIds: [11, 12] },
    { factor: 'mental-factor-anottappa-moha', cittaIds: [11, 12] },
    { factor: 'mental-factor-uddhacca', cittaIds: [12] }
  ];

  // Create edges for all mental factor to citta connections
  [...ragaCittaConnections, ...dweshaCittaConnections, ...mohaCittaConnections].forEach(({ factor, cittaIds }) => {
    cittaIds.forEach(cittaId => {
      mentalFactorEdges.push({
        id: `${factor}-to-citta-${cittaId}`,
        source: factor,
        target: `citta-${cittaId}`,
        type: 'mental-factor-connection',
        strength: 'weak', // Weak to avoid cluttering main view
        label: 'අදාළ සිත්',
        description: `${factor} is present in citta ${cittaId}`
      });
    });
  });

  newGraphData.edges.push(...mentalFactorEdges);

  // ===== UPDATE METADATA =====
  newGraphData.metadata.totalNodes = newGraphData.nodes.length;
  newGraphData.metadata.totalEdges = newGraphData.edges.length;
  newGraphData.metadata.comprehensiveConnections = true;
  newGraphData.metadata.fishboneMeshReady = true;
  newGraphData.metadata.learningPathsEnabled = true;

  console.log('🎉 Complete knowledge mesh generated!');
  console.log(`   📊 Total nodes: ${newGraphData.metadata.totalNodes}`);
  console.log(`   🔗 Total edges: ${newGraphData.metadata.totalEdges}`);
  console.log(`   🧠 Citta nodes: ${newGraphData.nodes.filter(n => n.type === 'citta').length}`);
  console.log(`   🧘 Cetasika nodes: ${newGraphData.nodes.filter(n => n.type === 'cetasika').length}`);
  console.log(`   🏗️  Navigation hubs: ${newGraphData.nodes.filter(n => n.type === 'navigation-hub').length}`);
  console.log(`   📚 Analysis pages: ${newGraphData.nodes.filter(n => n.type === 'analysis-page').length}`);
  console.log(`   🛠️  Tools: ${newGraphData.nodes.filter(n => n.type === 'tool').length}`);

  return newGraphData;
}

// Generate and save
console.log('Generating complete graph data...');
const completeGraph = generateCompleteGraph();

// Backup current file
const backupPath = path.join(__dirname, 'graph-data.json.backup');
if (fs.existsSync(path.join(__dirname, 'graph-data.json'))) {
  fs.copyFileSync(path.join(__dirname, 'graph-data.json'), backupPath);
  console.log('Backed up current graph-data.json to graph-data.json.backup');
}

// Save new file
fs.writeFileSync(
  path.join(__dirname, 'graph-data.json'),
  JSON.stringify(completeGraph, null, 2),
  'utf8'
);

console.log('✅ Complete graph data generated!');
console.log(`   Total nodes: ${completeGraph.metadata.totalNodes}`);
console.log(`   Total edges: ${completeGraph.metadata.totalEdges}`);
console.log(`   Cittas: ${completeGraph.nodes.filter(n => n.type === 'citta').length}`);
console.log(`   Cetasikas: ${completeGraph.nodes.filter(n => n.type === 'cetasika').length}`);
console.log(`   Saved to: ${path.join(__dirname, 'graph-data.json')}`);

