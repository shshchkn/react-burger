import React, {useCallback, useEffect, useMemo, useReducer, useState} from 'react';

import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.scss';

import {TIngredient, TIngredientDetails} from '../../utils/types';

import OrderDetails from '../order-details/OrderDetails';
import Ingredient from "../ingredient/Ingredient";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {useDrop} from "react-dnd";

import {v4 as uuidv4} from 'uuid';

import {ADD_CART_BUN, ADD_CART_ITEM, UPDATE_CART} from '../../services/actions';

// const calculateTotalPrice = (products: TIngredientDetails, bun: { price: number }) => {
//   const itemsPrice = products && products.reduce((sum: number, current: { price: number }) => sum + current.price, 0);
//   return {total: (bun.price * 2 + itemsPrice)}
// }

// const setTotalPriceReducer = (state: { total: number }, action: { type: string }) => {
//   if (action.type === 'set_total_price') {
//     return {total: state.total};
//   }
//   throw Error('Unknown action: ' + action.type);
// }

const BurgerConstructor = () => {
  const dispatch: any = useDispatch();
  const {cartBun, cartItems} = useSelector((store: RootState) => store.cart);

  // console.log(cartItems)

  // const [totalPrice, setTotalPrice] = useReducer(setTotalPriceReducer, calculateTotalPrice(items, bun), undefined);

  // useEffect(() => {
  //   setTotalPrice({type: "set_total_price"});
  // }, [used]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  // const handleSetOrder = () => {
  //   const getOrder = () => apiRequest(`${API_URL}/orders`, {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json"},
  //     body: JSON.stringify({'ingredients': products.map((item: { _id: string }) => item._id)})
  //   });
  //
  //   getOrder()
  //     .then(res => res.success ? setData({...data, orderNumber: res.order.number}) : setData({...data, orderNumber: 0}))
  //     .catch(err => console.log(err));
  //
  //   handleOpenModal();
  // }

  const [{isHover}, dropTarget] = useDrop({
    accept: 'items',
    drop(item: TIngredient) {
      item.type !== 'bun'
        ? dispatch({
          type: ADD_CART_ITEM,
          item: {...item, dragId: uuidv4()}
        })
        : dispatch({
          type: ADD_CART_BUN,
          item: {...item, dragId: uuidv4()}
        })
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    const dragCard = cartItems[dragIndex];
    const newCards = [...cartItems];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);

    console.log(dragIndex, hoverIndex, cartItems, newCards)

    dispatch({ type: UPDATE_CART, cartItems: newCards });
  }, [cartItems, dispatch]);

  const renderItems = useCallback(
  (item: TIngredient, index: number) => {
    return (
      <Ingredient
        key={item.dragId}
        index={index}
        item={item}
        moveCard={moveCard}/>
    )
  }, []);

  return (
    <div className={`dashboard__constructor ${styles.board}`}>
      <div className={`${styles.dropzone} ${isHover ? styles.isHover : ''} ${!cartItems.length && !cartBun ? styles.isEmpty : ''}`} ref={dropTarget}>
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
          {/*<p className="text text_type_digits-medium mr-2">{total}</p>*/} <CurrencyIcon type="primary"/>
        </div>
        {/*<Button type="primary" size="large" htmlType="button" onClick={handleSetOrder}>Оформить заказ</Button>*/}
      </div>
      {/*{isOpen && data.orderNumber &&*/} {/*  (<Modal show={isOpen} onClose={handleCloseModal} headerTitle={''}>*/}
      {/*    <OrderDetails orderNumber={data.orderNumber}/>*/}
      {/*  </Modal>)*/} {/*}*/}
    </div>
  );
}

export default BurgerConstructor;