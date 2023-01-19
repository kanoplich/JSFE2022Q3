import { createElement } from '../../components/pageFunctions';
import { renderCarImage, renderGarage } from '../garage/garage';
import { getWinners } from '../../components/api';

export type WinnersAPI = {
  winnerCar: Array<{
    car: {
      name: string,
      color: string,
      idCar: number
    },
    id: number,
    time: number,
    wins: number
  }>,
  countWinners: string | null,
};

const {
  items: [{
    car: { name, color, idCar }, id, time, wins,
  }], count: countWinners,
} = await getWinners(1);

const data: WinnersAPI = {
  winnerCar: [{
    car: {
      name,
      color,
      idCar,
    },
    id,
    time,
    wins,
  }],
  countWinners,
};

const renderTableWinners = () => `
<thead>
<tr>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>${renderCarImage(data.winnerCar[0].car.color)}</td>
    <td>${data.winnerCar[0].car.name}</td>
    <td>${data.winnerCar[0].wins}</td>
    <td>${data.winnerCar[0].time}</td>
  </tr>
</tbody>
`;

const renderWinners = async () => {
  const container = document.body;
  const pageContainer = createElement('', 'div', 'page__container');
  const pageBtnWrapper = createElement('', 'div', 'page__btn_wrapper');
  const garageBtn = createElement('to garage', 'button', 'to_garage_btn');
  const winnersBtn = createElement('to winners', 'button', 'to_winners_btn');
  const winnerTitle = createElement(`Winners (${data.countWinners})`, 'span', 'garage__title');
  const winnerPageNum = createElement('Page #1', 'span', 'garage__page__number');
  const tableWinners = createElement('', 'table', 'table__sort');
  const prevBtn = createElement('prev', 'button', 'prev__btn');
  const nextBtn = createElement('next', 'button', 'next__btn');

  container.appendChild(pageContainer);
  pageContainer.appendChild(pageBtnWrapper);
  pageBtnWrapper.append(garageBtn, winnersBtn);
  pageContainer.append(winnerTitle, winnerPageNum);
  pageContainer.appendChild(tableWinners);
  tableWinners.innerHTML = renderTableWinners();
  pageContainer.append(prevBtn, nextBtn);

  garageBtn.addEventListener('click', async () => {
    container.innerHTML = '';
    await renderGarage();
  });
};

export default renderWinners;
