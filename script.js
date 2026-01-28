document.addEventListener("DOMContentLoaded", () => {

  /* Lucide icons */
  lucide.createIcons();

  /* Fade-in observer */
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(el);
  });

  /* Hero parallax */
  const heroImage = document.querySelector(".hero-image img");
  if (heroImage) {
    window.addEventListener("scroll", () => {
      heroImage.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    });
  }

});
