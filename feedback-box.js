// Feedback Box JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackEmail = document.getElementById('feedbackEmail');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const message = feedbackMessage.value.trim();
            const email = feedbackEmail.value.trim();
            const currentUrl = window.location.href;

            // Validate message
            if (!message) {
                alert('Please describe the mismatch you found.');
                feedbackMessage.focus();
                return;
            }

            // Build email body
            let emailBody = 'Mismatch Report:\n\n';
            emailBody += 'Message:\n' + message + '\n\n';
            
            if (email) {
                emailBody += 'Email: ' + email + '\n\n';
            }
            
            emailBody += 'Page URL: ' + currentUrl;

            // Encode the email body for mailto link
            const encodedBody = encodeURIComponent(emailBody);
            const encodedSubject = encodeURIComponent('Website Mismatch Report');

            // Build mailto link
            let mailtoLink = 'mailto:margasakachcha@gmail.com?subject=' + encodedSubject + '&body=' + encodedBody;
            
            if (email) {
                mailtoLink += '&reply-to=' + encodeURIComponent(email);
            }

            // Open email client
            window.location.href = mailtoLink;

            // Optional: Show success message
            setTimeout(function() {
                alert('Thank you for your feedback! Your email client should open shortly.');
                
                // Reset form
                feedbackForm.reset();
            }, 100);
        });
    }
});



