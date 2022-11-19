import styles from './ingredient-details.module.scss';
import {useSelector} from "react-redux";
import {RootState, TIngredient, TIngredientDetails} from "../../utils/types";
import {useParams} from "react-router-dom";
import {FC} from "react";

const IngredientDetails: FC<TIngredientDetails> = ({details}) => {
  const {id} = useParams<{ id?: string }>();
  const {items} = useSelector((store: RootState) => store.ingredients);

  const ingredient: TIngredient | undefined = details ?? items.find((el: TIngredient) => el._id === id);

  return (
    <div className={`card ${styles.card_modal}`}>
      <div className={`${styles.card__image} mb-4`}>
        <img src={ingredient?.image_large} alt={ingredient?.name} />
      </div>
      <h2 className="text text_type_main-medium mb-8">{ingredient?.name}</h2>
      <div className={styles.card__info}>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Калории, ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient?.calories}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient?.proteins}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient?.fat}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient?.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;