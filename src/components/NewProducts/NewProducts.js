import React from "react";
import ProductForm from "./ProductForm";
import "./NewProducts.css";
const NewProducts = (props) => {
  const saveProductHandler = (newProductData) => {
    const productData = {
      id: Math.random().toString(),
      ...newProductData,
    };
    props.onAddProduct(productData);
  };
  return (
    <div className="new-product">
      <ProductForm onSaveProductData={saveProductHandler} />
    </div>
  );
};

export default NewProducts;
