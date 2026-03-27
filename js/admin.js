import { showToast } from './utils.js';

// ==========================================
// ADMIN DASHBOARD LOGIC
// ==========================================

const UI = {
  navItems: document.querySelectorAll('.admin-nav-item'),
  panels: document.querySelectorAll('.admin-panel'),
  title: document.getElementById('pageTitle'),
  toggle: document.getElementById('adminToggle'),
  sidebar: document.getElementById('adminSidebar'),
  modal: document.getElementById('viewModal'),
  modalTitle: document.getElementById('viewModalTitle'),
  modalContent: document.getElementById('viewModalContent'),
  
  // Tables
  activityTable: document.getElementById('activityBody'),
  bookingsTable: document.getElementById('bookingsBody'),
  messagesTable: document.getElementById('messagesBody'),
  
  // Stats
  statBookings: document.getElementById('stat-bookings'),
  statMessages: document.getElementById('stat-messages'),
  statNew: document.getElementById('stat-new'),
  
  // Nav Badges
  badgeBook: document.getElementById('nav-booking-badge'),
  badgeMsg: document.getElementById('nav-message-badge'),
};

let bookingsData = [];
let messagesData = [];

// Initialize Dashboard
function initAdmin() {
  loadData();
  setupNavigation();
  renderDashboard();
  renderBookings();
  renderMessages();
  updateStats();
}

function loadData() {
  bookingsData = JSON.parse(localStorage.getItem('portfolio_bookings') || '[]');
  messagesData = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
  
  // Sort reverse chronological
  bookingsData.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  messagesData.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function setupNavigation() {
  // Desktop Nav
  UI.navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      
      // Update Title
      UI.title.textContent = target.charAt(0).toUpperCase() + target.slice(1);
      
      // Active states
      UI.navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      UI.panels.forEach(panel => {
        panel.classList.remove('active');
        if(panel.id === `panel-${target}`) panel.classList.add('active');
      });
      
      // Close mobile sidebar if open
      if(window.innerWidth <= 768) {
        UI.sidebar.classList.remove('open');
      }
    });
  });
  
  // Mobile Nav Toggle
  if(UI.toggle) {
    UI.toggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
    
    UI.toggle.addEventListener('click', () => {
      UI.sidebar.classList.toggle('open');
    });
    
    window.addEventListener('resize', () => {
      UI.toggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
      if(window.innerWidth > 768) UI.sidebar.classList.remove('open');
    });
  }
}

function renderDashboard() {
  if(!UI.activityTable) return;
  
  // Combine and sort latest 5 activities
  const allActivity = [...bookingsData, ...messagesData]
    .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);
    
  if(allActivity.length === 0) {
    UI.activityTable.innerHTML = `<tr><td colspan="4" style="text-align:center;">No recent activity</td></tr>`;
    return;
  }
  
  let html = '';
  allActivity.forEach(item => {
    const date = new Date(item.createdAt).toLocaleDateString();
    const typeLabel = item.type === 'booking' ? 'Consultation' : 'Message';
    const statusClass = item.status === 'new' ? 'new' : 'contacted';
    
    html += `
      <tr>
        <td>${date}</td>
        <td><strong>${typeLabel}</strong></td>
        <td>${item.name}</td>
        <td><span class="status-badge ${statusClass}">${item.status.toUpperCase()}</span></td>
      </tr>
    `;
  });
  
  UI.activityTable.innerHTML = html;
}

function renderBookings() {
  if(!UI.bookingsTable) return;
  
  if(bookingsData.length === 0) {
    UI.bookingsTable.innerHTML = `<tr><td colspan="7" style="text-align:center;">No bookings found</td></tr>`;
    return;
  }
  
  let html = '';
  bookingsData.forEach(item => {
    const createdDate = new Date(item.createdAt).toLocaleDateString();
    const prefDate = new Date(item.date).toLocaleDateString();
    const statusClass = item.status === 'new' ? 'new' : 'contacted';
    
    html += `
      <tr>
        <td>${createdDate}</td>
        <td><strong>${item.name}</strong></td>
        <td>${item.email}</td>
        <td>${item.pkg || 'General'}</td>
        <td>${prefDate} at ${item.time}</td>
        <td><span class="status-badge ${statusClass}">${item.status.toUpperCase()}</span></td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="viewDetails('booking', '${item.id}')">View</button>
        </td>
      </tr>
    `;
  });
  
  UI.bookingsTable.innerHTML = html;
}

function renderMessages() {
  if(!UI.messagesTable) return;
  
  if(messagesData.length === 0) {
    UI.messagesTable.innerHTML = `<tr><td colspan="6" style="text-align:center;">No messages found</td></tr>`;
    return;
  }
  
  let html = '';
  messagesData.forEach(item => {
    const date = new Date(item.createdAt).toLocaleDateString();
    const snippet = item.message.substring(0, 40) + '...';
    
    html += `
      <tr>
        <td>${date}</td>
        <td><strong>${item.name}</strong></td>
        <td>${item.email}</td>
        <td>${item.subject || 'N/A'}</td>
        <td>${snippet}</td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="viewDetails('message', '${item.id}')">View</button>
        </td>
      </tr>
    `;
  });
  
  UI.messagesTable.innerHTML = html;
}

function updateStats() {
  if(UI.statBookings) UI.statBookings.textContent = bookingsData.length;
  if(UI.statMessages) UI.statMessages.textContent = messagesData.length;
  
  // Calculate new leads today
  const today = new Date().toDateString();
  const newActivity = [...bookingsData, ...messagesData].filter(item => {
    return new Date(item.createdAt).toDateString() === today;
  }).length;
  
  if(UI.statNew) UI.statNew.textContent = newActivity;
  
  // Nav badges
  if(UI.badgeBook) UI.badgeBook.textContent = bookingsData.filter(b => b.status === 'new').length;
  if(UI.badgeMsg) UI.badgeMsg.textContent = messagesData.filter(m => m.status === 'new').length;
}

// Global Actions Setup (for inline onclick handlers)
window.viewDetails = function(type, id) {
  let item = null;
  let html = '';
  
  if(type === 'booking') {
    item = bookingsData.find(b => b.id === id);
    if(item) {
      UI.modalTitle.textContent = `Consultation Request - ${item.name}`;
      html = `
        <div style="margin-bottom: var(--sp-4);"><strong>Email:</strong> <a href="mailto:${item.email}" style="color:var(--clr-primary);">${item.email}</a></div>
        <div style="margin-bottom: var(--sp-4);"><strong>Package Interested:</strong> ${item.pkg || 'General Consultation'}</div>
        <div style="margin-bottom: var(--sp-4);"><strong>Platform:</strong> ${item.platform || 'Not specified'}</div>
        <div style="margin-bottom: var(--sp-4);"><strong>Preferred Date/Time:</strong> ${item.date} at ${item.time}</div>
        <div style="margin-bottom: var(--sp-4);"><strong>Project Details:</strong></div>
        <p style="background: rgba(255,255,255,0.05); padding: var(--sp-4); border-radius: var(--radius-md);">${item.message}</p>
        
        <div style="margin-top: var(--sp-6); display: flex; gap: var(--sp-4);">
          <button class="btn btn-primary" onclick="markCompleted('${id}', 'booking')">Mark Contacted</button>
        </div>
      `;
    }
  } else {
    item = messagesData.find(m => m.id === id);
    if(item) {
      UI.modalTitle.textContent = `Message from ${item.name}`;
      html = `
        <div style="margin-bottom: var(--sp-4);"><strong>Email:</strong> <a href="mailto:${item.email}" style="color:var(--clr-primary);">${item.email}</a></div>
        <div style="margin-bottom: var(--sp-4);"><strong>Subject:</strong> ${item.subject}</div>
        <div style="margin-bottom: var(--sp-4);"><strong>Message:</strong></div>
        <p style="background: rgba(255,255,255,0.05); padding: var(--sp-4); border-radius: var(--radius-md);">${item.message}</p>
        
        <div style="margin-top: var(--sp-6); display: flex; gap: var(--sp-4);">
          <button class="btn btn-primary" onclick="markCompleted('${id}', 'message')">Mark Contacted</button>
        </div>
      `;
    }
  }
  
  UI.modalContent.innerHTML = html;
  UI.modal.classList.add('active');
}

window.closeViewModal = function() {
  UI.modal.classList.remove('active');
}

window.clearData = function(collection) {
  if(confirm('Are you sure you want to clear this data?')) {
    localStorage.removeItem(collection);
    initAdmin(); // reload
    showToast('Data cleared successfully');
  }
}

window.markCompleted = function(id, type) {
  let collection = type === 'booking' ? 'portfolio_bookings' : 'portfolio_messages';
  let data = type === 'booking' ? bookingsData : messagesData;
  
  // Find index
  const index = data.findIndex(i => i.id === id);
  if(index !== -1) {
    data[index].status = 'contacted';
    localStorage.setItem(collection, JSON.stringify(data));
    showToast('Status updated');
    closeViewModal();
    initAdmin();
  }
}

// Init when DOM Ready
document.addEventListener('DOMContentLoaded', initAdmin);
