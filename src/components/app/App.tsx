import styles from './app.module.scss';
import loader from '../../images/loader.gif';

import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

import {useSelector} from "react-redux";
import {RootState} from "../../index";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const App = () => {
  const {itemsRequest, itemsFiled} = useSelector((store: RootState) => store.ingredients);

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <AppHeader/>
        <main className={styles.main}>
          <div className="container">
            <div className={styles.dashboard}>
              { itemsRequest || itemsFiled ? (
                <div className={styles.loading}>
                  {itemsRequest ? <img src={loader} alt="Logo"/> : <p>Ошибка загрузки данных!</p>}
                </div>
              ) : (
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider>
              )}
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
