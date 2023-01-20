import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.scss";
import {TIngredientProps, TIngredientSingle} from '../../services/types';
import {REMOVE_CART_ITEM} from "../../services/actions/cart";
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import type { Identifier, XYCoord } from 'dnd-core'
import {useRef} from "react";
import {useAppDispatch} from "../../hooks/redux";

const Ingredient = ({item, index, moveCard}: TIngredientProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null)

  const removeCartItem = () => {
    dispatch({type: REMOVE_CART_ITEM, item});
  }

  const [{ handlerId }, drop] = useDrop<TIngredientSingle, void, { handlerId: Identifier | null }>({
    accept: 'cartItems',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: TIngredientSingle, monitor: DropTargetMonitor<TIngredientSingle, void>)  {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'cartItems',
    item: () => {
      return { ...item, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div
      className={styles.item}
      style={{ opacity }}
      ref={ref}
      draggable
      data-handler-id={handlerId}>
      <div className={`${styles.item__drag} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={removeCartItem}
      />
    </div>
  );
}

export default Ingredient;