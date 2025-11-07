// Buddhist Meditation and Consciousness Data
const meditationData = {
    cittas: [
        // Kamavacara Kusala Cittas (Sensuous Sphere Wholesome Consciousness)
        { id: 1, name: "සෝමනස්ස සහගත අසංඥාන සම්පයොග චිත්තය", nameEn: "Pleasant feeling with rootless consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Pleasant feeling with rootless consciousness" },
        { id: 2, name: "සෝමනස්ස සහගත සංඥාන සම්පයොග චිත්තය", nameEn: "Pleasant feeling with consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Pleasant feeling with consciousness" },
        { id: 3, name: "උපේක්ෂා සහගත අසංඥාන සම්පයොග චිත්තය", nameEn: "Equanimity with rootless consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Equanimity with rootless consciousness" },
        { id: 4, name: "උපේක්ෂා සහගත සංඥාන සම්පයොග චිත්තය", nameEn: "Equanimity with consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Equanimity with consciousness" },
        
        // Kamavacara Akusala Cittas (Sensuous Sphere Unwholesome Consciousness)
        { id: 5, name: "සෝමනස්ස සහගත අසංඥාන විප්පයොග චිත්තය", nameEn: "Pleasant feeling with rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Pleasant feeling with rootless consciousness" },
        { id: 6, name: "සෝමනස්ස සහගත සංඥාන විප්පයොග චිත්තය", nameEn: "Pleasant feeling with consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Pleasant feeling with consciousness" },
        { id: 7, name: "උපේක්ෂා සහගත අසංඥාන විප්පයොග චිත්තය", nameEn: "Equanimity with rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Equanimity with rootless consciousness" },
        { id: 8, name: "උපේක්ෂා සහගත සංඥාන විප්පයොග චිත්තය", nameEn: "Equanimity with consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", description: "Equanimity with consciousness" },
        
        // Rupavacara Cittas (Form Sphere Consciousness)
        { id: 9, name: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන සිතය", category: "කුසල්", type: "රූපාවචර", description: "First jhana with initial and sustained application" },
        { id: 10, name: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන සිතය", category: "කුසල්", type: "රූපාවචර", description: "Second jhana with sustained application" },
        { id: 11, name: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතිය ධ්‍යාන සිතය", category: "කුසල්", type: "රූපාවචර", description: "Third jhana with joy" },
        { id: 12, name: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන සිතය", category: "කුසල්", type: "රූපාවචර", description: "Fourth jhana with happiness" },
        { id: 13, name: "උපේක්ෂා ඒකාග්‍රතා සහිත පංචම ධ්‍යාන සිතය", category: "කුසල්", type: "රූපාවචර", description: "Fifth jhana with equanimity" },
        
        // Arupavacara Cittas (Formless Sphere Consciousness)
        { id: 14, name: "ආකාසානඤ්චායතන කුසල් සිත", category: "කුසල්", type: "අරූපාවචර", description: "Space infinity consciousness" },
        { id: 15, name: "විඤ්ඤාණඤ්චායතන කුසල් සිත", category: "කුසල්", type: "අරූපාවචර", description: "Consciousness infinity consciousness" },
        { id: 16, name: "ආකිඤ්චඤ්ඤායතන කුසල් සිත", category: "කුසල්", type: "අරූපාවචර", description: "Nothingness consciousness" },
        { id: 17, name: "නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත", category: "කුසල්", type: "අරූපාවචර", description: "Neither perception nor non-perception consciousness" },
        
        // Lokuttara Cittas (Supramundane Consciousness)
        { id: 18, name: "ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", category: "ලෝකෝත්තර", type: "මග්ග", description: "First jhana stream-enterer path consciousness" },
        { id: 19, name: "ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", category: "ලෝකෝත්තර", type: "ඵල", description: "First jhana stream-enterer fruition consciousness" },
        { id: 20, name: "ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", category: "ලෝකෝත්තර", type: "මග්ග", description: "First jhana once-returner path consciousness" },
        { id: 21, name: "ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය", category: "ලෝකෝත්තර", type: "ඵල", description: "First jhana once-returner fruition consciousness" },
        { id: 22, name: "ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය", category: "ලෝකෝත්තර", type: "මග්ග", description: "First jhana non-returner path consciousness" },
        { id: 23, name: "ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය", category: "ලෝකෝත්තර", type: "ඵල", description: "First jhana non-returner fruition consciousness" },
        { id: 24, name: "ප්‍රථම ධ්‍යාන අරහත්ත මග්ග චිත්තය", category: "ලෝකෝත්තර", type: "මග්ග", description: "First jhana arahant path consciousness" },
        { id: 25, name: "ප්‍රථම ධ්‍යාන අරහත්ත ඵල චිත්තය", category: "ලෝකෝත්තර", type: "ඵල", description: "First jhana arahant fruition consciousness" }
    ],
    
    chaithasikas: [
        { id: 1, name: "ඵස්සය", nameEn: "Contact (Phassa)", category: "සාධාරණ", categoryEn: "Universal", description: "ස්පර්ශය - චිත්තය සමඟ එක්ව ඇති වන ස්පර්ශයයි", descriptionEn: "Contact - the touching that occurs together with consciousness" },
        { id: 2, name: "වේදනා", nameEn: "Feeling (Vedana)", category: "සාධාරණ", categoryEn: "Universal", description: "අනුභවය - සුඛ, දුක්, උපේක්ෂා යන තුන් අනුභවයයි", descriptionEn: "Feeling - the three types of experience: pleasant, unpleasant, and neutral" },
        { id: 3, name: "සංඤ්ඤා", nameEn: "Perception (Sanna)", category: "සාධාරණ", categoryEn: "Universal", description: "සංඥාව - වස්තුව පිළිබඳ සංඥාවයි", descriptionEn: "Perception - the recognition of objects" },
        { id: 4, name: "චේතනා", nameEn: "Volition (Cetana)", category: "සාධාරණ", categoryEn: "Universal", description: "චේතනාව - කර්මයන් කිරීමේ චේතනාවයි", descriptionEn: "Volition - the intention behind actions" },
        { id: 5, name: "ඒකග්ගතාවය", category: "සාධාරණ", description: "ඒකාග්‍රතාව - එක් අරමුණක් අතට යොමුවීමයි" },
        { id: 6, name: "ජීවිතින්ද්‍රියය", category: "සාධාරණ", description: "ජීවිතින්ද්‍රිය - චිත්තයේ ජීවිතයයි" },
        { id: 7, name: "මනසිකාරය", category: "සාධාරණ", description: "මනසිකාරය - චිත්තයේ අරමුණට යොමුවීමයි" },
        { id: 8, name: "විතක්කය", category: "පක්ෂික", description: "විතක්කය - අරමුණට යොමුවීමයි" },
        { id: 9, name: "විචාරය", category: "පක්ෂික", description: "විචාරය - අරමුණ අතට ගෙන යෑමයි" },
        { id: 10, name: "අධිමොක්ඛය", category: "පක්ෂික", description: "අධිමොක්ඛය - අරමුණ අතට ගෙන යෑමයි" },
        { id: 11, name: "විරියය", category: "පක්ෂික", description: "විරියය - උත්සාහයයි" },
        { id: 12, name: "පීතිය", category: "පක්ෂික", description: "පීතිය - සතුටයි" },
        { id: 13, name: "ඡන්දය", category: "පක්ෂික", description: "ඡන්දය - අභිලාෂයයි" },
        { id: 14, name: "මෝහය", category: "අකුසල්", description: "මෝහය - මුළාවයි" },
        { id: 15, name: "අහිරිකය", category: "අකුසල්", description: "අහිරිකය - ලජ්ජා නැතිකමයි" },
        { id: 16, name: "අනොත්තප්පය", category: "අකුසල්", description: "අනොත්තප්පය - භය නැතිකමයි" },
        { id: 17, name: "උද්ධච්චය", category: "අකුසල්", description: "උද්ධච්චය - උද්ධච්චයයි" },
        { id: 18, name: "ලෝභය", category: "අකුසල්", description: "ලෝභය - ලෝභයයි" },
        { id: 19, name: "දිට්ඨිය", category: "අකුසල්", description: "දිට්ඨිය - දෘෂ්ටියයි" },
        { id: 20, name: "මානය", category: "අකුසල්", description: "මානය - මානයයි" },
        { id: 21, name: "දෝසය", category: "අකුසල්", description: "දෝසය - දෝසයයි" },
        { id: 22, name: "ඉස්සාව", category: "අකුසල්", description: "ඉස්සාව - ඊර්ෂ්‍යාවයි" },
        { id: 23, name: "මච්ඡරිය", category: "අකුසල්", description: "මච්ඡරිය - මච්ඡරියයි" },
        { id: 24, name: "කුක්කුච්චය", category: "අකුසල්", description: "කුක්කුච්චය - කුක්කුච්චයයි" },
        { id: 25, name: "ථීනය", category: "අකුසල්", description: "ථීනය - ථීනයයි" },
        { id: 26, name: "මිද්ධය", category: "අකුසල්", description: "මිද්ධය - මිද්ධයයි" }
    ],
    
    // Chaithasika associations with different cittas
    associations: {
        1: [1, 2, 3, 4, 5, 6, 7], // සාධාරණ චෛතසික
        2: [1, 2, 3, 4, 5, 6, 7],
        3: [1, 2, 3, 4, 5, 6, 7],
        4: [1, 2, 3, 4, 5, 6, 7],
        5: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17], // අකුසල් චිත්ත
        6: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17],
        7: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17],
        8: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17],
        9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // රූපාවචර චිත්ත
        10: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12],
        11: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
        12: [1, 2, 3, 4, 5, 6, 7, 11, 12],
        13: [1, 2, 3, 4, 5, 6, 7, 12],
        14: [1, 2, 3, 4, 5, 6, 7, 12], // අරූපාවචර චිත්ත
        15: [1, 2, 3, 4, 5, 6, 7, 12],
        16: [1, 2, 3, 4, 5, 6, 7, 12],
        17: [1, 2, 3, 4, 5, 6, 7, 12],
        18: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // ලෝකෝත්තර චිත්ත
        19: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        21: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        22: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        23: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        24: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        25: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
};

// Global variables
let selectedCittas = [];
let filteredData = [...meditationData.cittas];
let currentLanguage = 'si'; // 'si' for Sinhala, 'en' for English

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const tableBody = document.getElementById('tableBody');
const selectionGrid = document.getElementById('selectionGrid');
const comparisonResults = document.getElementById('comparisonResults');
const comparisonTableBody = document.getElementById('comparisonTableBody');
const languageSwitcher = document.getElementById('languageSwitcher');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateTable();
    populateSelectionGrid();
    setupEventListeners();
    initializeLanguageSwitcher();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Populate the main data table
function populateTable() {
    tableBody.innerHTML = '';
    
    filteredData.forEach(citta => {
        const row = document.createElement('tr');
        const displayName = currentLanguage === 'si' ? citta.name : (citta.nameEn || citta.name);
        const displayCategory = currentLanguage === 'si' ? citta.category : (citta.categoryEn || citta.category);
        const displayType = currentLanguage === 'si' ? citta.type : (citta.typeEn || citta.type);
        
        row.innerHTML = `
            <td>${citta.id}</td>
            <td>${displayName}</td>
            <td><span class="category-badge category-${citta.category.toLowerCase()}">${displayCategory}</span></td>
            <td>${displayType}</td>
            <td>${citta.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate the selection grid for comparison
function populateSelectionGrid() {
    selectionGrid.innerHTML = '';
    
    meditationData.cittas.forEach(citta => {
        const item = document.createElement('div');
        item.className = 'selection-item';
        item.dataset.cittaId = citta.id;
        
        const displayName = currentLanguage === 'si' ? citta.name : (citta.nameEn || citta.name);
        const displayCategory = currentLanguage === 'si' ? citta.category : (citta.categoryEn || citta.category);
        
        item.innerHTML = `
            <div class="citta-name">${displayName}</div>
            <div class="citta-category">${displayCategory}</div>
        `;
        
        item.addEventListener('click', function() {
            toggleCittaSelection(citta.id, this);
        });
        
        selectionGrid.appendChild(item);
    });
}

// Toggle citta selection for comparison
function toggleCittaSelection(cittaId, element) {
    const index = selectedCittas.indexOf(cittaId);
    
    if (index > -1) {
        // Remove from selection
        selectedCittas.splice(index, 1);
        element.classList.remove('selected');
    } else {
        // Add to selection (max 5)
        if (selectedCittas.length < 5) {
            selectedCittas.push(cittaId);
            element.classList.add('selected');
        } else {
            alert('උපරිම චිත්ත 5 ක් පමණක් තෝරාගත හැකිය');
            return;
        }
    }
    
    updateComparison();
}

// Update comparison results
function updateComparison() {
    if (selectedCittas.length === 0) {
        comparisonResults.style.display = 'none';
        return;
    }
    
    comparisonResults.style.display = 'block';
    
    // Create header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>චෛතසිකය</th>';
    
    selectedCittas.forEach(cittaId => {
        const citta = meditationData.cittas.find(c => c.id === cittaId);
        const displayName = currentLanguage === 'si' ? citta.name : (citta.nameEn || citta.name);
        headerRow.innerHTML += `<th>${displayName}</th>`;
    });
    
    comparisonTableBody.innerHTML = '';
    comparisonTableBody.appendChild(headerRow);
    
    // Create data rows for each chaithasika
    meditationData.chaithasikas.forEach(chaithasika => {
        const row = document.createElement('tr');
        const displayName = currentLanguage === 'si' ? chaithasika.name : (chaithasika.nameEn || chaithasika.name);
        row.innerHTML = `<td>${displayName}</td>`;
        
        selectedCittas.forEach(cittaId => {
            const associations = meditationData.associations[cittaId] || [];
            const isPresent = associations.includes(chaithasika.id);
            
            const cell = document.createElement('td');
            cell.textContent = isPresent ? '✓' : '✗';
            cell.className = isPresent ? 'present' : 'absent';
            row.appendChild(cell);
        });
        
        comparisonTableBody.appendChild(row);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filteredData = meditationData.cittas.filter(citta => 
            citta.name.toLowerCase().includes(searchTerm) ||
            citta.description.toLowerCase().includes(searchTerm) ||
            citta.category.toLowerCase().includes(searchTerm) ||
            citta.type.toLowerCase().includes(searchTerm)
        );
        populateTable();
    });
    
    // Category filter
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        if (selectedCategory === '') {
            filteredData = [...meditationData.cittas];
        } else {
            filteredData = meditationData.cittas.filter(citta => 
                citta.category === selectedCategory
            );
        }
        populateTable();
    });
}

// Utility functions
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element) {
    // Remove loading spinner
    const loading = element.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Add some interactive features
function highlightRow(row) {
    row.style.backgroundColor = '#e8f4fd';
    setTimeout(() => {
        row.style.backgroundColor = '';
    }, 2000);
}

// Add click handlers to table rows
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const tableRows = document.querySelectorAll('#mainTable tbody tr');
        tableRows.forEach(row => {
            row.addEventListener('click', function() {
                highlightRow(this);
            });
        });
    }, 1000);
});

// Export data functionality (for future use)
function exportData() {
    const data = {
        cittas: meditationData.cittas,
        chaithasikas: meditationData.chaithasikas,
        associations: meditationData.associations
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'buddhist_meditation_data.json';
    link.click();
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        searchInput.value = '';
        filteredData = [...meditationData.cittas];
        populateTable();
    }
});

// Add scroll-to-top functionality and navbar scroll behavior
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll behavior
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll-to-top button
    if (scrollTop > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #f39c12;
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 1000;
                transition: all 0.3s ease;
            `;
            
            scrollBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Language switching functionality
function initializeLanguageSwitcher() {
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function() {
            toggleLanguage();
        });
    }
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'si' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'si' ? 'en' : 'si';
    updateLanguage();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateLanguage() {
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-si], [data-en]');
    elements.forEach(element => {
        const siText = element.getAttribute('data-si');
        const enText = element.getAttribute('data-en');
        
        if (siText && enText) {
            element.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-si-placeholder], [data-en-placeholder]');
    placeholders.forEach(element => {
        const siPlaceholder = element.getAttribute('data-si-placeholder');
        const enPlaceholder = element.getAttribute('data-en-placeholder');
        
        if (siPlaceholder && enPlaceholder) {
            element.placeholder = currentLanguage === 'si' ? siPlaceholder : enPlaceholder;
        }
    });
    
    // Update language switcher button text
    const langText = languageSwitcher.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLanguage === 'si' ? 'English' : 'සිංහල';
    }
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage === 'si' ? 'si' : 'en';
    
    // Update table data with translated content
    updateTableWithTranslations();
    updateSelectionGridWithTranslations();
    updateComparisonWithTranslations();
}

function updateTableWithTranslations() {
    // Update table headers and content based on current language
    const tableHeaders = document.querySelectorAll('#mainTable th');
    tableHeaders.forEach(header => {
        const siText = header.getAttribute('data-si');
        const enText = header.getAttribute('data-en');
        if (siText && enText) {
            header.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });
    
    // Update search placeholder
    if (searchInput) {
        const siPlaceholder = searchInput.getAttribute('data-si-placeholder');
        const enPlaceholder = searchInput.getAttribute('data-en-placeholder');
        if (siPlaceholder && enPlaceholder) {
            searchInput.placeholder = currentLanguage === 'si' ? siPlaceholder : enPlaceholder;
        }
    }
    
    // Update filter options
    const filterOptions = document.querySelectorAll('#categoryFilter option');
    filterOptions.forEach(option => {
        const siText = option.getAttribute('data-si');
        const enText = option.getAttribute('data-en');
        if (siText && enText) {
            option.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });
}

function updateSelectionGridWithTranslations() {
    // Update selection grid items
    const selectionItems = document.querySelectorAll('.selection-item');
    selectionItems.forEach(item => {
        const cittaId = parseInt(item.dataset.cittaId);
        const citta = meditationData.cittas.find(c => c.id === cittaId);
        if (citta) {
            const cittaName = item.querySelector('.citta-name');
            const cittaCategory = item.querySelector('.citta-category');
            
            if (cittaName) {
                cittaName.textContent = currentLanguage === 'si' ? citta.name : citta.nameEn;
            }
            if (cittaCategory) {
                cittaCategory.textContent = currentLanguage === 'si' ? citta.category : citta.categoryEn;
            }
        }
    });
}

function updateComparisonWithTranslations() {
    // Update comparison table headers
    const comparisonHeaders = document.querySelectorAll('#comparisonTable th');
    comparisonHeaders.forEach(header => {
        const siText = header.getAttribute('data-si');
        const enText = header.getAttribute('data-en');
        if (siText && enText) {
            header.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });
    
    // Update comparison results if they exist
    if (selectedCittas.length > 0) {
        updateComparison();
    }
}

console.log('Buddhist Meditation Tool initialized successfully!');
