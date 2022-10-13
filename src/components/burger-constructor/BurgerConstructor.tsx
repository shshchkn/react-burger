import React, {useContext, useEffect, useMemo, useState} from 'react';

import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.scss';

import {DataContext} from "../../services/appContext";

import OrderDetails from '../order-details/OrderDetails';
import Ingredient from "../ingredient/Ingredient";
import Modal from "../modal/Modal";

const BurgerConstructor = () => {

  const data: any = useContext(DataContext);

  useEffect(() => console.log(data), []);

  const bun = useMemo(() => (
    data && data.find((item: { type: string; }) => item.type === 'bun')
  ), [data]);

  const items = useMemo(() => (
    data && data.filter((item: { type: string; }) => item.type !== 'bun')
  ), [data]);

  const total = useMemo(() => (
    items && items.reduce((sum: number, current: { price: number; }) => sum + current.price, 0)
  ), [items]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

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
          {/*@ts-ignore*/}
          {items && items.map(item => <Ingredient key={item._id} {...item}/>)}
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
          <p className='text text_type_digits-medium mr-2'>{bun && bun.price * 2 + total}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={handleOpenModal}>Оформить заказ</Button>
      </div>
      {isOpen &&
        <Modal show={isOpen} onClose={handleCloseModal} headerTitle={''}>
          <OrderDetails />
        </Modal>
      }
    </div>
  );
}

export default BurgerConstructor;