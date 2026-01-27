// 1️⃣ Activate Lucide icons
lucide.createIcons();

// 2️⃣ Fade-in for general elements (excluding cards)
const fadeElements = document.querySelectorAll(".fade-in:not(.highlight-card):not(.work-item):not(.beyond-work-item)");
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }
);

fadeElements.forEach((el, index) => {
  el.style.setProperty("--delay", `${index * 0.15}s`);
  fadeObserver.observe(el);
});

// 3️⃣ Animate highlight cards with stagger
const highlightCards = document.querySelectorAll(".highlight-card");
const highlightObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        highlightObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 }
);

highlightCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
  highlightObserver.observe(card);
});

// 4️⃣ Animate work items with stagger
const workItems = document.querySelectorAll(".work-item");
const workObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        workObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 }
);

workItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.15}s`;
  workObserver.observe(item);
});

// 5️⃣ Animate travel images with stagger
const travelItems = document.querySelectorAll(".beyond-work-item");
const travelObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        travelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 }
);

// Fade-in for general elements (already exists)
const fadeElements = document.querySelectorAll(".fade-in");
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add delay based on index for stagger effect
        const index = Array.from(fadeElements).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // 200ms delay between items
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});


travelItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.15}s`;
  travelObserver.observe(item);
});

// 6️⃣ Hero image parallax
const heroImage = document.querySelector(".hero-image img");
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  heroImage.style.transform = `translateY(${offset * 0.15}px)`;
});


