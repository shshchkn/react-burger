import FeedList from "./feed-list/FeedList";
import FeedTotal from "./feed-total/FeedTotal";
import styles from './feed.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../services/types";
import {useEffect} from "react";

const Feed = () => {
  const {feed} = useSelector((store: RootState) => store.ws);

  useEffect(() => {
    console.log(feed)
  }, [feed])

  return (
    <div className={`${styles.feedPage} mt-10`}>
      <h1 className={`${styles.feedPageTitle} text text_type_main-large mb-4`}>Лента заказов</h1>
      <FeedList orders={feed} />
      <FeedTotal />
    </div>
  );
}

export default Feed;