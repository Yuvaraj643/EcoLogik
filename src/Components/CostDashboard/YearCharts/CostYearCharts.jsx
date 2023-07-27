import React, { useState } from "react";
import { Column } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";

const CostYearCharts = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const TextStyle = {
    color: 'blue'
  };

  const handleClickOption = (optionNumber) => {
    setSelectedOption(optionNumber);
  };

  const data = [
    {
        "year": "2014",
        "value": 3500,
        "type": "Electricity"
    },
    {
        "year": "2015",
        "value": 2800,
        "type": "Electricity"
    },
    {
        "year": "2016",
        "value": 3600,
        "type": "Electricity"
    },
    {
        "year": "2017",
        "value": 1560,
        "type": "Electricity"
    },
    {
        "year": "2018",
        "value": 4700,
        "type": "Electricity"
    },
    {
        "year": "2019",
      "value": 3670,
        "type": "Electricity"
    },
    {
        "year": "2020",
        "value": 2500,
        "type": "Electricity"
    },
    {
        "year": "2021",
        "value": 1899,
        "type": "Electricity"
    },
    {
        "year": "2022",
        "value": 2460,
        "type": "Electricity"
    },
    {
        "year": "2014",
        "value": 3590,
        "type": "Gas"
    },
    {
        "year": "2015",
        "value": 4000,
        "type": "Gas"
    },
    {
        "year": "2016",
        "value": 3790,        "type": "Gas"
    },
    {
        "year": "2017",
        "value": 5090,
        "type": "Gas"
    },
    {
        "year": "2018",
        "value": 4790,
        "type": "Gas"
    },
    {
        "year": "2019",
        "value": 4080,       "type": "Gas"
    },
    {
        "year": "2020",
        "value": 4580,
        "type": "Gas"
    },
    {
        "year": "2021",
        "value": 7980,
        "type": "Gas"
    },
    {
        "year": "2022",
        "value": 4890,
        "type": "Gas"
    }
]
const config = {
  data,
  isStack: true,
  xField: 'year',
  yField: 'value',
  seriesField: 'type',
  label: {
    position: 'middle',
    layout: [
      {
        type: 'interval-adjust-position',
      }, 
      {
        type: 'interval-hide-overlap',
      }, 
      {
        type: 'adjust-color',
      },
    ],
  },
};

  return (
    <div className="flex w-full justify-center mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
      <div className="animate__animated animate__slideInLeft">
        <h2 className="text-white text-center mx-5">THIS YEAR</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                2023<br /><p style={{color: 'green',fontSize : '25px'}}>$ 2,900</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SO FAR THIS YEAR<br /><p style={{color: 'green',fontSize : '25px'}}>$784</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                PREDICTED THIS YEAR<br /><p style={{color: 'green',fontSize : '25px'}}>$1540</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                ESTIMATED SAVINGS<br /><p className="flex text-center justify-center " style={{color: 'red',fontSize : '25px'}}>$170<div style={{color: 'red'}}>▲</div></p>
              </h6>
            </div>
            <Column {...config} />
            {/* Additional details for Option 1 */}
          </div>
        </div>
      </div>
      <div className="animate__animated animate__slideInRight">
        <h2 className="text-white text-center mx-5">LAST YEAR</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                2022<br /><p style={{color: 'green',fontSize : '25px'}}>$1800</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                2021<br /><p style={{color: 'green',fontSize : '25px'}}>$1720</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SAVINGS<br /><p style={{color: 'green',fontSize : '25px'}}>$100</p>
              </h6>
              {/* <h6 className="card-title text-center" style={TextStyle}>
                CHANGE IN EMISSIONS<br /><p className="flex text-center justify-center " style={{color: 'red',fontSize : '25px'}}>11.12<div style={{color: 'red'}}>▲</div></p>
              </h6> */}
            </div>
            <Column {...config} />
            {/* Additional details for Option 1 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostYearCharts;
