import React, { useState } from "react";

const ProductForm = (props) => {
  const [enteredProductID, setEnteredProductID] = useState("");
  const [enteredSellingPrice, setEnteredSellingPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");

  const productIDChangeHandler = (event) => {
    setEnteredProductID(event.target.value);
  };

  const sellingPriceChangeHandler = (event) => {
    setEnteredSellingPrice(event.target.value);
  };

  const productNameChangeHandler = (event) => {
    setEnteredProductName(event.target.value);
  };

  const addProductHandler = (event) => {
    event.preventDefault();
    const productData = {
      productID: enteredProductID,
      sellingPrice: enteredSellingPrice,
      productName: enteredProductName,
    };
    // console.log(productData)
    props.onSaveProductData(productData);
    setEnteredProductID("");
    setEnteredSellingPrice("");
    setEnteredProductName("");
  };
  return (
    <form onSubmit={addProductHandler}>
      <label>Product ID</label>
      <input
        type="text"
        value={enteredProductID}
        onChange={productIDChangeHandler}
      />
      <label>Selling Price</label>
      <input
        type="number"
        value={enteredSellingPrice}
        onChange={sellingPriceChangeHandler}
      />
      <label>Product Name</label>
      <input
        type="text"
        value={enteredProductName}
        onChange={productNameChangeHandler}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
