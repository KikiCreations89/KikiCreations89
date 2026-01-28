console.log("script.js loaded");

/* =====================
   SCROLL REVEAL
===================== */
const reveals = document.querySelectorAll(".reveal");

if (reveals.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach(el => observer.observe(el));
}

/* =====================
   ADD TO CART
===================== */
document.querySelectorAll(".action-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "Added ✓";
    btn.disabled = true;
  });
});

/* =====================
   BLOG MENU TOGGLE
===================== */
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

/* =====================
   READING PROGRESS
===================== */
const progressBar = document.querySelector(".progress-bar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / total) * 100;
    progressBar.style.width = percent + "%";
  });
}

