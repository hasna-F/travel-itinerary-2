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
   // Search Destination Function
   function searchDestination() {
    const input = document.getElementById('search').value.toLowerCase();
    const destinations = document.querySelectorAll('article'); // Select all destination articles

    destinations.forEach(destination => {
        const title = destination.querySelector('h3').innerText.toLowerCase(); // Get the destination name
        if (title.includes(input)) {
            destination.style.display = ""; // Show matching destination
        } else {
            destination.style.display = "none"; // Hide non-matching destination
        }
    });
}
