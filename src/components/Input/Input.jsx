import React from 'react'

const Input = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="container min-h-[313px] rounded-[84px] bg-[#0A1C34] border border-white text-center md:w-[1039px] mt-20 md:mt-44"
      >
        <div className="md:w-10/12 m-auto md:space-y-8 space-y-2 pt-8">
          <h1
            data-aos="fade-up"
            className="font-normal text-white text-5xl font-serif"
          >
            Subscribe
          </h1>
          <p data-aos="fade-up" className="text-xl text-[#FFFFFF99]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div
            data-aos="fade-up"
            className="border border-white rounded-full flex mb-4 lg:w-[502px] mx-auto"
          >
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-transparent text-left w-full px-4 py-3 text-xl text-[#FFFFFF] outline-none "
            />
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition m-1"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );

}

export default Input