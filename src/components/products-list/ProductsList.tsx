import styles from "./products-list.module.scss";
import React from "react";
import ProductsItem from "../products-item/ProductsItem";

type IngredientsProps = {
  title: string,
  type: string,
  showModal?: () => void,
  data?: Array<any> | null
}

const ProductsList = ({title, type, data, showModal}: IngredientsProps) => {
  return (
    <div className="ingredients__section_block ingredients__block mb-10" id={type}>
      <h2 className="ingredients__block_title text text_type_main-medium mb-6">{title}</h2>
      <ul className={`ingredients__block_list ${styles.ingredients__list}`} role="list">
        {data && data.map((item) =>
          (item.type === type && <ProductsItem showModal={showModal} key={item._id} count={1} {...item}/>)
        )}
      </ul>
    </div>
  );
}

export default ProductsList;