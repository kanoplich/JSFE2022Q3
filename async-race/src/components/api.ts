export type body = {
  name: string,
  color: string
};

const url = 'http://127.0.0.1:3000';

const garage = `${url}/garage`;
const engine = `${url}/engine`;
const winners = `${url}/winners`;

export const getCars = async (page: number, limit: number = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number) => {
  const response = await fetch(`${garage}/${id}`);
  return response.json();
};

export const createCar = async (body: body) => {
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

export const updateCar = async (id: number, body: body) => {
  const response = await fetch(`${garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  await response.json();
};

export const getWinners = async (page: number, limit: number = 10) => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}`);
  const items = await response.json();
  return {
    items: await Promise.all(items.map(async (winner: any) => ({ ...winner, car: await getCar(winner.id) }))),
    count: response.headers.get('X-Total-Count'),
  };
};
