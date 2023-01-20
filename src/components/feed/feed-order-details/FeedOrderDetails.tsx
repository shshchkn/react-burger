import {useParams} from "react-router-dom";
import {TIngredient, TWsOrder} from "../../../services/types";
import styles from './feed-order-details.module.scss';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {renderOrderStatus, setOrderTime} from "../../../utils/helpers";
import {useAppSelector} from "../../../hooks/redux";

const FeedOrderDetails = ({orders}: {orders: TWsOrder[] | null}) => {
  const {number} = useParams<{ number?: string }>();
  const {items} = useAppSelector(store => store.ingredients);

  const orderItem: TWsOrder | null | undefined = orders && orders.find(order => order.number.toString() === number);
  const orderIngredients = orderItem && orderItem.ingredients.map((id: string) => {
    return items.filter(item => item._id === id);
  }).flat();

  return (
    <div className="w-100">
      <p className={`${styles.orderNumber} text text_type_digits-default text-center mb-10`}>#{orderItem?.number}</p>
      <h2 className="text text_type_main-medium mb-3 text-left">{orderItem?.name}</h2>
      {orderItem?.status && (
        <p className="text text_type_main-default text_color_success mb-15 text-left">
          {renderOrderStatus(orderItem.status)}
        </p>
      )}
      <p className="text text_type_main-medium mb-6 text-left">Состав:</p>
      <div className={`${styles.wrapper} custom-scroll mb-10`}>
        <ul className={styles.list}>
          {orderIngredients && orderIngredients
            .filter((item: TIngredient, index: number, arr: TIngredient[]) => index === arr.indexOf(item))
            .map((item: TIngredient, index: number) => (
              <li className={`${styles.listItem} mb-4 mr-6`} key={index}>
                <div className={`${styles.listItemImage} mr-4`}>
                  <div className={styles.listItemImageWrapper}>
                    <img src={item.image_mobile} alt={item.name} />
                  </div>
                </div>
                <p className={`${styles.listItemTitle} mr-4`}>{item.name}</p>
                <div className={`${styles.listItemPrice} text text_type_digits-default`}>
                  <p>{orderIngredients.reduce((count: number, curr: TIngredient) => {
                    return curr._id === item._id ? count + 1 : count;
                  }, 0)}</p>
                  <span>&nbsp;x&nbsp;</span>
                  <p className="mr-2">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={styles.total}>
        <span className="text text_type_main-default text_color_inactive">
          {setOrderTime(orderItem?.createdAt)}
        </span>
        <p className={styles.totalPrice}>
          <span className="text text_type_digits-default mr-2">
            {orderIngredients && orderIngredients.reduce((curr: number, item: TIngredient) => item.price + curr, 0)}
          </span>
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </div>
  );
}

export default FeedOrderDetails;