// socketMiddleware.ts
import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch, RootState } from '../services/types';
import {getCookie} from "../utils/helpers";

export type TwsActions = {
  wsInit: string;
  wsClose: string;
  wsSendMessage?: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export const createSocketMiddleware = (wsActions: TwsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsClose, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        const token = getCookie('accessToken').replace('Bearer ', '');
        socket = new WebSocket(action.payload.secure ? `${action.payload.url}?token=${token}` : action.payload.url);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen });
        };

        socket.onerror = event => {
          dispatch({ type: onError });
        };

        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: onMessage, payload: JSON.parse(data) });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsClose) {
          socket.close();
        }
      }

      next(action);
    };
  }) as Middleware;
};