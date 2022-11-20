import {RootState, TIngredient} from "../types";

export const totalPriceSelector = (state: RootState) => {
  const {cartItems, cartBun} = state.cart;
  const bunsPrice = (cartBun && cartBun['price'] * 2) || 0;
  const itemsPrice = (cartItems && [...cartItems].reduce((acc, item: TIngredient) => acc + item.price, 0)) || 0;
  return bunsPrice + itemsPrice;
};