import pets from "./pets.json" assert { type: "json"};


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


// ---------------------------------------------------------------


const LEFT_BTN = document.querySelector('#btn_left');
const RIGHT_BTN = document.querySelector('#btn_right');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  LEFT_BTN.removeEventListener('click', moveLeft);
  RIGHT_BTN.removeEventListener('click', moveRight);
}

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  RIGHT_BTN.removeEventListener('click', moveRight);
  LEFT_BTN.removeEventListener('click', moveLeft);
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



const createCard = (i) => {

  const card = document.createElement('div');
  card.classList.add('pets__cards');
  card.innerHTML = `<img src="${pets[i].img}" alt="${pets[i].name}" class="picture">
                    <div class="cards__title">
                      <div class="cards__name">
                        <h3 class="name">${pets[i].name}</h3>
                        <h4 class="country">${pets[i].country}</h4>
                      </div>
                      <div class="${pets[i].food}"></div>
                     </div>
  </div>`
  return card;
}

const stopAnimation = (event) => {
  let changeItem;
  if(event.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    changeItem = ITEM_LEFT;
    document.querySelector('#item-active').innerHTML = changeItem.innerHTML;
  } else {
    CAROUSEL.classList.remove('transition-right');
    changeItem = ITEM_RIGHT;
    document.querySelector('#item-active').innerHTML = changeItem.innerHTML;
  }

  changeItem.innerHTML = "";
  
  let arr = [];

  while(arr.length < 6) {
    let num = randomNumber(0, 9);
    if (arr.includes(num)) {
      randomNumber(0, 9);
    } else {
      arr.push(num);
      const card = createCard(num);
      changeItem.appendChild(card);
    }
  }

  LEFT_BTN.addEventListener('click', moveLeft);
  RIGHT_BTN.addEventListener('click', moveRight);
}

LEFT_BTN.addEventListener('click', moveLeft);
RIGHT_BTN.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', stopAnimation);



// -----------------------------------------------------------------------------------------------------------


const CLOSE_VIEW1 = document.querySelector('#closeView1');
const CLOSE_VIEW2 = document.querySelector('#closeView2');
const CLOSE_VIEW3 = document.querySelector('#closeView3');

const POPUP1 = document.querySelector('#popup1');
const POPUP2 = document.querySelector('#popup2');
const POPUP3 = document.querySelector('#popup3');

const CARDS1 = document.querySelector('#cards1');
const CARDS2 = document.querySelector('#cards2');
const CARDS3 = document.querySelector('#cards3');

const CLOSE1 = document.querySelector('#close1');
const CLOSE2 = document.querySelector('#close2');
const CLOSE3 = document.querySelector('#close3');

const mediaQuery = window.matchMedia('(max-width: 999px)');

const popupView1 = () => {
  if (mediaQuery.matches) {
    CLOSE_VIEW1.style.display = 'block';
    POPUP1.style.display = 'flex';
    BODY.classList.toggle('lock');
  }
};

const popupClose1 = () => {
  if (mediaQuery.matches) {
    CLOSE_VIEW1.style.display = 'none';
    POPUP1.style.display = 'none';
    BODY.classList.toggle('lock');
  }
};

const popupView2 = () => {
  if (mediaQuery.matches) {
    CLOSE_VIEW2.style.display = 'block';
    POPUP2.style.display = 'flex';
    BODY.classList.toggle('lock');
  }
};

const popupClose2 = () => {
  if (mediaQuery.matches) {
    CLOSE_VIEW2.style.display = 'none';
    POPUP2.style.display = 'none';
    BODY.classList.toggle('lock');
  }
};

const popupView3 = () => {
  if (mediaQuery.matches) {
    CLOSE_VIEW3.style.display = 'block';
    POPUP3.style.display = 'flex';
    BODY.classList.toggle('lock');
  }
};

const popupClose3 = () => {
  if (mediaQuery.matches) {
    CLOSE_VIEW3.style.display = 'none';
    POPUP3.style.display = 'none';
    BODY.classList.toggle('lock');
  }
};

CARDS1.addEventListener('click', popupView1);
CLOSE1.addEventListener('click', popupClose1);
CARDS2.addEventListener('click', popupView2);
CLOSE2.addEventListener('click', popupClose2);
CARDS3.addEventListener('click', popupView3);
CLOSE3.addEventListener('click', popupClose3);
CLOSE_VIEW1.addEventListener('click', popupClose1);
CLOSE_VIEW2.addEventListener('click', popupClose2);
CLOSE_VIEW3.addEventListener('click', popupClose3);


// -------------------------------------------------------------------------------------------------------

