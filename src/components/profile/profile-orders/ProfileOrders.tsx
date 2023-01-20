import {useEffect, useMemo} from "react";
import {
  ORDERS_CONNECTION_CLOSED,
  ORDERS_CONNECTION_START,
} from "../../../services/actions/orders";
import {WS_URL} from "../../../utils/burger-api";
import FeedList from "../../feed/feed-list/FeedList";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

const ProfileOrders = () => {
  const {orders} = useAppSelector(store => store.orders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECTION_START,
      payload: {
        url: WS_URL,
        secure: true
      }
    });
    return () => {
      dispatch({type: ORDERS_CONNECTION_CLOSED})
    }
  }, [dispatch]);

  const sortOrders = useMemo(() => {
    return orders && orders.slice().reverse();
  }, [orders]);

  return <FeedList orders={sortOrders} />;
}

export default ProfileOrders;