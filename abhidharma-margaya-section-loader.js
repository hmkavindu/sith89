// අභිධර්ම මාර්ගය Book Reference Section Loader
// Adds book references to citta detail pages without modifying existing content

// Load both reference files
let abhidharmaMargayaRefs = null;
let abhidharmaMargayaChapter1 = null;

// Initialize and load data
async function initializeAbhidharmaMargayaSection() {
    try {
        // Load reference mappings
        if (typeof window.abhidharmaMargayaReferences !== 'undefined') {
            abhidharmaMargayaRefs = window.abhidharmaMargayaReferences;
        }

        // Load chapter 1 JSON data
        const response = await fetch('data/abhidharma-margaya-chapter-1.json');
        if (response.ok) {
            abhidharmaMargayaChapter1 = await response.json();
        }

        return true;
    } catch (error) {
        console.error('Error loading Abhidharma Margaya data:', error);
        return false;
    }
}

// Create the book reference section for a citta
function createAbhidharmaMargayaSection(cittaId) {
    if (!abhidharmaMargayaRefs) {
        return null;
    }

    const ref = abhidharmaMargayaRefs.getCittaReference(cittaId);

    if (!ref) {
        return null;
    }

    const section = document.createElement('div');
    section.className = 'section-card abhidharma-margaya-section';
    section.style.marginTop = '2rem';
    section.style.border = '3px solid #667eea';

    section.innerHTML = `
        <button class="section-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;" onclick="toggleAbhidharmaMargayaSection()">
            <div class="section-title-content">
                <i class="fas fa-book-open section-icon" style="color: white;"></i>
                <h2 class="section-title" style="color: white;">📖 අභිධර්ම මාර්ගය පොතෙහි සඳහන</h2>
            </div>
            <i class="fas fa-chevron-down section-chevron" style="color: white;"></i>
        </button>
        <div class="section-content" id="abhidharmaMargayaContent">
            ${generateReferenceContent(ref, cittaId)}
        </div>
    `;

    return section;
}

// Generate the content for the reference section
function generateReferenceContent(ref, cittaId) {
    let html = `
        <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); padding: 2rem; border-radius: 1rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border-left: 6px solid #667eea; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="font-weight: 700; color: #5b21b6; margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-book" style="color: #667eea;"></i>
                    පොතේ මාතෘකාව
                </h3>
                <p style="font-size: 1.1rem; color: #374151; margin-bottom: 0.75rem;">
                    <strong>${ref.reference}</strong>
                </p>
                <a href="${ref.url}" target="_blank" rel="noopener noreferrer" 
                   style="display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: transform 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
                   onmouseover="this.style.transform='translateX(5px)'"
                   onmouseout="this.style.transform='translateX(0)'">
                    <i class="fas fa-external-link-alt"></i>
                    පොතේ මෙම කොටස කියවන්න
                </a>
            </div>
    `;

    // Add occasions if available
    if (ref.occasions && ref.occasions.examples) {
        html += `
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border-left: 6px solid #f59e0b; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="font-weight: 700; color: #92400e; margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-lightbulb" style="color: #f59e0b;"></i>
                    මෙම සිත ඇති වන අවස්ථා (පොතෙහි සඳහන)
                </h3>
                <ul style="list-style: none; padding: 0;">
                    ${ref.occasions.examples.map(ex => `
                        <li style="padding: 0.75rem; background: #fef3c7; border-radius: 0.5rem; margin-bottom: 0.5rem; display: flex; align-items: start; gap: 0.75rem;">
                            <span style="color: #f59e0b; font-weight: 700; font-size: 1.2rem;">•</span>
                            <span style="color: #374151; font-size: 1rem;">${ex}</span>
                        </li>
                    `).join('')}
                </ul>
                <a href="${ref.occasions.url}" target="_blank" rel="noopener noreferrer" 
                   style="display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1rem; color: #f59e0b; text-decoration: none; font-weight: 600;"
                   onmouseover="this.style.textDecoration='underline'"
                   onmouseout="this.style.textDecoration='none'">
                    <i class="fas fa-arrow-right"></i>
                    වැඩි විස්තර පොතෙන් කියවන්න
                </a>
            </div>
        `;
    }

    // Add characteristics if available
    if (ref.characteristics) {
        html += `
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border-left: 6px solid #10b981; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="font-weight: 700; color: #065f46; margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-check-circle" style="color: #10b981;"></i>
                    ප්‍රධාන ලක්ෂණ (පොතෙහි සඳහන)
                </h3>
                <ul style="list-style: none; padding: 0;">
                    ${ref.characteristics.map(char => `
                        <li style="padding: 0.75rem; background: #d1fae5; border-radius: 0.5rem; margin-bottom: 0.5rem; display: flex; align-items: start; gap: 0.75rem;">
                            <span style="color: #10b981; font-weight: 700; font-size: 1.2rem;">✓</span>
                            <span style="color: #374151; font-size: 1rem;">${char}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // Add classification details if available
    if (ref.classification) {
        html += `
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border-left: 6px solid #8b5cf6; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="font-weight: 700; color: #6b21a8; margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-sitemap" style="color: #8b5cf6;"></i>
                    වර්ගීකරණය (පොතෙහි සඳහන)
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        `;

        if (ref.classification.vedana) {
            html += `
                <div style="background: #f5f3ff; padding: 1rem; border-radius: 0.5rem;">
                    <p style="font-weight: 600; color: #6b21a8; margin-bottom: 0.5rem;">වේදනා:</p>
                    <p style="color: #374151;">${ref.classification.vedana.join(', ')}</p>
                </div>
            `;
        }

        if (ref.classification.ditthi) {
            html += `
                <div style="background: #f5f3ff; padding: 1rem; border-radius: 0.5rem;">
                    <p style="font-weight: 600; color: #6b21a8; margin-bottom: 0.5rem;">දිට්ඨි:</p>
                    <p style="color: #374151;">${ref.classification.ditthi.join(', ')}</p>
                </div>
            `;
        }

        if (ref.classification.sankhara) {
            html += `
                <div style="background: #f5f3ff; padding: 1rem; border-radius: 0.5rem;">
                    <p style="font-weight: 600; color: #6b21a8; margin-bottom: 0.5rem;">සංඛාර:</p>
                    <p style="color: #374151;">${ref.classification.sankhara.join(', ')}</p>
                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;
    }

    // Add book info footer
    html += `
            <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; border: 2px dashed #667eea; text-align: center;">
                <p style="font-size: 1.1rem; font-weight: 600; color: #5b21b6; margin-bottom: 0.5rem;">
                    📚 මූලාශ්‍රය: අභිධර්ම මාර්ගය
                </p>
                <p style="font-size: 0.95rem; color: #6b7280; margin-bottom: 0.75rem;">
                    රචනය: රේරුකානේ චන්දවිමල හිමි
                </p>
                <a href="https://pitaka.lk/books/abhidharma-margaya/" target="_blank" rel="noopener noreferrer"
                   style="display: inline-flex; align-items: center; gap: 0.5rem; color: #667eea; text-decoration: none; font-weight: 600; font-size: 0.9rem;"
                   onmouseover="this.style.textDecoration='underline'"
                   onmouseout="this.style.textDecoration='none'">
                    <i class="fas fa-globe"></i>
                    සම්පූර්ණ පොත කියවන්න
                </a>
            </div>
        </div>
    `;

    return html;
}

// Toggle function for the section
function toggleAbhidharmaMargayaSection() {
    const content = document.getElementById('abhidharmaMargayaContent');
    const button = document.querySelector('.abhidharma-margaya-section .section-header');
    const chevron = button.querySelector('.section-chevron');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
    } else {
        content.classList.add('expanded');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
    }
}

// Add the section to a citta detail page
async function addAbhidharmaMargayaSectionToPage(cittaId, containerId = 'sectionsContainer') {
    // Initialize data if not already loaded
    if (!abhidharmaMargayaRefs) {
        await initializeAbhidharmaMargayaSection();
    }

    // Create the section
    const section = createAbhidharmaMargayaSection(cittaId);

    if (!section) {
        console.log('No Abhidharma Margaya reference found for citta', cittaId);
        return false;
    }

    // Find the container and append
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(section);
        return true;
    }

    return false;
}

// Export for global access
if (typeof window !== 'undefined') {
    window.abhidharmaMargayaSectionLoader = {
        initialize: initializeAbhidharmaMargayaSection,
        createSection: createAbhidharmaMargayaSection,
        addToPage: addAbhidharmaMargayaSectionToPage,
        toggleSection: toggleAbhidharmaMargayaSection
    };
}
