import Feed from "../components/feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {WS_CONNECTION_START} from "../services/actions/feed";
import {WS_URL} from "../utils/burger-api";

export const FeedPage = () => {
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

  return <Feed/>;
};