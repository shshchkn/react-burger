import styles from "./not-found.module.scss";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <div className={styles.notFound}>
      <h1 className="notFoundTitle text text_type_digits-large">404</h1>
      <p className="text text_type_main-medium text_color_inactive">
        страница не найдена
      </p>
      <Button type="secondary" size="medium" htmlType="button" onClick={goHome}>
        На главную
      </Button>
    </div>
  );
}

export default NotFound;