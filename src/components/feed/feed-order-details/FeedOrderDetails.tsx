import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, TWsOrder} from "../../../services/types";

const FeedOrderDetails = () => {
  const {id} = useParams<{ id?: string }>();
  const {items} = useSelector((store: RootState) => store.ingredients);
  const {orders} = useSelector((store: RootState) => store.ws);

  const orderItem: TWsOrder | null | undefined = orders && orders.find(order => order._id === id);
  const orderIngredients = orderItem && orderItem.ingredients.map((id: string) => {
    return items.filter(item => item._id === id);
  }).flat();

  const renderOrderStatus = (status: string) => {
    switch (status) {
      case 'done':
        return <p>Выполнен</p>;
      case 'pending':
        return <p>Готовится</p>;
      default:
        return <p>Создан</p>;
    }
  }

  return (
    <div>
      <p>{orderItem?.number}</p>
      <p>{orderItem?.name}</p>
      {orderItem?.status && renderOrderStatus(orderItem.status)}
      <p>Состав:</p>
      {orderIngredients && orderIngredients
        .filter((item, index, arr) => index === arr.indexOf(item))
        .map((item, index) =>(
          <div key={index}>
            <p>{item.image_mobile}</p>
            <p>{item.name}</p>
            <p>{orderIngredients.reduce((count, curr) => {
              return curr._id === item._id ? count + 1 : count;
            }, 0)}</p>
          </div>
        ))
      }
    </div>
  );
}

export default FeedOrderDetails;