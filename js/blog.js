import { blogData } from '../src/data/blogData.js';
import { BlogCard } from './components/BlogCard.js';
import { debounce } from './utils.js';

// DOM elements references
const listContainer = document.getElementById('blog-list');
const categoryContainer = document.getElementById('category-list');
const searchInput = document.getElementById('blog-search');

export function initBlog() {
  if (!listContainer) return;
  
  // Render Initial Posts & Categories
  renderBlogPosts(blogData);
  renderCategories();
  
  // Setup search with 3+ characters limit & debounce
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      const term = e.target.value.trim().toLowerCase();
      
      // If search input is cleared, reset to show all posts
      if (term.length === 0) {
        renderBlogPosts(blogData);
        return;
      }
      
      // Starts searching only at 3+ characters
      if (term.length >= 3) {
        const filtered = blogData.filter(post => 
          post.title.toLowerCase().includes(term) || 
          post.excerpt.toLowerCase().includes(term) ||
          post.category.toLowerCase().includes(term)
        );
        renderBlogPosts(filtered);
      }
    }, 300));
  }
}

function renderBlogPosts(posts) {
  listContainer.innerHTML = '';
  
  // Empty State Fallback
  if (posts.length === 0) {
    listContainer.innerHTML = `
      <div class="glass-card reveal visible" style="grid-column: 1 / -1; text-align: center; padding: var(--sp-12) var(--sp-6); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--sp-3); border-color: var(--clr-border);">
        <i class='bx bx-search-alt' style="font-size: 3.5rem; color: var(--clr-text-muted);"></i>
        <h3 class="font-display" style="font-size: var(--fs-xl); margin-bottom: 2px;">No articles found</h3>
        <p style="color: var(--clr-text-secondary); max-width: 400px; font-size: var(--fs-sm); line-height: 1.6;">
          We couldn't find any articles matching your search query. Try checking your spelling or selecting a different category.
        </p>
        <button onclick="resetSearch(event)" class="btn btn-secondary btn-sm" style="margin-top: var(--sp-2);">
          Reset Search & Filters
        </button>
      </div>
    `;
    return;
  }
  
  posts.forEach((post, i) => {
    // Generate card template utilizing our Phase 3 BlogCard component helper
    const cardHTML = BlogCard({
      title: post.title,
      date: post.date,
      readTime: post.readTime,
      category: post.category,
      categoryColor: post.categoryColor,
      excerpt: post.excerpt
    });
    
    listContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
}

function renderCategories() {
  if (!categoryContainer) return;
  
  // Calculate counts for categories dynamically
  const counts = blogData.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});
  
  const total = blogData.length;
  
  let html = `
    <li>
      <a href="#" class="category-filter active" data-category="all" style="color: var(--clr-primary-light);">
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
  
  // Categories Filter Interaction
  document.querySelectorAll('.category-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const target = e.target.closest('a');
      const cat = target.getAttribute('data-category');
      
      // Update active styling state
      document.querySelectorAll('.category-filter').forEach(b => b.style.color = 'var(--clr-text-secondary)');
      target.style.color = 'var(--clr-primary-light)';
      
      if (cat === 'all') {
        renderBlogPosts(blogData);
      } else {
        renderBlogPosts(blogData.filter(p => p.category === cat));
      }
      
      // Reset search bar value on category change
      if (searchInput) searchInput.value = '';
    });
  });
}

// Global Reset Search Action Handler
window.resetSearch = function(e) {
  e.preventDefault();
  if (searchInput) searchInput.value = '';
  renderBlogPosts(blogData);
  
  const filters = document.querySelectorAll('.category-filter');
  filters.forEach(f => f.style.color = 'var(--clr-text-secondary)');
  const allFilter = document.querySelector('.category-filter[data-category="all"]');
  if (allFilter) allFilter.style.color = 'var(--clr-primary-light)';
};

// Initialize
document.addEventListener('DOMContentLoaded', initBlog);
