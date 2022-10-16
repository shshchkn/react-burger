import React, {useContext, useEffect, useMemo, useReducer, useState} from 'react';

import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.scss';

import {API_URL, apiRequest} from '../../utils/burger-api';

import {DataContext} from "../../services/appContext";

import {TIngredient} from '../../utils/types';

import OrderDetails from '../order-details/OrderDetails';
import Ingredient from "../ingredient/Ingredient";
import Modal from "../modal/Modal";

const calculateTotalPrice = (items: Array<any> | null, bun: { price: number }) => {
  const itemsPrice = items && items.reduce((sum: number, current: { price: number }) => sum + current.price, 0);
  return {total: (bun.price * 2 + itemsPrice)}
}

const setTotalPriceReducer = (state: { total: number }, action: { type: string }) => {
  if (action.type === 'set_total_price') {
    return {total: state.total};
  }
  throw Error('Unknown action: ' + action.type);
}

const BurgerConstructor = () => {
  const {data, setData}: any = useContext(DataContext);
  const products = data.products;

  const bun = useMemo(() => (
    products && products.find((item: { type: string }) => item.type === 'bun')
  ), [products]);

  const items = useMemo(() => (
    products && products.filter((item: { type: string }) => item.type !== 'bun')
  ), [products]);

  const [totalPrice, setTotalPrice] = useReducer(setTotalPriceReducer, calculateTotalPrice(items, bun), undefined);

  useEffect(() => {
    setTotalPrice({type: "set_total_price"});
  }, [items]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleSetOrder = () => {
    const getOrder = () => apiRequest(`${API_URL}/orders`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({'ingredients': products.map((item: { _id: string }) => item._id)})
    });

    getOrder()
      .then(res => res.success ? setData({...data, orderNumber: res.order.number}) : setData({...data, orderNumber: 0}))
      .catch(err => console.log(err));

    handleOpenModal();
  }

  const {total} = totalPrice;

  return (
    <div className={`dashboard__constructor ${styles.board}`}>
      <div className={styles.dropzone}>
        {
          bun &&
          <div className={`board__top ${styles.bun} ml-8 mb-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </div>
        }
        <div className={`board__body ${styles.items} custom-scroll mb-4`}>
          {items && items.map((item: TIngredient) => <Ingredient key={item._id} {...item}/>)}
        </div>
        {
          bun &&
          <div className={`board__bottom ml-8 ${styles.bun}`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </div>
        }
      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={`${styles.total__price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{total}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={handleSetOrder}>Оформить заказ</Button>
      </div>
      {isOpen && data.orderNumber &&
        (<Modal show={isOpen} onClose={handleCloseModal} headerTitle={''}>
          <OrderDetails orderNumber={data.orderNumber}/>
        </Modal>)
      }
    </div>
  );
}

export default BurgerConstructor;