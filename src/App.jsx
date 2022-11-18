import "./App.css";

import { Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/dashboard";
import React from "react";



function App() {
  return (
    <div className="relative  ">
      <Route index exact path="dashboard" element={<Dashboard />}></Route>
    </div>
  );
}

export default App;
