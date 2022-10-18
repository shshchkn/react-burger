import React, {useEffect, useState} from 'react';

import styles from './app.module.scss';
import loader from '../../images/loader.gif';

import {API_URL, apiRequest} from '../../utils/burger-api';

import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

import {DataContext} from "../../services/appContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});


  useEffect(() => {
    const getProducts = () => apiRequest(`${API_URL}/ingredients`);
    getProducts()
      .then(res => setData({...data, products: res.data}))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <AppHeader/>
        <main className={styles.main}>
          <div className="container">
            <div className={styles.dashboard}>
                { isLoading ? (
                  <div className={styles.loading}>
                    <img src={loader} alt="Logo"/>
                  </div>
                ) : (
                  <DataContext.Provider value={{data, setData}}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </DataContext.Provider>
                )}
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
