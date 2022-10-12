import React, {useState, useEffect, useMemo} from 'react';

import Tabs from "../tabs/Tabs";
import ProductsList from '../products-list/ProductsList';
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";

import styles from './burger-ingredients.module.scss';

type BurgerIngredientsTypes = {
  title: string,
  products?: Array<any> | null,
}

const BurgerIngredients = ({title, products}: BurgerIngredientsTypes) => {
  const buns = useMemo(() => products && products.filter(item => item.type === 'bun'), [products]);
  const sauces = useMemo(() => products && products.filter(item => item.type === 'sauce'), [products]);
  const mains = useMemo(() => products && products.filter(item => item.type === 'main'), [products]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item: React.SetStateAction<null>) => setSelectedItem(item);
  const handleCloseModal = () => setSelectedItem(null);

  useEffect(() => {
    selectedItem && setIsOpen(true);

    return () => {
      selectedItem && setIsOpen(false);
    }
  }, [selectedItem])

  return (
    <div className={`dashboard__ingredients ${styles.ingredients} pt-10`}>
      <h1 className={`${styles.ingredients__title} mb-5`}>{title}</h1>
      <Tabs />
      <div className={`${styles.ingredients__section} custom-scroll mt-10`}>
        <ProductsList data={buns} showModal={handleOpenModal} title="Булки" type="bun"/>
        <ProductsList data={sauces} showModal={handleOpenModal} title="Соусы" type="sauce"/>
        <ProductsList data={mains} showModal={handleOpenModal} title="Начинки" type="main"/>
      </div>
      {isOpen && selectedItem &&
        <Modal headerTitle="Детали ингредиента" show={isOpen} onClose={handleCloseModal}>
          <IngredientDetails item={selectedItem} />
        </Modal>
      }
    </div>
  );
}

export default BurgerIngredients;