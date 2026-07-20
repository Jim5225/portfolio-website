import { setupScrollObserver, debounce } from './utils.js';
import { renderProjects, initPortfolioFilter } from './portfolio.js';
import { initScrollReveal } from './useScrollReveal.js';
import { testimonialsData } from '../src/data/testimonialsData.js';
import { TestimonialCard } from './components/TestimonialCard.js';
import { TrustBar } from './components/TrustBar.js';

// ==========================================
// MAIN INITIALIZATION LOGIC
// ==========================================

window.handleHeroConnect = function(e) {
  e.preventDefault();
  const input = document.getElementById('hero-email-input');
  if (input && input.value) {
    if (typeof window.openBookingModal === 'function') {
      window.openBookingModal(input.value);
    } else {
      alert('Thank you! I will get in touch with ' + input.value + ' shortly.');
    }
    input.value = '';
  }
};

// Supabase config for global review storage
const SUPABASE_URL = 'https://vrsqryjckxvkhfwhxxml.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc3FyeWpja3h2a2hmd2h4eG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1ODc3NDYsImV4cCI6MjA5ODE2Mzc0Nn0.tPE2g0_mg3m2VxoyLFU3Yo1Ec5kH1JODdGhC8S926og';

window.handleReviewSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('rev_name').value.trim();
  const title = document.getElementById('rev_title').value.trim() || 'Verified Visitor';
  const rating = parseInt(document.getElementById('rev_rating').value, 10) || 5;
  const text = document.getElementById('rev_comment').value.trim();
  const submitBtn = document.getElementById('review-submit-btn');

  if (!name || !text) return;

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Posting Review &amp; Sending Email...";
  }

  // 1. Save to Supabase (globally visible to ALL visitors on any device)
  fetch(`${SUPABASE_URL}/rest/v1/portfolio_reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      name: name,
      title: title,
      rating: rating,
      review_text: text,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'
    })
  })
  .then(res => res.json())
  .then(() => {
    // 2. Reload all reviews from Supabase (so the new review shows immediately)
    if (typeof window.renderAllReviews === 'function') {
      window.renderAllReviews();
    }

    // 3. Send email notification to jimjaaj@gmail.com via EmailJS
    if (typeof emailjs !== 'undefined') {
      emailjs.send('service_okqgufh', 'template_y9up7io', {
        to_name: 'Jayed Al Afroz Jim',
        from_name: name,
        from_email: 'jimjaaj@gmail.com',
        subject: `[New Portfolio Review] ${name} — ${rating}/5 Stars`,
        message: `New review posted on your portfolio!\n\nFrom: ${name}\nRole/Company: ${title}\nRating: ${rating}/5 Stars\n\nReview:\n"${text}"\n\n--- Sent via portfolio contact form ---`
      })
      .then(() => console.log('Review notification email sent to jimjaaj@gmail.com'))
      .catch(err => console.warn('EmailJS error:', err));
    }

    // 4. Reset form & show success
    const form = document.getElementById('reviewCommentForm');
    if (form) form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "<i class='bx bx-paper-plane'></i> Post Review &amp; Send Email Notification";
    }
    import('./utils.js').then(module => {
      module.showToast('Thank you! Your review is now live for everyone to see.', 'success');
    });
  })
  .catch(err => {
    console.error('Review submission error:', err);
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "<i class='bx bx-paper-plane'></i> Post Review &amp; Send Email Notification";
    }
    import('./utils.js').then(module => {
      module.showToast('Something went wrong. Please try again.', 'error');
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // SET YEAR
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // TYPEWRITER EFFECT
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const words = [
      'Save Time',
      'Increase Revenue',
      'Eliminate Repetitive Work'
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

  // RENDER TRUST BAR
  const trustContainer = document.getElementById('trust-bar-container');
  if (trustContainer) {
    trustContainer.innerHTML = TrustBar();
  }

  // RENDER TESTIMONIALS: Load from Supabase (global) + default verified reviews
  window.renderAllReviews = function() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid) return;

    // Show default reviews immediately while fetching
    testimonialsGrid.innerHTML = testimonialsData.map(t => TestimonialCard(t)).join('');

    // Fetch user-submitted reviews from Supabase (visible to ALL visitors worldwide)
    fetch(`${SUPABASE_URL}/rest/v1/portfolio_reviews?order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    })
    .then(res => res.json())
    .then(rows => {
      if (!Array.isArray(rows) || rows.length === 0) return;

      // Map Supabase rows to review card format
      const dbReviews = rows.map(row => ({
        id: row.id,
        name: row.name,
        title: row.title || 'Verified Visitor',
        avatar: row.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
        country: '🌐 Verified Comment',
        platform: 'Community Review',
        rating: row.rating || 5,
        text: row.review_text
      }));

      // Prepend user reviews before default client reviews
      const allReviews = [...dbReviews, ...testimonialsData];
      testimonialsGrid.innerHTML = allReviews.map(t => TestimonialCard(t)).join('');
      
      // Re-initialize scroll reveal for the dynamically added elements so they become visible
      if (typeof initScrollReveal === 'function') {
        initScrollReveal();
      }
    })
    .catch(err => console.warn('Could not load reviews from database:', err));
  };

  window.renderAllReviews();

  // INITIALIZE PARTICLES BACKGROUND
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ['#4f46e5', '#6366f1', '#f59e0b'] },
        shape: { type: 'circle' },
        opacity: { value: 0.35, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#6366f1', opacity: 0.15, width: 1 },
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

  // LOAD CALENDLY SCRIPT DYNAMICALLY
  const calendlyWidget = document.querySelector('.calendly-inline-widget');
  if (calendlyWidget) {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }

  // GLOBAL EMAIL COPY HANDLER
  window.copyEmailToClipboard = function(e) {
    e.preventDefault();
    navigator.clipboard.writeText('jimjaaj@gmail.com').then(() => {
      import('./utils.js').then(module => {
        module.showToast('Email copied to clipboard!', 'success');
      });
      const textEl = document.getElementById('email-btn-text');
      if (textEl) {
        textEl.textContent = 'Copied!';
        setTimeout(() => {
          textEl.textContent = 'jimjaaj@gmail.com (Copy)';
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };
});
