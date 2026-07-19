export function TrustBar() {
  return `
    <div class="trust-bar reveal" style="background: var(--clr-bg-card); border: 1px solid var(--clr-border); border-radius: var(--radius-lg); padding: var(--sp-4) var(--sp-6); text-align: center; color: var(--clr-text-muted); font-size: var(--fs-sm); max-width: 800px; margin: 0 auto var(--sp-12) auto; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: var(--sp-2) var(--sp-4); box-shadow: var(--shadow-sm);">
      <span>⭐ 4.9/5 average rating</span>
      <span style="color: var(--clr-border); opacity: 0.5;">&middot;</span>
      <span>15+ projects delivered</span>
      <span style="color: var(--clr-border); opacity: 0.5;">&middot;</span>
      <span>3 countries served</span>
      <span style="color: var(--clr-border); opacity: 0.5;">&middot;</span>
      <span>100% on-time delivery</span>
    </div>
  `;
}
