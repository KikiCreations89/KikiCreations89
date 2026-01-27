// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// Cart logic
let cartCount = 0;

function updateCart() {
  document.getElementById("cart-count").textContent = cartCount;
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      updateCart();

      button.textContent = "Added ✓";
      button.disabled = true;
      button.style.opacity = "0.7";
    });
  });

  updateCart();
});
