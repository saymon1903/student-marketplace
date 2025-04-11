// Add interactivity here if needed
console.log("Student Marketplace loaded successfully!");
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});
document.getElementById('searchBar').addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = title.includes(value) ? 'block' : 'none';
  });
});

