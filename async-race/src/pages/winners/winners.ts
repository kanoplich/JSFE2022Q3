import { createElement } from '../../components/pageFunctions';
import { renderCarImage, renderGarage } from '../garage/garage';
import { getWinners } from '../../components/api';

let page = 1;

const renderHeadWinners = () => `
<thead>
<tr>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
</tr>
</thead>
`;

const renderWinners = async () => {
  const response = await getWinners(page);
  const container = document.body;
  container.innerHTML = '';
  const pageContainer = createElement('', 'div', 'page__container');
  const pageBtnWrapper = createElement('', 'div', 'page__btn_wrapper');
  const garageBtn = createElement('to garage', 'button', 'to_garage_btn');
  const winnersBtn = createElement('to winners', 'button', 'to_winners_btn');
  const winnerTitle = createElement(`Winners (${response.count})`, 'span', 'garage__title');
  const winnerPageNum = createElement(`Page #${page}`, 'span', 'garage__page__number');
  const tableWinners = createElement('', 'table', 'table__sort');
  const tbody = document.createElement('tbody');
  const prevBtn = createElement('prev', 'button', 'prev__btn');
  const nextBtn = createElement('next', 'button', 'next__btn');

  container.appendChild(pageContainer);
  pageContainer.appendChild(pageBtnWrapper);
  pageBtnWrapper.append(garageBtn, winnersBtn);
  pageContainer.append(winnerTitle, winnerPageNum);
  pageContainer.appendChild(tableWinners);
  tableWinners.innerHTML = renderHeadWinners();
  tableWinners.append(tbody);
  winnersItems(tbody);

  pageContainer.append(prevBtn, nextBtn);

  garageBtn.addEventListener('click', async () => {
    container.innerHTML = '';
    await renderGarage();
  });

  nextBtn.addEventListener('click', async () => {
    const num = Number((response.count));
    if (num > 10 && Math.ceil(num / 10) > page) {
      page += 1;
      await getWinners(page);
      await winnersItems(tbody);
      winnerPageNum.innerText = `Page #${page}`;
    }
  });
  prevBtn.addEventListener('click', async () => {
    if (page !== 1) {
      page -= 1;
      await getWinners(page);
      await winnersItems(tbody);
      winnerPageNum.innerText = `Page #${page}`;
    }
  });
};

const winnersItems = async (tbody: HTMLElement) => {
  tbody.innerHTML = '';
  const response = await getWinners(page);
  for (let i = 0; i < response.items.length; i += 1) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    tr.innerHTML = `<td>${page - 1 == 0 ? '' : i !== 9 ? page - 1 : page}${i !== 9 ? i + 1 : page == 1 ? i + 1 : 0}</td>
                    <td>${renderCarImage(response.items[i].car.color)}</td>
                    <td>${response.items[i].car.name}</td>
                    <td>${response.items[i].wins}</td>
                    <td>${response.items[i].time}</td>
                    `;
  }
};

export default renderWinners;
