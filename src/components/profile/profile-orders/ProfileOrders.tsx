import {useDispatch, useSelector} from "react-redux";
import {RootState, TWsOrder} from "../../../services/types";
import {useEffect, useMemo, useState} from "react";
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

  const sortOrders = useMemo(() => {
    return orders && orders.slice().reverse();
  }, [orders]);

  return <FeedList orders={sortOrders} />;
}

export default ProfileOrders;