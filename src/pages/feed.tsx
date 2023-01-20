import Feed from "../components/feed/Feed";
import {useEffect} from "react";
import {WS_CONNECTION_START} from "../services/actions/feed";
import {WS_URL} from "../utils/burger-api";
import {useAppDispatch} from "../hooks/redux";

export const FeedPage = () => {
  const dispatch = useAppDispatch();

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