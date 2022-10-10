const BURGER = document.querySelector('#header__burger');
const BURGER_MENU = document.querySelector('#header__burger__menu');
const BODY = document.querySelector('body');
const SHADOW = document.querySelector('#shadow');

const burger = () => {
  BURGER.classList.toggle('active');
  BURGER_MENU.classList.toggle('active');
  BODY.classList.toggle('lock');
  if (BURGER.classList.contains('active')) {
    SHADOW.style.display = 'block';
  } else {
    SHADOW.style.display = 'none';
  }
};

BURGER.addEventListener('click', burger);
SHADOW.addEventListener('click', burger);
