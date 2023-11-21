// Sidebar Javascript
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');
const burger = document.querySelectorAll('.hamburger')
console.log(burger)

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  sideMenu.classList.toggle('active');
  // hamburgerMenu.style.display = 'none'
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('.side-menu-container')) {
    hamburgerMenu.classList.remove('active');
    sideMenu.classList.remove('active');
    // hamburgerMenu.style.display = 'block'
  }
});