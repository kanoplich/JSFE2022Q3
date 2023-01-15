import { createElement } from '../../components/pageFunctions';
import { renderGarage } from '../garage/garage';

export const renderWinners = async () => {
  const container = document.body;
  const pageContainer = createElement('', 'div', 'page__container');
  const pageBtnWrapper = createElement('', 'div', 'page__btn_wrapper');
  const garageBtn = createElement('to garage', 'button', 'to_garage_btn');
  const winnersBtn = createElement('to winners', 'button', 'to_winners_btn');
  const winnerTitle = createElement('Winners (4)', 'span', 'garage__title');
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

  garageBtn.addEventListener('click', () => {
    container.innerHTML = '';
    renderGarage();
  });
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
    <td>Car image</td>
    <td>BMW E60</td>
    <td>1</td>
    <td>8</td>
  </tr>
</tbody>
`;
