import birdsData from "../home/birds.js";

const AUDIO = document.querySelector('#audio');
const TIME__BAR = document.querySelector('#time_bar-track');
const TIME_UNDERLINE = document.querySelector('#time_bar-track_underline');
const TIME_CIRCLE = document.querySelector('#time_bar-circle');
const PLAY = document.querySelector('#play-button');
const SOUND_TIME = document.querySelector('#time_bar-info');
const LEVEL = document.querySelector('#level');
const QUESTION = document.querySelector('#answer__colum_question');

let num = 0;
let guess_num;

function audioPlayer() {
  if(AUDIO.paused) {
    PLAY.classList.add('stop');
    AUDIO.play();
    startInterval();
  } else {
    PLAY.classList.remove('stop');
    AUDIO.pause();
    stopInterval(startInterval());
  }
}

function startInterval() {
  setInterval(function() {
    let audioTime = Math.round(AUDIO.currentTime);
    let audioLength = Math.round(AUDIO.duration);
    TIME_UNDERLINE.style.width = (audioTime * 100) / audioLength + '%';
    TIME_CIRCLE.style.left = (audioTime * 100) / audioLength + '%';
  }, 10);
}

function stopInterval(fn) {
  clearInterval(fn);
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const right_number = () => {
  guess_num = randomNumber(0, 5);
  return guess_num;
}
right_number();
console.log(num, guess_num);

const audioSrc = (i, j) => {
  return AUDIO.src = birdsData[i][j].audio;
}

function createCard(i) {
  const card = document.createElement('div');
  card.classList.add('answer__colum_question');
  card.innerHTML = `<ul class="answer__item">
                      <li class="answer__list" id="0">
                        <span class="list-btn"></span>${birdsData[i][0].name}
                      </li>
                      <li class="answer__list" id="1">
                        <span class="list-btn"></span>${birdsData[i][1].name}
                      </li>
                      <li class="answer__list" id="2">
                        <span class="list-btn"></span>${birdsData[i][2].name}
                      </li>
                      <li class="answer__list" id="3">
                        <span class="list-btn"></span>${birdsData[i][3].name}
                      </li>
                      <li class="answer__list" id="4">
                        <span class="list-btn"></span>${birdsData[i][4].name}
                      </li>
                      <li class="answer__list" id="5">
                        <span class="list-btn"></span>${birdsData[i][5].name}
                      </li>
                    </ul>`
  return card;
}

const nextQuestion = () => {
  num++;
  if(num > 5) {
    num = 0;
  }
  QUESTION.innerHTML = '';
  QUESTION.appendChild(createCard(num));

  right_number();
  audioSrc(num, guess_num);
  console.log(num, guess_num);
  chooseElement();
}

function chooseElement() {
  const ANSWER = document.querySelectorAll('.answer__list');
  const LIST = document.querySelectorAll('.list-btn');
  const IMG_RIGHT = document.querySelector('.game__question_img');
  const NAME = document.querySelector('h3');
  const SCORE = document.querySelector('.score');

  let count = 6;

  ANSWER.forEach( el => {
    el.addEventListener('click', (e) => {
      count--;
      if(e.target.id == guess_num) {
        IMG_RIGHT.src = `${birdsData[num][guess_num].image}`;
        NAME.innerHTML = `${birdsData[num][guess_num].name}`;
        SCORE.innerHTML = `${count}`;
        el.querySelector('.list-btn').classList.add('success');
      } else {
        el.querySelector('.list-btn').classList.add('error');
      }
    })
  })
}

chooseElement();

audioSrc(num, guess_num);

LEVEL.addEventListener('click', nextQuestion);
PLAY.addEventListener('click', audioPlayer);


