import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import ModelOutput from "./components/data";
// import ForecastingTypes from "./components/ForecastingTypes/ForecastingTypes.js";
// import ModelOutput from "./components/data";

function App() {
  // const [cost, setCost] = useState(0);
  return (
    <Router>
      <div>
        <ModelOutput />
        <div className="main">
          <div className="sidebarandforecatingtypes">
            <Sidebar />
          </div>
          <div className="seconddiv">
            <Routes>
              <Route path="/" Component={Dashboard} />
              <Route path="/categories" Component={Categories} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
