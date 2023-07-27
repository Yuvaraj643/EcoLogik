import React, { useState } from "react";
import { Column } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";

const CostDayCharts = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const TextStyle = {
    color: 'blue'
  };

  const handleClickOption = (optionNumber) => {
    setSelectedOption(optionNumber);
  };

  const data = [
    {
        "year": "0 Hrs",
        "value": 3,
        "type": "Electricity"
    },
    {
        "year": "1 Hr",
        "value": 4,
        "type": "Electricity"
    },
    {
        "year": "2 Hrs",
        "value": 3.5,
        "type": "Electricity"
    },
    {
        "year": "3 Hrs",
        "value": 5,
        "type": "Electricity"
    },
    {
        "year": "4 Hrs",
        "value": 4.9,
        "type": "Electricity"
    },
    {
        "year": "5 Hrs",
        "value": 6,
        "type": "Electricity"
    },
    {
        "year": "6 Hrs",
        "value": 7,
        "type": "Electricity"
    },
    {
        "year": "7 Hrs",
        "value": 9,
        "type": "Electricity"
    },
    {
        "year": "8 Hrs",
        "value": 13,
        "type": "Electricity"
    },
    {
        "year": "0 Hrs",
        "value": 3,
        "type": "Gas"
    },
    {
        "year": "1 Hr",
        "value": 4,
        "type": "Gas"
    },
    {
        "year": "2 Hrs",
        "value": 3.5,
        "type": "Gas"
    },
    {
        "year": "3 Hrs",
        "value": 5,
        "type": "Gas"
    },
    {
        "year": "4 Hrs",
        "value": 4.9,
        "type": "Gas"
    },
    {
        "year": "5 Hrs",
        "value": 6,
        "type": "Gas"
    },
    {
        "year": "6 Hrs",
        "value": 7,
        "type": "Gas"
    },
    {
        "year": "7 Hrs",
        "value": 9,
        "type": "Gas"
    },
    {
        "year": "8 Hrs",
        "value": 13,
        "type": "Gas"
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
        <h2 className="text-white text-center mx-5">TODAY</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                JULY 26TH 2023<br /><p style={{color: 'green',fontSize : '25px'}}>$ 8.9</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SO FAR TODAY<br /><p style={{color: 'green',fontSize : '25px'}}>$4.25</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                PREDICTED TODAY<br /><p style={{color: 'green',fontSize : '25px'}}>$5.8</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                ESTIMATED SAVINGS<br /><p className="flex text-center justify-center " style={{color: 'red',fontSize : '25px'}}>$1.5<div style={{color: 'red'}}>▲</div></p>
              </h6>
            </div>
            <Column {...config} />
            {/* Additional details for Option 1 */}
          </div>
        </div>
      </div>
      <div className="animate__animated animate__slideInRight">
        <h2 className="text-white text-center mx-5">YESTERDAY</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                JULY 24TH 2023 <br /><p style={{color: 'green',fontSize : '25px'}}>$9.2</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                JULY 25TH 2023<br /><p style={{color: 'green',fontSize : '25px'}}>$8.6</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SAVINGS<br /><p style={{color: 'green',fontSize : '25px'}}>$0.6</p>
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

export default CostDayCharts;
