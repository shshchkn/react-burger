import FeedOrderDetails from "../components/feed/feed-order-details/FeedOrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {RootState, TWsOrder} from "../services/types";
import {useParams} from "react-router-dom";
import styles from "../components/ingredient-details/ingredient-details.module.scss";
import {NotFoundPage} from "./not-found";
import {useEffect} from "react";
import {WS_CONNECTION_START} from "../services/actions/feed";
import {WS_URL} from "../utils/burger-api";

export const FeedOrderPage = () => {
  const {id} = useParams<{ id?: string }>();
  const {orders} = useSelector((store: RootState) => store.ws);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: {
        url: `${WS_URL}/all`,
        secure: false
      }
    });
  }, [dispatch]);

  const orderItem: TWsOrder | null | undefined = orders && orders.find(order => order._id === id);

  useEffect(() => {
    console.log(orderItem)
  }, [orderItem]);


  return (
    orderItem ? (
      <div className={`${styles.page} mt-30`}>
        <FeedOrderDetails />
      </div>
    ) : (
      <NotFoundPage/>
    )
  )
}