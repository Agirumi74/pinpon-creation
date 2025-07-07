// 3D Reviews Carousel logic extracted from layout.astro
export function init3DReviewsCarousel() {
  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => document.querySelectorAll(selector);
  const carousel = qs('#reviews-carousel');
  const cards = qsa('.review-card');
  const prevBtn = qs('#prev-review');
  const nextBtn = qs('#next-review');
  if (!carousel || cards.length === 0 || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const totalCards = cards.length;
  const theta = 360 / totalCards;
  const radius = 288;

  const mod = (n, m) => ((n % m) + m) % m;

  function positionAndRotate() {
    const angle = -currentIndex * theta;
    carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;

    cards.forEach((card, i) => {
      const cardAngle = i * theta;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
      card.classList.toggle('active', i === mod(currentIndex, totalCards));
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    positionAndRotate();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    positionAndRotate();
  });

  positionAndRotate(); // Initial setup
}
