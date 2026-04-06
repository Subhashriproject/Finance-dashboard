 import React, { useState } from "react";
import "./Transactions.css";

function Transactions(props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function addTransaction() {
    if (!amount || !category) return;

    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category: category,
      type: "expense"
    };

    props.setTransactions([...props.data, newTx]);
  }

  return (
    <div>
      <h3>Transactions</h3>

      {props.role === "admin" && (
        <div>
          <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
          <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
          <button onClick={addTransaction}>Add</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;