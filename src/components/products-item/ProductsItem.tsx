import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./products-item.module.scss";
import {FC, useCallback} from "react";
import {useDrag} from "react-dnd";
import {TIngredient} from "../../services/types";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

const ProductsItem: FC<TIngredient> = item => {
  const location = useLocation();
  const {name, image_large, price} = item;
  const {cartItems, cartBun} = useAppSelector(store => store.cart);
  const ingredientId = item['_id'];

  const [{opacity}, dragRef] = useDrag({
    type: "items",
    item: {...item},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  const count = useCallback(() => {
    if (cartBun && item._id === cartBun['_id']) return 2;
    return cartItems && [...cartItems].filter((el: TIngredient) => el._id === item._id).length;
  }, [item._id, cartItems, cartBun]);

  return (
    <li
      className={`${styles.ingredients__list_item} ${styles.card}`}
      draggable
      ref={dragRef}
      title={name}
      style={{opacity: opacity}}>
      <Link
        key={ingredientId}
        to={{pathname: `/ingredients/${ingredientId}`}}
        state={{backgroundLocation: location}}
        className={styles.link}
      >
        {count() > 0 && <Counter count={count()} size="default"/>}
        <div className={`${styles.card__image} mb-2 ml-4 mr-4`}>
          <img src={image_large} alt={name}/>
        </div>
        <div className={`${styles.card__price} mb-2`}>
          <span className="text text_type_digits-default mr-2">{price}</span>
          <CurrencyIcon type="primary"/>
        </div>
        <p className={`${styles.card__title} text text_type_main-default`}>{name}</p>
      </Link>
    </li>
  );
};

export default ProductsItem;