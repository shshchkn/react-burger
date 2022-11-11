import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import styles from './app.module.scss';
import ModalSwitch from "../modal-switch/ModalSwitch";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../index";
import {useEffect} from "react";
import {getItems} from "../../services/actions/ingredients";
import {getUserRequest} from "../../services/actions/user";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const {user} = useSelector((store: RootState) => store.user);
  const {items} = useSelector((store: RootState) => store.ingredients);

  console.log(user)

  useEffect(() => {
    user === null && dispatch(getUserRequest());
    !items.length && dispatch(getItems());
  }, [dispatch, user, items]);

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
