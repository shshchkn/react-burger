import React, {ReactPropTypes} from 'react';
import {Tab, Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerIngredients from './burger-ingredients.module.scss';

import data from '../../utils/data';

const TabsBlock = () => {
  const [current, setCurrent] = React.useState('bun');

  return (
    <div className={burgerIngredients.ingredients__tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
      <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
    </div>
  );
}

type IngredientProps = {
  _id: string,
  name: string,
  image: string,
  price: number,
  count: number
}

const Ingredient = ({_id, name, image, price, count}: IngredientProps) => {
  const handleCardClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(`Clicked: ${name}`);
  }
  return (
    <li className={`${burgerIngredients.ingredients__list_item} ${burgerIngredients.card}`}>
      <a href="#" className={burgerIngredients.card__link} title={name} onClick={handleCardClick}>
        {count && <Counter count={count} size="default"/>}
        <div className={`${burgerIngredients.card__image} mb-2 ml-4 mr-4`}>
          <img src={image} alt={name}/>
        </div>
        <div className={`${burgerIngredients.card__price} mb-2`}>
          <span className="text text_type_digits-default mr-2">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${burgerIngredients.card__title} text text_type_main-default`}>{name}</p>
      </a>
    </li>
  );
}

type IngredientsProps = {
  title: string,
  type: string,
}

const Ingredients = ({title, type}: IngredientsProps) => {
  return (
    <div className="ingredients__section_block ingredients__block mb-10" id={type}>
      <h2 className="ingredients__block_title text text_type_main-medium mb-6">{title}</h2>
      <ul className={`ingredients__block_list ${burgerIngredients.ingredients__list}`} role="list">
        {data.map((item) =>
          (item.type === type && <Ingredient key={item._id} count={1} {...item}/>)
        )}
      </ul>
    </div>
  );
}

type BurgerIngredientsProps = {
  title: string
}

const BurgerIngredients = ({title}: BurgerIngredientsProps) => {
  return (
    <div className={`dashboard__ingredients ${burgerIngredients.ingredients} pt-10`}>
      <h1 className={`${burgerIngredients.ingredients__title} mb-5`}>{title}</h1>
      <TabsBlock />
      <div className={`${burgerIngredients.ingredients__section} custom-scroll mt-10`}>
        <Ingredients title="Булки" type="bun"/>
        <Ingredients title="Соусы" type="sauce"/>
        <Ingredients title="Начинки" type="main"/>
      </div>
    </div>
  );
}

export default BurgerIngredients;