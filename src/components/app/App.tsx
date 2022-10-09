import React, {useEffect, useState} from 'react';

import styles from './app.module.scss';
import loader from './loader.gif';

import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

const dataUrl = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
  const [state, setState] = useState({
    data: null,
    loading: true
  })

  useEffect(() => {
    setState({...state, loading: true});
    fetch(dataUrl)
      .then(res => res.json())
      .then(res => setState({...state, data: res.data, loading: false}))
      .catch(err => console.log(err));
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
                ? (
                    <div className={styles.loading}>
                      <img src={loader} alt=""/>
                    </div>
                  ) : (
                    <>
                      <BurgerIngredients products={data} title="Соберите бургер"/>
                      <BurgerConstructor products={data} />
                    </>
                  )
              }
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
