import {
  GET_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS
} from "../actions/ingredientDetails";
import {TIngredientDetailsActions, TIngredientDetailsState} from "../types/ingredientDetails";

export const initialState: TIngredientDetailsState = {
  details: null
}

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions) => {
  switch (action.type) {
    case GET_INGREDIENT_DETAILS: {
      return {
        ...state,
        details: action.item
      };
    }
    case REMOVE_INGREDIENT_DETAILS: {
      return {
        ...state,
        details: null
      };
    }
    default: {
      return state;
    }
  }
}