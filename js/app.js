// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu icon and navbar
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
  
    // Add an event listener for the click event on the menu icon
    menuIcon.addEventListener('click', function() {
      // Only toggle the navbar visibility if the screen size is small (<= 768px)
      if (window.innerWidth <= 768) {
        navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide navbar
      }
    });
  });
  