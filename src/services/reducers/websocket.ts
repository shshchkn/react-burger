import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_STOP
} from '../actions/feed';
import type { TWsActions } from '../types/websocket';
import {TWs} from "../types";

export const initialState: TWs = {
  orders: null,
  feed: null,
  total: null,
  totalToday: null,
  wsConnected: false,
  error: null
};

export const wsReducer = (state = initialState, action: TWsActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: null,
        feed: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      };
    case WS_CONNECTION_CLOSED:
    case WS_CONNECTION_STOP:
      return {
        ...state,
        error: null,
        wsConnected: false
      };
    default:
      return state;
  }
};