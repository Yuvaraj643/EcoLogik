import React, { useState } from "react";
import CarbonFootprint from "./DayCharts/CarbonFootprint";

const CDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
          <div className="main w-full h-full">
        <h1 className="relative text-3xl top-20 flex justify-center animate__animated animate__fadeInUp">
          ENERGY MANAGEMENT
        </h1>
        <div className="relative top-28 text-bold w-full ">
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
            {/* {selectedOption === "month" && <MonthCharts />}
            {selectedOption === "year" && <YearCharts />} */}
          </section>
        </div>
      </div>
    </>
  )
};

export default CDashboard;
