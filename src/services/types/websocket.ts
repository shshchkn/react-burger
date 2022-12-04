import * as websocketTypes from "../actions/feed";
import {TWsResponse} from "./index";

export enum WSStatus {
  created = 'Создан',
  pending = 'Готовится',
  done = 'Выполнен'
}

type TWsConnectionStart = {
  type: typeof websocketTypes.WS_CONNECTION_START,
  payload: {
    url: string,
    secure: boolean
  };
}

type TWsConnectionSuccess = {
  type: typeof websocketTypes.WS_CONNECTION_SUCCESS,
  payload: string;
}

type TWsConnectionError = {
  type: typeof websocketTypes.WS_CONNECTION_ERROR,
  payload: string;
}

type TWsConnectionClosed = {
  type: typeof websocketTypes.WS_CONNECTION_CLOSED,
}

type TWsConnectionStop = {
  type: typeof websocketTypes.WS_CONNECTION_STOP,
  payload: number
}

type TWsGetMessage = {
  type: typeof websocketTypes.WS_GET_MESSAGE,
  payload: TWsResponse;
}

type TWsSendMessage = {
  type: typeof websocketTypes.WS_SEND_MESSAGE,
}

export type TWsActions = TWsConnectionStart
  | TWsConnectionSuccess
  | TWsConnectionError
  | TWsConnectionClosed
  | TWsConnectionStop
  | TWsGetMessage
  | TWsSendMessage