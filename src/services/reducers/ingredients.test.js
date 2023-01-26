import * as types from "../actions/ingredients";
import {ingredientsReducer} from "./ingredients";
import {GET_ITEMS_FAILED} from "../actions/ingredients";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
}

const testData = [
  {
    _id: '60d3b41abdacab0026a733c6',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0
  },
  {
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
    __v: 0
  },
  {
    _id: '60d3b41abdacab0026a733c8',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    __v: 0
  },
  {
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
  },
];

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_ITEMS_REQUEST', () => {
    expect(
      ingredientsReducer(initialState, {
        type: types.GET_ITEMS_REQUEST,
      })
    ).toEqual({
      ...initialState,
      itemsRequest: true,
      itemsFailed: false
    })
  })

  it('should handle GET_ITEMS_SUCCESS', () => {
    expect(
      ingredientsReducer(initialState, {
        type: types.GET_ITEMS_SUCCESS,
        items: testData,
      })
    ).toEqual({
      ...initialState,
      itemsRequest: false,
      items: testData,
      itemsFailed: false
    })
  })

  it('should handle GET_ITEMS_FAILED', () => {
    expect(
      ingredientsReducer(initialState, {
        type: types.GET_ITEMS_FAILED,
      })
    ).toEqual({
      ...initialState,
      itemsRequest: false,
      itemsFailed: true
    })
  })
})