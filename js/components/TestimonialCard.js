export function TestimonialCard({ name, title, country, platform, rating, text }) {
  const stars = Array(rating).fill(`<i class='bx bxs-star' style="color: #F59E0B;"></i>`).join('');
  
  return `
    <div class="testimonial-card glass-card reveal" style="padding: var(--sp-6); display: flex; flex-direction: column; height: 100%;">
      <div class="testimonial-quote" style="font-size: 3rem; line-height: 1; color: var(--clr-primary); font-family: sans-serif; margin-bottom: calc(-1 * var(--sp-4)); opacity: 0.8;">&ldquo;</div>
      <p style="font-size: var(--fs-base); line-height: 1.8; color: var(--clr-text-secondary); margin-bottom: var(--sp-4); flex-grow: 1;">
        ${text}
      </p>
      <div style="display: flex; gap: var(--sp-1); margin-bottom: var(--sp-4);">
        ${stars}
      </div>
      <hr style="border: 0; border-top: 1px solid var(--clr-border); margin-bottom: var(--sp-4);">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--sp-2);">
        <div>
          <h4 style="font-size: var(--fs-sm); font-weight: var(--fw-bold); color: var(--clr-text-primary); margin-bottom: 2px;">${name}</h4>
          <span style="font-size: var(--fs-xs); color: var(--clr-text-muted);">${title}</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--sp-2);">
          <span style="font-size: var(--fs-sm);">${country}</span>
          <span class="badge badge--cyan" style="font-size: 10px; padding: 2px 8px;">${platform}</span>
        </div>
      </div>
    </div>
  `;
}
