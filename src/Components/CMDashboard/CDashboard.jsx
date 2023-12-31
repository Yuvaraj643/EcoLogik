import React, { useState } from "react";
import CarbonFootprint from "./DayCharts/CarbonFootprint";
import CarbonMonthCharts from "./MonthCharts/CarbonMonthCharts"
import CarbonYearCharts from "./YearCharts/CarbonYearCharts";
import "./style.css"
const CDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="main w-full h-full">
        <h1 className="relative text-3xl top-20 flex justify-center text-white animate__animated animate__fadeInUp">
          CARBON EMISSION MANAGEMENT
        </h1>
        <div className="relative top-28 text-bold w-full charts">
          <div className="flex gap-3 justify-center animate__animated animate__fadeInDown">
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
            {selectedOption === "day" && <CarbonFootprint />}
            {selectedOption === "month" && <CarbonMonthCharts />}
            {selectedOption === "year" && <CarbonYearCharts />}
          </section>
        </div>
      </div>
    </>
  );
};

export default CDashboard;
