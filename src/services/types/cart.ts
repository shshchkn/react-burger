import * as types from "../actions/cart";
import {TIngredient, TIngredientSingle} from "./index";

export type TCartState = {
  cartItems: TIngredientSingle[],
  cartBun: TIngredient | null,
  cartRequest: boolean,
  cartFailed: boolean,
}

type TAddCartBun = {
  type: typeof types.ADD_CART_BUN,
  item: TIngredient | null
}

type TAddCartItem = {
  type: typeof types.ADD_CART_ITEM,
  item: TIngredientSingle | null
}

type TRemoveCartItem = {
  type: typeof types.REMOVE_CART_ITEM,
  cartItems: TIngredientSingle[],
  item: TIngredientSingle | null
}

type TUpdateCart = {
  type: typeof types.UPDATE_CART,
  cartItems: TIngredientSingle[]
}

type TCleanCart = {
  type: typeof types.CLEAN_CART
}

export type TCartActions = TAddCartBun | TAddCartItem | TRemoveCartItem | TUpdateCart | TCleanCart;