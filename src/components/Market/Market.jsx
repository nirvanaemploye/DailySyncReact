import React from 'react'
import graph from "../../assets/Group427321981.png";

const Market = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between space-y-5">
          <div data-aos="fade-up" className="space-y-5 mt-20">
            <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1F7EFB] to-[#8C0AD9]">
              The Market Trend
            </h1>
            <p className="text-xl font-normal text-[#FFFFFF99] h-auto w-auto md:h-60 md:w-96">
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