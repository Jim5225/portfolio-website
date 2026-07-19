export function FilterBar({ categories, activeCategory, onFilter }) {
  window.handleFilterChange = function(e, value) {
    const tabs = document.querySelectorAll('.filter-tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    const grid = document.getElementById('portfolio-grid');
    if (grid) {
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(10px)';
      grid.style.transition = 'all 300ms ease';
      
      setTimeout(() => {
        if (onFilter) onFilter(value);
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 300);
    }
  };

  const buttons = categories.map(cat => {
    const isActive = cat.value === activeCategory ? 'active' : '';
    return `
      <button class="tab-btn filter-tab-btn ${isActive}" data-filter="${cat.value}" onclick="handleFilterChange(event, '${cat.value}')" style="transition: all 0.3s ease;">
        ${cat.label}
      </button>
    `;
  }).join('');

  return `
    <div class="tabs reveal" style="display: flex; gap: var(--sp-2); justify-content: center; margin-bottom: var(--sp-10); overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; padding: 4px 0;">
      ${buttons}
    </div>
  `;
}
