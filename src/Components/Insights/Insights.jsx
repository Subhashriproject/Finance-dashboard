import React from "react";
import "./Insights.css";

function Insights(props) {
  const total = props.data.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="insight">
      <h3>Total Spending: ₹{total}</h3>
    </div>
  );
}

export default Insights;