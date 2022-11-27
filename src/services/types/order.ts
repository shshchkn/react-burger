import * as types from "../actions/order";

export type TOrderState = {
  orderNumber: number | null,
  orderRequest: boolean,
  orderFailed: boolean,
  openModal: boolean
}

type TGetOrderRequest = {
  type: typeof types.GET_ORDER_REQUEST,
}

type TGetOrderSuccess = {
  type: typeof types.GET_ORDER_SUCCESS,
  orderNumber: number
}

type TGetOrderFailed = {
  type: typeof types.GET_ORDER_FAILED
}

type TGetOrderClose = {
  type: typeof types.CLOSE_ORDER
}

export type TOrderActions = TGetOrderRequest | TGetOrderSuccess | TGetOrderFailed | TGetOrderClose;