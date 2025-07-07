// Contact form logic extracted from layout.astro
export function initContactForm() {
  const qs = (selector) => document.querySelector(selector);
  const form = qs('#contact-form');
  const statusEl = qs('#form-status');
  const submitButton = qs('#submit-button');
  const successOverlay = qs('#form-success-overlay');
  // --- Field Validation ---
  const fields = [
    { id: 'name', type: 'text', required: true },
    { id: 'email', type: 'email', required: true },
    { id: 'subject', type: 'text', required: true },
    { id: 'message', type: 'textarea', required: true },
  ];

  function validateField(field) {
    const input = qs(`#${field.id}`);
    const label = input?.parentElement.querySelector('.floating-label');
    let valid = false;
    if (!input) return false;
    if (field.required && !input.value.trim()) {
      valid = false;
    } else if (field.type === 'email') {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    } else {
      valid = true;
    }
    input.classList.remove('input-error', 'input-success');
    label?.classList.remove('label-error', 'label-success');
    if (input.value.trim() === '') {
      // Neutral, no color if untouched
      return false;
    }
    if (valid) {
      input.classList.add('input-success');
      label?.classList.add('label-success');
    } else {
      input.classList.add('input-error');
      label?.classList.add('label-error');
    }
    return valid;
  }

  // Validate on blur
  fields.forEach(field => {
    const input = qs(`#${field.id}`);
    if (input) {
      input.addEventListener('blur', () => validateField(field));
      input.addEventListener('input', () => validateField(field));
    }
  });

  // --- Form Submit ---
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form || !statusEl || !submitButton || !successOverlay) return;

    let allValid = true;
    fields.forEach(field => {
      const valid = validateField(field);
      if (!valid) allValid = false;
    });

    if (!allValid) {
      statusEl.innerHTML = `<p style=\"color: red;\">// ERREUR: Tous les champs sont requis ou invalides.</p>`;
      setTimeout(() => { statusEl.innerHTML = ''; }, 3000);
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'ENVOI...';
    statusEl.innerHTML = '';

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // --- WOW EFFECT ---
    triggerFormWowEffect(form);

    successOverlay.classList.add('visible');

    setTimeout(() => {
      successOverlay.classList.remove('visible');
      submitButton.disabled = false;
      submitButton.textContent = 'ENVOYER LA DEMANDE';
      form.reset();
      // Remove success classes after reset
      fields.forEach(field => {
        const input = qs(`#${field.id}`);
        const label = input?.parentElement.querySelector('.floating-label');
        input?.classList.remove('input-success', 'input-error');
        label?.classList.remove('label-success', 'label-error');
      });
    }, 4000);
  });

  // --- WOW EFFECT: Firework/Confetti ---
  function triggerFormWowEffect(formEl) {
    // Remove any previous wow
    const old = qs('.form-wow-firework');
    if (old) old.remove();
    const wow = document.createElement('div');
    wow.className = 'form-wow-firework';
    for (let i = 0; i < 10; i++) {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.setProperty('--angle', `${i * 36}deg`);
      const bar = document.createElement('div');
      bar.className = 'firework-bar';
      firework.appendChild(bar);
      wow.appendChild(firework);
    }
    formEl.appendChild(wow);
    setTimeout(() => { wow.remove(); }, 1200);
  }
}
