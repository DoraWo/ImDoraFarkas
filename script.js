// 1️⃣ Activate Lucide icons once
lucide.createIcons();

// 2️⃣ Fade-in for general elements (excluding cards)
const fadeElements = document.querySelectorAll(".fade-in:not(.highlight-card):not(.beyond-work-item)");
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, 
  { threshold: 0.15 }
);
fadeElements.forEach((el, index) => {
  el.style.setProperty("--delay", `${index * 0.15}s`);
  fadeObserver.observe(el);
});

// 3️⃣ Animate highlight cards with stagger (What I Bring / Current Focus)
const highlightCards = document.querySelectorAll(".highlight-card");
const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        cardObserver.unobserve(entry.target);
      }
    });
  }, 
  { threshold: 0.25 }
);
highlightCards.forEach((card, index) => {
  card.style.setProperty("--delay", `${index * 0.15}s`);
  cardObserver.observe(card);
});

// 4️⃣ Animate Beyond Work items with stagger
const beyondWorkItems = document.querySelectorAll(".beyond-work-item");
const beyondObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        beyondObserver.unobserve(entry.target);
      }
    });
  }, 
  { threshold: 0.25 }
);
beyondWorkItems.forEach((item, index) => {
  item.style.setProperty("--delay", `${index * 0.15}s`);
  beyondObserver.observe(item);
});

// 5️⃣ Hero image parallax
const heroImage = document.querySelector(".hero-image img");
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  heroImage.style.transform = `translateY(${offset * 0.15}px)`;
});

