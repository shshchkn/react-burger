import {API_URL, apiRequest} from "../../utils/burger-api";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FILED = 'GET_ORDER_FILED';
export const CLOSE_ORDER = 'CLOSE_ORDER';

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