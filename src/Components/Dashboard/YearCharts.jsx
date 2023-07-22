import React from 'react'
import { Pie } from 'react-chartjs-2';


const YearCharts = () => {
  // Sample data for the month
  const data = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Pie data={data} />;
}

export default YearCharts