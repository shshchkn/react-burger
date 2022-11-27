import {apiRequest, BASE_URL} from "../../utils/burger-api";
import {setCookie} from "../../utils/helpers";
import {AppDispatch} from "../types";

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

export const loginRequest = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch({type: LOGIN_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({email, password})
    })
    .then(data => {
      if (data.success) {
        setCookie('accessToken', data.accessToken, {'max-age': 1200});
        setCookie('refreshToken', data.refreshToken, {'max-age': 1200});
        dispatch({type: LOGIN_USER_SUCCESS, user: data.user});
      }
    })
    .catch(error => {
      dispatch({type: LOGIN_USER_FAILED});
      console.error(error.message);
    });
};