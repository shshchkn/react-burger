import {cartReducer} from './cart';
import * as types from '../actions/cart';

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
  uniqueId: 'random',
  qty: 1,
  __v: 0
};

const testNotBun = {
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
  uniqueId: 'some-random-id'
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
        dragId: 'random'
      })
    ).toEqual({
      ...initialState,
      cartBun: testBun,
    })
  })
})