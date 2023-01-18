import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import {createSocketMiddleware} from "../middleware";
import {getCookie} from "../utils/helpers";

import {WS_CONNECTION_START, WS_CONNECTION_STOP, WS_CONNECTION_SUCCESS, WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_GET_MESSAGE} from "./actions/feed";
import {ORDERS_CONNECTION_START, ORDERS_CONNECTION_STOP, ORDERS_CONNECTION_SUCCESS, ORDERS_CONNECTION_CLOSED, ORDERS_CONNECTION_ERROR, ORDERS_GET_MESSAGE} from "./actions/orders";

const ordersWsActions = {
  wsInit: ORDERS_CONNECTION_START,
  wsClose: ORDERS_CONNECTION_STOP,
  onOpen: ORDERS_CONNECTION_SUCCESS,
  onClose: ORDERS_CONNECTION_CLOSED,
  onError: ORDERS_CONNECTION_ERROR,
  onMessage: ORDERS_GET_MESSAGE,
};

const feedWsActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_STOP,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      thunk,
      createSocketMiddleware(feedWsActions),
      createSocketMiddleware(ordersWsActions)
    )
  },
  devTools: process.env.NODE_ENV !== 'production',
});