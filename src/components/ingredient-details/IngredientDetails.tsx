import styles from './ingredient-details.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../index";

const IngredientDetails = () => {
  const {details} = useSelector((store: RootState) => store.ingredientDetails);

  return (
    <div className={`card ${styles.card_modal}`}>
      <div className={`${styles.card__image} mb-4`}>
        <img src={details.image_large} alt={details.name} />
      </div>
      <h2 className="text text_type_main-medium mb-8">{details.name}</h2>
      <div className={styles.card__info}>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Калории, ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{details.calories}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{details.proteins}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{details.fat}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">{details.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;