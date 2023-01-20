import FeedList from "./feed-list/FeedList";
import FeedTotal from "./feed-total/FeedTotal";
import styles from './feed.module.scss';
import {useAppSelector} from "../../hooks/redux";

const Feed = () => {
  const {feed} = useAppSelector(store => store.ws);

  return (
    <div className={`${styles.feedPage} mt-10`}>
      <h1 className={`${styles.feedPageTitle} text text_type_main-large mb-4`}>Лента заказов</h1>
      <FeedList orders={feed} />
      <FeedTotal />
    </div>
  );
}

export default Feed;