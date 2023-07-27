import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
export const ColumnChart = () => {
  const data = [
    {
      type: 'Jun 15',
      sales: 35,
    },
    {
      type: 'Jun 16',
      sales: 30,
    },
    {
      type: 'Jun 17',
      sales: 32,
    },
    {
      type: 'Jun 18',
      sales: 46,
    },
    {
      type: 'Jun 19',
      sales: 48,
    },
    {
      type: 'Jun 20',
      sales: 38,
    },
    {
      type: 'Jun 21',
      sales: 34,
    },
    {
      type: 'Jun 22',
      sales: 36,
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
