import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';


const LineChart = () => {
  const data = [
    {
      timePeriod: "2018",
      kWh: "2000",
      value: 3500,
    },
    {
      timePeriod: "2019",
      kWh: "4000",
      value: 2000 ,
    },
    {
      timePeriod: "2020",
      kWh: "6000",
      value: 3000,
    },
    {
      timePeriod: "2021",
      kWh: "8000",
      value: 4000,
    },
    {
      timePeriod: "2022",
      kWh: "10000",
      value: 2600,
    },
  ];
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
    
  return (
    <Area {...config} />
  )
}

export default LineChart