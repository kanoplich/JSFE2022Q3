import { Body, ICar, Wins } from './types';

const url = 'http://127.0.0.1:3000';

const garage = `${url}/garage`;
const engine = `${url}/engine`;
const winners = `${url}/winners`;

export const getCars = async (page: number, limit: number = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return {
    items: await response.json() as ICar[],
    count: response.headers.get('X-Total-Count') as string,
  };
};

export const getCar = async (id: number) => {
  const response = await fetch(`${garage}/${id}`);
  return response.json();
};

export const createCar = async (body: Body) => {
  const response = await fetch(garage, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  await response.json();
};

export const deleteCar = async (id: number) => {
  const response = await fetch(`${garage}/${id}`, {
    method: 'DELETE',
  });
  await response.json();
};

export const updateCar = async (id: number, body: Body) => {
  const response = await fetch(`${garage}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  await response.json();
};

export const getWinner = async (id: number) => {
  const response = await fetch(`${winners}/${id}`);
  return response.json();
};

export const getWinners = async (page: number, limit: number = 10, sort: string = 'id', order: string = 'ASC') => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  const items: Wins[] = await response.json();
  return {
    items: await Promise.all(items.map(async (winner) => ({
      ...winner, car: await getCar(winner.id),
    }))),
    count: response.headers.get('X-Total-Count'),
  };
};

export const updateWinner = async (id: number, body: Wins) => {
  const response = await fetch(`${winners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  await response.json();
};

export const deleteWinner = async (id: number) => {
  const response = await fetch(`${winners}/${id}`, {
    method: 'DELETE',
  });
  await response.json();
};

export const createWinner = async (body: Wins) => {
  const response = await fetch(winners, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  await response.json();
};

export const getWinnerStatus = async (id: number) => {
  const response = await fetch(`${winners}/${id}`);
  return response.status;
};

export const startEngine = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  return response.json();
};

export const stopEngine = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  return response.json();
};

export const drive = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=drive`, {
    method: 'PATCH',
  }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
};
