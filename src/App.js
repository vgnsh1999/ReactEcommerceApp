import React, { useState } from "react";
import Products from "./components/Products/Products";
import "./App.css";
import TotalWorth from "./components/Products/TotalWorth";
import NewProducts from "./components/NewProducts/NewProducts";

const App = () => {
  // const products = [
  //   { id: 1, title: "Car", amount: "1000000", date: new Date() },
  //   {
  //     id: 2,
  //     title: "Yatch",
  //     amount: "2000000",
  //     date: new Date(),
  //   },
  //   {
  //     id: 3,
  //     title: "House",
  //     amount: "10000000",
  //     date: new Date(),
  //   },
  //   { id: 4, title: "Jet", amount: "5000000", date: new Date() },
  // ];
  const products = [];
  const [newProduct, setNewProduct] = useState(products);
  const addProductHandler = (product) => {
    setNewProduct((prevProduct) => {
      return [product, ...prevProduct];
    });
  };

  const [updateProduct,setUpdateProduct]= useState([]);
  const addUpdatedHandler = (product) => {
    setUpdateProduct(product);
  };

  return (
    <div>
      <NewProducts onAddProduct={addProductHandler} />
      <Products onUpdatedData={addUpdatedHandler} items={newProduct} />
      <TotalWorth total={newProduct} del={updateProduct} />
    </div>
  );
};

export default App;
