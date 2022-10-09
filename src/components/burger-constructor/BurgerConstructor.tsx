import React, {useMemo} from 'react';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.scss';

type IngredientsItemTypes = {
  name: string,
  price: number,
  image_mobile: string
}

const IngredientsItem = (item: IngredientsItemTypes) => {
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

type stylesTypes = {
  products?: Array<any> | null
}

const BurgerConstructor = ({products}: stylesTypes) => {
  const bun = useMemo(() => products && products!.find(item => item.type === 'bun'), [products]);
  const items = useMemo(() => products && products!.filter(item => item.type !== 'bun'), [products]);

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
          {items && items.map(item => <IngredientsItem key={item._id} {...item}/>)}
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
          <p className='text text_type_digits-medium mr-2'>610</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" htmlType="button">Оформить заказ</Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;