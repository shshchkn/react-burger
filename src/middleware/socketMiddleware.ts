// socketMiddleware.ts
import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../services/types';
import type { TWsActions } from '../services/types/websocket';

import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_STOP,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE
} from "../services/actions/feed";

import {getCookie} from "../utils/helpers";

export const createSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWsActions) => {
      const { dispatch } = store;

      if (action.type === WS_CONNECTION_START) {
        const token = getCookie('accessToken').replace('Bearer ', '');
        socket = new WebSocket(action.payload.secure ? `${action.payload.url}?token=${token}` : action.payload.url);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: WS_GET_MESSAGE, payload: JSON.parse(data) });
          // console.log(JSON.parse(data));
        };

        socket.onclose = event => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (action.type === WS_CONNECTION_STOP) {
          socket.close();
        }
      }

      next(action);
    };
  }) as Middleware;
};