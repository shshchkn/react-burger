export const API_URL = 'https://norma.nomoreparties.space/api';
const checkApiResponse = res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
export const apiRequest = (url, options) => fetch(url, options).then(checkApiResponse);