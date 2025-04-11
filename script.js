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
const products = [
  { name: 'Used Java Book', category: 'books', price: 300, image: 'https://via.placeholder.com/250x180' },
  { name: 'Hoodie - Medium', category: 'clothes', price: 500, image: 'https://via.placeholder.com/250x180' },
  { name: 'Custom Artwork', category: 'art', price: 1500, image: 'https://via.placeholder.com/250x180' },
  { name: 'Logo Design Service', category: 'digital', price: 1000, image: 'https://via.placeholder.com/250x180' },
];

function displayProducts(filtered = products) {
  const container = document.getElementById('productList');
  container.innerHTML = '';
  filtered.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>৳${product.price}</p>
        <button>View</button>
      </div>
    `;
  });
}

document.getElementById('searchBar').addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(result);
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
  const category = e.target.value;
  if (category === 'all') return displayProducts();
  const result = products.filter(p => p.category === category);
  displayProducts(result);
});

displayProducts();

