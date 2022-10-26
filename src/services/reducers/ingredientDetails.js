import {
  GET_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS
} from "../actions/ingredientDetails";

const initialState = {
  details: null
}

export const ingredientDetailsReducer = (state = initialState, action) => {
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