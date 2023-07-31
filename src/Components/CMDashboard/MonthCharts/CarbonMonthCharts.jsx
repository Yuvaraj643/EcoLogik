import React, { useState } from "react";
import { Line } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
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
        "name": "February",
        "Year": "day 1",
        "gdp": 1600,
    },
    {
        "name": "February",
        "year": "day 2",
        "gdp": 2000,
    },
    {
        "name": "February",
        "year": "day 3",
        "gdp": 2400,
    },
    {
        "name": "February",
        "year": "day 4",
        "gdp": 2800,
    },
    {
        "name": "February",
        "year": "day 5",
        "gdp": 3200,
    },
    {
        "name": "February",
        "year": "day 6",
        "gdp": 3600,
    },
    {
        "name": "February",
        "year": "day 7",
        "gdp": 4000,
    },
    {
        "name": "February",
        "year": "day 8",
        "gdp": 4400,
    },
    {
        "name": "February",
        "year": "day 9",
        "gdp": 4800,
    },
    {
        "name": "February",
        "year": "day 10",
        "gdp": 5200,
    },
    {
        "name": "February",
        "year": "day 11",
        "gdp": 5600,
    },
   {
       "name": "February",
        "year": "day 12",
        "gdp": 6000,
    },
      {
          "name": "March",
          "year": "day 2",
          "gdp": 2400,
      },
      {
          "name": "March",
          "year": "day 3",
          "gdp": 3000,
      },
      {
          "name": "March",
          "year": "day 4",
          "gdp": 3400,
      },
      {
          "name": "March",
          "year": "day 5",
          "gdp":3200,
      },
      {
          "name": "March",
          "year": "day 6",
          "gdp": 3500,
      },
      {
          "name": "March",
          "year": "day 7",
          "gdp": 4100,
      },
      {
          "name": "March",
          "year": "day 8",
          "gdp": 5000,
      },
      {
          "name": "March",
          "year": "day 9",
          "gdp": 4600,
      },
      {
          "name": "March",
          "year": "day 10",
          "gdp": 5800,
      },
      {
          "name": "March",
          "year": "day 11",
          "gdp":5200,
      },
     {
         "name": "March",
          "year": "day 12",
          "gdp": 6000,
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
    <>
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
    <div className="col" style={{ margin: "20px" }}>
        <div
          className="card"
          style={{ minHeight: "300px", maxWidth: "400px", margin: "0 auto" }}
        >
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center">
              <Link to="/C02-dashboard" className="btn btn-primary mb-3">
                Go to Carbon-Emission Dashboard
              </Link>
              <Link to="/Cost-dashboard" className="btn btn-primary">
                Go to Cost Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarbonFootprint;
