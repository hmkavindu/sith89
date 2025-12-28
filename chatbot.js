(function () {
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

    // Initialize chatbot
    function initChatbot() {
        // Add welcome message with quick questions
        const welcomeMsg = 'සාදු! අභිධර්මය, චිත්ත, චෛතසික පිළිබඳව ඔබේ ප්‍රශ්න ඇසීමට සාදරයෙන් පිළිගනිමු.\n\nමට පහත ආකාරයේ ප්‍රශ්න අසන්න:\n• "අකුසල් සිත් කීයක් තිබේද?"\n• "සාධාරණ චෛතසික කීයක්ද?"\n• "විරති චෛතසික මොනවාද?"\n• "දිට්ඨිය යනු කුමක්ද?"';
        addMessage('assistant', welcomeMsg);

        // Add quick question buttons
        addQuickQuestions();
    }

    // Add quick question buttons
    function addQuickQuestions() {
        const quickQuestions = [
            'අකුසල් සිත් කීයක් තිබේද?',
            'සාධාරණ චෛතසික කීයක්ද?',
            'විරති චෛතසික මොනවාද?',
            'දිට්ඨිය යනු කුමක්ද?'
        ];

        const quickQuestionsDiv = document.createElement('div');
        quickQuestionsDiv.className = 'chatbot-quick-questions';
        quickQuestionsDiv.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 10px; margin-top: 10px;';

        quickQuestions.forEach(question => {
            const btn = document.createElement('button');
            btn.textContent = question;
            btn.style.cssText = 'padding: 8px 12px; background: #667eea; color: white; border: none; border-radius: 15px; cursor: pointer; font-size: 12px; transition: all 0.3s;';
            btn.onmouseover = () => btn.style.background = '#5568d3';
            btn.onmouseout = () => btn.style.background = '#667eea';
            btn.onclick = () => {
                chatbotInput.value = question;
                chatbotForm.dispatchEvent(new Event('submit'));
            };
            quickQuestionsDiv.appendChild(btn);
        });

        chatbotMessages.appendChild(quickQuestionsDiv);
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
        bodyDiv.style.whiteSpace = 'pre-wrap';
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

    // Send message using custom engine
    async function sendMessage(userMessage) {
        // Add user message to UI
        addMessage('user', userMessage);

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
            // Use custom pattern matching engine
            if (!window.patternMatcher || !window.responseGenerator) {
                throw new Error('Chatbot engine not initialized');
            }

            // Analyze question
            const analysis = window.patternMatcher.analyzeQuestion(userMessage);
            console.log('Question analysis:', analysis);

            // Generate response
            const response = await window.responseGenerator.generateResponse(analysis);
            console.log('Generated response:', response);

            // Format and display response
            let replyText = response.answer;
            if (response.details) {
                replyText += '\n\n' + response.details;
            }
            if (response.references && response.references.length > 0) {
                replyText += '\n\n📚 මූලාශ්‍ර: ' + response.references.join(', ');
            }

            // Add assistant reply to UI
            addMessage('assistant', replyText);

            updateStatus('');

        } catch (error) {
            console.error('Chatbot error:', error);

            // Show error message
            const errorMsg = 'කණගාටුයි, මේ මොහොතේ පිළිතුර ලබා ගත නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න. (Sorry, could not get a response at this time. Please try again.)';
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
        sendMessage: sendMessage
    };

})();
