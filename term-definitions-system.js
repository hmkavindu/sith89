// Term Definitions System - Interactive Dictionary for Abhidhamma Terms
// Makes all terms clickable and shows Sinhala definitions for beginners

let termDefinitions = null;
let activeDefinitionModal = null;

// Load term definitions database
async function loadTermDefinitions() {
    try {
        console.log('🔄 Loading term definitions...');
        const response = await fetch('term-definitions-database.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        termDefinitions = data.terms;
        console.log('✅ Term definitions loaded:', Object.keys(termDefinitions).length, 'terms');
        
        // Initialize click handlers after a short delay
        setTimeout(() => {
            initializeTermClickHandlers();
        }, 500);
        
        return termDefinitions;
    } catch (error) {
        console.error('❌ Error loading term definitions:', error);
        return null;
    }
}

// Find term in text (handles partial matches and word boundaries)
function findTermInText(text, term) {
    // Create regex pattern for the term with word boundaries
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(${escapedTerm})`, 'gi');
    return pattern.test(text);
}

// Extract all terms from text
function extractTermsFromText(text) {
    if (!termDefinitions || !text) return [];
    
    const foundTerms = [];
    const textLower = text.toLowerCase();
    
    // Check each term in the database
    for (const term in termDefinitions) {
        if (findTermInText(textLower, term.toLowerCase())) {
            foundTerms.push({
                term: term,
                definition: termDefinitions[term]
            });
        }
    }
    
    // Sort by length (longer terms first to avoid partial matches)
    return foundTerms.sort((a, b) => b.term.length - a.term.length);
}

// Create clickable term wrapper
function makeTermClickable(element, term, definition) {
    // Don't wrap if already wrapped
    if (element.dataset.termClickable === 'true') return;
    
    element.dataset.termClickable = 'true';
    element.dataset.term = term;
    element.style.cursor = 'pointer';
    element.classList.add('term-clickable');
    
    // Add hover effect
    element.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline';
        this.style.color = '#2F4F4F';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
        this.style.color = '';
    });
    
    // Add click handler
    element.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showTermDefinition(term, definition, this);
    });
}

// Process text node and make terms clickable
function processTextNode(node) {
    if (node.nodeType !== Node.TEXT_NODE) return;
    
    // Skip if parent is already a term-clickable element
    if (node.parentElement && node.parentElement.classList.contains('term-clickable')) {
        return;
    }
    
    // Skip if parent contains HTML attributes (already processed)
    if (node.parentElement && (
        node.parentElement.innerHTML.includes('data-term-clickable') ||
        node.parentElement.innerHTML.includes('data-term=')
    )) {
        return;
    }
    
    const text = node.textContent.trim();
    if (!text || text.length < 2) return;
    
    const terms = extractTermsFromText(text);
    if (terms.length === 0) return;
    
    let processedText = text;
    let hasChanges = false;
    
    // Mark terms in text - process longest terms first
    terms.forEach(({ term }) => {
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        if (regex.test(processedText)) {
            processedText = processedText.replace(regex, `<span class="term-marker" data-term="${term}">$1</span>`);
            hasChanges = true;
        }
    });
    
    // If we found terms, replace the text node
    if (hasChanges && processedText !== text) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = processedText;
        
        // Replace text node with new content
        const parent = node.parentNode;
        if (parent) {
            while (tempDiv.firstChild) {
                parent.insertBefore(tempDiv.firstChild, node);
            }
            parent.removeChild(node);
            
            // Make marked terms clickable
            parent.querySelectorAll('.term-marker').forEach(span => {
                const term = span.dataset.term;
                if (termDefinitions[term]) {
                    makeTermClickable(span, term, termDefinitions[term]);
                }
            });
        }
    }
}

// Process all text nodes in an element
function processElementForTerms(element) {
    if (!element || !termDefinitions) return;
    
    // Skip if already processed
    if (element.dataset.termsProcessed === 'true') return;
    
    // Skip if element already contains term-clickable elements
    if (element.classList.contains('term-clickable') || element.querySelector('.term-clickable')) {
        return;
    }
    
    // Skip if element's innerHTML contains HTML attributes (already processed)
    if (element.innerHTML && (
        element.innerHTML.includes('data-term-clickable="true"') ||
        element.innerHTML.includes('data-term-clickable=\'true\'') ||
        (element.innerHTML.includes('data-term=') && element.innerHTML.includes('term-clickable'))
    )) {
        return;
    }
    
    element.dataset.termsProcessed = 'true';
    
    // Skip script, style, and other non-content elements
    const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'OBJECT', 'EMBED'];
    if (skipTags.includes(element.tagName)) return;
    
    // Process all text nodes recursively
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Skip if parent is script, style, etc.
                const parent = node.parentNode;
                if (parent && skipTags.includes(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    // Process text nodes
    textNodes.forEach(processTextNode);
    
    // Also check for direct text matches in common elements
    const commonSelectors = 'h1, h2, h3, h4, h5, h6, p, span, td, th, li, dt, dd, button, a';
    element.querySelectorAll(commonSelectors).forEach(el => {
        if (el.dataset.termsProcessed === 'true') return;
        // Skip if element already has term-clickable children or is itself a term-clickable
        if (el.classList.contains('term-clickable') || el.querySelector('.term-clickable')) {
            return;
        }
        el.dataset.termsProcessed = 'true';
        
        const text = el.textContent.trim();
        if (!text || text.length < 2) return;
        
        // Skip if element contains HTML attributes in text (already processed)
        if (el.innerHTML.includes('data-term-clickable') || el.innerHTML.includes('data-term=')) {
            return;
        }
        
        const terms = extractTermsFromText(text);
        if (terms.length === 0) return;
        
        // Process text content only, preserving HTML structure
        const walker = document.createTreeWalker(
            el,
            NodeFilter.SHOW_TEXT,
            null
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            // Skip if parent is already a term-clickable element
            if (node.parentElement && node.parentElement.classList.contains('term-clickable')) {
                continue;
            }
            textNodes.push(node);
        }
        
        // Process each text node
        textNodes.forEach(textNode => {
            const nodeText = textNode.textContent;
            if (!nodeText || nodeText.trim().length < 2) return;
            
            terms.forEach(({ term, definition }) => {
                if (nodeText.includes(term)) {
                    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                    const matches = nodeText.match(regex);
                    
                    if (matches && matches.length > 0) {
                        // Create wrapper span
                        const wrapper = document.createElement('span');
                        wrapper.className = 'term-clickable';
                        wrapper.setAttribute('data-term', term);
                        
                        // Replace text node with wrapper containing the term
                        const parent = textNode.parentNode;
                        const newText = nodeText.replace(regex, (match) => {
                            return `<span class="term-clickable" data-term="${term}">${match}</span>`;
                        });
                        
                        // Only replace if we actually found a match
                        if (newText !== nodeText) {
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = newText;
                            
                            // Replace text node with new content
                            while (tempDiv.firstChild) {
                                parent.insertBefore(tempDiv.firstChild, textNode);
                            }
                            parent.removeChild(textNode);
                            
                            // Make spans clickable
                            parent.querySelectorAll('.term-clickable[data-term="' + term + '"]').forEach(span => {
                                if (termDefinitions[term]) {
                                    makeTermClickable(span, term, termDefinitions[term]);
                                }
                            });
                        }
                    }
                }
            });
        });
    });
}

// Initialize click handlers for all terms
function initializeTermClickHandlers() {
    if (!termDefinitions) {
        console.warn('⚠️ Term definitions not loaded yet');
        return;
    }
    
    console.log('🔄 Initializing term click handlers...');
    
    // Process main content areas
    const contentAreas = [
        '#table',
        '#analysis',
        '#comparison',
        '#explanations',
        '.tab-content',
        '.mental-state-card',
        '.analysis-card',
        '.category-card',
        'table',
        '.moha-analysis-container',
        '.raga-analysis-container',
        '.anger-analysis-container'
    ];
    
    contentAreas.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            processElementForTerms(element);
        });
    });
    
    // Process new content as it's added (for dynamic content)
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    processElementForTerms(node);
                }
            });
        });
    });
    
    // Observe changes to the document body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    console.log('✅ Term click handlers initialized');
}

// Show term definition modal
function showTermDefinition(term, definition, element) {
    // Close any existing modal
    if (activeDefinitionModal) {
        closeTermDefinition();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'term-definition-modal';
    modal.id = 'termDefinitionModal';
    
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Position modal near the clicked element
    const top = rect.bottom + scrollTop + 10;
    const left = rect.left + scrollLeft;
    
    modal.style.cssText = `
        position: absolute;
        top: ${top}px;
        left: ${left}px;
        max-width: 400px;
        background: white;
        border: 2px solid #2F4F4F;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Noto Sans Sinhala', Arial, sans-serif;
    `;
    
    modal.innerHTML = `
        <div class="term-definition-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 2px solid #2F4F4F; padding-bottom: 10px;">
            <h3 style="margin: 0; color: #2F4F4F; font-size: 1.4em;">${term}</h3>
            <button class="close-term-definition" style="background: none; border: none; font-size: 1.5em; cursor: pointer; color: #666;">&times;</button>
        </div>
        <div class="term-definition-content">
            <div class="term-meaning" style="margin-bottom: 15px;">
                <strong style="color: #2F4F4F;">අර්ථය:</strong>
                <p style="margin: 5px 0; font-size: 1.1em; line-height: 1.6;">${definition.meaning}</p>
            </div>
            <div class="term-explanation" style="margin-bottom: 15px;">
                <strong style="color: #2F4F4F;">විස්තරය:</strong>
                <p style="margin: 5px 0; font-size: 1em; line-height: 1.6;">${definition.explanation}</p>
            </div>
            ${definition.category ? `
                <div class="term-category" style="margin-bottom: 10px;">
                    <strong style="color: #2F4F4F;">කාණ්ඩය:</strong>
                    <span style="margin-left: 5px;">${definition.category}</span>
                </div>
            ` : ''}
            ${definition.relatedTerms && definition.relatedTerms.length > 0 ? `
                <div class="term-related" style="margin-bottom: 10px;">
                    <strong style="color: #2F4F4F;">සම්බන්ධ පද:</strong>
                    <div style="margin-top: 5px;">
                        ${definition.relatedTerms.map(t => `<span class="related-term" style="display: inline-block; margin: 2px 5px; padding: 3px 8px; background: #f0f0f0; border-radius: 5px; cursor: pointer;" data-term="${t}">${t}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            ${definition.tipitakaLink ? `
                <div class="term-reference" style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #ddd;">
                    <a href="${definition.tipitakaLink}" target="_blank" style="color: #2F4F4F; text-decoration: none;">
                        <i class="fas fa-external-link-alt"></i> Tipitaka.lk වෙත යන්න
                    </a>
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(modal);
    activeDefinitionModal = modal;
    
    // Close button handler
    modal.querySelector('.close-term-definition').addEventListener('click', () => {
        closeTermDefinition();
    });
    
    // Related term click handlers
    modal.querySelectorAll('.related-term').forEach(el => {
        el.addEventListener('click', function() {
            const relatedTerm = this.dataset.term;
            if (termDefinitions[relatedTerm]) {
                showTermDefinition(relatedTerm, termDefinitions[relatedTerm], element);
            }
        });
    });
    
    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', function outsideClick(e) {
            if (!modal.contains(e.target) && !element.contains(e.target)) {
                closeTermDefinition();
                document.removeEventListener('click', outsideClick);
            }
        });
    }, 100);
    
    // Adjust position if modal goes off screen
    setTimeout(() => {
        const modalRect = modal.getBoundingClientRect();
        if (modalRect.right > window.innerWidth) {
            modal.style.left = (window.innerWidth - modalRect.width - 20) + 'px';
        }
        if (modalRect.bottom > window.innerHeight) {
            modal.style.top = (rect.top + scrollTop - modalRect.height - 10) + 'px';
        }
    }, 0);
}

// Close term definition modal
function closeTermDefinition() {
    if (activeDefinitionModal) {
        activeDefinitionModal.remove();
        activeDefinitionModal = null;
    }
}

// Add CSS for term clickable elements
function addTermDefinitionStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .term-clickable {
            cursor: pointer;
            transition: all 0.2s ease;
            border-bottom: 1px dashed #2F4F4F;
            padding: 0 2px;
        }
        
        .term-clickable:hover {
            background-color: #f0f8fa;
            color: #2F4F4F;
            border-bottom-color: #2F4F4F;
        }
        
        .term-definition-modal {
            animation: fadeIn 0.2s ease;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .related-term:hover {
            background-color: #2F4F4F !important;
            color: white !important;
        }
    `;
    document.head.appendChild(style);
}

// Clean up any accidentally displayed HTML attributes
function cleanupDisplayedAttributes() {
    // Find any text nodes that contain HTML attributes as text
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        const text = node.textContent;
        // Check if text contains HTML attributes that shouldn't be displayed
        if (text.includes('data-term-clickable="true"') || 
            text.includes('data-term-clickable=\'true\'') ||
            (text.includes('data-term=') && text.includes('style="cursor: pointer;"'))) {
            textNodes.push(node);
        }
    }
    
    // Remove or clean up these text nodes
    textNodes.forEach(textNode => {
        const parent = textNode.parentNode;
        if (parent && parent.nodeType === Node.ELEMENT_NODE) {
            // Check if this is actually HTML content that should be preserved
            const htmlContent = parent.innerHTML;
            if (htmlContent && htmlContent.includes(textNode.textContent)) {
                // This might be legitimate HTML, skip it
                return;
            }
            // Otherwise, it's likely displayed as text - remove it
            textNode.textContent = textNode.textContent
                .replace(/data-term-clickable="true"/g, '')
                .replace(/data-term-clickable='true'/g, '')
                .replace(/style="cursor: pointer;"/g, '')
                .replace(/data-term="[^"]*"/g, '')
                .trim();
            
            // If text node is now empty, remove it
            if (!textNode.textContent.trim()) {
                parent.removeChild(textNode);
            }
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        addTermDefinitionStyles();
        loadTermDefinitions().then(() => {
            // Clean up any displayed attributes after a short delay
            setTimeout(cleanupDisplayedAttributes, 2000);
        });
    });
} else {
    addTermDefinitionStyles();
    loadTermDefinitions().then(() => {
        // Clean up any displayed attributes after a short delay
        setTimeout(cleanupDisplayedAttributes, 2000);
    });
}

// Export for global use
window.termDefinitionsSystem = {
    loadTermDefinitions,
    showTermDefinition,
    closeTermDefinition,
    initializeTermClickHandlers
};


