import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';
import { ColumnChart } from "./Charts/ColumnChart";
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
  )
}

export default YearCharts