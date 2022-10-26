import React, {useMemo} from "react";
import styles from "./products-list.module.scss";
import {TIngredient} from "../../utils/types";
import ProductsItem from "../products-item/ProductsItem";

type IngredientsTypes = {
  title: string,
  type: string,
  data: TIngredient[],
}

const ProductsList = ({title, data, type}: IngredientsTypes) => {
  const content = useMemo(() => data && data.map(item => <ProductsItem key={item._id} {...item}/>), [data]);

  return (
    <div className="ingredients__section_block ingredients__block mb-10" id={type}>
      <h2 className="ingredients__block_title text text_type_main-medium mb-6">{title}</h2>
      <ul className={`ingredients__block_list ${styles.ingredients__list}`}>{content}</ul>
    </div>
  );
};

export default ProductsList;