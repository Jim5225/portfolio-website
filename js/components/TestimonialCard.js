export function TestimonialCard({ name, title, avatar, country, platform, rating, text }) {
  const stars = Array(rating).fill(`<i class='bx bxs-star' style="color: #F59E0B; font-size: var(--fs-sm);"></i>`).join('');
  
  return `
    <div class="testimonial-card glass-card reveal" style="padding: var(--sp-6); display: flex; flex-direction: column; height: 100%; position: relative;">
      <!-- Quotation mark icon (large, accent color, top-left) -->
      <div style="position: absolute; top: var(--sp-2); left: var(--sp-4); font-size: 4.5rem; line-height: 1; color: var(--clr-primary-light); font-family: 'Syne', sans-serif; opacity: 0.15; pointer-events: none;">&ldquo;</div>
      
      <!-- Review text (16px, line-height 1.7) -->
      <p style="font-size: 1rem; line-height: 1.7; color: var(--clr-text-secondary); margin-bottom: var(--sp-5); margin-top: var(--sp-4); flex-grow: 1; z-index: 1;">
        ${text}
      </p>
      
      <!-- Star rating row -->
      <div style="display: flex; gap: var(--sp-1); margin-bottom: var(--sp-5);">
        ${stars}
      </div>
      
      <hr style="border: 0; border-top: 1px solid var(--clr-border); margin-bottom: var(--sp-5);">
      
      <!-- Bottom row: Avatar + Name + Title + Country flag + Platform badge -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--sp-3);">
        <div style="display: flex; align-items: center; gap: var(--sp-3);">
          <img src="${avatar}" alt="${name}" loading="lazy" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid var(--clr-primary-light);">
          <div>
            <h4 class="font-display" style="font-size: var(--fs-sm); font-weight: var(--fw-bold); color: var(--clr-text-primary); margin-bottom: 2px;">${name}</h4>
            <span style="font-size: var(--fs-xs); color: var(--clr-text-muted);">${title}</span>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
          <span style="font-size: var(--fs-xs); color: var(--clr-text-secondary);">${country}</span>
          <span class="badge badge--cyan" style="font-size: 9px; padding: 2px 6px; border-radius: var(--radius-sm); font-weight: var(--fw-bold);">${platform}</span>
        </div>
      </div>
    </div>
  `;
}
