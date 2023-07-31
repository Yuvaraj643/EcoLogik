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
      name: "2022",
      year: "January",
      gdp: 200,
    },
    {
      name: "2022",
      year: "February",
      gdp: 400,
    },
    {
      name: "2022",
      year: "March",
      gdp: 583,
    },
    {
      name: "2022",
      year: "April",
      gdp: 792,
    },
    {
      name: "2022",
      year: "May",
      gdp: 981,
    },
    {
      name: "2022",
      year: "June",
      gdp: 1183,
    },
    {
      name: "2022",
      year: "July",
      gdp: 1392,
    },
    {
      name: "2022",
      year: "August",
      gdp: 1582,
    },
    {
      name: "2022",
      year: "September",
      gdp: 1772,
    },
    {
      name: "2022",
      year: "October",
      gdp: 1934,
    },
    {
      name: "2022",
      year: "November",
      gdp: 2137,
    },
    {
      name: "2022",
      year: " December ",
      gdp: 2350,
    },
    {
      name: "2023",
      year: "January",
      gdp: 195,
    },
    {
      name: "2023",
      year: "February",
      gdp: 385,
    },
    {
      name: "2023",
      year: "March",
      gdp: 547,
    },
    {
      name: "2023",
      year: "April",
      gdp: 720,
    },
    {
      name: "2023",
      year: "May",
      gdp: 887,
    },
    {
      name: "2023",
      year: "June",
      gdp: 1048,
    },
    {
      name: "2023",
      year: "July",
      gdp: 1203,
    },
    {
      name: "2023",
      year: "August",
      gdp: 1356,
    },
    {
      name: "2023",
      year: "September",
      gdp: 1518,
    },
    {
      name: "2023",
      year: "October",
      gdp: 1678,
    },
    {
      name: "2023",
      year: "November",
      gdp: 1887,
    },
    {
      name: "2023",
      year: " December ",
      gdp: 2100,
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
                  <p style={{ color: "green", fontSize: "25px" }}>189.8kg</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  SO FAR THIS MONTH
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>174.8kg</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  PREDICTED THIS MONTH
                  <br />
                  <p style={{ color: "green", fontSize: "25px" }}>209.8kg</p>
                </h6>
                <h6 className="card-title text-center" style={TextStyle}>
                  CHANGE IN EMISSIONS
                  <br />
                  <p
                    className="flex text-center justify-center "
                    style={{ color: "red", fontSize: "25px" }}
                  >
                    10.12<div style={{ color: "red" }}>▲</div>
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
