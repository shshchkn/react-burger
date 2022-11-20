import {BASE_URL, apiRequest} from "../../utils/burger-api";
import {AppDispatch} from "../types";

export const RESET_PASSWORD_USER_REQUEST = 'RESET_PASSWORD_USER_REQUEST';
export const RESET_PASSWORD_USER_SUCCESS = 'RESET_PASSWORD_USER_SUCCESS';
export const RESET_PASSWORD_USER_FAILED = 'RESET_PASSWORD_USER_FAILED';

export const resetPasswordRequest = (password: string, token: string) => async (dispatch: AppDispatch) => {
  dispatch({type: RESET_PASSWORD_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({password, token})
  })
    .then(data => {
      console.log(data)
      if (data.success) {
        dispatch({type: RESET_PASSWORD_USER_SUCCESS});
      }
    })
    .catch(error => {
      dispatch({type: RESET_PASSWORD_USER_FAILED});
      console.error(error.message);
    });
};