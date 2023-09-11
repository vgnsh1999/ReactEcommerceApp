import React from "react";
import "./TotalWorth.css";
const TotalWorth = (props) => {
  let sum = 0;
  for (let i = 0; i < props.total.length; i++) {
    sum = sum + Number(props.total[i].amount);
  }
  for (let i = 0; i < props.del.length; i++) {
    sum = sum - Number(props.del[i].amount);
  }
  return <div className="total">Total worth of the Products: Rs.{sum}</div>;
};

export default TotalWorth;
