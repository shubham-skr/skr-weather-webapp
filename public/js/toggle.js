// Active toggle and header menu 
const headerToggle = document.querySelector('.header-toggle');
const headerMenu = document.querySelector('.header-menu');

// On clicking the toggle button
headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('active-toggle');
    headerMenu.classList.toggle('active-header-menu');
});