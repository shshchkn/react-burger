import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILED,
  ADD_CART_BUN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART
} from "../actions";

const initialState = {
  cartItems: [],
  cartBun: null,
  cartRequest: false,
  cartFailed: false,
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST: {
      return {
        ...state,
        cartRequest: true,
        cartFailed: false
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        cartRequest: false,
        cartItems: action.items,
        cartFailed: false
      };
    }
    case GET_CART_FAILED: {
      return {
        ...state,
        cartRequest: false,
        cartFailed: true
      };
    }
    case ADD_CART_BUN: {
      return {
        ...state,
        cartBun: action.item
        // cartBun: {
        //   name: action.item.name,
        //   price: action.item.price,
        //   image_mobile: action.item.image_mobile
        // }
      };
    }
    case ADD_CART_ITEM: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          action.item
        ]
      };
    }
    case REMOVE_CART_ITEM: {
      return {
        ...state,
        cartItems: [...state.cartItems].filter(item => item.dragId !== action.item.dragId)
      };
    }
    case UPDATE_CART: {
      return {
        ...state,
        cartItems: action.payload
      };
    }
    default: {
      return state;
    }
  }
}