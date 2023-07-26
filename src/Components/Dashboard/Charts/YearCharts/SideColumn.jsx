import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";

const SideColumn = () => {
  const data = [
    {
      Appliance: "AC",
      value: 2500,
    },
    {
      Appliance: "Lights",
      value: 1800,
    },
    {
      Appliance: "Computers",
      value: 3500,
    },
    {
      Appliance: "lift",
      value: 989,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'Appliance',
    seriesField: 'Appliance',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};

export default SideColumn;
