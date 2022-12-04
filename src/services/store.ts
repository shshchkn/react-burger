import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import {createSocketMiddleware} from "../middleware";

const socketMiddleware = createSocketMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk, socketMiddleware)
  },
  devTools: process.env.NODE_ENV !== 'production',
});