import React from 'react'
import graph from "../../assets/Group427321981.png";
import aero from "../../assets/Aero_2.png";

const Market = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-between space-y-5 md:mx-16">
          <div data-aos="fade-up" className="space-y-4 mt-20">
            <div className="flex">
              <img
                data-aos="fade-down"
                src={aero}
                alt=""
                className="hidden xl:block h-20 w-16 pb-8 -ml-16"
              />
              <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1F7EFB] to-[#8C0AD9]">
                The Market Trend
              </h1>
            </div>
            <p className="text-xl font-normal text-[#FFFFFF99] h-auto w-auto md:h-60 md:w-[439px]">
              Lorem Ipsum is simply dummy text of the printing industry. Lorem
              Ipsum has been the industry's text ever since the 1500s, when an
              unknown of type and scrambled it to make a type survived not only
              five centuries, but also typesetting, remaining essentially
              unchanged. in the 1960s with the release of Letraset sheets Ipsum
              passages, and more recently with desktop like Aldus PageMaker
              including versions
            </p>
          </div>
          <div data-aos="zoom-in" className="m-auto ">
            <img src={graph} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market