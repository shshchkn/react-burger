import {useCallback, useEffect, useState} from 'react';
import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.scss';
import OrderDetails from '../order-details/OrderDetails';
import Ingredient from "../ingredient/Ingredient";
import Modal from "../modal/Modal";
import {TIngredientSingle} from "../../services/types";
import {useDrop} from "react-dnd";
import classNames from "classnames/bind";
import {v4 as uuidv4} from 'uuid';
import {
  ADD_CART_BUN,
  ADD_CART_ITEM,
  UPDATE_CART,
  CLEAN_CART
} from '../../services/actions/cart';
import {totalPriceSelector} from '../../services/actions'
import {getOrderedItems, CLOSE_ORDER,} from '../../services/actions/order';
import {getCookie} from "../../utils/helpers";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Loader} from "../../ui/loader/Loader";

const BurgerConstructor = () => {
  const token = getCookie('accessToken');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {cartBun, cartItems} = useAppSelector(store => store.cart);
  const {orderNumber} = useAppSelector(store => store.order);
  const cartTotalPrice = useAppSelector(totalPriceSelector);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const moveCard: (dragIndex: number, hoverIndex: number) => void = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cartItems[dragIndex];
    const newCards = [...cartItems];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    dispatch({type: UPDATE_CART, cartItems: newCards});
  }, [cartItems, dispatch]);

  const handleSetOrder = useCallback(() => {
    setOpen(true);
    setLoading(true);
    if (token) {
      cartBun && dispatch(getOrderedItems([cartBun, ...cartItems, cartBun]));
      console.log(loading, orderNumber)
    } else {
      navigate('/login');
    }
  }, [
    cartBun,
    cartItems,
    dispatch,
    token,
    navigate,
    loading,
    orderNumber
  ]);

  useEffect(() => {
    orderNumber && setLoading(false);
  }, [orderNumber]);


  const handleCloseModal = () => {
    setOpen(false);
    dispatch({type: CLOSE_ORDER});
    dispatch({type: CLEAN_CART});
  };

  const [{isHover}, dropTarget] = useDrop({
    accept: 'items',
    drop(item: TIngredientSingle) {
      item.type !== 'bun'
        ? dispatch({
          type: ADD_CART_ITEM,
          item: {...item, dragId: uuidv4(), count: 2}
        })
        : dispatch({
          type: ADD_CART_BUN,
          item: {...item, dragId: uuidv4()}
        });
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const renderItems = useCallback(
    (item: TIngredientSingle, index: number) => {
      return (
        <Ingredient
          key={item.dragId}
          index={index}
          item={item}
          moveCard={moveCard}
        />
      )
    }, [moveCard]);

  let cx = classNames.bind(styles);
  const dropZoneClass = cx('dropzone', {
    'isHover': isHover,
    'isEmpty': !cartItems['length'] && !cartBun
  });

  return (
    <div className={`dashboard__constructor ${styles.board}`}>
      <div
        className={dropZoneClass}
        ref={dropTarget}>
        {cartBun &&
          (<div className={`board__top ${styles.bun} ml-8`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${cartBun['name']} (верх)`}
              price={cartBun['price']}
              thumbnail={cartBun['image_mobile']}
            />
          </div>)}

        {!cartItems['length'] && !cartBun && (<p className={styles.dropzoneNotice}>Перетащите ингредиенты</p>)}

        <div className={`board__body ${styles.items} custom-scroll mt-4 mb-4`}>
          {cartItems && [...cartItems].map((item: TIngredientSingle, id: number) => renderItems(item, id))}
        </div>

        {cartBun &&
          (<div className={`board__bottom ml-8 ${styles.bun}`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${cartBun['name']} (низ)`}
              price={cartBun['price']}
              thumbnail={cartBun['image_mobile']}
            />
          </div>)}
      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={`${styles.total__price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{cartTotalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={handleSetOrder} disabled={!cartBun}>Оформить
          заказ</Button>
      </div>
      {open && (
          <Modal onClose={handleCloseModal} headerTitle={''}>
            {loading ? (
              <Loader request={loading}/>
            ) : (
              orderNumber && <OrderDetails orderNumber={orderNumber}/>
            )}
          </Modal>
        )
      }
    </div>
  );
}

export default BurgerConstructor;