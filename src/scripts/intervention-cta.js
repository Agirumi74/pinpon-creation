// Intervention CTA Ripple Effect
export function initInterventionCTA() {
  const ctaButton = document.querySelector('a.cta-button[href="#contact"]');
  if (!ctaButton) return;

  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Ripple overlay
    const rippleOverlay = document.createElement('div');
    rippleOverlay.style.position = 'fixed';
    rippleOverlay.style.top = '0';
    rippleOverlay.style.left = '0';
    rippleOverlay.style.width = '100%';
    rippleOverlay.style.height = '100%';
    rippleOverlay.style.pointerEvents = 'none';
    rippleOverlay.style.zIndex = '9999';
    rippleOverlay.style.overflow = 'hidden';
    document.body.appendChild(rippleOverlay);

    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'var(--accent-red)';
    ripple.style.width = '50px';
    ripple.style.height = '50px';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple-effect 0.8s ease-out';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    rippleOverlay.appendChild(ripple);

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `@keyframes ripple-effect { to { transform: translate(-50%, -50%) scale(50); opacity: 0; } }`;
    document.head.appendChild(styleSheet);

    ripple.addEventListener('animationend', () => {
      rippleOverlay.remove();
      styleSheet.remove();
    }, { once: true });

    // Scroll to contact
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
}
