import birdsData from "./birds.js";

const AUDIO = document.querySelector('#audio');
const TIME = document.querySelector('#time_bar-track');
const TIME_UNDERLINE = document.querySelector('#time_bar-track_underline');
const TIME_CIRCLE = document.querySelector('#time_bar-circle');
const PLAY = document.querySelector('#play-button');
const SOUND_TIME = document.querySelector('#time_bar-info');
const LEVEL = document.querySelector('#level');
const QUESTION = document.querySelector('#answer__colum_question');
const ANSWER = document.querySelectorAll('.answer__list');

let num = 0;
let guess_num;

const right_number = () => {
  guess_num = randomNumber(0, 5);
  return guess_num;
}
right_number();
console.log(num, guess_num);

const audioSrc = (i, j) => {
  return AUDIO.src = birdsData[i][j].audio;
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const player = () => {
  
  let audioPlay;

  if(AUDIO.paused) {
    PLAY.classList.add('stop');
    AUDIO.play();
    audioPlay = setInterval(function() {
      let audioTime = Math.round(AUDIO.currentTime);
      let audioLength = Math.round(AUDIO.duration);
      TIME_UNDERLINE.style.width = (audioTime * 100) / audioLength + '%';
      TIME_CIRCLE.style.left = (audioTime * 100) / audioLength + '%';
    }, 10)
  } else {
    PLAY.classList.remove('stop');
    AUDIO.pause();
    clearInterval(audioPlay);
  }

}

const createCard = (i) => {
  
  const card = document.createElement('div');
  card.classList.add('answer__colum_question');
  card.innerHTML = `<ul class="answer__item">
                      <li class="answer__list">
                        <span class="list-btn"></span>${birdsData[i][0].name}
                      </li>
                      <li class="answer__list">
                        <span class="list-btn"></span>${birdsData[i][1].name}
                      </li>
                      <li class="answer__list">
                        <span class="list-btn"></span>${birdsData[i][2].name}
                      </li>
                      <li class="answer__list">
                        <span class="list-btn"></span>${birdsData[i][3].name}
                      </li>
                      <li class="answer__list">
                        <span class="list-btn"></span>${birdsData[i][4].name}
                      </li>
                      <li class="answer__list">
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
}

ANSWER.forEach( el => {
  el.addEventListener('click', (e) => {
    console.log(e);
  })
})


audioSrc(num, guess_num);

LEVEL.addEventListener('click', nextQuestion);
PLAY.addEventListener('click', player);


