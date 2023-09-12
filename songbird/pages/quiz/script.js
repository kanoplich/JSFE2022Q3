import birdsData from "../home/birds.js";

const AUDIO = document.querySelector('#audio');
const VOLUME = document.querySelector('#range');
const VOLUME_ICON = document.querySelector('#volume_control');
const WIN_SOUND = document.querySelector('#win-sound');
const ERROR_SOUND = document.querySelector('#error-sound');
const TIME_UNDERLINE = document.querySelector('#time_bar-track_underline');
const TIME_CIRCLE = document.querySelector('#time_bar-circle');
const PLAY = document.querySelector('#play-button');
const SOUND_TIME = document.querySelector('#time_bar-info');
const DURATION_TIME = document.querySelector('#time_bar-duration');
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
let arr = [];
let seconds = 0;
let timer;

function audioPlayer() {
  if(AUDIO.paused) {
    PLAY.classList.add('stop');
    AUDIO.play();
    startInterval();
  } else {
    PLAY.classList.remove('stop');
    AUDIO.pause();
    stopInterval();
  }
}

function audioStop() {
  AUDIO.currentTime = 0;
  AUDIO.pause();
  PLAY.classList.remove('stop');
  resetTime();
}

VOLUME.onchange = function() {
  AUDIO.volume = parseFloat(this.value / 10);
  if(AUDIO.volume == 0) {
    VOLUME_ICON.classList.add('off');
  } else {
    VOLUME_ICON.classList.remove('off');
  }
}

function volumeChange() {
  arr.push(VOLUME.value);
  arr.push(AUDIO.volume);
  if(!VOLUME_ICON.classList.contains('off')) {
    VOLUME_ICON.classList.add('off');
    VOLUME.value = 0;
    AUDIO.volume = 0;
  } else {
    VOLUME_ICON.classList.remove('off');
    VOLUME.value = arr[0];
    AUDIO.volume = arr[1];
    arr = [];
  }
}

function resetTime() {
  clearInterval(timer);
  seconds = 0;
  SOUND_TIME.innerText = '00:00';
  TIME_UNDERLINE.style.width = 0;
  TIME_CIRCLE.style.left = 0;
}


VOLUME_ICON.addEventListener('click', volumeChange);
PLAY.addEventListener('click', audioPlayer);

function startInterval() {
  setDurationAudio();
  timer = setInterval(function() {
    let audioTime = Math.round(AUDIO.currentTime);
    let audioLength = Math.round(AUDIO.duration);
    TIME_UNDERLINE.style.width = (audioTime * 100) / audioLength + '%';
    TIME_CIRCLE.style.left = (audioTime * 100) / audioLength + '%';
    seconds += 1;
    let dateTimer = new Date(0);
    dateTimer.setSeconds(seconds);
    SOUND_TIME.innerText = ('0' + dateTimer.getMinutes()).slice(-2) + ':' + ('0' + dateTimer.getSeconds()).slice(-2);
    if(audioTime == audioLength) {
      PLAY.classList.remove('stop');
      resetTime();
    }
  }, 1000);
}

function stopInterval() {
  clearInterval(timer);
}

function setDurationAudio() {
  let audioLength = Math.round(AUDIO.duration);
  let date = new Date(0);
  date.setSeconds(audioLength)
  DURATION_TIME.innerText = ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
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

function createCardAnswer(i) {
  const card = document.createElement('div');
  card.classList.add('answer__colum_right');
  card.innerHTML = `<div class="answer__colum_correct">
                      <img class="correct__img" src="${birdsData[num][i].image}">
                      <div class="correct__card">
                        <div class="correct__card_wrapper">
                          <h3>${birdsData[num][i].name}</h3>
                          <div class="correct__species">${birdsData[num][i].species}</div>
                          <audio id="audio_card" src="${birdsData[num][i].audio}" preload="metadata" hidden></audio>
                          <div class="correct__audio-player_controls">
                            <div class="correct__play-button" id="correct__play-button"></div>
                            <div class="correct__time_bar">
                              <div class="correct__time_bar-track" id="correct__time_bar-track">
                                <div class="correct__time_bar-track_underline" id="correct__time_bar-track_underline"></div>
                                <div class="correct__time_bar-circle" id="correct__time_bar-circle"></div>
                              </div>
                              <span class="correct__time_bar-info" id="correct__time_bar-info">00:00</span>
                              <span class="time_bar-duration" id="correct__time_bar-duration">00:00</span>
                            </div>
                          </div>
                        </div>
                        <div class="control__wrapper">
                        <div class="volume_control" id="volume_card"></div>
                        <input class="range_control" id="range_card" min="0" max="10" value="10" step="0.1" type="range">
                      </div>
                      </div>
                    </div>
                    <p class="correct__description">${birdsData[num][i].description}</p>`
  return card;
}

function createCardStart() {
  const card = document.createElement('div');
  card.classList.add('answer__colum_right');
  card.innerHTML = `<div class="answer__colum_correct_prev">Послушайте плеер.
                      <br>Выберите птицу из списка
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

    DURATION_TIME.innerText = '00:00';

    for(let i = 0; i < 5; i++) {
      if(PAGE[i].classList[1] == 'active') {
        PAGE[i].classList.remove('active');
        PAGE[i + 1].classList.add('active');
        i++;
      }
    }
    resetTime();
    PLAY.classList.remove('stop');

    right_number();
    audioSrc(num, guess_num);
    chooseElement();
    resetTime();

  } else {
    MAIN.innerHTML = '';
    MAIN.appendChild(createCardResult(res));
  }

}

function chooseElement() {
  const BIRD = document.querySelectorAll('.answer__list');

  let number = 0;
  count = 5;

  for(let i = 0; i < BIRD.length; i++) {
    BIRD[i].addEventListener('click', function birdItem(e) {
      if(e.target.id == guess_num) {
        number++;
        WIN_SOUND.currentTime = 0;
        WIN_SOUND.play();
        BIRD_IMG.src = `${birdsData[num][guess_num].image}`;
        BIRD_NAME.innerHTML = `${birdsData[num][guess_num].name}`;
        BIRD[i].querySelector('.list-btn').classList.add('success');
        BIRD[i].removeEventListener('click', birdItem);
        RIGHT_CARD.innerHTML = '';
        RIGHT_CARD.appendChild(createCardAnswer(guess_num));
        audioStop();
        showScore(count);
        playCard();
        showCard();
        nextLevel();
      } else if(number == 0) {
        count--;
        ERROR_SOUND.currentTime = 0;
        ERROR_SOUND.play();
        BIRD[i].querySelector('.list-btn').classList.add('error');
        RIGHT_CARD.innerHTML = '';
        RIGHT_CARD.appendChild(createCardAnswer(e.target.id));
        playCard();
        BIRD[i].removeEventListener('click', birdItem);
      }
    })
  }
  
}

function playCard() {

  const AUDIO_CARD = document.querySelector('#audio_card');
  const PLAY_CARD = document.querySelector('#correct__play-button');
  const VOLUME_CARD = document.querySelector('#range_card');
  const VOLUME_ICON_CARD = document.querySelector('#volume_card');
  const TIME_UNDERLINE_CARD = document.querySelector('#correct__time_bar-track_underline');
  const TIME_CIRCLE_CARD = document.querySelector('#correct__time_bar-circle');
  const SOUND_TIME_CARD = document.querySelector('#correct__time_bar-info');
  const DURATION_TIME_CARD = document.querySelector('#correct__time_bar-duration');


  let timerCard;
  let seconds = 0;

  PLAY_CARD.addEventListener('click', () => {
    if(AUDIO_CARD.paused) {
      PLAY_CARD.classList.add('stop');
      AUDIO_CARD.play();
      startIntervalCard();
    } else {
      PLAY_CARD.classList.remove('stop');
      AUDIO_CARD.pause();
      stopIntervalCard();
    }
  })

  function startIntervalCard() {
    setDurationAudioCard();
    timerCard = setInterval(function() {
      let audioTime = Math.round(AUDIO_CARD.currentTime);
      let audioLength = Math.round(AUDIO_CARD.duration);
      TIME_UNDERLINE_CARD.style.width = (audioTime * 100) / audioLength + '%';
      TIME_CIRCLE_CARD.style.left = (audioTime * 100) / audioLength + '%';
      seconds += 1;
      let dateTimer = new Date(0);
      dateTimer.setSeconds(seconds);
      SOUND_TIME_CARD.innerText = ('0' + dateTimer.getMinutes()).slice(-2) + ':' + ('0' + dateTimer.getSeconds()).slice(-2);
      if(audioTime == audioLength) {
        PLAY_CARD.classList.remove('stop');
        resetTimeCard();
      }
    }, 1000);
  }
      
  function stopIntervalCard() {
    clearInterval(timerCard);
  }
  
  function setDurationAudioCard() {
    let audioLength = Math.round(AUDIO_CARD.duration);
    let date = new Date(0);
    date.setSeconds(audioLength)
    DURATION_TIME_CARD.innerText = ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
  }
  
  function resetTimeCard() {
    clearInterval(timerCard);
    seconds = 0;
    SOUND_TIME_CARD.innerText = '00:00';
    TIME_UNDERLINE_CARD.style.width = 0;
    TIME_CIRCLE_CARD.style.left = 0;
  }

  VOLUME_CARD.onchange = function() {
    AUDIO_CARD.volume = parseFloat(this.value / 10);
    if(AUDIO_CARD.volume == 0) {
      VOLUME_ICON_CARD.classList.add('off');
    } else {
      VOLUME_ICON_CARD.classList.remove('off');
    }
  }
      
  function volumeChangeCard() {
    arr.push(VOLUME_CARD.value);
    arr.push(AUDIO_CARD.volume);
    if(!VOLUME_ICON_CARD.classList.contains('off')) {
      VOLUME_ICON_CARD.classList.add('off');
      VOLUME_CARD.value = 0;
      AUDIO_CARD.volume = 0;
    } else {
      VOLUME_ICON_CARD.classList.remove('off');
      VOLUME_CARD.value = arr[0];
      AUDIO_CARD.volume = arr[1];
      arr = [];
    }
  }

  VOLUME_ICON_CARD.addEventListener('click', volumeChangeCard);

}

function showCard() {
  const BIRD = document.querySelectorAll('.answer__list');

  BIRD.forEach(element => {
    element.addEventListener('click', (e) => {
      RIGHT_CARD.innerHTML = '';
      RIGHT_CARD.appendChild(createCardAnswer(e.target.id));

      playCard();

    })
  })
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
chooseElement();
audioSrc(num, guess_num);