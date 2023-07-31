import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PieChart from './Charts/YearCharts/PieChart';
import LineChart from './Charts/YearCharts/LineChart';
import { ColumnChart } from "./Charts/YearCharts/ColumnChart";
import SideColumn from './Charts/YearCharts/SideColumn';
import Progress from './Charts/YearCharts/Progress';
import { Link } from 'react-router-dom';
const YearCharts = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

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
}

export default YearCharts