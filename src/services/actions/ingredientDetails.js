export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';

export const getItemDetails = item => {
  return {type: GET_INGREDIENT_DETAILS, item};
};