import React from "react";

import ProductDetail from "./ProductDetail";
import TotalAmount from "./TotalAmount";
const ProductItem = (props) => {
    
  return (
    <>
    <h3>Products</h3>
    <li>
      <ProductDetail
        sellingPrice={props.sellingPrice}
        productName={props.productName}
        id={props.id}
      />
    </li>
    </>
  );
};

export default ProductItem;
