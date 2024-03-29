export const BASE_URL = 'https://norma.nomoreparties.space/api';
export const WS_URL = 'wss://norma.nomoreparties.space/orders';

const checkApiResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export const apiRequest = (url: string, options?: object) => fetch(url, options).then(checkApiResponse);