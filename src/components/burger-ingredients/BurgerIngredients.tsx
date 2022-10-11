import React, {useState, useEffect} from 'react';

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
        <ProductsList data={products} showModal={handleOpenModal} title="Булки" type="bun"/>
        <ProductsList data={products} showModal={handleOpenModal} title="Соусы" type="sauce"/>
        <ProductsList data={products} showModal={handleOpenModal} title="Начинки" type="main"/>
      </div>
      {isOpen &&
        <Modal headerTitle="Детали ингредиента" show={isOpen} onClose={handleCloseModal}>
          {selectedItem && <IngredientDetails item={selectedItem} />}
        </Modal>
      }
    </div>
  );
}

export default BurgerIngredients;