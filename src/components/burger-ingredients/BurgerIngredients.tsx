import React, {useState, useEffect, useMemo} from 'react';
import {Tab, Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import ProductsList from '../products-list/ProductsList';

import Modal from "../modal/Modal";

import styles from './burger-ingredients.module.scss';

const TabsBlock = () => {
  const [current, setCurrent] = useState('bun');

  const onTabClick = (current: string) => {
    setCurrent(current);
    const element = document.getElementById(current);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.ingredients__tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>Булки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>Соусы</Tab>
      <Tab value="main" active={current === 'main'} onClick={onTabClick}>Начинки</Tab>
    </div>
  );
}


type BurgerIngredientsTypes = {
  title: string,
  products?: Array<any> | null
}

const BurgerIngredients = ({title, products}: BurgerIngredientsTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={`dashboard__ingredients ${styles.ingredients} pt-10`}>
      <h1 className={`${styles.ingredients__title} mb-5`}>{title}</h1>
      <TabsBlock />
      <div className={`${styles.ingredients__section} custom-scroll mt-10`}>
        <ProductsList data={products} showModal={handleOpenModal} title="Булки" type="bun"/>
        <ProductsList data={products} showModal={handleOpenModal} title="Соусы" type="sauce"/>
        <ProductsList data={products} showModal={handleOpenModal} title="Начинки" type="main"/>
      </div>
      <Modal headerTitle="Детали ингредиента" show={isOpen} onClose={handleCloseModal}>
        <div className="card card_modal">
          <div className="card__image">
          </div>
          <h2 className="card__title">Биокотлета из марсианской Магнолии</h2>
          <div className="card__info">
            <div className="card__info_item">
              <span className="card__info_name">Калории,ккал</span>
              <span className="card__info_value">Калории,ккал</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BurgerIngredients;