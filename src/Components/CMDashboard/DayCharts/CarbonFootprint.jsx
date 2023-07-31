import React, { useState } from "react";
import { Line } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const CarbonFootprint = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const TextStyle = {
    color: "blue",
  };

  const handleClickOption = (optionNumber) => {
    setSelectedOption(optionNumber);
  };

  const data = [
    {
      name: "February 24",
      Year: "1:00",
      gdp: 16,
    },
    {
      name: "February 24",
      year: "2:00",
      gdp: 20,
    },
    {
      name: "February 24",
      year: "4:00",
      gdp: 24,
    },
    {
      name: "February 24",
      year: "6:00",
      gdp: 30,
    },
    {
      name: "February 24",
      year: "8:00",
      gdp: 38,
    },
    {
      name: "February 24",
      year: "10:00",
      gdp: 44,
    },
    {
      name: "February 24",
      year: "12:00",
      gdp: 46,
    },
    {
      name: "February 24",
      year: "14:00",
      gdp: 41,
    },
    {
      name: "February 24",
      year: "16:00",
      gdp: 48,
    },
    {
      name: "February 24",
      year: "18:00",
      gdp: 52,
    },
    {
      name: "February 24",
      year: "20:00",
      gdp: 56,
    },
    {
      name: "February 24",
      year: "  22:00",
      gdp: 60,
    },
    {
      name: "February 25",
      year: "2:00",
      gdp: 20,
    },
    {
      name: "February 25",
      year: "2:00",
      gdp: 23,
    },
    {
      name: "February 25",
      year: "4:00",
      gdp: 30,
    },
    {
      name: "February 25",
      year: "6:00",
      gdp: 34,
    },
    {
      name: "February 25",
      year: "8:00",
      gdp: 38,
    },
    {
      name: "February 25",
      year: "10:00",
      gdp: 42,
    },
    {
      name: "February 25",
      year: "12:00",
      gdp: 46,
    },
    {
      name: "February 25",
      year: "14:00",
      gdp: 50,
    },
    {
      name: "February 25",
      year: "16:00",
      gdp: 54,
    },
    {
      name: "February 25",
      year: "18:00",
      gdp: 58,
    },
    {
      name: "February 25",
      year: "20:00",
      gdp: 62,
    },
    {
      name: "February 25",
      year: "22:00",
      gdp: 66,
    },
  ];
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
                <h6
                  className="card-title text-center mx-auto"
                  style={TextStyle}
                >
                  JULY
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>6.8kg</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  SO FAR THIS MONTH
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>4.2kg</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  PREDICTED THIS MONTH
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>5.8kg</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  CHANGE IN EMISSIONS
                  <br />
                  <p
                    className="flex text-center justify-center "
                    style={{ color: "red", fontSize: "25px" }}
                  >
                    7.12<div style={{ color: "red" }}>▲</div>
                  </p>
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
                <h6
                  className="card-title text-center mx-auto"
                  style={TextStyle}
                >
                  JULY
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>214.2kWh</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  SO FAR THIS MONTH
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>4kWh</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  PREDICTED THIS MONTH
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>8 kWh</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  CHANGE IN EMISSIONS
                  <br />
                  <p
                    className="flex text-center justify-center "
                    style={{ color: "red", fontSize: "25px" }}
                  >
                    11.12<div style={{ color: "red" }}>▲</div>
                  </p>
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
