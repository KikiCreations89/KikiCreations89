// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

// Cart counter
let cartCount = 0;

function updateCartCount() {
  document.getElementById("cart-count").textContent = cartCount;
}

document.addEventListener("DOMContentLoaded", () => {
  // Add to Cart buttons
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      updateCartCount();

      button.textContent = "Added ✓";
      button.disabled = true;
    });
  });
});
