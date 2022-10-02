import React from 'react';

import app from './app.module.scss';

import AppHeader from '../header/Header';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

const App = () => {
  return (
    <div className={app.wrapper}>
      <AppHeader/>
      <main className={app.main}>
        <div className="container">
          <div className={app.dashboard}>
            <BurgerIngredients title="Соберите бургер"/>
            <BurgerConstructor />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
