import * as types from "../actions/ingredientDetails";
import {ingredientDetailsReducer, initialState} from "./ingredientDetails";

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
    expect(ingredientDetailsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_INGREDIENT_DETAILS', () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: types.GET_INGREDIENT_DETAILS,
        item: testData
      })
    ).toEqual({
      details: testData
    })
  })

  it('should handle REMOVE_INGREDIENT_DETAILS', () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: types.REMOVE_INGREDIENT_DETAILS,
      })
    ).toEqual({
      details: null
    })
  })
})