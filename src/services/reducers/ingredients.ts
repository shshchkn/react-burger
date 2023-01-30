import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
} from "../actions/ingredients";
import {TGetItemsActions, TIngredientsState} from "../types/ingredients";

export const initialState: TIngredientsState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
}

export const ingredientsReducer = (state = initialState, action: TGetItemsActions) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
        itemsFailed: false
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsRequest: false,
        items: action.items,
        itemsFailed: false
      };
    }
    case GET_ITEMS_FAILED: {
      return {
        ...state,
        itemsRequest: false,
        itemsFailed: true
      };
    }
    default: {
      return state;
    }
  }
}