import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerIngredients from './burger-ingredients.module.scss';

const TabBlock = () => {
  const [current, setCurrent] = React.useState('one');

  return (
    <div className={burgerIngredients.ingredients__tabs}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
    </div>
  );
}

const BurgerIngredients = () => {
  return (
    <div className={`dashboard__ingredients ${burgerIngredients.ingredients} pt-10`}>
      <h1 className={`${burgerIngredients.ingredients__title} mb-5`}>Соберите бургер</h1>
      <TabBlock />
    </div>
  );
}

export default BurgerIngredients;