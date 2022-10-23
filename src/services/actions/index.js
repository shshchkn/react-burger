import {API_URL, apiRequest} from "../../utils/burger-api";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILED = 'GET_CART_FAILED';
export const UPDATE_CART = 'UPDATE_CART';

export const ADD_CART_BUN = 'ADD_CART_BUN';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';

export const getItems = () => dispatch => {
  dispatch({type: GET_ITEMS_REQUEST});
  apiRequest(`${API_URL}/ingredients`).then(res => {
    if (res && res.success) {
      dispatch({type: GET_ITEMS_SUCCESS, items: res.data});
    } else {
      dispatch({type: GET_ITEMS_FAILED});
    }
  });
}