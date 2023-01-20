import { createElement, generateCarName, generateCarColor } from '../../components/pageFunctions';
import renderWinners from '../winners/winners';
import {
  getCars, createCar, deleteCar, body, updateCar, startEngine, stopEngine, drive, updateWinner, getWinner, wins, createWinner, getWinnerStatus,
} from '../../components/api';

type idBody = {
  id: number,
};

const newCar: body = {
  name: '',
  color: '#e66465',
};

const updateCarObj: body = {
  name: '',
  color: '#e66465',
};
const generateCar: body = {
  name: '',
  color: '',
};
const idCar: idBody = {
  id: 0,
};

const winnerData: wins = {
  id: 0,
  wins: 0,
  time: 0,
};

const { items: car, count: countCars } = await getCars(1);

const data = {
  car,
  countCars,
  page: 1,
};

export const renderCarImage = (color: string) => `
  <?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
   "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="70.000000pt" height="30.000000pt" viewBox="0 0 1280.000000 640.000000"
   preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.15, written by Peter Selinger 2001-2017
  </metadata>
  <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
  fill="${color}" stroke="none">
  <path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9
  -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421
  -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80
  c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5
  -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58
  13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132
  -143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230
  50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106
  29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45
  461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460
  -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180
  28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2
  190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274
  -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139
  c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30
  c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539
  71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59
  326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194
  -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141
  -88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39
  -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9
  256 -20z"/>
  <path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410
  113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467
  -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209
  -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242
  -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110
  237 178 385 206 84 16 235 11 320 -11z"/>
  <path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48
  31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>
  <path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0
  15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>
  <path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3
  121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>
  <path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9
  181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>
  <path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13
  -45 -6z"/>
  <path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42
  41 100 -1 143 -33 32 -78 38 -120 15z"/>
  <path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
  -54 2z"/>
  <path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49
  -58 29z"/>
  <path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23
  103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>
  <path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0
  86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>
  <path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24
  45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>
  <path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101
  l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>
  <path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262
  68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>
  <path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289
  -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392
  1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67
  -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516
  745 122 40 289 42 419 5z"/>
  <path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23
  18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>
  <path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60
  128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>
  <path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7
  278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>
  <path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5
  172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>
  <path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23
  19 -46 5z"/>
  <path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12
  39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>
  <path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
  -54 2z"/>
  <path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25
  44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>
  <path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61
  210 250 207 258 -4 12 -176 17 -272 7z"/>
  <path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0
  20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>
  <path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68
  26z"/>
  <path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103
  l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>
  <path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0
  130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>
  </g>
  </svg>
`;

const renderCar = (pageContainer: HTMLElement, data: any) => {
  const carWrapper = createElement('', 'div', 'car__wrapper');
  const carWrapperBtn = createElement('', 'div', 'car__wrapper_btn');
  const carSelect = createElement('Select', 'button', 'car__select');
  const carRemove = createElement('Remove', 'button', 'car__remove');
  const carName = createElement(`${data.name}`, 'span', 'car__name');
  const carControlWrapper = createElement('', 'div', 'car__control_wrapper');
  const carStart = createElement('a', 'button', 'car__start');
  const carStop = createElement('b', 'button', 'car__stop');
  const carImg = createElement('', 'div', 'car__img');
  carImg.setAttribute('id', `car__image_${data.id}`);
  carImg.innerHTML = `${renderCarImage(data.color)}`;
  const carFlag = createElement('', 'img', 'car__flag');
  carFlag.setAttribute('src', 'img/flag.svg');
  carFlag.setAttribute('alt', 'flag');
  const carRoad = createElement('', 'div', 'car__road');

  pageContainer.appendChild(carWrapper);
  carWrapper.appendChild(carWrapperBtn);
  carWrapper.appendChild(carControlWrapper);
  carWrapper.append(carRoad);
  carWrapperBtn.append(carSelect, carRemove, carName);
  carControlWrapper.append(carStart, carStop, carImg, carFlag);

  carRemove.addEventListener('click', async () => {
    await deleteCar(data.id);
    await updateData();
    pageContainer.innerHTML = '';
    await renderGarage();
  });
  carSelect.addEventListener('click', async () => {
    idCar.id = data.id;
  });
  carStart.addEventListener('click', async () => {
    const { velocity, distance } = await startEngine(data.id);
    const time = Math.round(distance / velocity);
    await animationStart(carImg, time);
    const res = await drive(data.id);
    if (!res.success) {
      await animationStop(carImg);
    }
  });
  carStop.addEventListener('click', async () => {
    await stopEngine(data.id);
    await resetAnimation(carImg);
  });
};

export const renderGarage = async () => {
  const container = document.body;
  container.innerHTML = '';
  const pageContainer = createElement('', 'div', 'page__container');
  const pageBtnWrapper = createElement('', 'div', 'page__btn_wrapper');
  const garageBtn = createElement('to garage', 'button', 'to_garage_btn');
  const winnersBtn = createElement('to winners', 'button', 'to_winners_btn');
  const garageBtnWrapper = createElement('', 'div', 'garage__btn_wrapper');
  const createCarWrapper = createElement('', 'div', 'create__car_wrapper');
  const createName = createElement('', 'input', 'create__name') as HTMLInputElement;
  createName.setAttribute('type', 'text');
  createName.value = newCar.name;
  const createColor = createElement('', 'input', 'create__color') as HTMLInputElement;
  createColor.setAttribute('type', 'color');
  createColor.setAttribute('value', `${newCar.color}`);
  const createCarBtn = createElement('create', 'button', 'create__car_btn');
  const updateCarWrapper = createElement('', 'div', 'update__car_wrapper');
  const updateName = createElement('', 'input', 'update__name') as HTMLInputElement;
  updateName.setAttribute('type', 'text');
  updateName.value = updateCarObj.name;
  const updateColor = createElement('', 'input', 'update__color') as HTMLInputElement;
  updateColor.setAttribute('type', 'color');
  updateColor.setAttribute('value', `${updateCarObj.color}`);
  const updateCarBtn = createElement('update', 'button', 'update__car_btn');
  const controlBtnWrapper = createElement('', 'div', 'control__btn_wrapper');
  const controlRaceBtn = createElement('race', 'button', 'control__race_btn');
  const controlResetBtn = createElement('reset', 'button', 'control__reset_btn');
  const controlGenerateCarBtn = createElement('generate car', 'button', 'control__generate_cars_btn');
  const garageTitle = createElement(`Garage (${data.countCars})`, 'span', 'garage__title');
  const garagePageNum = createElement(`Page #${data.page}`, 'span', 'garage__page__number');
  const winner = createElement('', 'span', 'winner');

  container.append(winner);
  container.appendChild(pageContainer);
  pageContainer.appendChild(pageBtnWrapper);
  pageContainer.appendChild(garageBtnWrapper);
  pageContainer.appendChild(controlBtnWrapper);
  pageContainer.append(garageTitle, garagePageNum);
  pageBtnWrapper.append(garageBtn, winnersBtn);
  garageBtnWrapper.appendChild(createCarWrapper);
  garageBtnWrapper.appendChild(updateCarWrapper);
  createCarWrapper.append(createName, createColor, createCarBtn);
  updateCarWrapper.append(updateName, updateColor, updateCarBtn);
  controlBtnWrapper.append(controlRaceBtn, controlResetBtn, controlGenerateCarBtn);
  const prevBtn = createElement('prev', 'button', 'prev__btn');
  const nextBtn = createElement('next', 'button', 'next__btn');

  winnersBtn.addEventListener('click', async () => {
    container.innerHTML = '';
    await renderWinners();
  });

  if (data.car.length) {
    for (let i = 0; i < data.car.length; i += 1) {
      renderCar(pageContainer, data.car[i]);
    }
  }

  nextBtn.addEventListener('click', async () => {
    const num = Number((await getCars(1)).count);
    if (num > 7 && Math.ceil(num / 7) > data.page) {
      data.page += 1;
      await getCars(data.page);
      await updateData();
      await renderGarage();
    }
  });
  prevBtn.addEventListener('click', async () => {
    if (data.page !== 1) {
      data.page -= 1;
      await getCars(data.page);
      await updateData();
      await renderGarage();
    }
  });

  pageContainer.append(prevBtn, nextBtn);

  createName.addEventListener('input', () => {
    newCar.name = createName.value;
  });
  createColor.addEventListener('change', () => {
    newCar.color = createColor.value;
  });
  updateName.addEventListener('input', () => {
    updateCarObj.name = updateName.value;
  });
  updateColor.addEventListener('change', () => {
    updateCarObj.color = updateColor.value;
  });
  createCarBtn.addEventListener('click', async () => {
    if (newCar.name && newCar.color) {
      await createCar(newCar);
      await updateData();
      newCar.name = '';
      await renderGarage();
    }
  });
  updateCarBtn.addEventListener('click', async () => {
    if (idCar.id !== 0) {
      await updateCar(idCar.id, updateCarObj);
      await updateData();
      idCar.id = 0;
      updateCarObj.name = '';
      await renderGarage();
    }
  });

  controlGenerateCarBtn.addEventListener('click', async () => {
    let count = 0;
    while (count < 100) {
      count += 1;
      generateCar.name = await generateCarName();
      generateCar.color = await generateCarColor();
      await createCar(generateCar);
    }
    await updateData();
    await renderGarage();
  });

  controlRaceBtn.addEventListener('click', async () => {
    let result = false;
    const { items: cars } = await getCars(data.page);
    const promise = await Promise.all(cars.map(async (car) => (startEngine(car.id))));
    for (let i = 0; i < promise.length; i += 1) {
      const time = Math.round(promise[i].distance / promise[i].velocity);
      const elem = document.querySelector(`#car__image_${cars[i].id}`) as HTMLElement;
      drive(cars[i].id).then(async (res) => {
        if (!res.success) {
          animationStop(elem);
        }
        if (res.success && !result) {
          showWinner(cars[i].name, time);
          result = true;
          const winnerStatus = await getWinnerStatus(cars[i].id);
          if (winnerStatus === 404) {
            winnerData.id = cars[i].id,
            winnerData.wins = 1;
            winnerData.time = Number((time / 1000).toFixed(2));
            await createWinner(winnerData);
          } else {
            const response = await getWinner(cars[i].id);
            winnerData.id = await cars[i].id,
            winnerData.wins = await response.wins + 1;
            winnerData.time = await Number((time / 1000).toFixed(2)) < response.time ? Number((time / 1000).toFixed(2)) : response.time;
            await updateWinner(cars[i].id, winnerData);
          }
        }
      });
      animationStart(elem, time);
    }
  });
  controlResetBtn.addEventListener('click', async () => {
    const { items: cars } = await getCars(data.page);
    cars.forEach(async (car) => {
      await stopEngine(car.id);
      const elem = document.querySelector(`#car__image_${car.id}`) as HTMLElement;
      elem.style.transform = 'translateX(0px)';
      elem.style.transition = 'transform 0ms linear';
    });
  });
};

const updateData = async () => {
  const { items, count } = await getCars(data.page);
  data.car = items;
  data.countCars = count;
};

const animationStart = (elem: HTMLElement, time: number) => {
  const carFlag = document.querySelector('.car__flag') as HTMLElement;
  const distance = carFlag.offsetLeft - 30;
  elem.style.transition = `transform ${time}ms linear`;
  elem.style.transform = `translateX(${distance}px)`;
};

const animationStop = (elem: HTMLElement) => {
  const num = window.getComputedStyle(elem);
  elem.style.transition = 'transform 0ms linear';
  elem.style.transform = `${num.transform}`;
};

const resetAnimation = (elem: HTMLElement) => {
  elem.style.transform = 'translateX(0px)';
  elem.style.transition = 'transform 0ms linear';
};

const showWinner = (name: string, time: number) => {
  const winner = document.querySelector('.winner') as HTMLElement;
  winner.innerText = `${name} first ${(time / 1000).toFixed(2)}s!`;
  winner.style.display = 'block';
  window.addEventListener('click', () => {
    winner.style.display = 'none';
  });
};
