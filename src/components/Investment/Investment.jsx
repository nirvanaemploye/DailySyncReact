import React from 'react'
import aero from "../../assets/Aero_2.png";
import group from "../../assets/group.png";

const yearData = [
  {
    year: "2024",
    description: "App Launch in UK",
    aosDelay: "0",
  },
  {
    year: "2025",
    description: "Expand Across Europe",
    aosDelay: "500",
  },
  {
    year: "2025",
    description: "App Launch in UK",
    aosDelay: "1000",
  },
];

const Investment = () => {
  return (
    <div className="container mt-20 md:mt-44">
      <div className="flex flex-col-reverse md:grid xl:grid-cols-2 justify-between">
        {/* <div className="">
          <div>
            {yearData.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className=""
                >
                  <div className="my-4 font-Anek">
                    <h1 className="text-5xl font-bold text-[#E4F12E] ">
                      {data.year}
                    </h1>
                    <span className="text-4xl font-bold text-[#FFFFFF] ">
                      {data.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className=''>
          <img src={group} alt="" />
        </div>
        <div className=" -ml-0 md:-ml-16">
          <div className="flex">
            <img
              data-aos="fade-down"
              src={aero}
              alt=""
              className="hidden xl:block h-20 w-16 pb-8 -ml-16"
            />
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] mb-3">
              Investment Opportunity
            </h1>
          </div>
          <div className="text-[#FFFFFF99] text-xl font-normal space-y-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment