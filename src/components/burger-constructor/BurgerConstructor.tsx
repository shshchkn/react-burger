import {useCallback} from 'react';

import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.scss';

import {TIngredient} from '../../utils/types';

import OrderDetails from '../order-details/OrderDetails';
import Ingredient from "../ingredient/Ingredient";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {useDrop} from "react-dnd";
import classNames from "classnames/bind";

import {v4 as uuidv4} from 'uuid';

import {
  ADD_CART_BUN,
  ADD_CART_ITEM,
  UPDATE_CART,
  CLEAN_CART
} from '../../services/actions/cart';
import { totalPriceSelector } from '../../services/actions'
import { getOrderedItems, CLOSE_ORDER, } from '../../services/actions/order';
import {getCookie} from "../../utils/helpers";
import {useNavigate} from "react-router-dom";

const BurgerConstructor = () => {
  const token = getCookie('accessToken');
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const {cartBun, cartItems} = useSelector((store: RootState) => store.cart);
  const {orderNumber} = useSelector((store: RootState) => store.order);
  const {isLoggedIn} = useSelector((store: RootState) => store.user);
  const cartTotalPrice = useSelector(totalPriceSelector);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    const dragCard = cartItems[dragIndex];
    const newCards = [...cartItems];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    dispatch({type: UPDATE_CART, cartItems: newCards});
  }, [cartItems, dispatch]);

  const handleSetOrder = useCallback(() => {
    if (token) {
      cartBun && dispatch(getOrderedItems([cartBun, ...cartItems, cartBun]));
    } else {
      navigate('/login');
    }
  }, [
    cartBun,
    cartItems,
    dispatch,
    token,
    isLoggedIn,
    navigate
  ]);

  const handleCloseModal = () => {
    dispatch({type: CLOSE_ORDER});
    dispatch({type: CLEAN_CART});
  };

  const [{isHover}, dropTarget] = useDrop({
    accept: 'items',
    drop(item: TIngredient) {
      item.type !== 'bun'
        ? dispatch({
          type: ADD_CART_ITEM,
          item: {...item, dragId: uuidv4(), count: 2}
        })
        : dispatch({
          type: ADD_CART_BUN,
          item: {...item, dragId: uuidv4()}
        });
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const renderItems = useCallback(
  (item: TIngredient, index: number) => {
    return (
      <Ingredient
        key={item.dragId}
        index={index}
        item={item}
        moveCard={moveCard}
      />
    )
  }, [moveCard]);

  let cx = classNames.bind(styles);
  const dropZoneClass = cx('dropzone', {
    'isHover': isHover,
    'isEmpty': !cartItems.length && !cartBun
  });

  return (
    <div className={`dashboard__constructor ${styles.board}`}>
      <div
        className={dropZoneClass}
        ref={dropTarget}>
        {cartBun &&
          (<div className={`board__top ${styles.bun} ml-8`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${cartBun.name} (верх)`}
              price={cartBun.price}
              thumbnail={cartBun.image_mobile}
            />
          </div>)}

        {!cartItems.length && !cartBun && (<p className={styles.dropzoneNotice}>Перетащите ингредиенты</p>)}

        <div className={`board__body ${styles.items} custom-scroll mt-4 mb-4`}>
          {cartItems && cartItems.map((item: TIngredient, id: number) => renderItems(item, id))}
        </div>

        {cartBun &&
          (<div className={`board__bottom ml-8 ${styles.bun}`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${cartBun.name} (низ)`}
              price={cartBun.price}
              thumbnail={cartBun.image_mobile}
            />
          </div>)}
      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={`${styles.total__price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{cartTotalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={handleSetOrder} disabled={!cartBun}>Оформить заказ</Button>
      </div>
      {
        orderNumber &&
        (<Modal
          onClose={handleCloseModal}
          headerTitle={''}
        >
          <OrderDetails orderNumber={orderNumber}/>
        </Modal>)
      }
    </div>
  );
}

export default BurgerConstructor;