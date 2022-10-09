import pets from "../main/pets.json" assert { type: "json"};

const BURGER = document.querySelector('#header__burger');
const BURGER_MENU = document.querySelector('#header__burger__menu');
const BODY = document.querySelector('body');

const burger = () => {
  BURGER.classList.toggle('active');
  BURGER_MENU.classList.toggle('active');
  BODY.classList.toggle('lock');
};

BURGER.addEventListener('click', burger);
BURGER_MENU.addEventListener('click', burger);


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
    let num = randomNumber(0, 6);
    if (arr.includes(num)) {
      randomNumber(0, 6);
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