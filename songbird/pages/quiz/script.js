import birdsData from "../home/birds.js";

const AUDIO = document.querySelector('#audio');
const WIN_SOUND = document.querySelector('#win-sound');
const ERROR_SOUND = document.querySelector('#error-sound');
const TIME_BAR = document.querySelector('#time_bar-track');
const TIME_UNDERLINE = document.querySelector('#time_bar-track_underline');
const TIME_CIRCLE = document.querySelector('#time_bar-circle');
const PLAY = document.querySelector('#play-button');
const SOUND_TIME = document.querySelector('#time_bar-info');
const QUESTION_CARD = document.querySelector('#answer__colum_question');
const RIGHT_CARD = document.querySelector('#answer__colum_right');
const LEVEL = document.querySelector('#level');
const PAGE = document.querySelectorAll('.page-item');
const BIRD_IMG = document.querySelector('.game__question_img');
const BIRD_NAME = document.querySelector('h3');
const MAIN = document.querySelector('.main')


let num = 0;
let res = 0;
let guess_num;
let count;

function audioPlayer() {
  if(AUDIO.paused) {
    PLAY.classList.add('stop');
    AUDIO.play();
    startInterval();
  } else {
    console.log(AUDIO.ended);
    PLAY.classList.remove('stop');
    AUDIO.pause();
    stopInterval(startInterval());
  }
}

PLAY.addEventListener('click', audioPlayer);

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

function createCardAnswer() {
  const card = document.createElement('div');
  card.classList.add('answer__colum_right');
  card.innerHTML = `<div class="answer__colum_correct">
                      <img class="correct__img" src="${birdsData[num][guess_num].image}">
                      <div class="correct__card">
                        <div class="correct__card_wrapper">
                          <h3>${birdsData[num][guess_num].name}</h3>
                          <div class="correct__species">${birdsData[num][guess_num].species}</div>
                          <audio src="${birdsData[num][guess_num].audio}" hidden></audio>
                          <div class="correct__audio-player_controls">
                            <div class="correct__play-button" id="correct__play-button"></div>
                            <div class="correct__time_bar">
                              <div class="correct__time_bar-track" id="correct__time_bar-track">
                                <div class="correct__time_bar-track_underline" id="correct__time_bar-track_underline"></div>
                                <div class="correct__time_bar-circle" id="correct__time_bar-circle"></div>
                              </div>
                              <span class="correct__time_bar-info" id="correct__time_bar-info">00:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="correct__description">${birdsData[num][guess_num].description}</p>`
  return card;
}

function createCardStart() {
  const card = document.createElement('div');
  card.classList.add('answer__colum_right');
  card.innerHTML = `<div class="answer__colum_correct_prev">Послушайте плеер.
                      <br>Выберите птицу из    списка
                    </div>`
  return card
}

function createCardResult(i) {
  const card = document.createElement('main');
  card.classList.add('main');
  card.innerHTML = `<section class="result">
                      <div class="result__container container">
                        <h1 class="result__congratulations">Поздравляем!</h1>
                        <p class="result__result">Вы прошли викторину и набрали ${i} из 30 возможных баллов</p>
                        <div class="result__line"></div>
                        <button onclick="document.location='../quiz/index.html'" class="result__return">Попробовать еще раз!</button>
                      </div>
                    </section>`
  return card;
}

const nextQuestion = () => {
  
  num++;

  if(num < 6) {
    QUESTION_CARD.innerHTML = '';
    QUESTION_CARD.appendChild(createCard(num));

    RIGHT_CARD.innerHTML = '';
    RIGHT_CARD.appendChild(createCardStart());

    LEVEL.removeEventListener('click', nextQuestion);
    LEVEL.style.backgroundColor = '#3d3d3d';
  
    BIRD_IMG.src = '../../assets/img/bird-non.jpg';
    BIRD_NAME.innerHTML = '******';

    for(let i = 0; i < 5; i++) {
      if(PAGE[i].classList[1] == 'active') {
        PAGE[i].classList.remove('active');
        PAGE[i + 1].classList.add('active');
        i++;
      }
    }
    PLAY.classList.remove('stop');

    right_number();
    audioSrc(num, guess_num);
    console.log(num, guess_num);
    chooseElement();

  } else {
    MAIN.innerHTML = '';
    MAIN.appendChild(createCardResult(res));
  }

}

function chooseElement() {
  const BIRD = document.querySelectorAll('.answer__list');

  count = 5;

  for(let i = 0; i < BIRD.length; i++) {
    BIRD[i].addEventListener('click', function birdItem(e) {
      if(e.target.id == guess_num) {
        WIN_SOUND.play();
        BIRD_IMG.src = `${birdsData[num][guess_num].image}`;
        BIRD_NAME.innerHTML = `${birdsData[num][guess_num].name}`;
        BIRD[i].querySelector('.list-btn').classList.add('success');
        BIRD[i].removeEventListener('click', birdItem);
        RIGHT_CARD.innerHTML = '';
        RIGHT_CARD.appendChild(createCardAnswer());
        showScore(count);
        nextLevel();
      } else {
        count--;
        ERROR_SOUND.play();
        BIRD[i].querySelector('.list-btn').classList.add('error');
        BIRD[i].removeEventListener('click', birdItem);
      }
    })
  }
  
}

function nextLevel() {
  LEVEL.style.backgroundColor = '#00bc8c';
  LEVEL.addEventListener('click', nextQuestion);
}

function showScore(n) {
  const SCORE = document.querySelector('.score');
  res += n;
  SCORE.innerHTML = `${res}`;
  return res;
}

right_number();
console.log(num, guess_num);
chooseElement();
audioSrc(num, guess_num);