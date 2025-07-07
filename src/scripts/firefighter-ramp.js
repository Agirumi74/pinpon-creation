// Animation JS for the firefighter rappel (rampe) component
export function initFirefighterRamp() {
  const qs = (selector) => document.querySelector(selector);
  const ramp = document.getElementById('firefighter-ramp');
  const group = ramp ? ramp.querySelector('#firefighter-group') : null;
  const body = group ? group.querySelector('#firefighter-body') : null;
  const legs = group ? group.querySelector('#legs-group') : null;
  const arms = body ? body.querySelector('#arms-group') : null;
  const helmet = body ? body.querySelector('#helmet-group') : null;
  const head = body ? body.querySelector('#head-group') : null;
  const handTop = body ? body.querySelector('#hand-top') : null;
  const handBottom = body ? body.querySelector('#hand-bottom') : null;
  const visorReflection = helmet ? helmet.querySelector('rect[x="32"][y="77"]') : null;
  const helmetGloss = helmet ? helmet.querySelector('#helmet-gloss') : null;
  const sweat1 = body ? body.querySelector('#sweat-drop-1') : null;
  const sweat2 = body ? body.querySelector('#sweat-drop-2') : null;
  const ffMessage = body ? body.querySelector('#ff-message') : null;
  let shadow = group ? group.querySelector('#ff-shadow') : null;
  if (!ramp || !group || !body || !legs) return;

  // Bubble marketing
  let bubble = document.getElementById('firefighter-bubble');
  if (!bubble) {
    bubble = document.createElement('div');
    bubble.id = 'firefighter-bubble';
    bubble.style.position = 'fixed';
    bubble.style.top = '90px';
    bubble.style.right = '100px';
    bubble.style.zIndex = '9999';
    bubble.style.maxWidth = '260px';
    bubble.style.background = 'rgba(255,255,255,0.92)';
    bubble.style.borderRadius = '1.2em';
    bubble.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.18)';
    bubble.style.padding = '1.1em 1.5em 1.1em 1.3em';
    bubble.style.fontFamily = 'Inter, Roboto Mono, sans-serif';
    bubble.style.fontWeight = '900';
    bubble.style.fontSize = '1.1rem';
    bubble.style.color = '#b81d38';
    bubble.style.display = 'none';
    bubble.style.transition = 'opacity 0.4s cubic-bezier(.7,1.7,.7,1), filter 0.4s cubic-bezier(.7,1.7,.7,1)';
    bubble.style.pointerEvents = 'none';
    bubble.style.backdropFilter = 'blur(7px)';
    bubble.style.opacity = '0';
    document.body.appendChild(bubble);
  }

  // Texts for each section
  const sectionBubbles = [
    { id: 'home', text: "🚒 Besoin d'une intervention web ? Pinpon arrive !" },
    { id: 'bio', text: "🧢 Double casquette, double efficacité !" },
    { id: 'about', text: "🚨 Protocole d'urgence digitale activé !" },
    { id: 'portfolio', text: "📁 Dossiers d'intervention : mission accomplie !" },
    { id: 'partners', text: "🤝 La confiance, c'est la base d'une bonne intervention." },
    { id: 'reviews', text: "⭐ Satisfaction client : priorité absolue !" },
    { id: 'contact', text: "🔔 Prêt à déclencher l'alarme ?" },
  ];

  // Get all sections and their positions
  const sections = sectionBubbles.map(s => document.getElementById(s.id)).filter(Boolean);

  function getCurrentSection(scrollY) {
    let current = sectionBubbles[0];
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (scrollY >= top - window.innerHeight/2) {
        current = sectionBubbles[i];
      }
    }
    return current;
  }

  // Animation loop
  let lastScrollY = window.scrollY;
  let lastTime = performance.now();
  let velocity = 0;
  let bubbleTimeout = null;

  function animate() {
    // --- Messages d'encouragement ---
    const messages = [
      "On ne lache rien !",
      "Toujours pret !",
      "Courage, ca grimpe !",
      "Pinpon Creation en action !",
      "Rigueur & efficacite !",
      "Mission : reussite !",
      "On reste pro !"
    ];
    if (ffMessage) {
      ffMessage.textContent = '';
      ffMessage.setAttribute('opacity', '0');
      ffMessage.setAttribute('display', 'none');
    }
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, scrollY / docHeight));
    const rampHeight = 800 - 220; // SVG bar height - firefighter height
    // Y position
    const y = progress * rampHeight;
    // Velocity (px/s)
    const now = performance.now();
    const dt = Math.max(16, now - lastTime);
    velocity = (scrollY - lastScrollY) / (dt/1000);
    lastScrollY = scrollY;
    lastTime = now;

    // --- SLIDE/CHUTE (descente) & CLIMB (remontée) ---
    let mode = 'slide';
    if (velocity < -30) mode = 'climb';
    else if (velocity > 30) mode = 'slide';
    else mode = 'idle';

    group.setAttribute('transform', `translate(0,${y})`);
    if (shadow) {
      shadow.setAttribute('cy', `${200 + y}`);
      const shadowRx = 18 - Math.abs(velocity) * 0.012;
      const shadowRy = 6 + Math.abs(velocity) * 0.01;
      shadow.setAttribute('rx', `${Math.max(12, shadowRx)}`);
      shadow.setAttribute('ry', `${Math.min(12, shadowRy)}`);
      shadow.setAttribute('opacity', `${0.13 + Math.min(0.12, Math.abs(velocity)/2000)}`);
    }

    const legLeft = legs.querySelector('#leg-left');
    const legRight = legs.querySelector('#leg-right');
    const armLeft = body.querySelector('#arm-left');
    const armRight = body.querySelector('#arm-right');

    const micro = Math.sin(now/60) * 0.7 + Math.sin(now/37) * 0.5;
    const micro2 = Math.cos(now/41) * 0.5;

    if (mode === 'slide') {
      const wind = Math.min(1, Math.abs(velocity) / 1200);
      const skew = 10 + wind * 18 + micro*1.2;
      const scaleX = 1 + wind * 0.18 + micro2*0.01;
      const blur = wind > 0.2 ? `blur(${wind*3.5}px)` : 'none';
      const vib = wind > 0.2 ? Math.sin(now/8)*1.2 : 0;
      body.setAttribute('transform', `skewY(${-skew}) scaleX(${scaleX}) translate(${vib},${micro*0.7})`);
      if (legLeft && legRight) {
        legLeft.setAttribute('transform', `translate(${micro*0.7},0)`);
        legRight.setAttribute('transform', `translate(${-micro*0.7},0)`);
      }
      if (shadow) {
        shadow.setAttribute('cy', `${200 + y + 36}`);
        shadow.setAttribute('cx', '40');
        shadow.setAttribute('rx', `${18 - Math.abs(velocity) * 0.012}`);
        shadow.setAttribute('ry', `${6 + Math.abs(velocity) * 0.01}`);
        shadow.setAttribute('opacity', `${0.13 + Math.min(0.12, Math.abs(velocity)/2000)}`);
      }
      if (armLeft && armRight) {
        armLeft.setAttribute('transform', `translate(${micro*0.5},0)`);
        armRight.setAttribute('transform', `translate(${-micro*0.5},0)`);
      }
      if (helmet) helmet.setAttribute('transform', `rotate(${vib*0.7} 40 72)`);
      if (visorReflection) visorReflection.setAttribute('opacity', `${0.18 + wind*0.25}`);
      if (helmetGloss) {
        helmetGloss.setAttribute('opacity', `${0.10 + wind*0.18}`);
        helmetGloss.setAttribute('x', `${32 + Math.sin(now/90)*2 + wind*2}`);
      }
      if (sweat1) sweat1.setAttribute('opacity', '0');
      if (sweat2) sweat2.setAttribute('opacity', '0');
      if (ffMessage) ffMessage.setAttribute('opacity', '0');
      if (handTop) handTop.setAttribute('transform', `scale(${1+wind*0.04},${1-wind*0.04})`);
      if (handBottom) handBottom.setAttribute('transform', `scale(${1+wind*0.04},${1-wind*0.04})`);
      group.style.filter = blur;
    } else if (mode === 'climb') {
      if (shadow) {
        shadow.setAttribute('cy', `${200 + y + 36}`);
        shadow.setAttribute('cx', '40');
        shadow.setAttribute('rx', '18');
        shadow.setAttribute('ry', '6');
        shadow.setAttribute('opacity', '0.13');
      }
      const effort = Math.min(1, Math.abs(velocity) / 900);
      const skew = -12 - effort * 10 + micro*0.7;
      const scaleX = 1 - effort * 0.08 + micro2*0.01;
      const t = now/180;
      if (legLeft && legRight) {
        legLeft.setAttribute('transform', `translate(0,${Math.sin(t)*8 + micro*1.2})`);
        legRight.setAttribute('transform', `translate(0,${-Math.sin(t)*8 - micro*1.2})`);
      }
      if (armLeft && armRight) {
        armLeft.setAttribute('transform', `translate(0,${Math.cos(t)*6 + micro*0.8})`);
        armRight.setAttribute('transform', `translate(0,${-Math.cos(t)*6 - micro*0.8})`);
      }
      if (helmet) helmet.setAttribute('transform', `rotate(${-8 + micro*1.2} 40 72)`);
      if (visorReflection) visorReflection.setAttribute('opacity', `${0.18 + effort*0.18}`);
      if (helmetGloss) {
        helmetGloss.setAttribute('opacity', `${0.10 + effort*0.22}`);
        helmetGloss.setAttribute('x', `${32 + Math.sin(now/60)*2 + effort*2}`);
      }
      if (sweat1) sweat1.setAttribute('opacity', `${effort > 0.5 ? 0.5 + Math.abs(Math.sin(now/120))*0.4 : 0}`);
      if (sweat2) sweat2.setAttribute('opacity', `${effort > 0.7 ? 0.7 + Math.abs(Math.cos(now/90))*0.3 : 0}`);
      if (ffMessage) ffMessage.setAttribute('opacity', '0');
      if (handTop) handTop.setAttribute('transform', `scale(${1.08+effort*0.08},${0.92-effort*0.08})`);
      if (handBottom) handBottom.setAttribute('transform', `scale(${1.08+effort*0.08},${0.92-effort*0.08})`);
      body.setAttribute('transform', `skewY(${-skew}) scaleX(${scaleX}) translate(${micro*0.7},${micro2*0.7})`);
      group.style.filter = 'none';
    } else {
      body.setAttribute('transform', `skewY(${micro*0.5}) scaleX(${1+micro2*0.005}) translate(0,${Math.abs(micro)*0.7})`);
      if (legLeft && legRight) {
        legLeft.setAttribute('transform', `translate(0,${micro*1.2})`);
        legRight.setAttribute('transform', `translate(0,${-micro*1.2})`);
      }
      if (armLeft && armRight) {
        armLeft.setAttribute('transform', `translate(0,${micro*1.1})`);
        armRight.setAttribute('transform', `translate(0,${-micro*1.1})`);
      }
      if (helmet) helmet.setAttribute('transform', `rotate(${micro*0.7} 40 72)`);
      if (visorReflection) visorReflection.setAttribute('opacity', '0.18');
      if (helmetGloss) {
        helmetGloss.setAttribute('opacity', '0.10');
        helmetGloss.setAttribute('x', `${32 + Math.sin(now/120)*1.5}`);
      }
      if (sweat1) sweat1.setAttribute('opacity', '0');
      if (sweat2) sweat2.setAttribute('opacity', '0');
      if (ffMessage) {
        ffMessage.textContent = messages[Math.floor((now/2000)%messages.length)];
        ffMessage.setAttribute('opacity', '1');
        ffMessage.setAttribute('display', 'inline');
      }
      if (handTop) handTop.setAttribute('transform', 'scale(1,1)');
      if (handBottom) handBottom.setAttribute('transform', 'scale(1,1)');
      group.style.filter = 'none';
    }

    if (Math.abs(velocity) > 400) {
      group.classList.add('alarm');
    } else {
      group.classList.remove('alarm');
    }

    if (Math.abs(velocity) < 10) {
      const current = getCurrentSection(scrollY);
      bubble.textContent = current.text;
      bubble.style.display = 'block';
      bubble.style.opacity = '1';
      bubble.style.filter = 'blur(0)';
      if (bubbleTimeout) clearTimeout(bubbleTimeout);
    } else {
      bubble.style.opacity = '0.25';
      bubble.style.filter = 'blur(3px)';
      if (bubbleTimeout) clearTimeout(bubbleTimeout);
      bubbleTimeout = setTimeout(() => { bubble.style.display = 'block'; }, 400);
    }

    requestAnimationFrame(animate);
  }
  animate();
}

// Auto-init when DOM is ready
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initFirefighterRamp);
}
