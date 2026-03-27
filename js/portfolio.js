// ==========================================
// PORTFOLIO LOGIC
// ==========================================

const projects = [
  {
    id: 'p2',
    title: 'Pulse SEO Dashboard',
    category: 'marketing',
    image: './assets/images/project-seo-dashboard.png',
    desc: 'Comprehensive SEO analytics dashboard tracking keyword rankings, organic traffic trends, backlink profiles, and technical site audit scores.',
    tech: ['Vanilla JS', 'Chart.js', 'CSS Modules'],
    result: 'Increased technical SEO oversight by 45%.',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 'p4',
    title: 'OmniBrand Campaign Analytics',
    category: 'marketing',
    image: './assets/images/project-marketing.png',
    desc: 'Automated reporting interface pulling data from Google Ads, Meta Ads Manager, and Google Analytics 4 to calculate true cross-channel ROAS.',
    tech: ['Google Data Studio', 'API Integration', 'Data Visualization'],
    result: 'Saved 12 hours/week on manual agency reporting.',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 'p1',
    title: 'TickFlow — Productivity App',
    category: 'web',
    image: './assets/images/project-tickflow.png',
    desc: 'A modern full-stack task management application that integrates the Eisenhower Decision Matrix, Pomodoro timer, real-time synchronization, and productivity analytics.',
    tech: ['React', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    result: 'Users can organize tasks efficiently and maximize productivity.',
    liveLink: 'https://jim5225.github.io/taskflow/login',
    githubLink: 'https://github.com/Jim5225'
  },
  {
    id: 'p3',
    title: 'Growth SaaS Landing Page',
    category: 'web',
    image: './assets/images/project-landing-page.png',
    desc: 'High-converting landing page optimized for Meta Ad campaigns, featuring A/B tested copy, precise CTA placement, and blazing fast performance.',
    tech: ['HTML', 'Vanilla CSS', 'Vite'],
    result: 'Improved paid traffic conversion rate from 2% to 5.4%.',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 'p5',
    title: 'ContentMatrix Blog Platform',
    category: 'web',
    image: './assets/images/project-blog-platform.png',
    desc: 'SEO-optimized static blog architecture built for programmatic content scaling, featuring ultra-fast load times and perfect Core Web Vitals.',
    tech: ['MarkDown', 'HTML', 'CSS', 'Vite'],
    result: 'Achieved 100/100 Lighthouse Performance & SEO scores.',
    liveLink: '#',
    githubLink: '#'
  }
];

// Reference to DOM container
const grid = document.getElementById('portfolio-grid');

/**
 * Render Project Cards
 */
export function renderProjects(filter = 'all') {
  if (!grid) return;
  
  // Clear existing
  grid.innerHTML = '';
  
  // Filter array
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
    
  // Append new HTML
  filtered.forEach((p, index) => {
    // Staggered reveal delay based on index
    const delayClass = `reveal-delay-${(index % 4) + 1}`;
    
    // Build Tech Stack Badges
    const techBadges = p.tech.map(t => {
      // Map colors contextually
      let colorClass = '';
      if (['React', 'TypeScript', 'Vanilla JS', 'Chart.js'].includes(t)) colorClass = 'badge--cyan';
      else if (['Firebase', 'API Integration', 'MarkDown'].includes(t)) colorClass = 'badge--purple';
      
      return `<span class="badge ${colorClass}">${t}</span>`;
    }).join('');
    
    // HTML Template
    const cardHTML = `
      <div class="project-card glass-card reveal ${delayClass}" style="opacity:1; transform:none;">
        <div class="project-image">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <div class="project-overlay">
            <a href="${p.liveLink}" target="${p.liveLink !== '#' ? '_blank' : '_self'}" class="btn btn-primary btn-icon" title="View Live" aria-label="View Live">
              <i class='bx bx-link-external'></i>
            </a>
            <a href="${p.githubLink}" target="${p.githubLink !== '#' ? '_blank' : '_self'}" class="btn btn-secondary btn-icon" title="View Source" aria-label="View Source">
              <i class='bx bxl-github'></i>
            </a>
          </div>
        </div>
        
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-tech">
            ${techBadges}
          </div>
          <p class="project-desc">${p.desc}</p>
          
          <div class="project-result">
            <i class='bx bx-trending-up'></i>
            <span>${p.result}</span>
          </div>
        </div>
      </div>
    `;
    
    grid.insertAdjacentHTML('beforeend', cardHTML);
  });
}

/**
 * Setup Portfolio Filter Tabs
 */
export function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.tab-btn');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Remove active class from all
      tabs.forEach(t => t.classList.remove('active'));
      // Add to clicked
      e.target.classList.add('active');
      
      // Get filter value
      const filter = e.target.getAttribute('data-filter');
      
      // Animate out
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(10px)';
      grid.style.transition = 'all 300ms ease';
      
      setTimeout(() => {
        // Render new data
        renderProjects(filter);
        
        // Animate in
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 300);
    });
  });
}
