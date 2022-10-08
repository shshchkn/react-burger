import React, {useState, useEffect, useMemo} from 'react';
import {Tab, Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/Modal";

import burgerIngredients from './burger-ingredients.module.scss';

import data from '../../utils/data';

const TabsBlock = () => {
  const [current, setCurrent] = useState('bun');

  const onTabClick = (current: string) => {
    setCurrent(current);
    const element = document.getElementById(current);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={burgerIngredients.ingredients__tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>Булки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>Соусы</Tab>
      <Tab value="main" active={current === 'main'} onClick={onTabClick}>Начинки</Tab>
    </div>
  );
}

type IngredientProps = {
  _id: string,
  name: string,
  image: string,
  price: number,
  count: number,
  showModal?: () => void
}

const Ingredient = ({_id, name, image, price, count, showModal}: IngredientProps) => {
  return (
    <li
      className={`${burgerIngredients.ingredients__list_item} ${burgerIngredients.card}`}
      onClick={showModal}
      title={name}>
      {count && <Counter count={count} size="default"/>}
      <div className={`${burgerIngredients.card__image} mb-2 ml-4 mr-4`}>
        <img src={image} alt={name}/>
      </div>
      <div className={`${burgerIngredients.card__price} mb-2`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${burgerIngredients.card__title} text text_type_main-default`}>{name}</p>
    </li>
  );
}

type IngredientsProps = {
  title: string,
  type: string,
  showModal?: () => void
}

const Ingredients = ({title, type, showModal}: IngredientsProps) => {
  return (
    <div className="ingredients__section_block ingredients__block mb-10" id={type}>
      <h2 className="ingredients__block_title text text_type_main-medium mb-6">{title}</h2>
      <ul className={`ingredients__block_list ${burgerIngredients.ingredients__list}`} role="list">
        {data.map((item) =>
          (item.type === type && <Ingredient showModal={showModal} key={item._id} count={1} {...item}/>)
        )}
      </ul>
    </div>
  );
}

type BurgerIngredientsProps = {
  title: string,
}

const BurgerIngredients = ({title}: BurgerIngredientsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={`dashboard__ingredients ${burgerIngredients.ingredients} pt-10`}>
      <h1 className={`${burgerIngredients.ingredients__title} mb-5`}>{title}</h1>
      <TabsBlock />
      <div className={`${burgerIngredients.ingredients__section} custom-scroll mt-10`}>
        <Ingredients showModal={handleOpenModal} title="Булки" type="bun"/>
        <Ingredients showModal={handleOpenModal} title="Соусы" type="sauce"/>
        <Ingredients showModal={handleOpenModal} title="Начинки" type="main"/>
      </div>
      <Modal show={isOpen} onClose={handleCloseModal}> MODAL </Modal>
    </div>
  );
}

export default BurgerIngredients;