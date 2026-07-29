export function ProjectCard({ title, category, tags, target, solution, result, features, tools, image, liveUrl, githubUrl }) {
  const tagPills = tags ? tags.map(tag => `<span class="badge">${tag}</span>`).join('') : '';
  const toolPills = tools ? tools.map(tool => `<span class="badge badge--purple">${tool}</span>`).join('') : '';
  const featureList = features ? features.map(f => `<li style="display: flex; align-items: center; gap: 6px;"><i class='bx bx-check-circle' style="color: var(--clr-primary); font-size: 0.9rem;"></i> ${f}</li>`).join('') : '';

  const blockColors = ['#FFEAA7', '#A8E6CF', '#FFD3B6', '#E2F0CB', '#FFB7B2', '#B5EAD7', '#C7CEEA'];
  const bgColor = blockColors[title.length % blockColors.length];
  const linkHref = liveUrl && liveUrl !== '#' ? liveUrl : 'javascript:void(0)';
  const linkTarget = liveUrl && liveUrl !== '#' ? '_blank' : '_self';

  return `
    <div class="project-card block-card reveal" style="opacity: 1; transform: none; background-color: ${bgColor}; display: flex; flex-direction: column; height: 100%;">
      
      <a href="${linkHref}" target="${linkTarget}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; flex-grow: 1; cursor: pointer;">
        <div class="project-image block-image" style="aspect-ratio: 16/9; position: relative; overflow: hidden; border-radius: 12px 12px 0 0;">
          <img src="${image}" alt="${title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
          <span class="badge" style="position: absolute; top: var(--sp-3); left: var(--sp-3); background: #0f172a; color: #ffffff; border: 2px solid #0f172a; font-weight: bold; z-index: 10; box-shadow: 4px 4px 0px rgba(15,23,42,0.3);">
            ${category}
          </span>
        </div>
        
        <div class="project-content" style="padding: 24px 24px 12px 24px; display: flex; flex-direction: column;">
          <h3 class="project-title font-display" style="font-size: var(--fs-lg); margin-bottom: 0; line-height: 1.3; color: #0f172a; font-weight: 900;">${title}</h3>
        </div>
      </a>
      
      <div style="padding: 0 24px 24px 24px;">
        <details style="cursor: pointer;">
          <summary style="font-weight: 800; color: #334155; font-size: 14px; outline: none; padding: 8px 0;">Show More Options ▾</summary>
          
          <div style="margin-top: 12px; border-top: 2px dashed rgba(15,23,42,0.2); padding-top: 16px; cursor: default;">
            <div style="font-size: 12px; font-weight: 800; color: #334155; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
              🎯 Target: ${target || 'General Clients'}
            </div>
            
            <div class="project-result" style="color: #0f172a; font-weight: 800; background: rgba(255,255,255,0.6); padding: 8px 12px; border-radius: 8px; border: 2px solid #0f172a; margin-bottom: var(--sp-4); display: flex; align-items: center; gap: var(--sp-2); font-size: 0.9rem;">
              <i class='bx bx-trending-up' style="font-size: 1.1rem;"></i>
              <span>${result}</span>
            </div>

            ${features ? `
              <ul style="list-style: none; padding: 0; margin: 0 0 var(--sp-4) 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; font-weight: 600; color: #1e293b;">
                ${featureList}
              </ul>
            ` : ''}

            <div class="project-tags" style="display: flex; flex-wrap: wrap; gap: var(--sp-2); margin-bottom: var(--sp-5);">
              ${tagPills}
              ${toolPills}
            </div>
            
            <div class="project-actions" style="display: flex; gap: var(--sp-3);">
              <button onclick="openBookingModal('Inquire about: ${title.replace(/'/g, "\\'")}')" class="btn btn-primary btn-sm" style="flex-grow: 1; border-radius: 10px;">Get Similar System</button>
              ${githubUrl && githubUrl !== '#' ? `
                <a href="${githubUrl}" target="_blank" class="btn btn-secondary btn-sm" style="padding: var(--sp-2) var(--sp-3); border-radius: 10px;" aria-label="View Source on GitHub">
                  <i class='bx bxl-github' style="font-size: 1.25rem;"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </details>
      </div>

    </div>
  `;
}
