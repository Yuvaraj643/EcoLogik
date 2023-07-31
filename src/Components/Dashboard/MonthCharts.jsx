import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import PieChart from './Charts/MonthCharts/PieChart';
import { ColumnChart } from './Charts/MonthCharts/ColumnChart';
import LineChart from './Charts/MonthCharts/LineChart';
import SideColumn from './Charts/MonthCharts/SideColumn';
import Progress from './Charts/MonthCharts/Progress';
import { Link } from 'react-router-dom';
const MonthCharts = () => {

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
        <div className="col">
          <div className="card" style={{ minHeight: "490px" }}>
            <div className="card-body d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column align-items-center">
                <Link to="/C02-dashboard" className="btn btn-primary mb-3">
                  Go to Carbon-Emission Dashboard
                </Link>
                <Link to="/Cost-dashboard" className="btn btn-primary">
                  Go to Cost Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default MonthCharts;
