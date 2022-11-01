import {API_AUTH_URL, apiRequest} from "../../utils/burger-api";
import {deleteCookie, getCookie, setCookie} from "../../utils/helpers";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUserRequest = () => async dispatch => {
  dispatch({type: GET_USER_REQUEST});
  return await apiRequest(`${API_AUTH_URL}/user`, {
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
      if (error.message === 'jwt expired') {
        dispatch(updateTokenRequest(getUserRequest()));
      } else {
        dispatch({type: GET_USER_FAILED});
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        console.error(error.message);
      }
    });
};

export const updateUserRequest = form => async dispatch => {
  dispatch({type: GET_USER_REQUEST});
  return await apiRequest(`${API_AUTH_URL}/user`, {
    method: 'POST',
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

export const updateTokenRequest = callback => async dispatch => {
  return await fetch(`${API_AUTH_URL}/token`, {
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
      if (data.success) {
        setCookie('accessToken', data.accessToken, {expires: 86400});
        setCookie('refreshToken', data.refreshToken, {expires: 86400});
        dispatch(callback);
      }
    })
    .catch(error => {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      console.error(error.message);
    });
}