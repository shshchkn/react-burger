import FeedOrderDetails from "../components/feed/feed-order-details/FeedOrderDetails";
import {TWsOrder} from "../services/types";
import {useParams} from "react-router-dom";
import styles from "../components/ingredient-details/ingredient-details.module.scss";
import {NotFoundPage} from "./not-found";
import {useEffect} from "react";
import {WS_URL} from "../utils/burger-api";
import {ORDERS_CONNECTION_START} from "../services/actions/orders";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export const ProfileOrderPage = () => {
  const {number} = useParams<{ number?: string }>();
  const {orders} = useAppSelector(store => store.orders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECTION_START,
      payload: {
        url: `${WS_URL}`,
        secure: true
      }
    });
  }, [dispatch]);

  const orderItem: TWsOrder | null | undefined = orders && orders.find(order => order.number.toString() === number);

  return (
    orderItem ? (
      <div className={`${styles.page} mt-30`}>
        <FeedOrderDetails orders={orders} />
      </div>
    ) : (
      <NotFoundPage/>
    )
  )
}