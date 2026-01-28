// ===================== SCRIPT.JS =====================

// 1️⃣ Activate Lucide icons
lucide.createIcons();

// 2️⃣ Utility function for IntersectionObserver with optional stagger
function createObserver(elements, threshold = 0.15, stagger = 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(elements).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * stagger);
          observer.unobserve(entry.target); // Only trigger once
        }
      });
    },
    { threshold }
  );

  elements.forEach(el => observer.observe(el));
}

// 3️⃣ General fade-in elements (excluding cards/items)
const generalFade = document.querySelectorAll(
  ".fade-in:not(.highlight-card):not(.work-item):not(.beyond-work-item)"
);
createObserver(generalFade, 0.15, 150);

// 4️⃣ Highlight cards with staggered animation
const highlightCards = document.querySelectorAll(".highlight-card");
createObserver(highlightCards, 0.25, 150);

// 5️⃣ Work items with staggered animation
const workItems = document.querySelectorAll(".work-item");
createObserver(workItems, 0.25, 150);

// 6️⃣ Travel items with staggered animation
const travelItems = document.querySelectorAll(".beyond-work-item");
createObserver(travelItems, 0.25, 150);

// 7️⃣ Hero image parallax effect
const heroImage = document.querySelector(".hero-image img");
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  heroImage.style.transform = `translateY(${offset * 0.15}px)`;
});

