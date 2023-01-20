import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import styles from "../components/app/app.module.scss";
import {Loader} from "../ui/loader/Loader";
import {useAppSelector} from "../hooks/redux";

export const HomePage = () => {
  const {itemsRequest, itemsFailed} = useAppSelector(store => store.ingredients);

  const content =  itemsRequest || itemsFailed ? (
    <Loader request={itemsRequest}/>
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