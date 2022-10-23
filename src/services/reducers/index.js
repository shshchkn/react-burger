import { combineReducers } from 'redux';
import {ingredientsReducer} from './ingredients';
import {ingredientDetailsReducer} from './ingredientDetails'
import {dropTargetReducer} from "./drop-target";
import {cartReducer} from "./cart";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
  ingredientDetails: ingredientDetailsReducer,
  board: dropTargetReducer
});