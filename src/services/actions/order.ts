import {BASE_URL, apiRequest} from "../../utils/burger-api";
import {AppDispatch, TIngredient} from "../types";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const CLOSE_ORDER = 'CLOSE_ORDER';

export const getOrderedItems = (items: TIngredient[]) => (dispatch: AppDispatch) => {
  dispatch({type: GET_ORDER_REQUEST});
  const getOrder = () => apiRequest(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({'ingredients': items.map((item: TIngredient) => item._id)})
  });

  getOrder()
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          orderNumber: res.order.number
        });
      } else {
        dispatch({type: GET_ORDER_FAILED});
      }
    })
    .catch(err => console.log(err));
}