// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Shows a toast notification message
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error' 
 */
export function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  const icon = toast.querySelector('i');
  
  // Set message
  toastMsg.textContent = message;
  
  // Set styling based on type
  if (type === 'success') {
    toast.className = 'toast toast--success';
    icon.className = 'bx bx-check-circle';
    icon.style.color = 'var(--clr-success)';
  } else {
    toast.className = 'toast toast--error';
    icon.className = 'bx bx-error-circle';
    icon.style.color = 'var(--clr-error)';
  }
  
  // Show toast
  toast.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Debounce function for scroll/resize events
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Saves form data to localStorage (Mock backend)
 */
export function saveToLocalDB(collection, data) {
  try {
    const existing = JSON.parse(localStorage.getItem(collection) || '[]');
    const newItem = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...data
    };
    existing.push(newItem);
    localStorage.setItem(collection, JSON.stringify(existing));
    return newItem;
  } catch (error) {
    console.error('Error saving to DB:', error);
    return null;
  }
}

/**
 * Generic Intersection Observer setup for scroll animations
 */
export function setupScrollObserver(elements, callback, options = { threshold: 0.15, rootMargin: '0px' }) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target); // Usually only want to animate once
      }
    });
  }, options);
  
  elements.forEach(el => observer.observe(el));
  return observer;
}
