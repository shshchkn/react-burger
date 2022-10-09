import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./products-item.module.scss";

type IngredientTypes = {
  _id: string,
  name: string,
  image: string,
  price: number,
  count: number,
  showModal?: () => void
}

const ProductsItem = ({_id, name, image, price, count, showModal}: IngredientTypes) => {
  return (
    <li
      className={`${styles.ingredients__list_item} ${styles.card}`}
      onClick={showModal}
      title={name}
      data-id={_id}>
      {count && <Counter count={count} size="default"/>}
      <div className={`${styles.card__image} mb-2 ml-4 mr-4`}>
        <img src={image} alt={name}/>
      </div>
      <div className={`${styles.card__price} mb-2`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <p className={`${styles.card__title} text text_type_main-default`}>{name}</p>
    </li>
  );
}

export default ProductsItem;