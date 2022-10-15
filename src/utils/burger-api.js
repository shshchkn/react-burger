export const API_URL = 'https://norma.nomoreparties.space/api';

export function checkApiResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}