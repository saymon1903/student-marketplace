// Dummy data for Marketplace products
const products = [
  { name: "Used Math Book", category: "books", description: "Well-maintained math book.", price: 150 },
  { name: "Graphic Design Service", category: "digital", description: "Professional logo & poster design.", price: 1200 },
  { name: "Vintage T-shirt", category: "clothes", description: "Stylish and comfortable.", price: 300 },
  { name: "Handmade Art", category: "art", description: "Unique piece of art by a student.", price: 900 }
];

// Function to display products on Marketplace page
function loadProducts() {
  const container = document.getElementById("productList");
  if (!container) return; // If not on marketplace page
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: ৳${product.price}</p>
      <button class="btn-green">View</button>
    `;
    container.appendChild(card);
  });
}

// Function to handle idea submission (for Share Ideas page)
function setupIdeaSubmission() {
  const ideaForm = document.getElementById("ideaForm");
  if (!ideaForm) return; // Only if on share ideas page
  ideaForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("ideaTitle").value;
    const description = document.getElementById("ideaDescription").value;
    alert(`Idea Submitted:\nTitle: ${title}\nDescription: ${description}`);
    ideaForm.reset();
  });
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  loadProducts();
  setupIdeaSubmission();
  console.log("StudentHub scripts loaded.");
});
