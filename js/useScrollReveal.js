import { setupScrollObserver } from './utils.js';

export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal, .stat-num');
  
  revealElements.forEach(el => {
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  setupScrollObserver(revealElements, (el) => {
    el.classList.add('visible');
    
    // If it is a stat counter, trigger its count-up animation
    if (el.classList.contains('stat-num')) {
      const target = +el.getAttribute('data-target');
      const speed = 200;
      el.innerText = '0';
      const updateCount = () => {
        const current = +el.innerText;
        const increment = target / speed;

        if (current < target) {
          el.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 15);
        } else {
          el.innerText = target + '+';
        }
      };
      updateCount();
    }
  });

  // Stagger delays on card grids (100ms per card)
  const grids = document.querySelectorAll('.portfolio-grid, .services-grid, .why-grid, .process-grid, .contact-info-cards, .blog-list');
  grids.forEach(grid => {
    const children = Array.from(grid.children);
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 100}ms`;
    });
  });
}
