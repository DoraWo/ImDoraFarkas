document.addEventListener("DOMContentLoaded", () => {
  // Activate Lucide icons
  lucide.createIcons();

  // Fade-in elements observer
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.15}s`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeElements.forEach(el => observer.observe(el));

  // Hero parallax
  const heroImage = document.querySelector(".hero-image img");
  window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if(heroImage) heroImage.style.transform = `translateY(${offset * 0.15}px)`;
  });
});

