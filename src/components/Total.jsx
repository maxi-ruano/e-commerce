import React from "react";
import accounting from "accounting";

const Total = () => {
  return (
    <div>
      <h5>total items: 5</h5>
      <h5>{accounting.formatNumber(50, "€")}</h5>
    </div>
  );
};

export default Total;
