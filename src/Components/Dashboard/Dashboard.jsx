import React, { useState } from "react";
import DayCharts from "./DayCharts";
import MonthCharts from "./MonthCharts";
import YearCharts from "./YearCharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <h1 className="fixed top-16">Energy Management Dashboard</h1>
      <div className="fixed top-24 w-full flex items-center justify-center">
        <div className="flex gap-3">
          <button
            class="btn button-1"
            type="button"
            onClick={() => handleOptionChange("day")}
          >
            <strong>TODAY</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          <button
            class="btn button-1"
            type="button"
            onClick={() => handleOptionChange("month")}
          >
            <strong>MONTH</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          <button
            class="btn button-1"
            type="button"
            onClick={() => handleOptionChange("year")}
          >
            <strong>YEAR</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>

        <section className="fixed top-40 w-full ">
          <div >{selectedOption === "day" && <DayCharts />}</div>
          <div>{selectedOption === "month" && <MonthCharts />}</div>
          <div>{selectedOption === "year" && <YearCharts />}</div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
