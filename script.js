/* =====================
   GLOBAL - SCROLL REVEAL
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  // Simple reveal effect on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach((el) => revealObserver.observe(el));
});

/* =====================
   PROJECT CARD INTERACTIVITY
===================== */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");

  if (card) {
    // Optional click feedback (tiny bounce)
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  }
});

/* =====================
   OPTIONAL ADD‑TO‑CART FEEDBACK
===================== */
const cartButtons = document.querySelectorAll(".add-to-cart");
cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Added ✓";
    btn.disabled = true;
    btn.classList.add("added");

    // brief highlight effect
    setTimeout(() => {
      btn.classList.remove("added");
    }, 800);
  });
});
