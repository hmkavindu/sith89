(function () {
    'use strict';

    // Sith AI · Dhamma Assistant launcher — opens/closes the floating widget,
    // which embeds dhamma-assistant.html (grounded, real-time Tipitaka RAG assistant) in an iframe.
    const chatbotLauncher = document.getElementById('chatbotLauncher');
    const chatbotWidget = document.getElementById('chatbotWidget');
    const chatbotClose = document.getElementById('chatbotClose');

    if (!chatbotLauncher || !chatbotWidget) {
        return;
    }

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
        }
    }

    chatbotLauncher.addEventListener('click', toggleChatbot);

    if (chatbotClose) {
        chatbotClose.addEventListener('click', toggleChatbot);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatbotWidget.classList.contains('open')) {
            toggleChatbot();
        }
    });

    window.chatbot = { toggle: toggleChatbot };
})();
