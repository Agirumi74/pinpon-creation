// src/scripts/typewriter.js
// Modular typewriter effect for #typewriter-h1

export function initTypewriter() {
  const el = document.querySelector('#typewriter-h1');
  if (!el) return;
  const text = el.dataset.text || '';
  let i = 0;
  el.innerHTML = '';

  function type() {
    if (i < text.length) {
      el.innerHTML = text.substring(0, i + 1) + '<span style="color:var(--accent-red); animation: pulse 1s infinite;">_</span>';
      i++;
      setTimeout(type, 80);
    } else {
      const cursor = el.querySelector('span');
      if (cursor) cursor.style.display = 'none';
    }
  }
  setTimeout(type, 1000);
}
