// ==========================================
// PORTFOLIO LOGIC
// ==========================================

// BUG 03 FIX: Real project data replacing empty/placeholder projects
const projects = [
  {
    id: 'p1',
    title: 'AI Lead Generation System for B2B SaaS',
    category: 'marketing',
    image: './assets/images/project-marketing.png',
    desc: 'Client spent $2k/month on ads with 0.8% conversion rate. Built automated lead qualification funnel + Meta Ads retargeting system with AI scoring.',
    tech: ['Meta Ads', 'Make.com', 'ActiveCampaign'],
    result: 'Reduced CPL by 47%. Conversion rate grew to 3.2% in 6 weeks.',
    liveLink: '#',
    githubLink: null
  },
  {
    id: 'p2',
    title: 'E-commerce Conversion Funnel Rebuild',
    category: 'web',
    image: './assets/images/project-landing-page.png',
    desc: 'Shopify store had 94% cart abandonment rate. Redesigned checkout UX, added email automation, exit-intent popups, and abandoned cart sequences.',
    tech: ['React', 'Tailwind CSS', 'Klaviyo'],
    result: 'Cart abandonment dropped to 71%. Revenue up 28% in 30 days.',
    liveLink: '#',
    githubLink: 'https://github.com/Jim5225'
  },
  {
    id: 'p3',
    title: 'Automated Client Reporting Dashboard',
    category: 'automation',
    image: './assets/images/project-seo-dashboard.png',
    desc: 'Agency spent 12 hours/week manually compiling client reports. Built automated multi-source data pipeline connecting Meta Ads, GA4, and Google Sheets with auto-email delivery.',
    tech: ['n8n', 'Google Sheets API', 'Meta Ads API'],
    result: 'Report generation time: 12 hours → 8 minutes. Fully automated.',
    liveLink: '#',
    githubLink: null
  },
  {
    id: 'p4',
    title: 'TickFlow — Productivity App',
    category: 'web',
    image: './assets/images/project-tickflow.png',
    desc: 'A modern full-stack task management application with Eisenhower Decision Matrix, Pomodoro timer, real-time sync, and productivity analytics.',
    tech: ['React', 'TypeScript', 'Firebase'],
    result: 'Users organize tasks efficiently and maximize daily productivity.',
    liveLink: 'https://jim5225.github.io/taskflow/login',
    githubLink: 'https://github.com/Jim5225'
  }
];

// BUG 03 FIX: DOM reference moved inside functions — was evaluated at module parse-time before DOM ready

/**
 * Render Project Cards
 */
export function renderProjects(filter = 'all') {
  const grid = document.getElementById('portfolio-grid');
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
      let colorClass = '';
      if (['React', 'TypeScript', 'Tailwind CSS'].includes(t)) colorClass = 'badge--cyan';
      else if (['Firebase', 'n8n', 'Make.com', 'ActiveCampaign'].includes(t)) colorClass = 'badge--purple';
      
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
            ${p.githubLink ? `<a href="${p.githubLink}" target="_blank" class="btn btn-secondary btn-icon" title="View Source" aria-label="View Source"><i class='bx bxl-github'></i></a>` : ''}
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
  const grid = document.getElementById('portfolio-grid'); // BUG 03 FIX: moved inside function
  
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
