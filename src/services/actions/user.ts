import {BASE_URL, apiRequest} from "../../utils/burger-api";
import {deleteCookie, getCookie, setCookie} from "../../utils/helpers";
import {AppDispatch} from "../types";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUserRequest = () => async (dispatch: AppDispatch) => {
  dispatch({type: GET_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/auth/user`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('accessToken')
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
    .then(data => {
      data.success && dispatch({type: GET_USER_SUCCESS, user: data.user});
    })
    .catch(error => {
      if (error.message || error.message === 'jwt expired') {
        dispatch(updateTokenRequest(getUserRequest()));
      } else {
        dispatch({type: GET_USER_FAILED});
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        console.error(error.message);
      }
    });
};

export const updateUserRequest = (form: {name: string, email: string, password: string}) => async (dispatch: AppDispatch) => {
  dispatch({type: GET_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('accessToken')
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  })
    .then(data => {
      data.success && dispatch({type: GET_USER_SUCCESS, user: data.user});
      console.log(data, form)
    })
    .catch(error => {
      if (error.message === 'jwt expired') {
        dispatch(updateTokenRequest(updateUserRequest(form)));
      } else {
        dispatch({type: GET_USER_FAILED});
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        console.error(error.message);
      }
    });
};

export const updateTokenRequest = (afterRefresh: (dispatch: AppDispatch) => Promise<void>) => async (dispatch: AppDispatch) => {
  return await apiRequest(`${BASE_URL}/auth/token`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: 'token: ' + getCookie('refreshToken')
  })
    .then(data => {
      if (data && data.success) {
        setCookie('accessToken', data.accessToken, {'max-age': 1200});
        setCookie('refreshToken', data.refreshToken, {'max-age': 1200});
        dispatch(afterRefresh);
        console.log(data)
      }
    })
    .catch(error => {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      console.error(error.message);
    });
}