import React from "react";

import styles from "./products-list.module.scss";

import ProductsItem from "../products-item/ProductsItem";

type IngredientsTypes = {
  title: string,
  type: string,
  showModal: (item: any) => void,
  data?: Array<any> | null,
}

const ProductsList = ({title, data, type, showModal}: IngredientsTypes) => {
  return (
    <div className="ingredients__section_block ingredients__block mb-10" id={type}>
      <h2 className="ingredients__block_title text text_type_main-medium mb-6">{title}</h2>
      <ul className={`ingredients__block_list ${styles.ingredients__list}`}>
        {
          data &&
          data.map(item => <ProductsItem showModal={showModal} key={item._id} count={1} item={item}/>)
        }
      </ul>
    </div>
  );
}

export default ProductsList;