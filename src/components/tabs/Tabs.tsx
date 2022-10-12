import React, {useState} from "react";
import styles from "./tabs.module.scss";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
  const [current, setCurrent] = useState('bun');

  const onTabClick = (current: string) => {
    setCurrent(current);
    const element = document.getElementById(current);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>Булки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>Соусы</Tab>
      <Tab value="main" active={current === 'main'} onClick={onTabClick}>Начинки</Tab>
    </div>
  );
}

export default Tabs;