const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const toggleIcon = document.getElementById('toggle-icon');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  toggleBtn.classList.toggle('collapsed');

  // Swap arrow icon
  if (sidebar.classList.contains('collapsed')) {
    toggleIcon.src = 'images/handdrawn/open arrow.png';
    toggleIcon.alt = 'Open Sidebar';
  } else {
    toggleIcon.src = 'images/handdrawn/close arrow.png';
    toggleIcon.alt = 'Close Sidebar';
  }
});