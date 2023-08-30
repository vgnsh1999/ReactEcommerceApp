import React from "react";

import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import TotalAmount from "./TotalAmount";

const Products = (props) => {
    const productArray = props.items;
    console.log(props.items)
    return (
        <div>
        <ProductList items={productArray} />
        <TotalAmount sellingPrice={productArray}/>
        </div>

    );
};

export default Products;