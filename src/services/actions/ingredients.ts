import {BASE_URL, apiRequest} from "../../utils/burger-api";
import {AppDispatch} from "../types";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const getItems = () => (dispatch: AppDispatch) => {
  dispatch({type: GET_ITEMS_REQUEST});
  apiRequest(`${BASE_URL}/ingredients`)
    .then(res => {
      if (res && res.success) {
        dispatch({type: GET_ITEMS_SUCCESS, items: res.data});
      } else {
        dispatch({type: GET_ITEMS_FAILED});
      }
    })
    .catch(err => console.log(err));
}