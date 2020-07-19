/* Menu Icon Toggling Shape */
const menuIcon = document.querySelector('.menu-container');
const myNav = document.getElementById("myNav");
menuIcon.addEventListener('click',()=>{menuIcon.classList.toggle("change");});
menuIcon.addEventListener('click',()=>{myNav.classList.toggle("open");});

