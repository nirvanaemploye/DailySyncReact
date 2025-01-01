import React from "react";
import aero from "../../assets/Aero_2.png";

const content = [
  {
    id: "01",
    para: "First-Ever Live Feed On A Schedule App",
    aosDelay: "0",
  },
  {
    id: "02",
    para: "First-Ever Live Feed On A Schedule App",
    aosDelay: "500",
  },
  {
    id: "03",
    para: "First-Ever Live Feed On A Schedule App",
    aosDelay: "1000",
  },
  {
    id: "04",
    para: "First-Ever Live Feed On A Schedule App",
    aosDelay: "1500",
  },
];

const Schedule = () => {
  return (
    <div className="container mt-10 md:mt-40">
      <div className="space-y-4">
        <div className="flex text-center justify-center">
          <img
            data-aos="fade-down"
            src={aero}
            alt=""
            className="hidden xl:block h-20 w-16 pb-8"
          />
          <h1
            data-aos="fade-up"
            className="text-4xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center"
          >
            Schedule app
          </h1>
        </div>
        <p
          data-aos="fade-up"
          className="text-xl md:text-2xl text-center font-normal text-[#FFFFFF99] mt-2 md:mt-6"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      {/* Grids */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-10 sm:gap-y-0.5 md:gap-14 mt-2 md:mt-5">
          {content.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 bg-[#232527] p-8 text-center rounded-[48px] border border-[#0063e6] shadow-all-sides mt-12"
              >
                <h1 className="text-5xl font-medium text-[#E4F12E] text-center md:text-left">
                  {data.id}
                </h1>
                <div className="text-[#FFFFFF] text-2xl font-medium text-center md:text-left">
                  {data.para}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
