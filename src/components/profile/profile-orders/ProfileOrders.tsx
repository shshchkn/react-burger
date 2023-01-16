import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../services/types";
import {useEffect} from "react";
import {WS_CONNECTION_START, WS_CONNECTION_STOP} from "../../../services/actions/feed";
import {WS_URL} from "../../../utils/burger-api";
import FeedList from "../../feed/feed-list/FeedList";

const ProfileOrders = () => {
  const {orders} = useSelector((store: RootState) => store.ws);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: {
        url: WS_URL,
        secure: true
      }
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_STOP
      });
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(orders)
  }, [orders]);

  return <FeedList />;
}

export default ProfileOrders;