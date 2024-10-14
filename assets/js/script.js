const hamburguerButton = document.getElementById('hamburguer-button');
const navList = document.getElementById('nav-list');

hamburguerButton.addEventListener('click', () => {
  navList.classList.toggle('active');
});