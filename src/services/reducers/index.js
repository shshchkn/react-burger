import {combineReducers} from 'redux';
import {ingredientsReducer} from './ingredients';
import {ingredientDetailsReducer} from './ingredientDetails'
import {orderReducer} from "./order";
import {cartReducer} from "./cart";
import {userReducer} from "./user";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  user: userReducer
});