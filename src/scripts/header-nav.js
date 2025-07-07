// Header & Navigation logic for Pinpon Création
// Handles header, navigation links, mobile menu, and color adaptation

let headerNavInitialized = false;
export function initHeaderAndNav() {
  if (headerNavInitialized) {
    console.warn('initHeaderAndNav already called, skipping duplicate initialization.');
    return;
  }
  headerNavInitialized = true;
  console.log('initHeaderAndNav running...');
  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => document.querySelectorAll(selector);
  const header = qs('#main-header');
  const mobileMenuButton = qs('#mobile-menu-button');
  const mobileMenu = qs('#mobile-menu');
  const menuOpenIcon = qs('#menu-open-icon');
  const menuCloseIcon = qs('#menu-close-icon');
  const navLinks = qsa('#desktop-nav .nav-link');
  const navLinksMobile = qsa('.nav-link-mobile');
  const overlay = qs('#mobile-menu-overlay');
  const focusableSelectors = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
  const sections = Array.from(navLinks).map(link => qs(link.getAttribute('href'))).filter(s => s);
  let currentActiveLink = null;
  let lastFocusedElement = null;

  // --- Mobile Menu Logic ---
  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenu.classList.remove('hidden');
    overlay.classList.add('active');
    overlay.classList.remove('hidden');
    document.body.classList.add('body-no-scroll');
    menuOpenIcon.classList.add('animated');
    menuCloseIcon.classList.remove('hidden');
    setTimeout(() => menuCloseIcon.classList.add('animated'), 10);
    mobileMenu.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    mobileMenu.setAttribute('tabindex', '0');
    lastFocusedElement = document.activeElement;
    // Focus first link
    const firstLink = mobileMenu.querySelector(focusableSelectors);
    if (firstLink) firstLink.focus();
    // Trap focus
    document.addEventListener('keydown', trapFocus);
    document.addEventListener('keydown', handleEscape);
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('body-no-scroll');
    menuOpenIcon.classList.remove('hidden');
    setTimeout(() => menuOpenIcon.classList.remove('animated'), 10);
    menuCloseIcon.classList.remove('animated');
    setTimeout(() => menuCloseIcon.classList.add('hidden'), 300);
    setTimeout(() => mobileMenu.classList.add('hidden'), 400);
    mobileMenu.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    mobileMenu.removeAttribute('tabindex');
    if (lastFocusedElement) lastFocusedElement.focus();
    document.removeEventListener('keydown', trapFocus);
    document.removeEventListener('keydown', handleEscape);
  }
  function trapFocus(e) {
    if (!mobileMenu.classList.contains('active')) return;
    if (e.key !== 'Tab') return;
    const focusableEls = Array.from(mobileMenu.querySelectorAll(focusableSelectors)).filter(el => !el.hasAttribute('disabled'));
    if (focusableEls.length === 0) return;
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  function handleEscape(e) {
    if (e.key === 'Escape') closeMobileMenu();
  }
  mobileMenuButton?.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('active')) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });
  overlay?.addEventListener('click', closeMobileMenu);
  // Close on nav click (mobile)
  navLinksMobile.forEach(link => link.addEventListener('click', closeMobileMenu));

  // --- Navigation Scroll/Active Link ---
  const setActiveLink = (link) => {
    if (currentActiveLink) {
      currentActiveLink.classList.remove('active');
      const oldUnderline = currentActiveLink.querySelector('.active-underline');
      if(oldUnderline) oldUnderline.remove();
      // Remove .active from mobile link if exists
      const mobileTwin = Array.from(navLinksMobile).find(l => l.getAttribute('href') === currentActiveLink.getAttribute('href'));
      if (mobileTwin) mobileTwin.classList.remove('active');
    }
    link.classList.add('active');
    if (!link.querySelector('.active-underline')) {
      const underline = document.createElement('div');
      underline.className = 'active-underline';
      link.appendChild(underline);
    }
    // Also set .active on mobile link
    const mobileTwin = Array.from(navLinksMobile).find(l => l.getAttribute('href') === link.getAttribute('href'));
    if (mobileTwin) mobileTwin.classList.add('active');
    currentActiveLink = link;
  };

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  const handleNavClick = (e, isMobile) => {
    e.preventDefault();
    const target = e.currentTarget;
    const targetId = target.getAttribute('href');
    if (!targetId) return;

    const targetElement = qs(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    if (isMobile) {
      closeMobileMenu();
    }
  };
  navLinks.forEach(link => link.addEventListener('click', (e) => handleNavClick(e, false)));
  navLinksMobile.forEach(link => link.addEventListener('click', (e) => handleNavClick(e, true)));

  // --- Active Link on Scroll ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const newActiveLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${id}`);
        if (newActiveLink && newActiveLink !== currentActiveLink) {
          setActiveLink(newActiveLink);
        }
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
  if(navLinks.length > 0) setActiveLink(navLinks[0]);

  // --- Dynamic Header Glassmorph + Brand Color Adaptation ---
  const darkSections = ['bio', 'about', 'partners'];
  const sectionElements = darkSections.map(id => document.getElementById(id)).filter(Boolean);
  let lastHeaderMode = null;
  function setHeaderMode(mode) {
    if (lastHeaderMode === mode) return;
    header.classList.remove('header-light', 'header-dark');
    header.classList.add(mode === 'dark' ? 'header-dark' : 'header-light');
    // Adapt nav link color for accessibility/brand
    navLinks.forEach(link => {
      if (mode === 'dark') {
        link.style.color = 'var(--secondary-light-text)';
      } else {
        link.style.color = 'var(--secondary-dark-text)';
      }
    });
    navLinksMobile.forEach(link => {
      if (mode === 'dark') {
        link.style.color = 'var(--light-text)';
      } else {
        link.style.color = 'var(--dark-text)';
      }
    });
    lastHeaderMode = mode;
  }
  const headerObserver = new IntersectionObserver((entries) => {
    let foundDark = false;
    entries.forEach(entry => {
      if (entry.isIntersecting && darkSections.includes(entry.target.id)) {
        foundDark = true;
      }
    });
    setHeaderMode(foundDark ? 'dark' : 'light');
  }, { threshold: 0.35 });
  sectionElements.forEach(section => headerObserver.observe(section));
  // Default mode
  setHeaderMode('light');
}
