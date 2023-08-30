import React from "react";

import ProductForm from "./ProductForm";

const NewProduct = (props) => {
    const saveProductDataHandler = (enteredProductData) => {
        const productData = {
            id:Math.random().toString(),
            ...enteredProductData
        }
        console.log(productData)
        props.onAddProduct(productData)
    }
    return (
        <ProductForm onSaveProductData={saveProductDataHandler} />
    );
};

export default NewProduct;