import { setupScrollObserver, debounce } from './utils.js';
import { renderProjects, initPortfolioFilter } from './portfolio.js';
import { initScrollReveal } from './useScrollReveal.js';

// ==========================================
// MAIN INITIALIZATION LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // SET YEAR
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // TYPEWRITER EFFECT
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const words = [
      'AI Automation Systems ',
      'Social Media Ads ',
      'High-Converting Funnels ',
      'Sales-Driven Websites '
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        charIndex--;
        typeSpeed = 50;
      } else {
        charIndex++;
        typeSpeed = 100;
      }

      typewriterElement.textContent = currentWord.substring(0, charIndex);

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before new word
      }

      setTimeout(type, typeSpeed);
    }
    
    // Start after slight delay
    setTimeout(type, 1000);
  }

  // NAVIGATION & SCROLL HIGHLIGHT
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const scrollProgress = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile menu on clicking a link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Transparent / Solid Navbar toggle
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.add('scrolled'); // Force for dark theme readability, change logic if want fully transparent at top
    }
    
    // Progress Bar
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / maxHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    
    // Active Navigation Link Highlighting
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 100; // Offset for navbar
      const sectionId = sec.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Add debounced scroll event listener
  window.addEventListener('scroll', debounce(handleScroll, 10));
  
  // Set initial run for scroll logic
  handleScroll();

  // REVEAL ANIMATIONS ON SCROLL & STAT COUNTERS
  initScrollReveal();

  // PRICING TABS - Redundant now but kept as stub if needed for future
  // The new layout is a static 3-column grid

  // INIT PORTFOLIO MODULE
  if (document.getElementById('portfolio-grid')) {
    renderProjects('all');
    initPortfolioFilter();
  }

  // INITIALIZE PARTICLES BACKGROUND
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ['#3b82f6', '#22d3ee', '#8b5cf6'] },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#3b82f6', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1.5, direction: 'none', out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }
});
