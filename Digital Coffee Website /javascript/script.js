document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('show');

    const heroSection = document.querySelector('.hero');

    function toggleMenu() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.toggle('open');

        setTimeout(function () {
            navLinks.classList.toggle('show');
        }, 300);
    }

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
    }
});
