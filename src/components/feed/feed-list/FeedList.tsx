import styles from './feed-list.module.scss';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, TIngredient, TWsOrder} from "../../../services/types";
import {setOrderTime} from "../../../utils/helpers";

const FeedList = ({orders}: {orders: TWsOrder[] | null}) => {
  const location = useLocation();
  const {pathname} = useLocation();
  const {items} = useSelector((store: RootState) => store.ingredients);

  return (
    <div className={`${styles.wrapper} custom-scroll`}>
      <ul className={styles.orders}>
        {orders && orders.map((order: TWsOrder) => {
          if (!order.ingredients.length) return;
          const productsAll = order.ingredients.map((orderID: string) => {
            return items.filter((item: TIngredient) => item._id === orderID)
          }).flat();
          const products = productsAll.slice(0, 6);
          const productsPrice = productsAll.reduce((curr: number, item: TIngredient) => item.price + curr, 0);
          const productsCount = productsAll.length - 6;
          return (
            <li key={order._id} className='ordersItem order mb-4'>
              <Link
                to={{pathname: `${pathname}/${order._id}`}}
                state={{backgroundLocation: location}}
                className={styles.orderLink}>
                <div className={`${styles.orderRow} mb-6`}>
                  <span className="orderNumber text_color_primary">{order.number}</span>
                  <span className="orderTime text_color_inactive">{setOrderTime(order.createdAt)}</span>
                </div>
                <div className="orderRow mb-6">
                  <span className="orderName text text_type_main-medium text_color_primary">{order.name}</span>
                </div>
                <div className={styles.orderRow}>
                  <div className={styles.orderList}>
                    {products !== null &&
                      products.map((item:TIngredient, index: number) => {
                        return (
                          <div className={styles.orderListItem} key={index}>
                            <div className={styles.orderListItemInner}>
                              <img src={item.image_mobile} alt={item.name} />
                              {products[0]._id === item._id &&
                                productsCount > 0 && (
                                  <span className={`${styles.orderListItemExtra} text text_type_main-default text_color_active`}>
                                    +{productsCount}
                                  </span>
                                )
                              }
                            </div>
                          </div>
                        )
                      })}
                  </div>
                  <span className={`${styles.orderTotal} ml-6`}>
                    <span className="text text_type_digits-default text_color_primary mr-2">{productsPrice}</span>
                    <CurrencyIcon type="primary"/>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeedList;