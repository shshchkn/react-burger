import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import styles from './app.module.scss';
import ModalSwitch from "../modal-switch/ModalSwitch";
import {useEffect} from "react";
import {getItems} from "../../services/actions/ingredients";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const App = () => {
  const dispatch = useAppDispatch();
  const {items} = useAppSelector(store => store.ingredients);

  useEffect(() => {
    !items.length && dispatch(getItems());
    console.log(items)
  }, [dispatch, items]);

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <Router>
          <AppHeader/>
          <main className={styles.main}>
            <div className="container">
              <ModalSwitch />
            </div>
          </main>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
