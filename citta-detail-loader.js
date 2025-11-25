// Citta Detail Page Loader
// Dynamically renders detailed 8-level explanations for each citta

let cittaDetailedData = null;
let currentCittaId = null;

// Get citta ID from URL parameter
function getCittaIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Load detailed citta content
async function loadCittaDetailedContent() {
    try {
        const response = await fetch('citta-detailed-content.json');
        if (!response.ok) {
            throw new Error('Could not load detailed content');
        }
        cittaDetailedData = await response.json();
        return cittaDetailedData;
    } catch (error) {
        console.error('Error loading detailed content:', error);
        return null;
    }
}

// Render the page
async function renderCittaDetailPage() {
    currentCittaId = getCittaIdFromURL();
    
    await loadCittaDetailedContent();
    
    if (!cittaDetailedData) {
        document.getElementById('sectionsContainer').innerHTML = `
            <div class="content-box red">
                <p>විස්තර ලෝඩ් කිරීමට නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න.</p>
            </div>
        `;
        return;
    }
    
    const citta = cittaDetailedData.cittas.find(c => c.id === currentCittaId);
    
    if (!citta) {
        document.getElementById('sectionsContainer').innerHTML = `
            <div class="content-box red">
                <p>මෙම චිත්තය සඳහා විස්තර තවම නොමැත.</p>
            </div>
        `;
        return;
    }
    
    // Update page title and header
    document.title = `${citta.name} - අභිධර්මය`;
    document.getElementById('cittaName').textContent = citta.name;
    
    // Render all sections
    const container = document.getElementById('sectionsContainer');
    container.innerHTML = '';
    
    // Level 1: Simple
    if (citta.levels.level1_simple) {
        container.appendChild(createLevel1Section(citta.levels.level1_simple));
    }
    
    // Level 2: Word Analysis
    if (citta.levels.level2_wordAnalysis) {
        container.appendChild(createLevel2Section(citta.levels.level2_wordAnalysis));
    }
    
    // Level 3: Classification
    if (citta.levels.level3_classification) {
        container.appendChild(createLevel3Section(citta.levels.level3_classification));
    }
    
    // Level 4: Cetasikas
    if (citta.levels.level4_cetasikas) {
        container.appendChild(createLevel4Section(citta.levels.level4_cetasikas));
    }
    
    // Level 5: Causes
    if (citta.levels.level5_causes) {
        container.appendChild(createLevel5Section(citta.levels.level5_causes));
    }
    
    // Level 6: Deep Analysis
    if (citta.levels.level6_deepAnalysis) {
        container.appendChild(createLevel6Section(citta.levels.level6_deepAnalysis));
    }
    
    // Level 7: Results & Remedies
    if (citta.levels.level7_resultsRemedies) {
        container.appendChild(createLevel7Section(citta.levels.level7_resultsRemedies));
    }
    
    // Level 8: Technical
    if (citta.levels.level8_technical) {
        container.appendChild(createLevel8Section(citta.levels.level8_technical));
    }
    
    // Add practical examples
    if (citta.levels.practicalExamples) {
        container.appendChild(createExamplesSection(citta.levels.practicalExamples));
    }
    
    // Add comparison table
    if (citta.levels.comparison) {
        container.appendChild(createComparisonSection(citta.levels.comparison));
    }
    
    // Add final message
    if (citta.levels.finalMessage) {
        container.appendChild(createFinalMessageSection(citta.levels.finalMessage));
    }
    
    // Setup collapsible sections
    setupCollapsibleSections();
}

function createSectionCard(level) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    const header = document.createElement('div');
    header.className = `section-header ${level.color}`;
    header.innerHTML = `
        <div class="section-title">
            <span class="section-icon">${level.icon}</span>
            <span>${level.title}</span>
        </div>
        <i class="fas fa-chevron-down"></i>
    `;
    
    const content = document.createElement('div');
    content.className = 'section-content';
    
    card.appendChild(header);
    card.appendChild(content);
    
    return { card, header, content };
}

function createLevel1Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box green">
            <h3 style="font-weight: 700; margin-bottom: 1rem; font-size: 1.2rem;">සරල භාෂාවෙන්:</h3>
            <div style="font-size: 1.1rem; margin-bottom: 1rem;">
                ${level.content.summary.map(item => `
                    <p style="margin: 0.5rem 0; display: flex; align-items: start; gap: 0.75rem;">
                        <span style="color: #10b981; font-weight: 700; font-size: 1.5rem;">•</span>
                        <span><strong>${item}</strong></span>
                    </p>
                `).join('')}
            </div>
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981; margin-top: 1rem;">
                <p style="color: #374151;"><strong style="color: #059669;">උදාහරණ:</strong> ${level.content.example}</p>
            </div>
        </div>
    `;
    
    return card;
}

function createLevel2Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box blue">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">සෑම වචනයක් තනි තනිව:</h3>
            ${level.words.map((word, index) => `
                <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid ${getBorderColor(index)}; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: ${getTextColor(index)}; margin-bottom: 0.5rem;">
                        ${index + 1}. ${word.word}:
                    </h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>අර්ථය:</strong> ${word.meaning}</p>
                    <p style="font-size: 0.9rem; color: #6b7280;">${word.explanation}</p>
                    ${word.example ? `
                        <div style="background: #f3f4f6; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem; font-size: 0.85rem;">
                            <strong>සරල උදාහරණ:</strong> ${word.example}
                        </div>
                    ` : ''}
                    ${word.types ? `
                        <div style="background: #f3f4f6; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem;">
                            <p style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">මිථ්‍යා දෘෂ්ටි වර්ග:</p>
                            <ul style="font-size: 0.85rem; margin-left: 1rem;">
                                ${word.types.map(type => `<li style="margin: 0.25rem 0;">• ${type}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${word.comparison ? `
                        <div style="background: #f3f4f6; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem; font-size: 0.85rem;">
                            <strong>වෙනස:</strong>
                            <ul style="margin-left: 1rem; margin-top: 0.5rem;">
                                <li>• <strong>අසංඛාරික:</strong> ${word.comparison.asankharika}</li>
                                <li>• <strong>සසංඛාරික:</strong> ${word.comparison.sasankharika}</li>
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

function createLevel3Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box purple">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">මෙම සිත අයත් වන්නේ:</h3>
            ${level.categories.map((cat, index) => `
                <div style="background: white; padding: 1rem; border-radius: 8px; border: 2px solid ${getCategoryColor(index)}; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <div style="width: 12px; height: 12px; background: ${getCategoryColor(index)}; border-radius: 50%;"></div>
                        <h4 style="font-weight: 700; color: ${getCategoryTextColor(index)};">${cat.name}</h4>
                    </div>
                    <p style="font-size: 0.9rem; color: #6b7280; margin-left: 1.5rem;">${cat.description}</p>
                </div>
            `).join('')}
            <div style="background: linear-gradient(to right, #fef3c7, #fecaca); padding: 1rem; border-radius: 8px; border: 2px solid #f59e0b; margin-top: 1rem;">
                <h3 style="font-weight: 700; color: #92400e; margin-bottom: 0.75rem;">ලෝභමූල සිත් 8 සංඛ්‍යා පද්ධතිය:</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; font-size: 0.9rem;">
                    ${level.lobhaMulaSystem.map((system, index) => `
                        <div style="background: white; padding: 0.75rem; border-radius: 6px;">
                            <strong style="color: #dc2626;">${index + 1}.</strong> ${system}
                        </div>
                    `).join('')}
                </div>
                <p style="font-size: 0.85rem; color: #6b7280; margin-top: 0.75rem;">⭐ = ඔබ විමසන සිත (පළමුවැන්න)</p>
            </div>
        </div>
    `;
    
    return card;
}

function createLevel4Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box orange">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">මෙම සිතෙහි චෛතසික ${level.total}ක් යෙදේ:</h3>
            ${level.groups.map((group, groupIndex) => `
                <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid ${getGroupColor(groupIndex)}; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: ${getGroupTextColor(groupIndex)}; margin-bottom: 0.75rem;">${groupIndex + 1}. ${group.name}:</h4>
                    <p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 0.75rem;">(${group.description})</p>
                    <div class="cetasika-grid">
                        ${group.cetasikas.map((cet, index) => `
                            <div class="cetasika-item" style="background: ${getGroupBgColor(groupIndex)};">
                                ${groupIndex + 1}.${index + 1}. <strong>${cet.name}</strong> - ${cet.meaning}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            ${level.note ? `
                <div style="background: linear-gradient(to right, #fed7aa, #fca5a5); padding: 1rem; border-radius: 8px; border: 2px solid #f59e0b;">
                    <p style="font-weight: 700; color: #92400e; margin-bottom: 0.5rem;">මතක තබා ගන්න:</p>
                    <p style="color: #374151;">${level.note}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

function createLevel5Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box red">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">මෙම සිත ඇතිවන තත්වයන්:</h3>
            ${level.causes.map((cause, index) => `
                <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid ${getCauseColor(index)}; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: ${getCauseTextColor(index)}; margin-bottom: 0.75rem;">
                        ${index + 1}. ${cause.type}:
                    </h4>
                    ${cause.examples ? `
                        <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                            ${cause.examples.map(ex => `
                                <li style="margin: 0.5rem 0; display: flex; align-items: start; gap: 0.5rem;">
                                    <span style="color: #dc2626;">•</span>
                                    <span>${ex}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                    ${cause.explanation ? `
                        <p style="font-size: 0.9rem; color: #374151;">${cause.explanation}</p>
                    ` : ''}
                    ${cause.note ? `
                        <div style="background: #f3f4f6; padding: 0.75rem; border-radius: 6px; margin-top: 0.75rem; font-size: 0.85rem;">
                            <strong>වෙනස:</strong>
                            <p style="margin-top: 0.25rem;">${cause.note}</p>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
            ${level.thoughtExamples ? `
                <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 1rem;">
                    <h3 style="font-weight: 700; color: #92400e; margin-bottom: 0.75rem;">සිතුවිලි පිළිබඳ උදාහරණ:</h3>
                    ${level.thoughtExamples.map((ex, index) => `
                        <p style="font-size: 0.9rem; margin: 0.5rem 0; display: flex; align-items: start; gap: 0.5rem;">
                            <span style="font-weight: 700; color: #f59e0b;">${index + 1}.</span>
                            <span>${ex}</span>
                        </p>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

function createLevel6Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box purple">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">චිත්ත විතානය තුළ තත්වය:</h3>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <h4 style="font-weight: 700; color: #7c3aed; margin-bottom: 0.75rem;">89 සිත් පද්ධතිය තුළ:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; font-size: 0.9rem;">
                    <div style="background: #f5f3ff; padding: 0.75rem; border-radius: 6px;">
                        <strong>සංඛ්‍යාව:</strong> ${level.classification.number}
                    </div>
                    <div style="background: #f5f3ff; padding: 0.75rem; border-radius: 6px;">
                        <strong>වර්ගය:</strong> ${level.classification.type}
                    </div>
                    <div style="background: #f5f3ff; padding: 0.75rem; border-radius: 6px;">
                        <strong>මූලය:</strong> ${level.classification.root}
                    </div>
                    <div style="background: #f5f3ff; padding: 0.75rem; border-radius: 6px;">
                        <strong>විශේෂත්වය:</strong> ${level.classification.feature}
                    </div>
                </div>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #6366f1; margin-bottom: 1rem;">
                <h4 style="font-weight: 700; color: #4338ca; margin-bottom: 0.75rem;">සහගත හා සම්ප්‍රයුක්ත:</h4>
                <div style="font-size: 0.9rem; color: #374151;">
                    <p style="margin: 0.5rem 0;"><strong>සහගත (සහිත):</strong> ${level.terms.sahagata}</p>
                    <p style="margin: 0.5rem 0;"><strong>සම්ප්‍රයුක්ත (යෙදුණු):</strong> ${level.terms.sampayutta}</p>
                    <p style="margin-top: 0.75rem; font-size: 0.85rem; color: #6b7280;">
                        <strong>වෙනස:</strong> ${level.terms.difference}
                    </p>
                </div>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #ec4899; margin-bottom: 1rem;">
                <h4 style="font-weight: 700; color: #be185d; margin-bottom: 0.75rem;">හේතු විභාගය:</h4>
                <div style="font-size: 0.9rem; color: #374151;">
                    <p style="margin: 0.5rem 0;">• <strong>සහේතුක සිතක්:</strong> ${level.hetuAnalysis.type}</p>
                    <p style="margin: 0.5rem 0;">• <strong>හේතු:</strong> ${level.hetuAnalysis.roots}</p>
                    <p style="margin-top: 0.75rem; font-size: 0.85rem; color: #6b7280;">${level.hetuAnalysis.note}</p>
                </div>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 1rem;">
                <h3 style="font-weight: 700; color: #1e40af; margin-bottom: 0.75rem;">චිත්ත උපත්පාද ක්‍රමය:</h3>
                ${level.cittaProcess.map(step => `
                    <div style="background: ${step.highlight ? '#dbeafe' : '#f9fafb'}; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.5rem; ${step.highlight ? 'border: 2px solid #3b82f6;' : ''}">
                        <h4 style="font-weight: 700; color: ${step.highlight ? '#1e40af' : '#374151'}; margin-bottom: 0.25rem;">
                            ${step.step}${step.highlight ? ' ⭐' : ''}
                        </h4>
                        <p style="font-size: 0.85rem; color: #6b7280;">${step.description}</p>
                    </div>
                `).join('')}
            </div>
            
            <div style="background: linear-gradient(to right, #ddd6fe, #fbcfe8); padding: 1rem; border-radius: 8px; border: 2px solid #a855f7;">
                <h3 style="font-weight: 700; color: #581c87; margin-bottom: 0.5rem;">චිත්තක්ෂණ:</h3>
                <p style="font-size: 0.9rem; color: #374151;">${level.cittaMoment}</p>
            </div>
        </div>
    `;
    
    return card;
}

function createLevel7Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box red">
            <h3 style="font-weight: 700; margin-bottom: 1rem; color: #dc2626;">මෙම සිතෙහි අනිෂ්ට විපාක:</h3>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 1rem;">
                <h4 style="font-weight: 700; color: #dc2626; margin-bottom: 0.75rem;">1. තාවකාලික විපාක:</h4>
                <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                    ${level.badResults.immediate.map(result => `<li style="margin: 0.25rem 0;">• ${result}</li>`).join('')}
                </ul>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 1rem;">
                <h4 style="font-weight: 700; color: #f59e0b; margin-bottom: 0.75rem;">2. කර්ම විපාක:</h4>
                <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                    ${level.badResults.karmic.map(result => `<li style="margin: 0.25rem 0;">• ${result}</li>`).join('')}
                </ul>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #8b5cf6; margin-bottom: 1rem;">
                <h4 style="font-weight: 700; color: #7c3aed; margin-bottom: 0.75rem;">3. භාවනාවට බාධා:</h4>
                <p style="font-size: 0.9rem; color: #374151;">${level.badResults.meditation}</p>
            </div>
            
            <h3 style="font-weight: 700; margin-top: 1.5rem; margin-bottom: 1rem; color: #059669;">ප්‍රතිකාර - මෙම සිත දුරු කිරීම:</h3>
            
            ${level.remedies.map((remedy, index) => `
                <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: #059669; margin-bottom: 0.75rem;">${index + 1}. ${remedy.method}:</h4>
                    ${remedy.practices ? `
                        <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                            ${remedy.practices.map(practice => `<li style="margin: 0.5rem 0;">• ${practice}</li>`).join('')}
                        </ul>
                    ` : ''}
                    ${remedy.explanation ? `
                        <p style="font-size: 0.9rem; color: #374151;">${remedy.explanation}</p>
                    ` : ''}
                </div>
            `).join('')}
            
            ${level.specialNote ? `
                <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <h3 style="font-weight: 700; color: #92400e; margin-bottom: 0.5rem;">විශේෂ සටහන:</h3>
                    <p style="font-size: 0.9rem; color: #374151; line-height: 1.6;">${level.specialNote}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

function createLevel8Section(level) {
    const { card, header, content } = createSectionCard(level);
    
    content.innerHTML = `
        <div class="content-box blue">
            <h3 style="font-weight: 700; margin-bottom: 1rem;">අභිධර්ම ග්‍රන්ථ සඳහන්:</h3>
            
            ${level.textReferences.dhammasangani ? `
                <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: #2563eb; margin-bottom: 0.5rem;">
                        <a href="https://tipitaka.lk/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none; border-bottom: 1px dotted #2563eb;">ධම්මසඞ්ගණී පාලි</a>:
                    </h4>
                    <p style="font-style: italic; color: #374151; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        "${level.textReferences.dhammasangani.pali}"
                    </p>
                    <p style="font-size: 0.85rem; color: #6b7280;">${level.textReferences.dhammasangani.translation}</p>
                </div>
            ` : ''}
            
            ${level.textReferences.abhidhammatthasangaha ? `
                <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: #2563eb; margin-bottom: 0.5rem;">
                        <a href="https://tipitaka.lk/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none; border-bottom: 1px dotted #2563eb;">අභිධම්මත්ථ සඞ්ගහ</a>:
                    </h4>
                    <p style="font-size: 0.9rem; color: #374151;">${level.textReferences.abhidhammatthasangaha}</p>
                </div>
            ` : ''}
            
            ${level.textReferences.visuddhimagga ? `
                <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; color: #2563eb; margin-bottom: 0.5rem;">
                        <a href="https://tipitaka.lk/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none; border-bottom: 1px dotted #2563eb;">විසුද්ධිමග්ග</a>:
                    </h4>
                    <p style="font-size: 0.9rem; color: #374151;">${level.textReferences.visuddhimagga}</p>
                </div>
            ` : ''}
            
            <h3 style="font-weight: 700; margin-top: 1.5rem; margin-bottom: 1rem; color: #4f46e5;">චිත්ත ප්‍රඥප්ති (සිත් නම්):</h3>
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.5rem; font-size: 0.9rem;">
                <strong>පාලි:</strong> ${level.nomenclature.pali}
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.5rem; font-size: 0.9rem;">
                <strong>සංක්ෂිප්ත:</strong> ${level.nomenclature.abbreviated}
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; font-size: 0.9rem;">
                <strong>අක්ෂර සංකේත:</strong> ${level.nomenclature.code}
            </div>
            
            <h3 style="font-weight: 700; margin-top: 1.5rem; margin-bottom: 1rem; color: #7c3aed;">සම්පයෝග (සිත් මිශ්‍රණය):</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; font-size: 0.9rem;">
                <div style="background: white; padding: 0.75rem; border-radius: 6px;">
                    <strong>චෛතසික සංඛ්‍යාව:</strong> ${level.composition.cetasikaCount}
                </div>
                <div style="background: white; padding: 0.75rem; border-radius: 6px;">
                    <strong>හේතු සංඛ්‍යාව:</strong> ${level.composition.hetuCount}
                </div>
                <div style="background: white; padding: 0.75rem; border-radius: 6px;">
                    <strong>වේදනා:</strong> ${level.composition.vedana}
                </div>
                <div style="background: white; padding: 0.75rem; border-radius: 6px;">
                    <strong>දැනුම්:</strong> ${level.composition.knowledge}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function createExamplesSection(examples) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    card.innerHTML = `
        <div class="section-header blue">
            <div class="section-title">
                <span class="section-icon">💡</span>
                <span>ප්‍රායෝගික උදාහරණ</span>
            </div>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="section-content">
            ${examples.map((ex, index) => `
                <div style="background: ${getExampleBgColor(index)}; padding: 1rem; border-radius: 8px; border-left: 4px solid ${getExampleBorderColor(index)}; margin-bottom: 1rem;">
                    <h3 style="font-weight: 700; color: ${getExampleTextColor(index)}; margin-bottom: 0.75rem;">${ex.title}</h3>
                    <div style="font-size: 0.9rem; color: #374151;">
                        <p style="margin: 0.5rem 0;"><strong style="color: ${getExampleTextColor(index)};">තත්වය:</strong> ${ex.situation}</p>
                        <p style="margin: 0.5rem 0;"><strong style="color: #7c3aed;">සිත:</strong> ${ex.citta}</p>
                        <p style="margin: 0.5rem 0;"><strong style="color: #f59e0b;">චෛතසික:</strong> ${ex.cetasikas}</p>
                        <p style="margin: 0.5rem 0;"><strong style="color: #059669;">ප්‍රතිකාරය:</strong> ${ex.remedy}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

function createComparisonSection(comparison) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    card.innerHTML = `
        <div class="section-header blue">
            <div class="section-title">
                <span class="section-icon">⚖️</span>
                <span>සංසන්දනාත්මක වගුව</span>
            </div>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="section-content">
            <div style="overflow-x: auto;">
                <table style="width: 100%; font-size: 0.9rem; border-collapse: collapse;">
                    <thead style="background: #e0e7ff;">
                        <tr>
                            <th style="padding: 0.75rem; text-align: left; border: 1px solid #cbd5e1;">ලක්ෂණය</th>
                            <th style="padding: 0.75rem; text-align: left; border: 1px solid #cbd5e1;">දිට්ඨි සම්පයුත්ත</th>
                            <th style="padding: 0.75rem; text-align: left; border: 1px solid #cbd5e1;">දිට්ඨි විප්‍රයුක්ත</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background: white;">
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: 600;">දිට්ඨි චෛතසිකය</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #dc2626;">✓ ${comparison.withDitthi.ditthiCetasika}</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #059669;">✗ ${comparison.withoutDitthi.ditthiCetasika}</td>
                        </tr>
                        <tr style="background: #f9fafb;">
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: 600;">වැරදි විශ්වාස</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #dc2626;">${comparison.withDitthi.wrongViews}</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #059669;">${comparison.withoutDitthi.wrongViews}</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: 600;">චෛතසික සංඛ්‍යාව</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">${comparison.withDitthi.cetasikaCount}</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">${comparison.withoutDitthi.cetasikaCount}</td>
                        </tr>
                        <tr style="background: #f9fafb;">
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: 600;">උදාහරණ</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">${comparison.withDitthi.example}</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1;">${comparison.withoutDitthi.example}</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; font-weight: 600;">භයානකත්වය</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #dc2626;">${comparison.withDitthi.danger}</td>
                            <td style="padding: 0.75rem; border: 1px solid #cbd5e1; color: #f59e0b;">${comparison.withoutDitthi.danger}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ${comparison.note ? `
                <div style="background: #fef3c7; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 1rem;">
                    <p style="font-size: 0.9rem; color: #374151;"><strong>සටහන:</strong> ${comparison.note}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

function createFinalMessageSection(message) {
    const section = document.createElement('div');
    section.className = 'final-message';
    
    section.innerHTML = `
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-heart"></i>
            අවසාන පණිවිඩය
        </h2>
        <div style="color: rgba(255,255,255,0.95);">
            <p style="line-height: 1.8; margin-bottom: 1rem;">${message.main}</p>
            <p style="line-height: 1.8; margin-bottom: 1rem;">${message.warning}</p>
            <p style="line-height: 1.8; margin-bottom: 1.5rem;">${message.path}</p>
            
            <div style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 12px; padding: 1.5rem;">
                <p style="text-align: center; font-weight: 700; font-size: 1.2rem; color: #fef3c7; margin-bottom: 0.5rem;">
                    "${message.quote.pali}"
                </p>
                <p style="text-align: center; font-size: 0.9rem; color: rgba(255,255,255,0.8);">
                    ${message.quote.meaning}
                </p>
            </div>
        </div>
    `;
    
    return section;
}

// Setup collapsible section handlers
function setupCollapsibleSections() {
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.fa-chevron-down, .fa-chevron-up');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                content.classList.add('expanded');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
}

// Helper functions for colors
function getBorderColor(index) {
    const colors = ['#3b82f6', '#8b5cf6', '#10b981'];
    return colors[index % colors.length];
}

function getTextColor(index) {
    const colors = ['#1e40af', '#6b21a8', '#047857'];
    return colors[index % colors.length];
}

function getCategoryColor(index) {
    const colors = ['#a855f7', '#dc2626', '#3b82f6'];
    return colors[index % colors.length];
}

function getCategoryTextColor(index) {
    const colors = ['#7e22ce', '#991b1b', '#1e40af'];
    return colors[index % colors.length];
}

function getGroupColor(index) {
    const colors = ['#3b82f6', '#dc2626', '#8b5cf6', '#ec4899'];
    return colors[index % colors.length];
}

function getGroupTextColor(index) {
    const colors = ['#1e40af', '#991b1b', '#6b21a8', '#be185d'];
    return colors[index % colors.length];
}

function getGroupBgColor(index) {
    const colors = ['#eff6ff', '#fee2e2', '#f5f3ff', '#fce7f3'];
    return colors[index % colors.length];
}

function getCauseColor(index) {
    const colors = ['#dc2626', '#f59e0b', '#8b5cf6', '#3b82f6'];
    return colors[index % colors.length];
}

function getCauseTextColor(index) {
    const colors = ['#991b1b', '#92400e', '#6b21a8', '#1e40af'];
    return colors[index % colors.length];
}

function getExampleBgColor(index) {
    const bgColors = ['#fee2e2', '#dbeafe', '#f3e8ff', '#d1fae5'];
    return bgColors[index % bgColors.length];
}

function getExampleBorderColor(index) {
    const borderColors = ['#dc2626', '#3b82f6', '#8b5cf6', '#10b981'];
    return borderColors[index % borderColors.length];
}

function getExampleTextColor(index) {
    const textColors = ['#991b1b', '#1e40af', '#6b21a8', '#047857'];
    return textColors[index % textColors.length];
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCittaDetailPage);
} else {
    renderCittaDetailPage();
}

// Export for global access
window.cittaDetailLoader = {
    load: renderCittaDetailPage,
    getCittaId: getCittaIdFromURL
};






