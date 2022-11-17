import birdsData from "./birds.js";

const LEFT_BTN = document.querySelector('#btn_left');
const RIGHT_BTN = document.querySelector('#btn_right');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
const ITEM_ACTIVE = document.querySelector('#item-active');

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

const createCard = (i, j) => {
  const card = document.createElement('div');
  card.classList.add('content__cards');
  card.innerHTML = `<img src="${birdsData[i][j].image}" alt="bird">`
  return card;
}

const stopAnimation = (event) => {
  let changeItem;

  if(event.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    changeItem = ITEM_LEFT;
    ITEM_ACTIVE.innerHTML = changeItem.innerHTML;
  } else {
    CAROUSEL.classList.remove('transition-right');
    changeItem = ITEM_RIGHT;
    ITEM_ACTIVE.innerHTML = changeItem.innerHTML;
  }

  changeItem.innerHTML = "";
  
  let arr = [];

  while(arr.length < 3) {
    let i = randomNumber(0, 5);
    let j = randomNumber(0, 5);
    if (arr.includes(i)) {
      randomNumber(0, 5);
    } else {
      arr.push(i);
      const card = createCard(i, j);
      changeItem.appendChild(card);
    }
  }

  LEFT_BTN.addEventListener('click', moveLeft);
  RIGHT_BTN.addEventListener('click', moveRight);
}

LEFT_BTN.addEventListener('click', moveLeft);
RIGHT_BTN.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', stopAnimation);