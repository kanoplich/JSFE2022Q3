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


// ------------------------------------------------------------------------------------

const COUNT = document.querySelectorAll('.count');
const NUMBER = document.querySelector('#input_number');

COUNT.forEach( (event) => {
  event.addEventListener('input', () => {
    NUMBER.value = event.value;
  })
});

NUMBER.addEventListener('input', () => {
  if (NUMBER.value > 9999) {
    NUMBER.value = 9999;
  }

  COUNT.forEach( (event) => {
    event.checked = false;
    if (NUMBER.value === event.value) {
      event.checked = true;
    }
  })
});


