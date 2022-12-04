import Feed from "../components/feed/Feed";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {WS_CONNECTION_START, WS_CONNECTION_STOP} from "../services/actions/feed";
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
    // return () => {
    //   dispatch({
    //     type: WS_CONNECTION_STOP,
    //     payload: 1000
    //   });
    // };
  }, [dispatch]);
  return <Feed/>;
};