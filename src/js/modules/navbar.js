const navbar = () => {
    const menu = document.querySelector('.toggler');
    const navbar = document.querySelector('.navigation');
    const navListItems = document.querySelectorAll('.navigation__item');

    menu.addEventListener('click', () => {
       navbar.classList.toggle('toggle');
       menu.classList.toggle('toggle');
       navListItems.forEach(item => {
           item.classList.toggle('toggle');
       });
    });
};

export default navbar;
