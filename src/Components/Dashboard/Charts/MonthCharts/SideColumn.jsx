import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';


const SideColumn = () => {
  const data = [
    {
      Appliance: 'AC',
      value: 250,
    },
    {
      Appliance: 'Lights',
      value: 180,
    },
    {
      Appliance: 'Computers',
      value:380,
    },
    {
      Appliance:'lift',
      value: 100,
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
  return (
    <Bar {...config} />
  )
}

export default SideColumn