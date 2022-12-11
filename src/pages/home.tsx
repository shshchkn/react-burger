import {useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import styles from "../components/app/app.module.scss";
import loader from "../images/loader.gif";
import {RootState} from "../services/types";
import {Loader} from "../ui/loader/Loader";

export const HomePage = () => {
  const {itemsRequest, itemsFailed} = useSelector((store: RootState) => store.ingredients);

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