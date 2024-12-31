import React from "react";
import pi from "../../assets/Group427322053.png";

const Graph = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between space-y-5">
          <div data-aos="zoom-in">
            <img src={pi} alt="" />
          </div>
          <div
            data-aos="fade-up"
            className=" bg-gradient-to-r from-[#1F7EFB] to-[#8C0AD9] text-[#ffffff] text-3xl h-auto lg:h-48 w-auto lg:w-[537px] rounded-3xl"
          >
            <p className="p-4 text-center md:text-left">
              WITH £250,000, WE WILL COVER EXPANDING THE APP, MARKETING,
              ENGINEERING, AND DEVELOPMENT EXPENSES OVER A ONE-YEAR PERIOD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
