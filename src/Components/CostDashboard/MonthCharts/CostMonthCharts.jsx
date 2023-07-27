import React, { useState } from "react";
import { Column } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";

const CostMonthCharts = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const TextStyle = {
    color: 'blue'
  };

  const handleClickOption = (optionNumber) => {
    setSelectedOption(optionNumber);
  };

  const data = [
    {
        "year": "July 3",
        "value": 30,
        "type": "Electricity"
    },
    {
        "year": "July 4",
        "value": 40,
        "type": "Electricity"
    },
    {
        "year": "July 5",
        "value": 35,
        "type": "Electricity"
    },
    {
        "year": "July 6",
        "value": 50,
        "type": "Electricity"
    },
    {
        "year": "July 7",
        "value": 49,
        "type": "Electricity"
    },
    {
        "year": "July 8",
      "value": 60,
        "type": "Electricity"
    },
    {
        "year": "July 9",
        "value": 70,
        "type": "Electricity"
    },
    {
        "year": "July 10",
        "value": 90,
        "type": "Electricity"
    },
    {
        "year": "July 11",
        "value": 130,
        "type": "Electricity"
    },
    {
        "year": "July 3",
        "value": 30,
        "type": "Gas"
    },
    {
        "year": "July 4",
        "value": 40,
        "type": "Gas"
    },
    {
        "year": "July 5",
        "value": 35,
        "type": "Gas"
    },
    {
        "year": "July 6",
        "value": 50,
        "type": "Gas"
    },
    {
        "year": "July 7",
        "value": 49,
        "type": "Gas"
    },
    {
        "year": "July 8",
        "value": 60,
        "type": "Gas"
    },
    {
        "year": "July 9",
        "value": 70,
        "type": "Gas"
    },
    {
        "year": "July 10",
        "value": 90,
        "type": "Gas"
    },
    {
        "year": "July 11",
        "value": 130,
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
        <h2 className="text-white text-center mx-5">THIS MONTH</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                JULY <br /><p style={{color: 'green',fontSize : '25px'}}>$210</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SO FAR THIS MONTH<br /><p style={{color: 'green',fontSize : '25px'}}>$189.25</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                PREDICTED THIS MONTH<br /><p style={{color: 'green',fontSize : '25px'}}>$220</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                ESTIMATED SAVINGS<br /><p className="flex text-center justify-center " style={{color: 'red',fontSize : '25px'}}>$15<div style={{color: 'red'}}>▲</div></p>
              </h6>
            </div>
            <Column {...config} />
            {/* Additional details for Option 1 */}
          </div>
        </div>
      </div>
      <div className="animate__animated animate__slideInRight">
        <h2 className="text-white text-center mx-5">LAST MONTH</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                MAY <br /><p style={{color: 'green',fontSize : '25px'}}>$252</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                JUNE<br /><p style={{color: 'green',fontSize : '25px'}}>$211</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SAVINGS<br /><p style={{color: 'green',fontSize : '25px'}}>$50</p>
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

export default CostMonthCharts;
