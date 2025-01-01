import React from "react";
import aero from "../../assets/Aero_2.png";


const BussinessItem = [
  {
    title: "Approach 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard  text ever since the Ipsum has been industry's standard",
    aosDelay: "0",
  },
  {
    title: "Approach 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard  text ever since the Ipsum has been industry's standard",
    aosDelay: "500",
  },
  {
    title: "Approach 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard  text ever since the Ipsum has been industry's standard",
    aosDelay: "1000",
  },
];

const Bussiness = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="space-y-8">
          <div className="flex text-center justify-center">
            <img
              data-aos="fade-down"
              src={aero}
              alt=""
              className="hidden xl:block h-20 w-16 pb-8"
            />
            <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center">
              Bussiness Model
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-5">
            {BussinessItem.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="rounded-full bg-[#232527] border border-[#b3fd8b] shadow-green  sm:h-auto md:h-[352px] sm:w-auto md:w-[352px] px-4 py-7 m-auto"
                >
                  <div className="text-center items-center justify-center space-y-5">
                    <h1 className="text-center text-4xl font-semibold text-[#FFFFFF] p-1 pt-6">
                      {data.title}
                    </h1>
                    <p className="text-center text-xs sm:text-xl font-normal leading-8 text-[#FFFFFF99]">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
