// Value Card Glow Effect
export function initValueCardGlow() {
  const cards = document.querySelectorAll('.value-card');
  cards.forEach(card => {
    const glow = card.querySelector('.value-card-glow');
    if (!glow) return;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    });
  });
}
