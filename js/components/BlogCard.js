import { showToast } from '../utils.js';

// Bind to window to allow click invocation from HTML string template
window.showBlogComingSoon = function(e) {
  e.preventDefault();
  showToast("Full article coming soon!", 'success');
};

export function BlogCard({ title, date, readTime, category, categoryColor, excerpt }) {
  return `
    <article class="blog-card glass-card reveal" style="padding: var(--sp-6); display: flex; flex-direction: column; height: 100%; cursor: pointer;" onclick="showBlogComingSoon(event)">
      <div style="margin-bottom: var(--sp-3);">
        <span class="badge" style="background: ${categoryColor}15; color: ${categoryColor}; border-color: ${categoryColor}30;">
          ${category}
        </span>
      </div>
      <h2 class="blog-card-title font-display" style="font-size: var(--fs-lg); font-weight: var(--fw-bold); margin-bottom: var(--sp-3); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4;">
        ${title}
      </h2>
      <p style="font-size: var(--fs-sm); color: var(--clr-text-secondary); margin-bottom: var(--sp-4); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">
        ${excerpt}
      </p>
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: var(--fs-xs); color: var(--clr-text-muted); border-top: 1px solid var(--clr-border); padding-top: var(--sp-3); margin-top: auto;">
        <div style="display: flex; gap: var(--sp-3);">
          <time>${date}</time>
          <span>&middot;</span>
          <span>${readTime} read</span>
        </div>
        <span style="color: var(--clr-primary); font-weight: var(--fw-semibold); display: flex; align-items: center; gap: 4px;">
          Read Article <i class='bx bx-right-arrow-alt'></i>
        </span>
      </div>
    </article>
  `;
}
