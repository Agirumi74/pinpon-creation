// Scroll Reveal Animations
export function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-reveal');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));

  document.querySelectorAll('.stagger-group').forEach(group => {
    const children = group.querySelectorAll('.scroll-reveal');
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 150}ms`;
    });
  });
}
