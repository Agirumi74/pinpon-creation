// Ultimate Custom Cursor
export function initUltimateCursor() {
  const cursor = document.querySelector('#cursor');
  if (!cursor) return;
  let mouseX = -100, mouseY = -100;
  let targetX = -100, targetY = -100;
  const speed = 0.92;
  const pinponSVG = `<svg class="pinpon-cursor" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="19" cy="32" rx="8" ry="4" fill="#000" opacity="0.18"/><ellipse cx="19" cy="19" rx="10" ry="13" fill="#232a3d" stroke="#fff" stroke-width="2"/><ellipse cx="19" cy="11" rx="8" ry="6" fill="#e0e0e0" stroke="#888" stroke-width="1.2"/><ellipse cx="19" cy="11" rx="3" ry="1.2" fill="#fff" opacity="0.18"/><ellipse cx="19" cy="19" rx="6" ry="8" fill="#ffe066" opacity="0.13"/><ellipse cx="19" cy="19" rx="2.5" ry="3.5" fill="#fff" opacity="0.08"/><ellipse cx="19" cy="32" rx="8" ry="4" fill="#ffe066" opacity="0.08"/><ellipse cx="19" cy="32" rx="4" ry="2" fill="#fff" opacity="0.10"/></svg>`;
  cursor.innerHTML = pinponSVG;
  function triggerClickEffect() {
    cursor.classList.add('clicked');
    setTimeout(() => cursor.classList.remove('clicked'), 80);
  }
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  window.addEventListener('mousedown', triggerClickEffect);
  window.addEventListener('touchstart', triggerClickEffect);
  const magneticElements = document.querySelectorAll('.magnetic-link');
  const magneticStrength = 0.22;
  function updateCursorGlow() {
    const x = Math.round(targetX);
    const y = Math.round(targetY);
    let glow = 'glow-dark';
    try {
      const el = document.elementFromPoint(x, y);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && (bg.includes('255, 255, 255') || bg.includes('248, 247, 245'))) {
          glow = 'glow-light';
        } else if (bg && (bg.includes('29, 161, 242') || bg.includes('1da1f2'))) {
          glow = 'glow-blue';
        }
      }
    } catch(e) {}
    cursor.classList.remove('glow-light', 'glow-dark', 'glow-blue');
    cursor.classList.add(glow);
  }
  const loop = () => {
    targetX += (mouseX - targetX) * speed;
    targetY += (mouseY - targetY) * speed;
    if (Math.abs(targetX - mouseX) < 0.5) targetX = mouseX;
    if (Math.abs(targetY - mouseY) < 0.5) targetY = mouseY;
    cursor.style.transform = `translate(${targetX - cursor.offsetWidth / 2}px, ${targetY - cursor.offsetHeight / 2}px)`;
    updateCursorGlow();
    magneticElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const dx = mouseX - (rect.left + rect.width / 2);
      const dy = mouseY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 80) {
        const transX = dx * magneticStrength;
        const transY = dy * magneticStrength;
        el.style.transform = `translate(${transX}px, ${transY}px)`;
      } else {
        el.style.transform = 'translate(0, 0)';
      }
    });
    requestAnimationFrame(loop);
  };
  loop();
  document.body.addEventListener('mouseenter', () => cursor.style.opacity = '1');
  document.body.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  magneticElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });
}
