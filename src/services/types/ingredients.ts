import * as types from "../actions/ingredients";
import {TIngredient} from "./index";

export type TIngredientsState = {
  items: TIngredient[],
  itemsRequest: boolean,
  itemsFailed: boolean,
}

type TGetItemsRequest = {
  type: typeof types.GET_ITEMS_REQUEST,
}

type TGetItemsSuccess = {
  type: typeof types.GET_ITEMS_SUCCESS,
  items: TIngredient[]
}

type TGetItemsFailed = {
  type: typeof types.GET_ITEMS_FAILED
}

export type TGetItemsActions = TGetItemsRequest | TGetItemsSuccess | TGetItemsFailed;