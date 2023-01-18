import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../services/types";
import {useEffect} from "react";
import {ORDERS_CONNECTION_START, ORDERS_CONNECTION_STOP} from "../../../services/actions/orders";
import {WS_URL} from "../../../utils/burger-api";
import FeedList from "../../feed/feed-list/FeedList";

const ProfileOrders = () => {
  const {orders} = useSelector((store: RootState) => store.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECTION_START,
      payload: {
        url: WS_URL,
        secure: true
      }
    });
  }, [dispatch]);

  useEffect(() => {
    console.log(orders)
  }, [orders]);

  return <FeedList orders={orders} />;
}

export default ProfileOrders;