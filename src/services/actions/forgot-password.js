import {BASE_URL, apiRequest} from "../../utils/burger-api";

export const FORGOT_PASSWORD_USER_REQUEST = 'FORGOT_PASSWORD_USER_REQUEST';
export const FORGOT_PASSWORD_USER_SUCCESS = 'FORGOT_PASSWORD_USER_SUCCESS';
export const FORGOT_PASSWORD_USER_FAILED = 'FORGOT_PASSWORD_USER_FAILED';

export const forgotPasswordRequest = form => async dispatch => {
  dispatch({type: FORGOT_PASSWORD_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/password-reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({email: form})
  })
    .then(data => {
      console.log(data)
      if (data.success) {
        dispatch({type: FORGOT_PASSWORD_USER_SUCCESS});
      }
    })
    .catch(error => {
      dispatch({type: FORGOT_PASSWORD_USER_FAILED});
      console.error(error.message);
    });
};