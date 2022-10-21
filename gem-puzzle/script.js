const BODY = document.querySelector('body');

BODY.innerHTML = `  <div class="container">
                      <h1>Gem Puzzle</h1>
                        <div class="menu__container">
                          <div class="puzzle__buttons">
                            <button class="start">Shuffle and start</button>
                            <button class="save">Save</button>
                            <button class="result">Result</button>
                          </div>
                          <form class="form">
                            <label for="text">Moves:</label>
                            <input type="text" name="move" id="move" size="1">
                            <label for="time">Time:</label>
                            <input type="time" name="time" id="time">
                            <label for="size">Other size:</label>
                            <select name="size" id="size">
                              <option value="3">3x3</option>
                              <option value="4" selected>4x4</option>
                              <option value="5">5x5</option>
                              <option value="6">6x6</option>
                              <option value="7">7x7</option>
                              <option value="8">8x8</option>
                            </select>
                          </form>
                        </div>
                        <div class="puzzle__wrapper">
                          <div class="puzzle">
                            <div class="puzzle__content" id="puzzle__content">
                            </div>
                          </div>
                        </div>
                    </div>`


const PUZZLE_SIZE = document.querySelector('#size');
const PUZZLE_CONTENT = document.querySelector('#puzzle__content');

const shuffle = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

const createPuzzle = (n) => {
  let arr = [];
  for(let i = 1; i < n; i++) {
    arr.push(i);
  }

  arr = shuffle(arr);
  const puzzle = document.createElement('div');
  puzzle.classList.add('puzzle__item');
  for(let i = 0; i < arr.length; i++) {
    puzzle.innerHTML += `<div class="item">${arr[i]}</div>`
  }
  return puzzle;
}

PUZZLE_CONTENT.appendChild(createPuzzle(16));


const SIZE = document.querySelector('#size');
const ITEM = document.querySelectorAll('.item');


const changePuzzle = () => {
  let num = (+SIZE.value) ** 2;
  PUZZLE_CONTENT.innerHTML = '';
  PUZZLE_CONTENT.appendChild(createPuzzle(num));
  document.querySelector('.puzzle__item').style.gridTemplateColumns = `repeat(${SIZE.value}, 1fr)`;
  document.querySelector('.puzzle__item').style.gridTemplateRows = `repeat(${SIZE.value}, 1fr)`;
}

SIZE.addEventListener('change', changePuzzle);

