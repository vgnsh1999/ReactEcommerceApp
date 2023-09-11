import React from "react";
import ProductItem from "./ProductItem";
import Card from "../UI/Card";
import "./Products.css";
const Products = (props) => {
  const updatedData = (newUpdatedData) => {
    const productData = newUpdatedData;
    props.onUpdatedData(productData);
  };

  return (
    <Card className="products">
      {props.items.map((product) => {
        return (
          <ProductItem
            onSaveData={updatedData}
            key={product.id}
            id={product.id}
            title={product.title}
            amount={product.amount}
            date={product.date}
          />
        );
      })}
    </Card>
  );
};

export default Products;
