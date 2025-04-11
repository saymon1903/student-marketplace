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
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #000;
  color: #fff;
}

header {
  background-color: #111;
  padding: 20px;
  text-align: center;
}

nav button {
  background-color: green;
  border: none;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

nav button:hover {
  background-color: #0f0;
}

form {
  background-color: #111;
  margin: 20px auto;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  border-radius: 5px;
}

form input, form textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
}

form button {
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

#product-list {
  margin: 20px;
}

.product {
  background-color: #111;
  border: 1px solid #333;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
}

