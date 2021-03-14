// Mobile-menu scripts

function openNav() {
    var openMenu = document.getElementById('open-menu');
    var links = document.getElementById('nav-links');
    var closeMenu = document.getElementById('close-menu');
    var body = document.getElementById('body');
    openMenu.style.padding = '1rem 1rem 200vw 200vw';
    links.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'inline';
}

function closeNav() {
    var openMenu = document.getElementById('open-menu');
    var links = document.getElementById('nav-links');
    var closeMenu = document.getElementById('close-menu');
    var body = document.getElementById('body');
    openMenu.style.padding = '1rem 1rem 2rem 2rem';
    openMenu.style.display = 'inline';
    links.style.display = 'none';
    closeMenu.style.display = 'none';
}
