import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
    const data = [
        {
          type: 'Lights',
          value: 27,
        },
        {
          type: 'Systems',
          value: 40,
        },
        {
          type: 'Fans and ACs',
          value: 15,
        },
        {
          type: 'Broadband',
          value: 10,
        },
        {
          type: 'Lifts',
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
    <div id="chat-container">
      <Pie {...config} />
    </div>
  )
}

export default PieChart