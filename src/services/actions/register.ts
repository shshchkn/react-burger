import {apiRequest, BASE_URL} from "../../utils/burger-api";
import {AppDispatch} from "../types";

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';

export const registerRequest = (form: object[], navigate: (path: string) => void) => async (dispatch: AppDispatch) => {
  dispatch({type: REGISTER_USER_REQUEST});
  return await apiRequest(`${BASE_URL}/auth/register`, {
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
        dispatch({type: REGISTER_USER_SUCCESS});
        navigate('/login')
      }
    })
    .catch(error => {
      dispatch({type: REGISTER_USER_FAILED});
      console.error(error.message);
    });
};