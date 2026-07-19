// ==========================================
// BLOG RENDERING LOGIC
// ==========================================

// BUG 06 FIX: Replaced generic placeholder posts with real, relevant content
const blogPosts = [
  {
    id: 'b1',
    title: 'How I Reduced a Client\'s Cost-Per-Lead by 47% Using Meta Ads + AI',
    slug: 'reduce-cpl-meta-ads-ai',
    category: 'Meta Ads',
    date: 'June 15, 2025',
    image: './assets/images/project-marketing.png',
    excerpt: 'Most businesses burn money on ads with no automation layer underneath. Here is the exact system I built that cut CPL by almost half in 6 weeks.'
  },
  {
    id: 'b2',
    title: 'The AI Automation Stack Every Freelancer Needs to Know in 2025',
    slug: 'ai-automation-stack-2025',
    category: 'AI Automation',
    date: 'July 1, 2025',
    image: './assets/images/project-seo-dashboard.png',
    excerpt: 'Make.com, n8n, or Zapier? I have tested all three extensively with real client work. Here is what I actually use and why.'
  },
  {
    id: 'b3',
    title: 'Why Your Portfolio Is Losing You Clients (And Exactly How to Fix It)',
    slug: 'portfolio-losing-clients-fix',
    category: 'Freelancing',
    date: 'July 10, 2025',
    image: './assets/images/project-landing-page.png',
    excerpt: 'I have reviewed 50+ freelancer portfolios. The same 5 mistakes appear on almost all of them. Here is the checklist I use to audit and fix them fast.'
  }
];

// Reference to DOM components
const listContainer = document.getElementById('blog-list');
const categoryContainer = document.getElementById('category-list');
const searchInput = document.getElementById('blog-search');

export function initBlog() {
  if (!listContainer) return;
  
  // Render Initial
  renderBlogPosts(blogPosts);
  renderCategories();
  
  // Setup Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
      );
      renderBlogPosts(filtered);
    });
  }
}

function renderBlogPosts(posts) {
  listContainer.innerHTML = '';
  
  if (posts.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: var(--sp-12); color: var(--clr-text-muted);">
        <i class='bx bx-search' style="font-size: 48px; margin-bottom: var(--sp-4);"></i>
        <h3>No articles found</h3>
        <p>Try a different search term or category.</p>
      </div>
    `;
    return;
  }
  
  posts.forEach((post, i) => {
    const html = `
      <article class="blog-card" style="animation: fadeIn 0.5s ease forwards; animation-delay: ${i * 0.1}s; opacity: 0;">
        <div class="blog-card-image">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
        </div>
        <div class="blog-card-content">
          <div class="blog-meta">
            <span class="blog-category">${post.category}</span>
            <span>•</span>
            <time>${post.date}</time>
          </div>
          <h2 class="blog-card-title">
            <a href="./blog/${post.slug}.html">${post.title}</a>
          </h2>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a href="./blog/${post.slug}.html" class="blog-read-more">
            Read Full Article <i class='bx bx-right-arrow-alt'></i>
          </a>
        </div>
      </article>
    `;
    listContainer.insertAdjacentHTML('beforeend', html);
  });
}

function renderCategories() {
  if (!categoryContainer) return;
  
  // Get counts
  const counts = blogPosts.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});
  
  // Total
  const total = blogPosts.length;
  
  let html = `
    <li>
      <a href="#" class="category-filter" data-category="all">
        <span>All Articles</span>
        <span class="category-count">${total}</span>
      </a>
    </li>
  `;
  
  Object.keys(counts).forEach(cat => {
    html += `
      <li>
        <a href="#" class="category-filter" data-category="${cat}">
          <span>${cat}</span>
          <span class="category-count">${counts[cat]}</span>
        </a>
      </li>
    `;
  });
  
  categoryContainer.innerHTML = html;
  
  // Add Events
  document.querySelectorAll('.category-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get category link directly not child elements
      const target = e.target.closest('a');
      const cat = target.getAttribute('data-category');
      
      // styling updates
      document.querySelectorAll('.category-filter').forEach(b => b.style.color = 'var(--clr-text-secondary)');
      target.style.color = 'var(--clr-primary-light)';
      
      if (cat === 'all') {
        renderBlogPosts(blogPosts);
      } else {
        renderBlogPosts(blogPosts.filter(p => p.category === cat));
      }
      
      // Clear search
      if (searchInput) searchInput.value = '';
    });
  });
}

// Auto Init
document.addEventListener('DOMContentLoaded', initBlog);

// Add fadeIn animation if not exists
if (!document.querySelector('#blog-animations')) {
  const style = document.createElement('style');
  style.id = 'blog-animations';
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}
