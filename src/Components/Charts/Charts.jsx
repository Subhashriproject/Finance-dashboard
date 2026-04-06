 import React from "react";
import { LineChart, Line, PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import "./Charts.css";

function Charts(props) {
  const chartData = props.data.map(t => ({
    name: t.date,
    amount: t.amount
  }));

  return (
    <div className="charts">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <Line dataKey="amount" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={chartData} dataKey="amount" nameKey="name" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;