import React from "react";

const TotalAmount = (props) => {
    return (
        <ul>
      {props.sellingPrice.map((product) => {
        return <div
          sellingPrice={product.sellingPrice}
        >Total value worth of Products:Rs.{product.sellingPrice}</div>
        ;
      })}
    </ul>
    );
};

export default TotalAmount;