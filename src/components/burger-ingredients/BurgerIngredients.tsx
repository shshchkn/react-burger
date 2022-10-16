import React, {useState, useEffect, useMemo, useContext} from 'react';

import Tabs from "../tabs/Tabs";
import ProductsList from '../products-list/ProductsList';
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";

import {DataContext} from "../../services/appContext";

import styles from './burger-ingredients.module.scss';

const BurgerIngredients = () => {
  const {data}: any = useContext(DataContext);
  const products = data.products;

  // @ts-ignore
  const buns = useMemo(() => products && products.filter(item => item.type === 'bun'), [products]);
  // @ts-ignore
  const sauces = useMemo(() => products && products.filter(item => item.type === 'sauce'), [products]);
  // @ts-ignore
  const mains = useMemo(() => products && products.filter(item => item.type === 'main'), [products]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item: null) => setSelectedItem(item);
  const handleCloseModal = () => setSelectedItem(null);

  useEffect(() => {
    selectedItem && setIsOpen(true);

    return () => {
      selectedItem && setIsOpen(false);
    }
  }, [selectedItem]);

  return (
    <div className={`dashboard__ingredients ${styles.ingredients} pt-10`}>
      <h1 className={`${styles.ingredients__title} mb-5`}>Соберите бургер</h1>
      <Tabs />
      <div className={`${styles.ingredients__section} custom-scroll mt-10`}>
        <ProductsList data={buns} showModal={handleOpenModal} title="Булки" type="bun"/>
        <ProductsList data={sauces} showModal={handleOpenModal} title="Соусы" type="sauce"/>
        <ProductsList data={mains} showModal={handleOpenModal} title="Начинки" type="main"/>
      </div>
      {isOpen &&
      selectedItem &&
      (<Modal headerTitle="Детали ингредиента" show={isOpen} onClose={handleCloseModal}>
        <IngredientDetails type={selectedItem} />
      </Modal>)}
    </div>
  );
}

export default BurgerIngredients;