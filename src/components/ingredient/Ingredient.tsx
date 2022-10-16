import styles from "./ingredient.module.scss";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

import {TIngredient} from '../../utils/types';

const Ingredient = (item: TIngredient) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.item__drag} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    </div>
  );
}

export default Ingredient;