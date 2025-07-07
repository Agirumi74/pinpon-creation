// Portfolio Modal logic extracted from layout.astro
export function initPortfolioModal() {
  const qs = (selector) => document.querySelector(selector);
  const grid = qs('#projects-grid');
  const modalBackdrop = qs('#project-modal-backdrop');
  const modal = qs('#project-modal');
  const closeButton = qs('#modal-close-button');
  if (!grid || !modalBackdrop || !modal || !closeButton) return;

  const openModal = (projectData) => {
    qs('#modal-image').src = projectData.image || '';
    qs('#modal-image').alt = projectData.title || '';
    qs('#modal-category').textContent = projectData.category;
    qs('#modal-title').textContent = projectData.title;
    qs('#modal-description').textContent = projectData.description;
    qs('#modal-link').href = projectData.url || '#';
    document.body.classList.add('body-no-scroll');
    modalBackdrop.classList.add('visible');
  };

  const closeModal = () => {
    document.body.classList.remove('body-no-scroll');
    modalBackdrop.classList.remove('visible');
  };

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card && card.dataset) {
      const projectData = {
        id: card.dataset.projectId,
        title: card.dataset.projectTitle,
        category: card.dataset.projectCategory,
        image: card.dataset.projectImage,
        description: card.dataset.projectDescription,
        url: card.dataset.projectUrl,
      };
      openModal(projectData);
    }
  });

  closeButton.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}
