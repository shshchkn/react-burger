import * as types from "../actions/order";
import {orderReducer} from "./order";

const initialState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  openModal: false
}

const testData = {
  _id: '60d3b41abdacab0026a733c9',
  name: 'Мясо бессмертных моллюсков Protostomia',
  type: 'main',
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: 'https://code.s3.yandex.net/react/code/meat-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
  __v: 0
}

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_ORDER_REQUEST', () => {
    expect(
      orderReducer(initialState, {
        type: types.GET_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      orderRequest: true,
      orderFailed: false
    })
  })

  it('should handle GET_ORDER_SUCCESS', () => {
    expect(
      orderReducer(initialState, {
        type: types.GET_ORDER_SUCCESS,
        orderNumber: 145
      })
    ).toEqual({
      ...initialState,
      orderRequest: false,
      orderNumber: 145,
      orderFailed: false
    })
  })

  it('should handle GET_ORDER_FAILED', () => {
    expect(
      orderReducer(initialState, {
        type: types.GET_ORDER_FAILED
      })
    ).toEqual({
      ...initialState,
      orderRequest: false,
      orderFailed: true,
      openModal: false
    })
  })

  it('should handle CLOSE_ORDER', () => {
    expect(
      orderReducer(initialState, {
        type: types.CLOSE_ORDER
      })
    ).toEqual({
      ...initialState,
      orderNumber: null
    })
  })
})