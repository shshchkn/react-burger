import React, {useEffect, useState} from 'react';
import {InfoIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app.module.scss';
import loader from './loader.gif';

import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

const dataUrl = 'https://norma.nomoreparties.space/api/ingredients';

class ErrorBoundary extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: boolean) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("Возникла ошибка!", error, info);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <section className={styles.error}>
          <span className={`${styles.error__icon} mb-4`}>
            <InfoIcon type="primary" />
          </span>
          <h1 className={`${styles.error__title} text text_type_main-medium mb-4`}>Что-то пошло не так :(</h1>
          <p className={`${styles.error__text} text text_type_main-default text_color_inactive`}>
            В приложении произошла ошибка. <br/>Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

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
