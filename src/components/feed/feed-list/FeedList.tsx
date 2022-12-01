import styles from './feed-list.module.scss';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const FeedList = () => {
  return (
    <div className={`${styles.wrapper} custom-scroll`}>
      <ul className={styles.orders}>
        <li className='ordersItem order mb-4'>
          <a href="#" className={styles.orderLink}>
            <div className="orderRow mb-6">
              <span className="orderNumber text_color_primary">#034535</span>
              <span className="orderTime text_color_inactive">Сегодня, 16:20</span>
            </div>
            <div className="orderRow mb-6">
              <span className="orderName text_color_primary">Death Star Starship Main бургер</span>
            </div>
            <div className={styles.orderRow}>
              <div className={styles.orderList}>
                <div className={styles.orderListItem}>
                  <div className={styles.orderListItemInner}>1</div>
                </div>
                <div className={styles.orderListItem}>
                  <div className={styles.orderListItemInner}>2</div>
                </div>
                <div className={styles.orderListItem}>
                  <div className={styles.orderListItemInner}>3</div>
                </div>
              </div>
              <span className={`${styles.orderTotal} ml-6`}>
                <span className="text text_type_digits-default text_color_primary mr-2">480</span>
                <CurrencyIcon type="primary"/>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FeedList;