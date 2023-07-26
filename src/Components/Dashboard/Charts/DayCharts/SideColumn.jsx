import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';


const SideColumn = () => {
    const data = [
        {
          Appliance: 'AC',
          value: 50,
        },
        {
          Appliance: 'Lights',
          value: 30,
        },
        {
          Appliance: 'Computers',
          value:70,
        },
        {
          Appliance:'lift',
          value: 20,
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