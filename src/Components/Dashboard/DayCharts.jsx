import React from "react";
import ReactDOM from "react-dom";
import PieChart from "./Charts/DayCharts/PieChart";
import { ColumnChart } from "./Charts/DayCharts/ColumnChart";
import LineChart from "./Charts/DayCharts/LineChart";
import "animate.css";
import SideColumn from "./Charts/DayCharts/SideColumn";
import Progress from "./Charts/DayCharts/Progress";

const DayCharts = () => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-full mx-auto">
        <div class="col ">
          <div class="card animate__animated animate__backInLeft">
            <div class="card-body ">
              <h5 class="card-title">COST PREDICTED</h5>
              <hr />
              <PieChart />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card animate__animated animate__backInUp">
            <div class="card-body">
              <h5 class="card-title">CHANGE IN COST</h5>
              <hr />
              <ColumnChart />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card animate__animated animate__backInRight">
            <div class="card-body">
              <h5 class="card-title">USAGE ESTIMATE</h5>
              <hr />
              <LineChart />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card animate__animated animate__backInRight">
            <div class="card-body">
              <h5 class="card-title">ACTIVE APPLIANCES</h5>
              <hr />
              <SideColumn />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card animate__animated animate__backInRight">
            <div class="card-body">
              <h5 class="card-title">ENERGY INTENSITY</h5>
              <hr />
              <Progress />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayCharts;
