import {API_AUTH_URL, apiRequest} from "../../utils/burger-api";

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';

export const registerRequest = form => async dispatch => {
  dispatch({type: REGISTER_USER_REQUEST});
  return await apiRequest(`${API_AUTH_URL}/register`, {
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
      data.success && dispatch({type: REGISTER_USER_SUCCESS});
    })
    .catch(error => {
      dispatch({type: REGISTER_USER_FAILED});
      console.error(error.message);
    });
};