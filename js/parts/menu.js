function menu() {
    let menuBlock = document.querySelector('.nav__menu'),
        menuBtns = document.querySelectorAll('.header__burger, .nav__menu__link');


    menuBtns.forEach(function(item) {
        item.addEventListener('click', function() {
        setTimeout(toggleMenu,100);
        menuBlock.classList.toggle('fadeIn');
        menuBlock.classList.toggle('fadeOut');
        
        function toggleMenu() {
            menuBlock.classList.toggle('open');
            menuBlock.classList.toggle('close');
        }
        });
    });
}
module.exports = menu;