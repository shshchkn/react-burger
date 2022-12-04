import styles from './feed-total.module.scss';

const FeedTotal = () => {
  return (
    <div className={styles.total}>
      <div className={`${styles.orders} mb-15`}>
        <div className={styles.ordersColumn}>
          <h2 className="text text_type_main-medium text_color_primary mb-6">Готовы:</h2>
          <ul className={`${styles.list} custom-scroll`}>
            <li className="text text_type_digits-default text_color_success mb-2">034533</li>
            <li className="text text_type_digits-default text_color_success mb-2">034532</li>
            <li className="text text_type_digits-default text_color_success mb-2">034530</li>
            <li className="text text_type_digits-default text_color_success mb-2">034527</li>
            <li className="text text_type_digits-default text_color_success mb-2">034525</li>
          </ul>
        </div>
        <div className={styles.ordersColumn}>
          <h2 className="text text_type_main-medium text_color_primary mb-6">В работе:</h2>
          <ul className={`${styles.list} custom-scroll`}>
            <li className="text text_type_digits-default text_color_primary mb-2">034538</li>
            <li className="text text_type_digits-default text_color_primary mb-2">034541</li>
            <li className="text text_type_digits-default text_color_primary mb-2">034542</li>
          </ul>
        </div>
      </div>
      <div className="all mb-15">
        <h2 className="text text_type_main-medium text_color_primary">Выполнено за все время:</h2>
        <p className={`${styles.count} text text_type_digits-large text_color_primary`}>28 752</p>
      </div>
      <div className="all">
        <h2 className="text text_type_main-medium text_color_primary">Выполнено за сегодня:</h2>
        <p className={`${styles.count} text text_type_digits-large text_color_primary`}>138</p>
      </div>
    </div>
  );
}

export default FeedTotal;