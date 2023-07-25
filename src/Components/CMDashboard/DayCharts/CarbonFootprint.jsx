import React, { useState } from "react";
import { Line } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";

const CarbonFootprint = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClickOption = (option) => {
    setSelectedOption(option);
  };
  const options = [
    {
      optionNumber: 1,
      carbonFootprint: 100, 
    },
    {
      optionNumber: 2,
      carbonFootprint: 200, 
    },
  ];

  const data = [
    {
      name: "China",
      year: "2000",
      gdp: 1211346869605.24,
    },
    {
      name: "China",
      year: "2001",
      gdp: 1339395718865.3,
    },
    {
      name: "China",
      year: "2002",
      gdp: 1470550015081.55,
    },
    {
      name: "China",
      year: "2003",
      gdp: 1660287965662.68,
    },
    {
      name: "China",
      year: "2004",
      gdp: 1955347004963.27,
    },
    {
      name: "China",
      year: "2005",
      gdp: 2285965892360.54,
    },
    {
      name: "China",
      year: "2006",
      gdp: 2752131773355.16,
    },
    {
      name: "China",
      year: "2007",
      gdp: 3550342425238.25,
    },
    {
      name: "China",
      year: "2008",
      gdp: 4594306848763.08,
    },
    {
      name: "China",
      year: "2009",
      gdp: 5101702432883.45,
    },
    {
      name: "China",
      year: "2010",
      gdp: 6087164527421.24,
    },
    { name: "United States",
     year: "2000",
      gdp: 10252345464000 },
    {
      name: "United States",
      year: "2001",
      gdp: 10581821399000,
    },
    {
      name: "United States",
      year: "2002",
      gdp: 10936419054000,
    },
    {
      name: "United States",
      year: "2003",
      gdp: 11458243878000,
    },
    {
      name: "United States",
      year: "2004",
      gdp: 12213729147000,
    },
    {
      name: "United States",
      year: "2005",
      gdp: 13036640229000,
    },
    {
      name: "United States",
      year: "2006",
      gdp: 13814611414000,
    },
    {
      name: "United States",
      year: "2007",
      gdp: 14451858650000,
    },
    {
      name: "United States",
      year: "2008",
      gdp: 14712844084000,
    },
    {
      name: "United States",
      year: "2009",
      gdp: 14448933025000,
    },
    {
      name: "United States",
      year: "2010",
      gdp: 14992052727000,
    },
  ];

  const config = {
    data,
    xField: "year",
    yField: "gdp",
    seriesField: "name",
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
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
    <div>
      {options.map((option) => (
        <div
          key={option.optionNumber}
          className={`carbon-container${
            selectedOption === option.optionNumber ? " green-bg" : ""
          }`}
          onClick={() => handleClickOption(option.optionNumber)}
        >
          <h2>
            Option {option.optionNumber} - Carbon Footprint:{" "}
            {option.carbonFootprint} kg CO2e
          </h2>
          {selectedOption === option.optionNumber && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Option {option.optionNumber} - Carbon Footprint Details
                </h5>
                {option.optionNumber === 1 && <Line {...config} />}
                {option.optionNumber === 2 && (
                  /* Add more information about the carbon footprint for option 2 here */
                  <div>
                    <p>Additional details for Option 2</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarbonFootprint;
