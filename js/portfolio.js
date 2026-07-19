import { projectsData } from '../src/data/projectsData.js';
import { ProjectCard } from './components/ProjectCard.js';

const categoryMap = {
  'Marketing & SEO': 'marketing',
  'Web Development': 'web',
  'AI Automation': 'automation'
};

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
    ? projectsData 
    : projectsData.filter(p => categoryMap[p.category] === filter);
    
  // Append new HTML
  filtered.forEach((p, index) => {
    // Generate card HTML using the component helper
    const cardHTML = ProjectCard({
      title: p.title,
      category: p.category,
      tags: p.tags,
      result: p.result,
      tools: p.tools,
      image: p.image,
      liveUrl: p.liveUrl,
      githubUrl: p.githubUrl
    });
    
    grid.insertAdjacentHTML('beforeend', cardHTML);
  });
}

/**
 * Setup Portfolio Filter Tabs
 */
export function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.tab-btn');
  const grid = document.getElementById('portfolio-grid');
  if (!tabs || !grid) return;
  
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
