import React from "react";
import "./SummaryCards.css";

function SummaryCards(props) {
  const income = props.data.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = props.data.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="cards">
      <div className="card">Balance: ₹{income - expense}</div>
      <div className="card">Income: ₹{income}</div>
      <div className="card">Expense: ₹{expense}</div>
    </div>
  );
}

export default SummaryCards;