document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            fetch('submit-form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`,
            })
            .then(response => response.text())
            .then(data => {
                if (data === 'success') {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert('Error sending message. Please try again later.');
                }
            })
            .catch(error => {
                alert('An error occurred. Please try again later.');
            });
        } else {
            alert('Please fill out all fields.');
        }
    });
});
