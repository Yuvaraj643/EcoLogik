import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
export const ColumnChart = () => {
  const data = [
    {
      type: '2015',
      sales: 20000,
    },
    {
      type: '2016',
      sales: 18200,
    },
    {
      type: '2017',
      sales: 22000,
    },
    {
      type: '2018',
      sales: 25000,
    },
    {
      type: '2019',
      sales: 19750,
    },
    {
      type: '2020',
      sales: 22225,
    },
    {
      type: '2021',
      sales: 26150,
    },
    {
      type: '2022',
      sales: 21620,
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
