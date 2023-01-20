import {useParams} from "react-router-dom";
import {NotFoundPage} from "./not-found";
import IngredientDetails from "../components/ingredient-details/IngredientDetails";
import {TIngredient} from "../services/types";
import styles from "../components/ingredient-details/ingredient-details.module.scss";
import {useAppSelector} from "../hooks/redux";

export const IngredientPage = () => {
  const {items} = useAppSelector(store => store.ingredients);
  const {id} = useParams<{ id?: string }>();
  const ingredient = items.length > 0 ? items.find((el: TIngredient) => el._id === id) ?? null : null;

  return (
    ingredient ? (
      <div className={`${styles.page} mt-30`}>
        <h1 className={`text text_type_main-large`}>Детали ингредиента</h1>
        <IngredientDetails />
      </div>
    ) : (
      <NotFoundPage/>
    )
  )
}