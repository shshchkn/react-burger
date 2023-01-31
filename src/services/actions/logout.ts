import {apiRequest, BASE_URL} from "../../utils/burger-api";
import {deleteCookie, getCookie} from "../../utils/helpers";
import {AppDispatch} from "../types";

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAIL';

export const logoutRequest = () => async (dispatch: AppDispatch) => {
  dispatch({type: LOGOUT_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'token': getCookie('refreshToken')})
    })
    .then(data => {
      console.log(data)
      if (data.success) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        dispatch({type: LOGOUT_USER_SUCCESS});
      }
    })
    .catch(error => {
      dispatch({type: LOGOUT_USER_FAILED});
      console.error(error.message);
    });
}