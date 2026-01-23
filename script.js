// 1️⃣ Activate Lucide icons once
lucide.createIcons();

// 2️⃣ Fade-in for general elements
const fadeElements = document.querySelectorAll(".fade-in:not(.focus-card)");
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.15}
);
fadeElements.forEach((el,index)=>{
  el.style.setProperty("--delay",`${index*0.15}s`);
  fadeObserver.observe(el);
});

// 3️⃣ Animate focus cards with stagger
const focusCards = document.querySelectorAll(".focus-card");
const cardObserver = new IntersectionObserver(
  entries => {entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      cardObserver.unobserve(entry.target);
    }
  })},{threshold:0.25});
focusCards.forEach((card,index)=>{
  card.style.setProperty("--delay",`${index*0.15}s`);
  cardObserver.observe(card);
});

// 4️⃣ Hero image parallax
const heroImage = document.querySelector(".hero-image img");
window.addEventListener("scroll",()=>{
  const offset = window.pageYOffset;
  heroImage.style.transform = `translateY(${offset*0.15}px)`;
});
