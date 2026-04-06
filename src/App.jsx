import React, { useState, useEffect } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [role, setRole] = useState("viewer");
  const [activePage, setActivePage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Sidebar
        role={role}
        setRole={setRole}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Content */}
      <div style={{ marginLeft: "240px", width: "100%" }}>
        <div className="app">

          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px"
            }}
          >
            <h2>Finance Dashboard</h2>

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
          </div>

          {/* PAGE CONTENT */}
          {activePage === "dashboard" && <Dashboard role={role} />}

          {activePage === "transactions" && (
            <Dashboard role={role} />
          )}

        </div>
      </div>

    </div>
  );
}

export default App;