// Show modal on "Request Early Access" button click
const modal = document.getElementById('early-access-modal');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (button.textContent === 'Get Early Access' || button.textContent === 'Request Early Access') {
            modal.style.display = "block";
        }
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
document.getElementById('early-access-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Thank you for requesting early access! We'll notify you soon.");
    modal.style.display = "none"; // Close modal after submission
});
