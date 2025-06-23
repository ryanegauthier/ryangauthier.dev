document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        'g-recaptcha-response': grecaptcha.getResponse()
    };
    
    // Validate reCAPTCHA
    if (!formData['g-recaptcha-response']) {
        formStatus.innerHTML = '<div class="alert alert-danger">Please complete the reCAPTCHA verification.</div>';
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
        return;
    }
    
    // Send form data to server
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            formStatus.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
            document.getElementById('contactForm').reset();
            grecaptcha.reset();
        } else {
            formStatus.innerHTML = `<div class="alert alert-danger">${data.message || 'Error sending message. Please try again.'}</div>`;
        }
    })
    .catch(error => {
        formStatus.innerHTML = '<div class="alert alert-danger">Error sending message. Please try again.</div>';
        console.error('Error:', error);
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
    });
}); 