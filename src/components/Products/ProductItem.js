import React, { useState } from "react";
import ProductDate from "./ProductDate";
import ProductDetails from "./ProductDetails";
import Card from "../UI/Card";
import "./ProductItem.css";
const ProductItem = (props) => {
  const [products, setProducts] = useState([props]);

  const deleteHandler = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    props.onSaveData(products);
  };

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Card className="product-item">
              <ProductDate date={product.date} />
              <ProductDetails title={product.title} amount={product.amount} />
              <button
                className="delBtn"
                onClick={() => deleteHandler(product.id)}
              >
                Delete Product
              </button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
