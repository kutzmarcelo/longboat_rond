document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const menu = document.querySelector('.header__menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('header__menu--open');
            menuToggle.classList.toggle('header__menu-toggle--active');
        });
    }
});