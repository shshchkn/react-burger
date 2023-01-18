import * as websocketTypes from "../actions/feed";
import * as ordersTypes from "../actions/orders";
import {TWsResponse} from "./index";

type TWsConnectionStart = {
  type: typeof websocketTypes.WS_CONNECTION_START,
}

type TWsConnectionSuccess = {
  type: typeof websocketTypes.WS_CONNECTION_SUCCESS,
  payload: string;
}

type TWsConnectionError = {
  type: typeof websocketTypes.WS_CONNECTION_ERROR,
}

type TWsConnectionClosed = {
  type: typeof websocketTypes.WS_CONNECTION_CLOSED,
}

type TWsConnectionStop = {
  type: typeof websocketTypes.WS_CONNECTION_STOP,
}

type TWsGetMessage = {
  type: typeof websocketTypes.WS_GET_MESSAGE,
  payload: TWsResponse;
}

type TWsSendMessage = {
  type: typeof websocketTypes.WS_SEND_MESSAGE,
}

type TOrdersConnectionStart = {
  type: typeof ordersTypes.ORDERS_CONNECTION_START,
}

type TOrdersConnectionSuccess = {
  type: typeof ordersTypes.ORDERS_CONNECTION_SUCCESS,
  payload: string;
}

type TOrdersConnectionError = {
  type: typeof ordersTypes.ORDERS_CONNECTION_ERROR,
}

type TOrdersConnectionClosed = {
  type: typeof ordersTypes.ORDERS_CONNECTION_CLOSED,
}

type TOrdersConnectionStop = {
  type: typeof ordersTypes.ORDERS_CONNECTION_STOP,
}

type TOrdersGetMessage = {
  type: typeof ordersTypes.ORDERS_GET_MESSAGE,
  payload: TWsResponse;
}

type TOrdersSendMessage = {
  type: typeof ordersTypes.ORDERS_SEND_MESSAGE,
}

export type TWsActions = TWsConnectionStart
  | TWsConnectionSuccess
  | TWsConnectionError
  | TWsConnectionClosed
  | TWsConnectionStop
  | TWsGetMessage
  | TWsSendMessage

export type TOrdersActions = TOrdersConnectionStart
  | TOrdersConnectionSuccess
  | TOrdersConnectionError
  | TOrdersConnectionClosed
  | TOrdersConnectionStop
  | TOrdersGetMessage
  | TOrdersSendMessage