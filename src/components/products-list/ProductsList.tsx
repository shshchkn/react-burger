import React, {FC, useMemo} from "react";
import styles from "./products-list.module.scss";
import {TIngredientsTypes} from "../../services/types";
import ProductsItem from "../products-item/ProductsItem";

const ProductsList: FC<TIngredientsTypes> = ({title, data, type}) => {
  const content = useMemo(() => data && data.map(item => <ProductsItem key={item._id} {...item}/>), [data]);

  return (
    <div className="ingredients__section_block ingredients__block mb-10" id={type}>
      <h2 className="ingredients__block_title text text_type_main-medium mb-6">{title}</h2>
      <ul className={`ingredients__block_list ${styles.ingredients__list}`}>{content}</ul>
    </div>
  );
};

export default ProductsList;