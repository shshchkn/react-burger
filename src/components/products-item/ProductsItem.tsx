import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./products-item.module.scss";
import {useDispatch} from "react-redux";
import {GET_INGREDIENT_DETAILS} from '../../services/actions';
import {TIngredient} from "../../utils/types";
import {useRef} from "react";
import {useDrag} from "react-dnd";

type IngredientTypes = {
  item: TIngredient,
  count: number,
}

const ProductsItem = ((item: TIngredient,) => {
  const {name, image_large, price} = item;
  const dispatch = useDispatch();

  const getItemDetails = (item: TIngredient) => dispatch({type: GET_INGREDIENT_DETAILS, item});

  const [{opacity}, dragRef] = useDrag({
    type: "items",
    item: {...item},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <li
      className={`${styles.ingredients__list_item} ${styles.card}`}
      onClick={() => getItemDetails(item)}
      draggable
      ref={dragRef}
      title={name}
      style={{opacity: opacity}}>
      {<Counter count={1} size="default"/>}
      <div className={`${styles.card__image} mb-2 ml-4 mr-4`}>
        <img src={image_large} alt={name}/>
      </div>
      <div className={`${styles.card__price} mb-2`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <p className={`${styles.card__title} text text_type_main-default`}>{name}</p>
    </li>
  );
});

export default ProductsItem;