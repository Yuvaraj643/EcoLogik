import React, { useState } from "react";
import { Line } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";

const CarbonFootprint = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const TextStyle = {
    color: 'blue'
  };

  const handleClickOption = (optionNumber) => {
    setSelectedOption(optionNumber);
  };

  const data = [
    {
        "name": "July",
        "year": "July 10",
        "gdp": 200,
    },
    {
        "name": "July",
        "year": "July 11",
        "gdp": 400,
    },
    {
        "name": "July",
        "year": "July 12",
        "gdp": 583,
    },
    {
        "name": "July",
        "year": "July 13",
        "gdp": 792,
    },
    {
        "name": "July",
        "year": "July 14",
        "gdp": 981
    },
    {
        "name": "July",
        "year": "July 15",
        "gdp": 1183,
    },
    {
        "name": "July",
        "year": "July 16",
        "gdp": 1392,
    },
    {
        "name": "July",
        "year": "July 17",
        "gdp": 1582,
    },
    {
        "name": "July",
        "year": "July 18",
        "gdp": 1772,
    },
    {
        "name": "July",
        "year": "July 19",
        "gdp": 1934,
    },
    {
        "name": "July",
        "year": "July 20",
        "gdp": 2137,
    },
   {
        "name": "July",
        "year": "July 21",
        "gdp": 2350,
    },
      {
        "name": "August",
        "year": "Aug 10",
          "gdp": 195,
      },
      {
        "name": "August",
        "year": "Aug 11",
          "gdp": 385,
      },
      {
        "name": "August",
        "year": "Aug 12",
          "gdp": 547,
      },
      {
        "name": "August",
        "year": "Aug 13",
          "gdp": 720,
      },
      {
        "name": "August",
        "year": "Aug 14",
          "gdp": 887,
      },
      {
        "name": "August",
        "year": "Aug 15",
          "gdp": 1048,
      },
      {
        "name": "August",
        "year": "Aug 16",
          "gdp": 1203,
      },
      {
        "name": "August",
        "year": "Aug 17",
          "gdp": 1356,
      },
      {
        "name": "August",
        "year": "Aug 18",
          "gdp": 1518,
      },
      {
        "name": "August",
        "year": "Aug 19",
          "gdp": 1678,
      },
      {
        "name": "August",
        "year": "Aug 20",
          "gdp": 1887,
      },
     {
        "name": "August",
        "year": "Aug 21",
          "gdp": 2100,
      }
]
  const config = {
    data,
    xField: "year",
    yField: "gdp",
    seriesField: "name",
    // yAxis: {
    //   label: {
    //     formatter: (v) => `${(v / 10e8).toFixed(1)} ,`,
    //   },
    // },
    legend: {
      position: "top",
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  return (
    <div className="flex w-full justify-center mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
      <div className="animate__animated animate__slideInLeft">
        <h2 className="text-white text-center mx-5">CARBON FOOTPRINT</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                JULY<br /><p style={{color: 'green',fontSize : '25px'}}>189.8kg</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SO FAR THIS MONTH<br /><p style={{color: 'green',fontSize : '25px'}}>174.8kg</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                PREDICTED THIS MONTH<br /><p style={{color: 'green',fontSize : '25px'}}>209.8kg</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                CHANGE IN EMISSIONS<br /><p className="flex text-center justify-center " style={{color: 'red',fontSize : '25px'}}>10.12<div style={{color: 'red'}}>▲</div></p>
              </h6>
            </div>
            <Line {...config} />
            {/* Additional details for Option 1 */}
          </div>
        </div>
      </div>
      <div className="animate__animated animate__slideInRight">
        <h2 className="text-white text-center mx-5">GREEN ENERGY STATS</h2>
        <div className="card">
          <div className="card-body">
            <div className="flex w-full mx-auto justify-center align-items-center row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              <h6 className="card-title text-center mx-auto" style={TextStyle}>
                JULY<br /><p style={{color: 'green',fontSize : '25px'}}>214.2kWh</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                SO FAR THIS MONTH<br /><p style={{color: 'green',fontSize : '25px'}}>4kWh</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                PREDICTED THIS MONTH<br /><p style={{color: 'green',fontSize : '25px'}}>8 kWh</p>
              </h6>
              <h6 className="card-title text-center" style={TextStyle}>
                CHANGE IN EMISSIONS<br /><p className="flex text-center justify-center " style={{color: 'red',fontSize : '25px'}}>11.12<div style={{color: 'red'}}>▲</div></p>
              </h6>
            </div>
            <Line {...config} />
            {/* Additional details for Option 1 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;
