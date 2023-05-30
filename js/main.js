const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item');
const yearSpan  = document.getElementById('year');

let currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
menuBtn.addEventListener('click', toggleMenu);

let showMenu = false;

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open')
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'))

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'))


        showMenu = false;
    }
}
