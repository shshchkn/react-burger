import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FILED,
  CLOSE_ORDER
} from "../actions";

const initialState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  openModal: false
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
        openModal: false
      };
    }
    case GET_ORDER_SUCCESS: {
      console.log(action)
      return {
        ...state,
        orderRequest: false,
        orderNumber: action.orderNumber,
        orderFailed: false,
        openModal: true
      };
    }
    case GET_ORDER_FILED: {
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
        openModal: false
      };
    }
    default: {
      return state;
    }
  }
}