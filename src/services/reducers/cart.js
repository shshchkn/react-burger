import {
  ADD_CART_BUN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART,
  CLEAN_CART,
} from "../actions";

const initialState = {
  cartItems: [],
  cartBun: null,
  cartRequest: false,
  cartFailed: false,
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
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
        cartItems: action.cartItems
      };
    }
    case CLEAN_CART: {
      return {
        ...state,
        cartItems: [],
        cartBun: null,
      };
    }
    default: {
      return state;
    }
  }
}