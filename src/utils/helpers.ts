import {TSetCookieOptions} from "../services/types";

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : '';
}

export const setCookie = (name: string, value: string, options: TSetCookieOptions) => {
  options = {
    path: '/',
    ...options
  };
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    updatedCookie += "=" + optionValue;
  }
  document.cookie = updatedCookie;
}

export const deleteCookie = (name: string) => {
  setCookie(name, '', {'max-age': -1});
}

const pluralForm = (number: number, titles: Array<string>) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const setOrderTime = (time: string | undefined) => {
  if (!time) return;
  const dayCreated: Date = new Date(time);
  const today: Date = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays: number = Math.ceil((today.getTime() - dayCreated.getTime()) / (60 * 60 * 24 * 1000));
  const hours = dayCreated.getHours() > 9 ? dayCreated.getHours() : `0${dayCreated.getHours()}`
  const minutes = dayCreated.getMinutes() > 9 ? dayCreated.getMinutes() : `0${dayCreated.getMinutes()}`
  const daysCreated = diffDays === 0 ? 'Сегодня' : diffDays === 1 ? 'Вчера' :
    diffDays > 1 ? `${diffDays} ${pluralForm(diffDays, ['день', 'дня', 'дней'])} назад` : '';

  return `${daysCreated}, ${hours}:${minutes}`;
}