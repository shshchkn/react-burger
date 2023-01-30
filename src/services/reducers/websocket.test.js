import {wsReducer, initialState} from './websocket';
import * as types from '../actions/feed';

const testData = {
  success: true,
  orders: [
    {
      _id: '614fa423dab0f3001bb0915c',
      ingredients: [
        '60d3b41abdacab0026a733cd',
        '60d3b41abdacab0026a733c9',
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733c7'
      ],
      status: 'done',
      name: 'Бессмертный space флюоресцентный бургер',
      createdAt: '2021-09-25T22:35:15.763Z',
      updatedAt: '2021-09-25T22:35:15.917Z',
      number: 3920
    },
    {
      _id: '614fa172dab0f3001bb0915a',
      ingredients: [
        '60d3b41abdacab0026a733cd',
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733c7'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2021-09-25T22:23:46.734Z',
      updatedAt: '2021-09-25T22:23:46.837Z',
      number: 3919
    }
  ],
  total: 8456,
  totalToday: 65
}

describe('websocket reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      error: null,
      wsConnected: true
    })
  })

  it('should handle WS_GET_MESSAGE', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_GET_MESSAGE,
        payload: testData
      })
    ).toEqual({
      ...initialState,
      error: null,
      feed: testData.orders,
      total: testData.total,
      totalToday: testData.totalToday,
    })
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_CONNECTION_ERROR,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false
    })
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      error: null,
      wsConnected: false
    })
  })
})