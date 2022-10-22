const BODY = document.querySelector('body');

BODY.innerHTML = `  <div class="container">
                      <h1>Gem Puzzle</h1>
                        <div class="menu__container">
                          <div class="puzzle__buttons">
                            <button class="start" id="start">Shuffle and start</button>
                            <button class="save">Save</button>
                            <button class="result">Result</button>
                          </div>
                          <form class="form">
                            <span class="moves">Moves: 100</span>
                            <span class="time">Time: 100</span>
                            <label for="size">Size:
                              <select name="size" id="size">
                                <option value="3">3x3</option>
                                <option value="4" selected>4x4</option>
                                <option value="5">5x5</option>
                                <option value="6">6x6</option>
                                <option value="7">7x7</option>
                                <option value="8">8x8</option>
                              </select>
                            </label>
                          </form>
                        </div>
                        <div class="puzzle__wrapper">
                          <div class="puzzle">
                            <div class="puzzle__content" id="puzzle__content">
                            </div>
                          </div>
                        </div>
                    </div>`

// ----------------------------------------------------------------------------------------------------------

const PUZZLE_SIZE = document.querySelector('#size');
const PUZZLE_CONTENT = document.querySelector('#puzzle__content');
const START = document.querySelector('#start');


const shuffle = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

const createPuzzle = (n) => {
  
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(i);
  }

  arr = shuffle(arr);
  const puzzle = document.createElement('div');
  puzzle.classList.add('puzzle__item');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
      puzzle.innerHTML += `<div class="item zero" id="${i}" style="order: ${i};"></div>`;
    } else {
      puzzle.innerHTML += `<div class="item" id="${i}" style="order: ${i};">${arr[i]}</div>`;
    }
  }
  return puzzle;
}

PUZZLE_CONTENT.appendChild(createPuzzle(16));

//-------------------------------------------------------------------------------------------------------------
const getMatrix = (arr) => {
  let matrix = []
  if(arr.length == 9) {
    matrix = [[], [], []];
  } else if (arr.length == 16) {
    matrix = [[], [], [], []];
  } else if (arr.length == 25) {
    matrix = [[], [], [], [], []];
  } else if (arr.length == 36) {
    matrix = [[], [], [], [], [], []];
  } else if (arr.length == 49) {
    matrix = [[], [], [], [], [], [], []];
  } else if (arr.length == 64) {
    matrix = [[], [], [], [], [], [], [], []];
  }

  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if(x >= matrix.length) {
      y++;
      x = 0;
    }
    matrix[y][x] = arr[i];
    x++;
  }
  return matrix;
}

const findCoordinates = (number, matrix) => {
  for(let y = 0; y < matrix.length; y++) {
    for(let x = 0; x < matrix[y].length; x++) {
      if(matrix[y][x] === number) {
        return {x, y};
      }
    }
  }
  return null;
}

const isValidSwap = (coords1, coords2) => {
  const diffX = Math.abs(coords1.x - coords2.x);
  const diffY = Math.abs(coords1.y - coords2.y);

  return (diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y);
}

const swapElement = (elem1, elem2) => {
  const num = elem1.style.order;
  elem1.style.order = elem2.style.order;
  elem2.style.order = num;
}

const swapCoords = (coord1, coord2, matrix) => {
  let num = matrix[coord1.y][coord1.x];
  matrix[coord1.y][coord1.x] = matrix[coord2.y][coord2.x];
  matrix[coord2.y][coord2.x] = num;
}

const moveItem = () => {
  const itemNodes = Array.from(document.querySelector('.puzzle__item').querySelectorAll('.item'));
  let matrix = getMatrix(itemNodes.map((item) => Number(item.id)));
  document.querySelectorAll('.item').forEach(element => {
    element.addEventListener('click', () => {
      const elementNumber = Number(element.id);
      const zeroNumber = Number(document.querySelector('.zero').id);
      const elementCoords = findCoordinates(elementNumber, matrix);
      const zeroCoords = findCoordinates(zeroNumber, matrix);
      const isValid = isValidSwap(elementCoords, zeroCoords);

      const zeroElement = document.querySelector('.zero');
      console.log(element.style.order);
      if(isValid) {
        swapElement(element, zeroElement);
        swapCoords(elementCoords, zeroCoords, matrix);
      }
    })
  });
};

moveItem();

const SIZE = document.querySelector('#size');

const changePuzzle = () => {
  let num = (+SIZE.value) ** 2;
  PUZZLE_CONTENT.innerHTML = '';
  PUZZLE_CONTENT.appendChild(createPuzzle(num));
  document.querySelector('.puzzle__item').style.gridTemplateColumns = `repeat(${SIZE.value}, 1fr)`;
  document.querySelector('.puzzle__item').style.gridTemplateRows = `repeat(${SIZE.value}, 1fr)`;
  moveItem();
}

SIZE.addEventListener('change', changePuzzle);
START.addEventListener('click', changePuzzle);

// ------------------------------------------------------------------------------------------------------------


