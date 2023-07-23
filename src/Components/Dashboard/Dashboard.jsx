import React, { useState } from "react";
import DayCharts from "./DayCharts";
import MonthCharts from "./MonthCharts";
import YearCharts from "./YearCharts";
import "./Dashboard.css";
import 'animate.css';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className=" w-full h-full">
        <div className="text-container relative top-10 w-full  p-3 flex items-center justify-center animate__animated animate__lightSpeedInRight">
          <span>ENERGY</span>&nbsp;
          <span>MANAGEMENT</span>
        </div>
        <div className="my-5 w-full ">
          <div className="flex gap-3 justify-center animate__animated animate__fadeInDown">
            {/* <button
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
          </button> */}
            <button
              data-text="Awesome"
              class="button-1"
              type="button"
              onClick={() => handleOptionChange("day")}
            >
              <span class="actual-text">&nbsp;today&nbsp;</span>
              <span class="hover-text" aria-hidden="true">
                &nbsp;today&nbsp;
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
