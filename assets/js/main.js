const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu__hamburger')

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('active')
})