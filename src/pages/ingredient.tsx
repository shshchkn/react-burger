import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {NotFoundPage} from "./not-found";
import IngredientDetails from "../components/ingredient-details/IngredientDetails";
import {RootState} from "../index";
import {TIngredient} from "../utils/types";

export const IngredientPage = () => {
  const {items} = useSelector((store: RootState) => store.ingredients);
  const {id} = useParams<{ id?: string }>();
  const ingredient = items.length > 0 ? items.find((el: TIngredient) => el._id === id) ?? null : null;
  console.log(ingredient)
  return (
    ingredient ? (
      <>
        <h1 className={`text text_type_main-large`}>Детали ингредиента</h1>
        <IngredientDetails />
      </>
    ) : (
      <NotFoundPage/>
    )
  )
}