import React, {useEffect, useState} from 'react';

import styles from './app.module.scss';
import loader from '../../images/loader.gif';

import checkApiResponse from '../../utils/burger-api';

import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

const API_URL = 'https://norma.nomoreparties.space/api';

const App = () => {
  const [state, setState] = useState({
    data: null,
    loading: true
  });

  useEffect(() => {
    const getProducts = () => fetch(`${API_URL}/ingredients`).then(checkApiResponse);
    getProducts()
      .then(res => setState({...state, data: res.data, loading: false}))
      .catch(err => console.log(err))
      // .finally(() => setState({...state, loading: false}));
  }, []);

  const {data, loading} = state;

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <AppHeader/>
        <main className={styles.main}>
          <div className="container">
            <div className={styles.dashboard}>
              {
                loading
                ? (<div className={styles.loading}>
                    <img src={loader} alt=""/>
                  </div>)
                : (<>
                    <BurgerIngredients products={data} title="Соберите бургер"/>
                    <BurgerConstructor products={data} />
                  </>)
              }
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
