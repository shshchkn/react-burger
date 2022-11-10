import {API_AUTH_URL} from "../../utils/burger-api";
import {deleteCookie, getCookie} from "../../utils/helpers";

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAIL';

export const logoutRequest = () => async dispatch => {
  dispatch({type: LOGOUT_USER_REQUEST});
  return await fetch(`${API_AUTH_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'token': getCookie('refreshToken')})
    })
    .then(data => {
      console.log(data)
      if (data.ok) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        dispatch({type: LOGOUT_USER_SUCCESS});
        console.log('Logout')
      }
    })
    .catch(error => {
      dispatch({type: LOGOUT_USER_FAILED});
      console.error(error.message);
    });
}