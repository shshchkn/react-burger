import styles from './feed-total.module.scss';
import {useSelector} from "react-redux";
import {RootState, TWsOrder} from "../../../services/types";
import {useEffect, useMemo} from "react";

const FeedTotal = () => {
  const {feed, total, totalToday} = useSelector((store: RootState) => store.ws);

  const doneOrders = useMemo(() => feed && feed.filter((order: TWsOrder) => order.status === 'done'), [feed]);
  const pendingOrders = useMemo(() => feed && feed.filter((order: TWsOrder) => order.status === 'pending'), [feed]);

  return (
    <div className={styles.total}>
      <div className={`${styles.orders} mb-15`}>
        {doneOrders && (
          <div className={styles.ordersColumn}>
            <h2 className="text text_type_main-medium text_color_primary mb-6">Готовы:</h2>
            <ul className={`${styles.list} custom-scroll`}>
              {doneOrders.map((order: TWsOrder) => {
                return <li key={order._id} className="text text_type_digits-default text_color_success mb-2">{order.number}</li>;
              })}
            </ul>
          </div>
        )}
        {pendingOrders && (
          <div className={styles.ordersColumn}>
            <h2 className="text text_type_main-medium text_color_primary mb-6">В работе:</h2>
            <ul className={`${styles.list} custom-scroll`}>
              {pendingOrders.map(order => {
                return <li key={order._id} className="text text_type_digits-default text_color_primary mb-2">{order.number}</li>
              })}
            </ul>
          </div>
        )}
      </div>
      {total && (
        <div className="all mb-15">
          <h2 className="text text_type_main-medium text_color_primary">Выполнено за все время:</h2>
          <p className={`${styles.count} text text_type_digits-large text_color_primary`}>{total}</p>
        </div>
      )}
      {totalToday && (
        <div className="all">
          <h2 className="text text_type_main-medium text_color_primary">Выполнено за сегодня:</h2>
          <p className={`${styles.count} text text_type_digits-large text_color_primary`}>{totalToday}</p>
        </div>
      )}
    </div>
  );
}

export default FeedTotal;