import React, { useState } from 'react';
import NewProduct from '../src/components/NewProduct/NewProduct';
import Products from './components/Products/Products';
import './App.css';

// const PRODUCTS = [];

const App = () => {
  const [products,setProducts] = useState([]);

  const addProductHandler = product => {
    setProducts(prevProducts => {
      return [...prevProducts,product]
    })
  }

  return (
    <div>
        <NewProduct onAddProduct={addProductHandler}/>
        <Products items={products} />
    </div>
  );
}

export default App;
