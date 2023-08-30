import React, { useState } from "react";

const ProductDetail = (props) => {
  const deleteProduct = (id) => {
    console.log(id);
    document.getElementById(id).remove();
  };
//   console.log(props.id);
  return (
    <div>
      <h2>
        {props.sellingPrice}-{props.productName}
        <button onClick={()=>deleteProduct(props.id)}>Delete Product</button>
      </h2>
    </div>
  );
};

export default ProductDetail;
