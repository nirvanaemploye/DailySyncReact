import React from 'react'

const Subscribe = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="bg-[#0A1C34] border-1-[#FFFFFF] rounded-[83px]">
          <div>
            <h1 className="text-5xl text-[#FFFFFF] font-normal text-center font-serif">
              Subscribe
            </h1>
            <p className="text-xl text-[#FFFFFF99] font-normal text-center m-auto w-auto lg:w-[693px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="border border-white rounded-full flex">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-transparent text-left w-full px-4 py-3 text-sm md:text-base text-gray-300 outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe