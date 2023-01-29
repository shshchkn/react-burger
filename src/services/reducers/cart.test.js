import {cartReducer} from './cart';
import * as types from '../actions/cart';
import {ADD_CART_ITEM, CLEAN_CART, REMOVE_CART_ITEM, UPDATE_CART} from "../actions/cart";

const initialState = {
  cartBun: null,
  cartItems: [],
  cartRequest: false,
  cartFailed: false,
}

const testBun = {
  _id: '60d3b41abdacab0026a733c7',
  name: 'Флюоресцентная булка R2-D3',
  type: 'bun',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: 'https://code.s3.yandex.net/react/code/bun-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
  uniqueId: '123456',
  qty: 1,
  __v: 0
};

const testItem = {
  _id: '60d3b41abdacab0026a733cd',
  name: 'Соус фирменный Space Sauce',
  type: 'sauce',
  proteins: 50,
  fat: 22,
  carbohydrates: 11,
  calories: 14,
  price: 80,
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
  __v: 0,
  qty: 2,
  uniqueId: '132456'
};

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_CART_BUN', () => {
    expect(
      cartReducer(initialState, {
        type: types.ADD_CART_BUN,
        item: testBun,
        dragId: '123456'
      })
    ).toEqual({
      ...initialState,
      cartBun: testBun,
    })
  })

  it('should handle ADD_CART_ITEM', () => {
    expect(
      cartReducer(initialState, {
        type: types.ADD_CART_ITEM,
        item: testItem,
        dragId: '123456'
      })
    ).toEqual({
      ...initialState,
      cartItems: [testItem],
    })
  })

  it('should handle REMOVE_CART_ITEM', () => {
    expect(
      cartReducer(initialState, {
        type: types.REMOVE_CART_ITEM,
        dragId: '123456'
      })
    ).toEqual({
      ...initialState,
      cartItems: [],
    })
  })

  it('should handle UPDATE_CART', () => {
    expect(
      cartReducer(initialState, {
        type: types.UPDATE_CART,
        cartItems: [testBun, testItem]
      })
    ).toEqual({
      ...initialState,
      cartItems: [testBun, testItem],
    })
  })

  it('should handle CLEAN_CART', () => {
    expect(
      cartReducer(initialState, {
        type: types.CLEAN_CART,
      })
    ).toEqual({
      ...initialState,
      cartItems: [],
      cartBun: null,
    })
  })
})