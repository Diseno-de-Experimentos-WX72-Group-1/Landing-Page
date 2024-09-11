document.addEventListener('DOMContentLoaded', () => {
    // Event listener for form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Example functionality: Display alert with form data
        alert(`Gracias por tu mensaje, ${name}. Nos pondremos en contacto contigo pronto.`);
        
        // Clear form fields
        form.reset();
    });

    // Calendar example functionality
    const calendar = document.getElementById('calendar');
    const today = new Date().toISOString().split('T')[0];
    calendar.innerHTML = `<input type="date" min="${today}">`;
});
