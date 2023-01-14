import { createElement } from '../../components/pageFunctions';

export const renderGarage = async () => {
  const container = document.body;
  const pageContainer = createElement('', 'div', 'page__container');
  const pageBtnWrapper = createElement('', 'div', 'page__btn_wrapper');
  const garageBtn = createElement('to garage', 'button', 'to_garage_btn');
  const winnersBtn = createElement('to winners', 'button', 'to_winners_btn');
  const garageBtnWrapper = createElement('', 'div', 'garage__btn_wrapper');
  const createCarWrapper = createElement('', 'div', 'create__car_wrapper');
  const createName = createElement('', 'input', 'create__name');
  createName.setAttribute('type', 'text');
  const createColor = createElement('', 'input', 'create__color');
  createColor.setAttribute('type', 'color');
  const createCarBtn = createElement('create', 'button', 'create__car_btn');
  const updateCarWrapper = createElement('', 'div', 'update__car_wrapper');
  const updateName = createElement('', 'input', 'update__name');
  updateName.setAttribute('type', 'text');
  const updateColor = createElement('', 'input', 'update__color');
  updateColor.setAttribute('type', 'color');
  const updateCarBtn = createElement('update', 'button', 'update__car_btn');
  const controlBtnWrapper = createElement('', 'div', 'control__btn_wrapper');
  const controlRaceBtn = createElement('race', 'button', 'control__race_btn');
  const controlResetBtn = createElement('reset', 'button', 'control__reset_btn');
  const controlGenerateCarBtn = createElement('generate car', 'button', 'control__generate_cars_btn');

  container.appendChild(pageContainer);
  pageContainer.appendChild(pageBtnWrapper);
  pageContainer.appendChild(garageBtnWrapper);
  pageContainer.appendChild(controlBtnWrapper);
  pageBtnWrapper.append(garageBtn, winnersBtn);
  garageBtnWrapper.appendChild(createCarWrapper);
  garageBtnWrapper.appendChild(updateCarWrapper);
  createCarWrapper.append(createName, createColor, createCarBtn);
  updateCarWrapper.append(updateName, updateColor, updateCarBtn);
  controlBtnWrapper.append(controlRaceBtn, controlResetBtn, controlGenerateCarBtn);
};
