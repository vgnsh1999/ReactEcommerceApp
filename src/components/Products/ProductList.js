import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <ul>
      {props.items.map((product) => {
        return <ProductItem
          id={product.id}
          key={product.id}
          sellingPrice={product.sellingPrice}
          productName={product.productName}
        />
        ;
      })}
    </ul>
  );
};

export default ProductList;
