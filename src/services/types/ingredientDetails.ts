import * as types from "../actions/ingredientDetails";
import {TIngredientSingle} from "./index";

export type TIngredientDetailsState = {
  details: TIngredientSingle | null
}

type TGetDetails = {
  type: typeof types.GET_INGREDIENT_DETAILS,
  item: TIngredientSingle | null
}

type TRemoveDetails= {
  type: typeof types.REMOVE_INGREDIENT_DETAILS
}

export type TIngredientDetailsActions = TGetDetails | TRemoveDetails;