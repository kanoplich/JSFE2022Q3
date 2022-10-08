const BURGER = document.querySelector('#header__burger');
const BURGER_MENU = document.querySelector('#header__burger__menu');
const BODY = document.querySelector('body');

const burger = () => {
  BURGER.classList.toggle('active');
  BURGER_MENU.classList.toggle('active');
  SHADOW.classList.toggle('active');
  BODY.classList.toggle('lock');
};

BURGER.addEventListener('click', burger);
BURGER_MENU.addEventListener('click', burger);
