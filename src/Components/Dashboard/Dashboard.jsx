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
      <div className="text-container fixed top-10 w-full p-3 flex items-center justify-center">
        <span>ENERGY</span>&nbsp;
        <span>MANAGEMENT</span>
      </div>
      <div className="fixed top-32 w-full flex items-center justify-center">
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

        <section className="fixed top-48 w-full flex justify-around">
          {selectedOption === "day" && <DayCharts />}
          {selectedOption === "month" && <MonthCharts />}
          {selectedOption === "year" && <YearCharts />}
        </section>
      </div>
    </>
  );
};

export default Dashboard;
