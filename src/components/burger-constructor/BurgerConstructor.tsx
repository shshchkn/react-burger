import React, {ReactPropTypes} from 'react';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructor from './burger-constructor.module.scss';

import data from '../../utils/data';

type IngredientsItemProps = {
  name: string;
  price: number,
  image_mobile: string
}

const IngredientsItem = (item: IngredientsItemProps) => {
  return (
    <div className={burgerConstructor.item}>
      <div className={`${burgerConstructor.item__drag} mr-2`}>
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

const BurgerConstructor = () => {

  const bun = data.filter(item => item.type === 'bun')[0];
  const items = data.filter(item => item.type !== 'bun');

  return (
    <div className={`dashboard__constructor ${burgerConstructor.board}`}>
      <div className={burgerConstructor.dropzone}>
        <div className={`board__top ${burgerConstructor.bun} ml-8 mb-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>
        <div className={`board__body ${burgerConstructor.items} custom-scroll mb-4`}>
          {items.map(item => <IngredientsItem key={item._id} {...item}/>)}
        </div>
        <div className={`board__bottom ml-8 ${burgerConstructor.bun}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>
      </div>
      <div className={`${burgerConstructor.total} mt-10`}>
        <div className={`${burgerConstructor.total__price} mr-10`}>
          <p className='text text_type_digits-medium mr-2'>610</p>
          <CurrencyIcon type='primary'/>
        </div>
        <Button type="primary" size="large" htmlType="button">Оформить заказ</Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;