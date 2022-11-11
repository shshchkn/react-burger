import {API_AUTH_URL, apiRequest} from "../../utils/burger-api";
import {setCookie} from "../../utils/helpers";

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

export const loginRequest = form => async dispatch => {
  dispatch({type: LOGIN_USER_REQUEST});
  return await apiRequest(`${API_AUTH_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(form)
    })
    .then(data => {
      console.log(data)
      if (data.success) {
        setCookie('accessToken', data.accessToken, {'max-age': 86400});
        setCookie('refreshToken', data.refreshToken, {'max-age': 86400});
        dispatch({type: LOGIN_USER_SUCCESS, user: data.user});
      }
    })
    .catch(error => {
      dispatch({type: LOGIN_USER_FAILED});
      console.error(error.message);
    });
};