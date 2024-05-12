import "./Graphcontainer.css";
import React from "react";
// import ModelOutput from "../data";
import Bargraph from "../graphs/overall revenue/Bargraph";
import Totalcard from "../graphs/overall revenue/Totalcard";
import RevenueLineGraph from "../graphs/overall revenue/Linechart";
import RevenuePieChart from "../graphs/overall revenue/Piechart";
// import PieGraph from '../graphs/overall revenue/Piechart';
// import AxisWithComposition from '../graphs/overall revenue/Piechart';
const Graphcontainer = () => {
  return (
    <div className="maindivvv">
      <div className="totalcard">
        <Totalcard label="Total Revenue" value="$100" />
      </div>
      <div className="combinediv">
        <div className="first">
          <Bargraph />
          <RevenueLineGraph />
        </div>
        <div className="second">
          <RevenuePieChart />
        </div>
      </div>
    </div>
  );
};

export default Graphcontainer;
