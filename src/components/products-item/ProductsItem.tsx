import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./products-item.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {TIngredient} from "../../utils/types";
import {useCallback} from "react";
import {useDrag} from "react-dnd";
import {RootState} from "../../index";
import {getItemDetails} from "../../services/actions/ingredientDetails";

const ProductsItem = ((item: TIngredient,) => {
  const {name, image_large, price} = item;
  const dispatch = useDispatch();
  const {cartItems, cartBun} = useSelector((store: RootState) => store.cart);

  const getDetails = useCallback(() => {
    dispatch(getItemDetails(item));
  }, [item, dispatch])

  const [{opacity}, dragRef] = useDrag({
    type: "items",
    item: {...item},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  const count = useCallback(() => {
    if (cartBun && item._id === cartBun._id) return 2;
    return cartItems.length && cartItems.filter((el: TIngredient) => el._id === item._id).length;
  }, [item._id, cartItems, cartBun]);

  return (
    <li
      className={`${styles.ingredients__list_item} ${styles.card}`}
      onClick={getDetails}
      draggable
      ref={dragRef}
      title={name}
      style={{opacity: opacity}}>
      {count() !== 0 && <Counter count={count()} size="default"/>}
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