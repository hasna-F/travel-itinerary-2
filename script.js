// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (If required)
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (email === '' || message === '') {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});
