import React from "react";

import styles from './ingredient-details.module.scss';

import {TIngredientDetails} from '../../utils/types';

const IngredientDetails = (item: TIngredientDetails) => {
  return (
    <div className={`card ${styles.card_modal}`}>
      <div className={`${styles.card__image} mb-4`}>
        <img src={item.image_large} alt={item.name} />
      </div>
      <h2 className="text text_type_main-medium mb-8">{item.name}</h2>
      <div className={styles.card__info}>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Калории, ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{item.calories}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{item.proteins}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{item.fat}</span>
        </div>
        <div className={styles.card__info_item}>
          <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;