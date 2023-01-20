import FeedOrderDetails from "../components/feed/feed-order-details/FeedOrderDetails";
import {TWsOrder} from "../services/types";
import {useParams} from "react-router-dom";
import styles from "../components/ingredient-details/ingredient-details.module.scss";
import {NotFoundPage} from "./not-found";
import {useEffect} from "react";
import {WS_CONNECTION_START, WS_CONNECTION_STOP} from "../services/actions/feed";
import {WS_URL} from "../utils/burger-api";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export const FeedOrderPage = () => {
  const {number} = useParams<{ number?: string }>();
  const {feed} = useAppSelector(store => store.ws);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: {
        url: `${WS_URL}/all`,
        secure: false
      }
    });
    return (() => {
      dispatch({type: WS_CONNECTION_STOP})
    })
  }, [dispatch]);

  const orderItem: TWsOrder | null | undefined = feed && feed.find(order => order.number.toString() === number);

  return (
    orderItem ? (
      <div className={`${styles.page} mt-30`}>
        <FeedOrderDetails orders={feed} />
      </div>
    ) : (
      <NotFoundPage/>
    )
  )
}