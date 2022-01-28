const navbar = () => {
    const menu = document.querySelector('.menu-toggler');
    const navbar = document.querySelector('.navigation');

    menu.addEventListener('click', () => {
       navbar.classList.toggle('toggle');
       menu.classList.toggle('toggle');
    });
};

export default navbar;
