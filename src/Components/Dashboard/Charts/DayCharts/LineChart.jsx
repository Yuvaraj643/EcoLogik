import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";

const LineChart = () => {
  const data = [
    {
      timePeriod: "Jul 5",
      kWh: "2",
      value: 3,
    },
    {
      timePeriod: "Jul 6",
      kWh: "4",
      value: 5,
    },
    {
      timePeriod: "Jul 7",
      kWh: "6",
      value: 4,
    },
    {
      timePeriod: "Jul 8",
      kWh: "8",
      value: 6,
    },
    {
      timePeriod: "Jul 9",
      kWh: "10",
      value: 8,
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
