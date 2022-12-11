import styles from "./loader.module.scss";
import loader from "../../images/loader.gif";

export const Loader = ({request}: {request: boolean}) => {
  return (
    <div className={styles.loading}>
      {request ? (
        <img src={loader} alt="Logo"/>
      ) : (
        <p>Ошибка загрузки данных!</p>
      )}
    </div>
  );
}