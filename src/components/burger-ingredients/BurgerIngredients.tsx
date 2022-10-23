import React, {useEffect, useMemo} from 'react';

import Tabs from "../tabs/Tabs";
import ProductsList from '../products-list/ProductsList';
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";

import styles from './burger-ingredients.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getItems, REMOVE_INGREDIENT_DETAILS} from "../../services/actions";
import {RootState} from "../../index";
import {TIngredient} from "../../utils/types";

const BurgerIngredients = () => {
  const dispatch: any = useDispatch();
  const {items} = useSelector((store: RootState) => store.ingredients);
  const {openModal, details} = useSelector((store: RootState) => store.ingredientDetails);

  useEffect(() => {
    !items.length && dispatch(getItems());
  }, [dispatch, items]);

  const buns = useMemo(() => items && items.filter((item: TIngredient) => item.type === 'bun'), [items]);
  const sauces = useMemo(() => items && items.filter((item: TIngredient) => item.type === 'sauce'), [items]);
  const mains = useMemo(() => items && items.filter((item: TIngredient) => item.type === 'main'), [items]);

  const handleCloseModal = () => dispatch({type: REMOVE_INGREDIENT_DETAILS});

  return (
    <div className={`dashboard__ingredients ${styles.ingredients} pt-10`}>
      <h1 className={`${styles.ingredients__title} mb-5`}>Соберите бургер</h1>
      <Tabs />
      <div className={`${styles.ingredients__section} custom-scroll mt-10`}>
        <ProductsList data={buns} title="Булки" type="bun"/>
        <ProductsList data={sauces} title="Соусы" type="sauce"/>
        <ProductsList data={mains} title="Начинки" type="main"/>
      </div>
      {
        openModal && details &&
        (<Modal headerTitle="Детали ингредиента" show={openModal} onClose={handleCloseModal}>
          <IngredientDetails />
        </Modal>)
      }
    </div>
  );
}

export default BurgerIngredients;