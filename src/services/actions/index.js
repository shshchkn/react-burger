

export const totalPriceSelector = state => {
  const {cartItems, cartBun} = state.cart;
  const bunsPrice = (cartBun && cartBun.price * 2) || 0;
  const itemsPrice = (cartItems && [...cartItems].reduce((acc, item) => acc + item.price, 0)) || 0;
  return bunsPrice + itemsPrice;
};