import styles from "./order-details.module.scss";
import done from "../../images/done.png";

const OrderDetails = () => {
  return (
    <div className={`${styles.order} mt-4 mb-8`}>
      <div className="order__number text text_type_digits-large">034536</div>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className={`${styles.order__icon} mb-15`}>
        <img src={done} alt=""/>
      </div>
      <span className="text text_type_main-default mb-2">Ваш заказ начали готовить</span>
      <span className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</span>
    </div>
  );
}

export default OrderDetails;