const open_menu = document.getElementById('open-menu');
const close_menu = document.getElementById('close-menu');
const nav = document.getElementById('nav');

open_menu.addEventListener('click', () => {
    nav.classList.toggle('active-menu');
    document.documentElement.style.overflow = "hidden";
})

close_menu.addEventListener('click', () => {
    nav.classList.toggle('active-menu');
    document.documentElement.style.overflow = "initial";
})