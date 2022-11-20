import {TSetCookieOptions} from "../services/types";

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
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