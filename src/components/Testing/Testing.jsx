import React from 'react'
import client from "../../assets/Group427322144.png";

const Testing = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 justify-between gap-6 gap-y-8">
          <div data-aos="zoom-in">
            <img src={client} alt="" />
          </div>
          <div data-aos="fade-up" className='space-y-5'>
            <h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB]">
              Testing & Market Analysis
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
        </div>
      </div>
    </div>
  );
}

export default Testing