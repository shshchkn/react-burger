import {API_AUTH_URL, apiRequest} from "../../utils/burger-api";


export const RESET_PASSWORD_USER_REQUEST = 'RESET_PASSWORD_USER_REQUEST';
export const RESET_PASSWORD_USER_SUCCESS = 'RESET_PASSWORD_USER_SUCCESS';
export const RESET_PASSWORD_USER_FAILED = 'RESET_PASSWORD_USER_FAILED';

export const resetPasswordRequest = (password, token) => async dispatch => {
  dispatch({type: RESET_PASSWORD_USER_REQUEST});
  return await apiRequest(`${API_AUTH_URL}/password-reset/reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({password, token})
  })
    .then(data => {
      data.success && dispatch({type: RESET_PASSWORD_USER_SUCCESS});
    })
    .catch(error => {
      dispatch({type: RESET_PASSWORD_USER_FAILED});
      console.error(error.message);
    });
};