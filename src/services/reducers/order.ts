import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLOSE_ORDER
} from "../actions/order";
import {TOrderActions, TOrderState} from "../types/order";

export const initialState: TOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  openModal: false
};

export const orderReducer = (state = initialState, action: TOrderActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderNumber: action.orderNumber,
        orderFailed: false
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        openModal: false
      };
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        orderNumber: null
      };
    }
    default: {
      return state;
    }
  }
}