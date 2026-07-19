export function ProjectCard({ title, category, tags, result, tools, image, liveUrl, githubUrl }) {
  const tagPills = tags.map(tag => `<span class="badge">${tag}</span>`).join('');
  const toolPills = tools.map(tool => `<span class="badge badge--purple">${tool}</span>`).join('');
  
  return `
    <div class="project-card glass-card reveal" style="opacity: 1; transform: none; transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <div class="project-image" style="aspect-ratio: 16/9; position: relative; overflow: hidden;">
        <img src="${image}" alt="${title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="badge" style="position: absolute; top: var(--sp-3); left: var(--sp-3); background: var(--clr-bg-primary); border-color: var(--clr-primary); z-index: 10;">
          ${category}
        </span>
      </div>
      
      <div class="project-content" style="padding: var(--sp-6); display: flex; flex-direction: column; flex-grow: 1;">
        <h3 class="project-title font-display" style="font-size: var(--fs-lg); margin-bottom: var(--sp-2);">${title}</h3>
        
        <div class="project-result" style="color: #F59E0B; font-weight: var(--fw-bold); margin-bottom: var(--sp-4); display: flex; align-items: center; gap: var(--sp-2);">
          <i class='bx bx-trending-up'></i>
          <span>${result}</span>
        </div>
        
        <div class="project-tags" style="display: flex; flex-wrap: wrap; gap: var(--sp-2); margin-bottom: var(--sp-4);">
          ${tagPills}
          ${toolPills}
        </div>
        
        <div class="project-actions" style="margin-top: auto; display: flex; gap: var(--sp-3);">
          <a href="${liveUrl}" target="${liveUrl !== '#' ? '_blank' : '_self'}" class="btn btn-primary btn-sm" style="flex-grow: 1;">Live Demo</a>
          ${githubUrl ? `
            <a href="${githubUrl}" target="_blank" class="btn btn-secondary btn-sm" style="padding: var(--sp-2) var(--sp-3);">
              <i class='bx bxl-github' style="font-size: 1.25rem;"></i>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}
