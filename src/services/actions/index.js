import {API_URL, apiRequest} from "../../utils/burger-api";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const UPDATE_CART = 'UPDATE_CART';
export const CLEAN_CART = 'CLEAN_CART';

export const ADD_CART_BUN = 'ADD_CART_BUN';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FILED = 'GET_ORDER_FILED';
export const CLOSE_ORDER = 'CLOSE_ORDER';

export const getItems = () => dispatch => {
  dispatch({type: GET_ITEMS_REQUEST});
  apiRequest(`${API_URL}/ingredients`)
    .then(res => {
      if (res && res.success) {
        dispatch({type: GET_ITEMS_SUCCESS, items: res.data});
      } else {
        dispatch({type: GET_ITEMS_FAILED});
      }
    })
    .catch(err => console.log(err));
}

export const getOrderedItems = (items) => dispatch => {
  dispatch({type: GET_ORDER_REQUEST});
  const getOrder = () => apiRequest(`${API_URL}/orders`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({'ingredients': items.map(item => item._id)})
    })

  getOrder()
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          orderNumber: res.order.number
        });
      } else {
        dispatch({type: GET_ORDER_FILED});
      }
    })
    .catch(err => console.log(err));
}

export const totalPriceSelector = state => {
  const {cartItems, cartBun} = state.cart;
  const bunsPrice = (cartBun && cartBun.price * 2) || 0;
  const itemsPrice = (cartItems && [...cartItems].reduce((acc, item) => acc + item.price, 0)) || 0;
  return bunsPrice + itemsPrice;
};