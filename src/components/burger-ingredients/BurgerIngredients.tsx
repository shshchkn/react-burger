import {useEffect, useMemo, useRef, useState} from 'react';

import {useInView} from 'react-intersection-observer';

import ProductsList from '../products-list/ProductsList';
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";

import styles from './burger-ingredients.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getItems, REMOVE_INGREDIENT_DETAILS} from "../../services/actions";
import {RootState} from "../../index";
import {TIngredient} from "../../utils/types";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');

  const dispatch: any = useDispatch();
  const {items} = useSelector((store: RootState) => store.ingredients);
  const {openModal, details} = useSelector((store: RootState) => store.ingredientDetails);
  const listInnerRef = useRef(null);

  const onTabClick = (current: string) => {
    setCurrent(current);
    const element = document.getElementById(current);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className={styles.tabs}>
        <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>Булки</Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>Соусы</Tab>
        <Tab value="main" active={current === 'main'} onClick={onTabClick}>Начинки</Tab>
      </div>
      <div className={`${styles.ingredients__section} custom-scroll mt-10`} ref={listInnerRef}>
        <ProductsList data={buns} title="Булки" type="bun"/>
        <ProductsList data={sauces} title="Соусы" type="sauce"/>
        <ProductsList data={mains} title="Начинки" type="main"/>
      </div>
      {openModal && details &&
        (<Modal headerTitle="Детали ингредиента" show={openModal} onClose={handleCloseModal}>
          <IngredientDetails />
        </Modal>)}
    </div>
  );
}

export default BurgerIngredients;