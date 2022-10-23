import {
  GET_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS
} from "../actions";

const initialState = {
  details: null,
  openModal: false
}

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENT_DETAILS: {
      return {
        ...state,
        details: action.item,
        openModal: true
      };
    }
    case REMOVE_INGREDIENT_DETAILS: {
      return {
        ...state,
        details: null,
        openModal: false
      };
    }
    default: {
      return state;
    }
  }
}