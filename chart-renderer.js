/**
 * chart-renderer.js
 * Renders the Interactive Citta-Cetasika Chart
 */

document.addEventListener('DOMContentLoaded', () => {
    initChart();
});

async function initChart() {
    const container = document.getElementById('chart-container');

    // Check if data is loaded
    if (typeof meditationData === 'undefined') {
        container.innerHTML = '<div class="error-message">දත්ත හමු නොවීය. කරුණාකර නැවත උත්සාහ කරන්න. (Data Error)</div>';
        return;
    }

    // Process Data
    const cittas = meditationData.cittas || [];
    const cetasikas = meditationData.chaithasikas || [];
    const associations = meditationData.associations || {};

    if (cittas.length === 0 || cetasikas.length === 0) {
        container.innerHTML = '<div class="error-message">දත්ත දෝෂයකි. (Empty Data)</div>';
        return;
    }

    // 1. Invert Association Map: Cetasika ID -> [Citta IDs]
    const cetasikaToCittaMap = {};
    cetasikas.forEach(c => cetasikaToCittaMap[c.id] = new Set());

    // associations keys are Citta IDs
    for (const [cittaId, cetasikaIds] of Object.entries(associations)) {
        cetasikaIds.forEach(cetId => {
            if (cetasikaToCittaMap[cetId]) {
                cetasikaToCittaMap[cetId].add(parseInt(cittaId)); // Store as Int
            }
        });
    }

    // 2. Identify Active Cetasika from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchId = urlParams.get('id');
    const searchName = urlParams.get('q');

    let activeCetasikaId = null;
    let foundCetasika = null;

    // Try finding by ID first
    if (searchId) {
        const idInt = parseInt(searchId);
        foundCetasika = cetasikas.find(c => c.id === idInt);
    }

    // Fallback to Name search if ID not found or not provided
    if (!foundCetasika && searchName) {
        foundCetasika = cetasikas.find(c =>
            c.name === searchName ||
            c.name.includes(searchName) ||
            (c.nameSi && c.nameSi.includes(searchName))
        );
    }

    if (foundCetasika) {
        activeCetasikaId = foundCetasika.id;
        // Update Title and Header
        document.title = `යෙදෙන සිත්: ${foundCetasika.name}`;
        const headerTitle = document.querySelector('.header-title h1');
        if (headerTitle) {
            headerTitle.innerHTML = `යෙදෙන සිත් වගුව - <span style="color:#bbdefb; background:rgba(0,0,0,0.2); padding:0 10px; border-radius:10px;">${foundCetasika.name}</span>`;
        }
    }

    // 3. Render Chart
    renderTable(container, cittas, cetasikas, cetasikaToCittaMap, activeCetasikaId);

    // 4. Scroll to highlighted row
    if (activeCetasikaId) {
        setTimeout(() => {
            const row = document.getElementById(`row-cet-${activeCetasikaId}`);
            if (row) {
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                row.classList.add('highlight-row-pulse');
            }
        }, 500);
    }
}

function renderTable(container, cittas, cetasikas, map, activeId) {
    // Generate CSS
    const style = document.createElement('style');
    style.textContent = `
        .chart-wrapper {
            overflow: auto;
            height: calc(100vh - 80px);
            position: relative;
            background: #fff; /* Ensure white background */
            padding-bottom: 50px;
        }
        table {
            border-collapse: separate; /* Changed for sticky positioning */
            border-spacing: 0;
            font-size: 13px; /* Slightly larger */
            font-family: 'Abhaya Libre', 'Inter', sans-serif;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #e0e0e0;
            padding: 6px;
            text-align: center;
            background-clip: padding-box; /* Fix for border overlap */
        }
        
        /* Sticky Column Headers */
        thead th {
            position: sticky;
            top: 0;
            z-index: 10;
            background: #f1f8e9; /* Light Green tint */
            box-shadow: 0 1px 0 #ccc;
        }
        thead th.citta-col {
             background: #fff;
        }
        
        /* Sticky Group Headers (Top-most) */
        thead tr:first-child th {
            z-index: 11; /* Higher than individual columns */
            top: 0;
        }
        /* Sticky Citta Name Headers (Row 2) */
        thead tr:nth-child(2) th {
            top: 40px; /* Adjust based on Group Header Height */
            z-index: 10;
        }

        /* Sticky 1st Column (Cetasika Names) */
        td:first-child, th:first-child {
            position: sticky;
            left: 0;
            background: #fafafa;
            z-index: 20;
            border-right: 2px solid #bdbdbd;
            min-width: 180px;
            text-align: left;
            padding-left: 15px;
            font-weight: 600;
            color: #37474f;
        }
        /* Corner Cell (Left-Top) needs highest z-index */
        thead tr:first-child th:first-child,
        thead tr:nth-child(2) th:first-child {
            z-index: 30;
            background: #eceff1;
        }

        /* Highlight Styles */
        .group-header {
            background: #e1f5fe !important;
            color: #0277bd;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            height: 40px;
        }
        
        /* Active Highlights */
        .highlight-col-header {
            background-color: #2196f3 !important;
            color: white !important;
        }
        /* When an entire group is relevant (optional logic) */
        .highlight-group-header {
            background-color: #1565c0 !important;
            color: white !important;
            box-shadow: inset 0 -3px 0 rgba(0,0,0,0.2);
        }

        .highlight-row {
            background-color: #e3f2fd !important;
        }
        .highlight-row td:first-child {
            background-color: #bbdefb !important;
            border-right: 4px solid #1565c0;
            color: #0d47a1;
        }
        
        .citta-col {
            min-width: 32px;
            max-width: 32px;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            white-space: nowrap;
            height: 180px;
            padding: 10px 4px;
            font-size: 11px;
            color: #455a64;
        }
        
        .check-mark {
            color: #2e7d32;
            font-weight: 900;
            font-size: 14px;
        }
        .highlight-cell {
            background-color: #90caf9 !important; /* Stronger highlight for intersection */
            color: #0d47a1;
        }
        
        .category-separator {
            background: #f5f5f5;
            color: #616161;
            font-weight: bold;
            text-align: left;
            padding: 8px 15px !important;
            border-top: 2px solid #e0e0e0;
        }
        
        /* Pulse Animation for Active Row */
        @keyframes pulse-row {
            0% { background-color: #fffde7; }
            50% { background-color: #fff9c4; }
            100% { background-color: #e3f2fd; }
        }
        .highlight-row-pulse {
            animation: pulse-row 1s ease-in-out;
        }

        /* Responsive */
        @media (max-width: 768px) {
            td:first-child, th:first-child { font-size: 11px; min-width: 120px; }
        }
    `;
    document.head.appendChild(style);

    let html = '<div class="chart-wrapper"><table>';

    // --- Header Calculation ---
    // Group Cittas by Subcategory/Type for Headers
    const groups = [];
    let currentGroup = null;
    let currentCittas = [];

    cittas.forEach(c => {
        let gName = c.subcategory || c.type || (c.category + " Cittas");

        // Custom Short Names for Chart
        if (c.id >= 1 && c.id <= 12) gName = "අකුසල් (12)";
        else if (c.id >= 13 && c.id <= 30) gName = "අහේතුක (18)"; // Approx range if present
        else if (c.categoryEn === 'Unwholesome') gName = "අකුසල්";
        else if (c.categoryEn === 'Kamavacara Sahetuka') gName = "කාමාවචර සෝභන";
        else gName = gName.replace("Cittas", "").trim();

        if (gName !== currentGroup) {
            if (currentGroup) groups.push({ name: currentGroup, cittas: currentCittas });
            currentGroup = gName;
            currentCittas = [];
        }
        currentCittas.push(c);
    });
    if (currentGroup) groups.push({ name: currentGroup, cittas: currentCittas });

    // --- Header Row 1: Groups ---
    html += '<thead><tr><th>චෛතසික / සිත්</th>';
    groups.forEach(g => {
        // Check if ANY citta in this group is active
        const isGroupActive = activeId && g.cittas.some(c => map[activeId] && map[activeId].has(c.id));
        const groupClass = isGroupActive ? 'group-header highlight-group-header' : 'group-header';

        html += `<th colspan="${g.cittas.length}" class="${groupClass}">${g.name}</th>`;
    });
    html += '</tr>';

    // --- Header Row 2: Individual Cittas ---
    html += '<tr><th></th>'; // Corner
    cittas.forEach(c => {
        const isHighlighted = activeId && map[activeId] && map[activeId].has(c.id);
        const colClass = isHighlighted ? 'highlight-col-header' : '';
        // Shorten name: First 15 chars or 2 words
        const shortName = c.name.split(' ').slice(0, 3).join(' ');
        html += `<th class="citta-col ${colClass}" title="${c.id}. ${c.name}"><div>${c.id}. ${shortName}</div></th>`;
    });
    html += '</tr></thead>';

    // --- Body Rows ---
    html += '<tbody>';

    const cetGroups = ['සාධාරණ', 'පක්ෂික', 'අකුසල්', 'සෝබන'];
    const groupedCetasikas = {};
    cetasikas.forEach(c => {
        let cat = c.category || 'Other';
        // Normalize Category names if needed
        if (cat.includes('සාධාරණ')) cat = 'සාධාරණ';
        else if (cat.includes('පක්ෂික')) cat = 'පක්ෂික';
        else if (cat.includes('අකුසල්')) cat = 'අකුසල්';
        else if (cat.includes('සෝබන') || cat.includes('විරති')) cat = 'සෝබන'; // Group Sobana subtypes

        if (!groupedCetasikas[cat]) groupedCetasikas[cat] = [];
        groupedCetasikas[cat].push(c);
    });

    // Render in specific order
    const renderOrder = ['සාධාරණ', 'පක්ෂික', 'අකුසල්', 'සෝබන', 'Other'];

    renderOrder.forEach(groupName => {
        if (groupedCetasikas[groupName]) {
            html += `<tr class="category-separator"><td colspan="${cittas.length + 1}">${groupName} චෛතසික</td></tr>`;

            groupedCetasikas[groupName].forEach(cet => {
                const isActive = (cet.id === activeId);
                const rowClass = isActive ? 'highlight-row' : '';
                const rowId = `row-cet-${cet.id}`;

                html += `<tr id="${rowId}" class="${rowClass}">`;
                html += `<td><span class="id-badge">${cet.id}</span> ${cet.name}</td>`;

                cittas.forEach(citta => {
                    const hasAssoc = map[cet.id].has(citta.id);
                    let cellClass = '';
                    if (hasAssoc) {
                        cellClass = 'check-mark';
                        if (isActive) cellClass += ' highlight-cell';
                    }
                    html += `<td class="${cellClass}">${hasAssoc ? '●' : ''}</td>`;
                });
                html += '</tr>';
            });
        }
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
}
