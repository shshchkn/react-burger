import React from "react";

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./products-item.module.scss";

type IngredientTypes = {
  // _id: string,
  // name: string,
  // image: string,
  // price: number,
  item: any,
  count: number,
  showModal?: (item: any) => void,
}

const ProductsItem = (({item, count, showModal}: IngredientTypes) => {
  const handleProductClick = () => showModal && showModal(item);
  return (
    <li
      className={`${styles.ingredients__list_item} ${styles.card}`}
      onClick={handleProductClick}
      title={item.name}
      data-id={item._id}>
      {count && <Counter count={count} size="default"/>}
      <div className={`${styles.card__image} mb-2 ml-4 mr-4`}>
        <img src={item.image} alt={item.name}/>
      </div>
      <div className={`${styles.card__price} mb-2`}>
        <span className="text text_type_digits-default mr-2">{item.price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <p className={`${styles.card__title} text text_type_main-default`}>{item.name}</p>
    </li>
  );
});

export default ProductsItem;