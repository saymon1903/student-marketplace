// Navbar active link highlighting
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        }
    });
});

// Form validation for signup pages
function validateSignupForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
        const inputs = form.querySelectorAll('input[required]');
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '';
            }
        });

        if (!allFilled) {
            e.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
}

// Dashboard greeting logic
function greetUser(username) {
    const greetingEl = document.getElementById('userGreeting
