(function() {
    'use strict';

    // Chatbot functionality
    const chatbotLauncher = document.getElementById('chatbotLauncher');
    const chatbotWidget = document.getElementById('chatbotWidget');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotForm = document.getElementById('chatbotForm');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotStatus = document.getElementById('chatbotStatus');
    const chatbotSend = document.getElementById('chatbotSend');

    // Check if elements exist
    if (!chatbotLauncher || !chatbotWidget || !chatbotForm || !chatbotInput || !chatbotMessages) {
        console.error('Chatbot: Required elements not found');
        return;
    }

    // Chat history
    let chatHistory = [];

    // System prompt for Buddhist knowledge
    const systemPrompt = `You are a knowledgeable Buddhist scholar specializing in Abhidhamma (Abhidharma), Citta (consciousness), and Cetasika (mental factors). You provide accurate, respectful, and insightful answers about Buddhist philosophy, meditation, and the workings of the mind according to Theravada Buddhist teachings.

Key areas of expertise:
- Abhidhamma Pitaka and its classifications
- 89 or 121 types of Citta (consciousness)
- 52 Cetasikas (mental factors)
- The relationship between Citta and Cetasika
- Buddhist meditation practices
- The Four Noble Truths and Noble Eightfold Path
- Dependent Origination (Paticcasamuppada)
- Karma and rebirth

Always respond in a clear, helpful manner. If asked about something outside your expertise, politely redirect to Buddhist topics.`;

    // Initialize chatbot
    function initChatbot() {
        // Add welcome message
        addMessage('assistant', 'සාදු! අභිධර්මය, චිත්ත, චෛතසික පිළිබඳව ඔබේ ප්‍රශ්න ඇසීමට සාදරයෙන් පිළිගනිමු. (Welcome! Feel free to ask about Abhidhamma, Citta, and Cetasika.)');
        
        // Initialize chat history with system prompt
        chatHistory = [
            { role: 'system', content: systemPrompt }
        ];
    }

    // Add message to chat
    function addMessage(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${role}`;
        
        const roleDiv = document.createElement('div');
        roleDiv.className = 'chatbot-message-role';
        roleDiv.textContent = role === 'user' ? 'You' : 'Assistant';
        
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'chatbot-message-body';
        bodyDiv.textContent = content;
        
        messageDiv.appendChild(roleDiv);
        messageDiv.appendChild(bodyDiv);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Update status message
    function updateStatus(message, isError = false) {
        if (chatbotStatus) {
            chatbotStatus.textContent = message;
            chatbotStatus.className = `chatbot-status ${isError ? 'chatbot-status-error' : ''}`;
            if (message) {
                setTimeout(() => {
                    chatbotStatus.textContent = '';
                    chatbotStatus.className = 'chatbot-status';
                }, 5000);
            }
        }
    }

    // Send message to API
    async function sendMessage(userMessage) {
        // Add user message to UI
        addMessage('user', userMessage);
        
        // Add to chat history
        chatHistory.push({ role: 'user', content: userMessage });
        
        // Disable input and show loading
        chatbotInput.disabled = true;
        chatbotSend.disabled = true;
        updateStatus('පිළිතුර ලබා ගැනීම... (Getting response...)');
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chatbot-message assistant chatbot-typing';
        const roleDiv = document.createElement('div');
        roleDiv.className = 'chatbot-message-role';
        roleDiv.textContent = 'Assistant';
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'chatbot-message-body';
        bodyDiv.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
        typingIndicator.appendChild(roleDiv);
        typingIndicator.appendChild(bodyDiv);
        chatbotMessages.appendChild(typingIndicator);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        try {
            const response = await fetch('/.netlify/functions/groq-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: chatHistory,
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
                }
                throw new Error(errorData.error?.message || errorData.error || `HTTP ${response.status}`);
            }

            let data;
            try {
                data = await response.json();
            } catch (e) {
                throw new Error('Invalid response from server');
            }
            
            if (data.error) {
                throw new Error(data.error);
            }

            const reply = data.reply || 'කණගාටුයි, පිළිතුරක් ලබා ගත නොහැකි විය. (Sorry, could not get a response.)';
            
            // Add assistant reply to UI
            addMessage('assistant', reply);
            
            // Add to chat history
            chatHistory.push({ role: 'assistant', content: reply });
            
            updateStatus('');
            
        } catch (error) {
            console.error('Chatbot API error:', error);
            
            // Show error message
            const errorMsg = error.message || 'කණගාටුයි, මේ මොහොතේ පිළිතුර ලබා ගත නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න. (Sorry, could not get a response at this time. Please try again.)';
            addMessage('assistant', errorMsg);
            updateStatus('දෝෂයක් ඇති විය. (An error occurred.)', true);
        } finally {
            // Always remove typing indicator
            if (typingIndicator && typingIndicator.parentNode) {
                typingIndicator.remove();
            }
            
            // Re-enable input
            chatbotInput.disabled = false;
            chatbotSend.disabled = false;
            chatbotInput.focus();
        }
    }

    // Toggle chatbot visibility
    function toggleChatbot() {
        const isOpen = chatbotWidget.classList.contains('open');
        
        if (isOpen) {
            chatbotWidget.classList.remove('open');
            chatbotWidget.setAttribute('aria-hidden', 'true');
            chatbotLauncher.setAttribute('aria-expanded', 'false');
        } else {
            chatbotWidget.classList.add('open');
            chatbotWidget.setAttribute('aria-hidden', 'false');
            chatbotLauncher.setAttribute('aria-expanded', 'true');
            chatbotInput.focus();
        }
    }

    // Event listeners
    chatbotLauncher.addEventListener('click', toggleChatbot);
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', toggleChatbot);
    }

    chatbotForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const message = chatbotInput.value.trim();
        if (!message) {
            return;
        }
        
        // Clear input
        chatbotInput.value = '';
        
        // Send message
        await sendMessage(message);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatbotWidget.classList.contains('open')) {
            toggleChatbot();
        }
    });

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }

    // Expose chatbot object for debugging
    window.chatbot = {
        toggle: toggleChatbot,
        sendMessage: sendMessage,
        history: () => chatHistory
    };

})();
