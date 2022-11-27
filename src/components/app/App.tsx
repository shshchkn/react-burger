import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import styles from './app.module.scss';
import ModalSwitch from "../modal-switch/ModalSwitch";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../services/types";
import {useEffect} from "react";
import {getItems} from "../../services/actions/ingredients";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const {items} = useSelector((store: RootState) => store.ingredients);

  useEffect(() => {
    !items.length && dispatch(getItems());
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
