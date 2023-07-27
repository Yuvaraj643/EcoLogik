import React, { useState } from "react";
import DayCharts from "./DayCharts";
import MonthCharts from "./MonthCharts";
import YearCharts from "./YearCharts";
import "./Dashboard.css";
import "animate.css";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="main w-full h-full">
        <h1 className="relative text-xl top-20 flex justify-center animate__animated animate__fadeInUp text-white">
          <span>E</span>
          <span>N</span>
          <span>E</span>
          <span>R</span>
          <span>G</span>
          <span>Y</span>
          &nbsp;
          <span>M</span>
          <span>A</span>
          <span>N</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>T</span>
        </h1>
        <div className="relative top-28 text-bold w-full charts">
          <div className="flex gap-3 justify-center animate__animated animate__fadeInDown">
            <button
              data-text="Awesome"
              class="button-1"
              type="button"
              onClick={() => handleOptionChange("day")}
            >
              <span class="actual-text">&nbsp;week&nbsp;</span>
              <span class="hover-text" aria-hidden="true">
                &nbsp;week&nbsp;
              </span>
            </button>
            <button
              data-text="Awesome"
              class="button-1"
              type="button"
              onClick={() => handleOptionChange("month")}
            >
              <span class="actual-text">&nbsp;month&nbsp;</span>
              <span class="hover-text" aria-hidden="true">
                &nbsp;month&nbsp;
              </span>
            </button>
            <button
              data-text="Awesome"
              class="button-1"
              type="button"
              onClick={() => handleOptionChange("year")}
            >
              <span class="actual-text">&nbsp;year&nbsp;</span>
              <span class="hover-text" aria-hidden="true">
                &nbsp;year&nbsp;
              </span>
            </button>
          </div>

          <section className="top-48 my-5 w-full">
            {selectedOption === "day" && <DayCharts />}
            {selectedOption === "month" && <MonthCharts />}
            {selectedOption === "year" && <YearCharts />}
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
