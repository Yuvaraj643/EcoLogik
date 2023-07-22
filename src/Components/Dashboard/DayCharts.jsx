import React from "react";
import ReactDOM from "react-dom";
import PieChart from "./Charts/PieChart";
import { ColumnChart } from "./Charts/ColumnChart";
import LineChart from "./Charts/LineChart";

const DayCharts = () => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-full">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <PieChart />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <ColumnChart />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayCharts;
