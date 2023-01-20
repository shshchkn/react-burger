import {useEffect, useMemo, useRef, useState} from 'react';
import ProductsList from '../products-list/ProductsList';
import styles from './burger-ingredients.module.scss';
import {TIngredient} from "../../services/types";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useInView} from "react-intersection-observer";
import {useAppSelector} from "../../hooks/redux";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState<string>('bun');
  const scrollRef = useRef<HTMLDivElement>(null);
  const {items} = useAppSelector(store => store.ingredients);

  const onTabClick = (current: string) => {
    setCurrent(current);
    const element = document.getElementById(current);
    element && element?.scrollIntoView({behavior: 'smooth'});
  };

  const inViewOptions = {
    threshold: 0.2,
    root: scrollRef.current,
    rootMargin: '0px 0px 90% 0px'
  }

  const [bunsRef, inViewBuns] = useInView(inViewOptions);
  const [mainsRef, inViewFilling] = useInView(inViewOptions);
  const [saucesRef, inViewSauces] = useInView(inViewOptions);

  useEffect(() => {
    if (inViewBuns) {
      setCurrent("bun");
    } else if (inViewSauces) {
      setCurrent("sauce");
    } else if (inViewFilling) {
      setCurrent("main");
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

  const buns = useMemo(() => items && items.filter((item: TIngredient) => item.type === 'bun'), [items]);
  const sauces = useMemo(() => items && items.filter((item: TIngredient) => item.type === 'sauce'), [items]);
  const mains = useMemo(() => items && items.filter((item: TIngredient) => item.type === 'main'), [items]);

  return (
    <div className={`dashboard__ingredients ${styles.ingredients} pt-10`}>
      <h1 className={`${styles.ingredients__title} mb-5`}>Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>Булки</Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>Соусы</Tab>
        <Tab value="main" active={current === 'main'} onClick={onTabClick}>Начинки</Tab>
      </div>
      <div className={`${styles.ingredients__section} custom-scroll mt-10`} ref={scrollRef}>
        <div ref={bunsRef}>
          <ProductsList data={buns} title="Булки" type="bun"/>
        </div>
        <div ref={saucesRef}>
          <ProductsList data={sauces} title="Соусы" type="sauce"/>
        </div>
        <div ref={mainsRef}>
          <ProductsList data={mains} title="Начинки" type="main"/>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;