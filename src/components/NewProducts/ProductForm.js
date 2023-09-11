import React, { useState } from "react";
import "./ProductForm.css";
const ProductForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const productData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(productData);
    props.onSaveProductData(productData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-product__controls">
        <div className="new-product__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-product__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-product__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-product__actions">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
