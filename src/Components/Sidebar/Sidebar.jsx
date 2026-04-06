import React from "react";
import { FaHome, FaMoneyBill } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar">

      <h3>Finance Dashboard</h3>

      {/* Role Switch */}
      <div className="role-switch">
        <span
          className={props.role === "viewer" ? "active" : ""}
          onClick={() => props.setRole("viewer")}
        >
          Viewer
        </span>

        <span
          className={props.role === "admin" ? "active" : ""}
          onClick={() => props.setRole("admin")}
        >
          Admin
        </span>
      </div>

      <ul>
        <li
          className={props.activePage === "dashboard" ? "active" : ""}
          onClick={() => props.setActivePage("dashboard")}
        >
          <FaHome /> Dashboard
        </li>

        <li
          className={props.activePage === "transactions" ? "active" : ""}
          onClick={() => props.setActivePage("transactions")}
        >
          <FaMoneyBill /> Transactions
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;