import React, { useState } from "react";
import { data } from "../../data/transactions";
import SummaryCards from "../SummaryCards/SummaryCards";
import Charts from "../Charts/Charts";
import Transactions from "../Transactions/Transactions";
import Insights from "../Insights/Insights";
import "./Dashboard.css";

function Dashboard(props) {
  const [transactions, setTransactions] = useState(data);

  return (
    <div className="container">
      <SummaryCards data={transactions} />
      <Charts data={transactions} />
      <Insights data={transactions} />
      <Transactions
        data={transactions}
        role={props.role}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default Dashboard;