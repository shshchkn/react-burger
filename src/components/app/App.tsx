import React, {useEffect, useState} from 'react';

import styles from './app.module.scss';
import loader from '../../images/loader.gif';

import checkApiResponse from '../../utils/burger-api';

import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

import {DataContext} from "../../services/appContext";

const API_URL = 'https://norma.nomoreparties.space/api';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProducts = () => fetch(`${API_URL}/ingredients`).then(checkApiResponse);
    getProducts()
      .then(res => setData(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <AppHeader/>
        <main className={styles.main}>
          <div className="container">
            <div className={styles.dashboard}>
                {
                  isLoading
                  ? <div className={styles.loading}>
                      <img src={loader} alt=""/>
                    </div>
                  : <>
                      <DataContext.Provider value={data}>
                        <BurgerIngredients title="Соберите бургер" />
                        <BurgerConstructor />
                      </DataContext.Provider>
                    </>
                }
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
