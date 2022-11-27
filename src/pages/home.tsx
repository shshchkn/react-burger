import {useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import styles from "../components/app/app.module.scss";
import loader from "../images/loader.gif";
import {RootState} from "../services/types";

export const HomePage = () => {
  const {itemsRequest, itemsFailed} = useSelector((store: RootState) => store.ingredients);

  const content =  itemsRequest || itemsFailed ? (
    <div className={styles.loading}>
      {itemsRequest ? (
        <img src={loader} alt="Logo"/>
      ) : (
        <p>Ошибка загрузки данных!</p>
      )}
    </div>
  ) : (
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients/>
      <BurgerConstructor/>
    </DndProvider>
  );

  return (
    <div className={styles.dashboard}>
      {content}
    </div>
  )
}