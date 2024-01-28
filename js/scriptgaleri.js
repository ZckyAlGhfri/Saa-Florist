// Toggle Class Hamburger
const navbarNav = document.querySelector('.navbar-nav');
// Toggle Search Box
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// Remove const
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

// Execute
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
document.querySelector('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  searchBox.focus();

};
// Remove
document.addEventListener('click', function(e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});