import React from "react";
import "./ProductItem.css";
const ProductDetails = (props) => {
  return (
    <div className="product-item__description">
      <h2>{props.title}</h2>
      <div className="product-item__price">Rs.{props.amount}</div>
    </div>
  );
};

export default ProductDetails;
