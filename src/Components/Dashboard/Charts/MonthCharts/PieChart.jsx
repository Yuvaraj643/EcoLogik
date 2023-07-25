import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  const data = [
    {
      type: 'Lights',
      value: 25,
    },
    {
      type: 'Systems',
      value: 45,
    },
    {
      type: 'Fans and ACs',
      value: 20,
    },
    {
      type: 'Broadband',
      value: 6,
    },
    {
      type: 'Lifts',
      value: 4,
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
    <div id="chat-container">
      <Pie {...config} />
    </div>
  )
}

export default PieChart