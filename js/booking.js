import { showToast, saveToLocalDB } from './utils.js';

// ==========================================
// BOOKING MODAL LOGIC (Global Scope bindings)
// ==========================================

const modal = document.getElementById('bookingModal');
const packageField = document.getElementById('packageField');
const packageValue = document.getElementById('packageValue');
const packageInput = document.getElementById('b_package');

/**
 * Open Booking Modal
 * @param {string} packageName - Optional package name pre-filled
 */
window.openBookingModal = function(packageName = '') {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // stop background scroll
  
  if (packageName) {
    packageField.style.display = 'block';
    packageValue.textContent = packageName;
    packageInput.value = packageName;
  } else {
    packageField.style.display = 'none';
    packageInput.value = 'General Consultation';
  }
}

/**
 * Close Booking Modal
 */
window.closeBookingModal = function() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Close modal on outside click
 */
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeBookingModal();
  }
});

/**
 * Handle Booking Form Submit
 */
window.handleBookingSubmit = function(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const orgText = submitBtn.textContent;
  
  // Get data
  const data = {
    type: 'booking',
    name: document.getElementById('b_name').value,
    email: document.getElementById('b_email').value,
    date: document.getElementById('b_date').value,
    time: document.getElementById('b_time').value,
    platform: document.querySelector('input[name="b_platform"]:checked').value,
    pkg: document.getElementById('b_package').value,
    message: document.getElementById('b_message').value,
    status: 'new'
  };
  
  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Submitting...";
  
  // Mock API call simulation
  setTimeout(() => {
    // Save to localDB for admin panel overview
    saveToLocalDB('portfolio_bookings', data);
    
    // In a real app, integrate EmailJS or Formspree here
    
    // Success feedback
    submitBtn.disabled = false;
    submitBtn.textContent = orgText;
    
    closeBookingModal();
    e.target.reset();
    showToast('Booking request sent successfully! We will email you to confirm.');
  }, 1500);
}

/**
 * Handle Standard Contact Form Submit
 */
window.handleContactSubmit = function(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const orgHTML = submitBtn.innerHTML;
  
  // Get data
  const data = {
    type: 'contact',
    name: document.getElementById('c_name').value,
    email: document.getElementById('c_email').value,
    subject: document.getElementById('c_subject').value,
    message: document.getElementById('c_message').value,
    status: 'new'
  };
  
  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Sending...";
  
  // Mock API call
  setTimeout(() => {
    saveToLocalDB('portfolio_messages', data);
    
    submitBtn.disabled = false;
    submitBtn.innerHTML = orgHTML;
    
    e.target.reset();
    showToast('Message sent! I will get back to you within 24 hours.');
  }, 1500);
}

// Global CV DL
window.downloadCV = function(e) {
  e.preventDefault();
  showToast('CV downloading...');
  // Normal implementation logic applies.
}
