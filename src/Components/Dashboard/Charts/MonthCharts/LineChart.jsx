import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";

const LineChart = () => {
  const data = [
    {
      timePeriod: "May",
      kWh: "100",
      value: 400,
    },
    {
      timePeriod: "June",
      kWh: "200",
      value: 200,
    },
    {
      timePeriod: "July",
      kWh: "300",
      value: 300,
    },
    {
      timePeriod: "August",
      kWh: "400",
      value: 150,
    },
    {
      timePeriod: "September",
      kWh: "500",
      value: 250,
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

  return <Area {...config} />;
};

export default LineChart;
