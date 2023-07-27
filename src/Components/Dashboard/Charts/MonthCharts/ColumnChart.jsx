import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
export const ColumnChart = () => {
  const data = [
    {
      type: 'May',
      sales: 650,
    },
    {
      type: 'Jun',
      sales: 600,
    },
    {
      type: 'Jul',
      sales: 540,
    },
    {
      type: 'Aug',
      sales: 560,
    },
    {
      type: 'Sep',
      sales: 480,
    },
    {
      type: 'Oct',
      sales: 500,
    },
    {
      type: 'Nov',
      sales: 550,
    },
    {
      type: 'Dec',
      sales: 620,
     },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Cost',
          },
          sales: {
            alias: 'Cost',
          },
        },
      };
    
  return (
    <>
    <Column {...config} />
    </>
  )
}
