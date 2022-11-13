const LEFT_BTN = document.querySelector('#btn_left');
const RIGHT_BTN = document.querySelector('#btn_right');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
const ITEM_ACTIVE = document.querySelector('#item-active');


const art1 = '../../img/1.jpg';
const art2 = '../../img/2.jpg';
const art3 = '../../img/3.jpg';
const art4 = '../../img/4.jpg';
const art5 = '../../img/5.jpg';
const art6 = '../../img/6.jpg';
const art7 = '../../img/7.jpg';
const art8 = '../../img/8.jpg';
const art9 = '../../img/9.jpg';
const art10 = '../../img/10.jpg';
const art11 = '../../img/11.jpg';
const art12 = '../../img/12.jpg';
const art13 = '../../img/13.jpg';
const art14 = '../../img/14.jpg';
const art15 = '../../img/15.jpg';
const art16 = '../../img/16.jpg';
const art17 = '../../img/17.jpg';
const art18 = '../../img/18.jpg';

const images = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12, art13, art14, art15, art16, art17, art18];

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
  card.classList.add('content__cards');
  card.innerHTML = `<img src="${images[i]}" alt="bird">`
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
    let num = randomNumber(0, 17);
    if (arr.includes(num)) {
      randomNumber(0, 17);
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