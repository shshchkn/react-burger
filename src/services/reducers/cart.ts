import {
  ADD_CART_BUN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART,
  CLEAN_CART,
} from "../actions/cart";
import {TCartActions, TCartState} from "../types/cart";
import {TIngredientSingle} from "../types";

export const initialState: TCartState = {
  cartItems: [],
  cartBun: null,
  cartRequest: false,
  cartFailed: false,
}

export const cartReducer = (state = initialState, action: TCartActions) => {
  switch (action.type) {
    case ADD_CART_BUN: {
      return {
        ...state,
        cartBun: action.item
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
        cartItems: [...state.cartItems].filter((el: TIngredientSingle) => el.dragId !== (action.item && action.item.dragId))
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