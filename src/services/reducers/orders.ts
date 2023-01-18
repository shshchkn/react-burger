import {
  ORDERS_CONNECTION_SUCCESS,
  ORDERS_CONNECTION_ERROR,
  ORDERS_CONNECTION_CLOSED,
  ORDERS_GET_MESSAGE,
  ORDERS_CONNECTION_STOP
} from '../actions/orders';
import type { TOrdersActions } from '../types/websocket';
import {TWs} from "../types";

const initialState: TWs = {
  orders: null,
  feed: null,
  total: null,
  totalToday: null,
  wsConnected: false,
  error: null
};

export const ordersReducer = (state = initialState, action: TOrdersActions) => {
  switch (action.type) {
    case ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true
      };
    case ORDERS_GET_MESSAGE:
      return {
        ...state,
        error: null,
        orders: action.payload.orders,
      };
    case ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      };
    case ORDERS_CONNECTION_CLOSED:
    case ORDERS_CONNECTION_STOP:
      return {
        ...state,
        error: null,
        wsConnected: false
      };
    default:
      return state;
  }
};