function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}
// Keep cart items
let cart = [];

// Update the cart count badge
function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = cart.length;
}

// Add item to the cart
function addToCart(product) {
  cart.push(product);
  updateCartCount();
  alert(`${product.name} added to cart! (${cart.length} item${cart.length !== 1 ? "s" : ""})`);
}

// Attach event listeners when page loads
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".product-card");
      const name = productCard.querySelector("h3").textContent;
      const price = productCard.querySelector(".price").textContent;
      addToCart({ name, price });
    });
  });
});
