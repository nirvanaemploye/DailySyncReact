import React from 'react'
import aero from "../../assets/Group427322094.png";

const uniqueItem = [
    {
        title: "Live Feed",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean sed magna ullamcorper, scelerisque purus sit amet, pharetra sem. Praesent molestie lectus eget leo ",
        aosDelay: "0",
    },
    {
        title: "Diverse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean sed magna ullamcorper, scelerisque purus sit amet, pharetra sem. Praesent molestie lectus eget leo ",
        aosDelay: "500",
    },
    {
        title: "Schedule Event",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean sed magna ullamcorper, scelerisque purus sit amet, pharetra sem. Praesent molestie lectus eget leo ",
        aosDelay:"1000",
    },
];

const Unique = () => {
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
            <h1
              data-aos="fade-up"
              className="text-4xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center"
            >
              Unique Features
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-10">
            {uniqueItem.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="bg-[#232527] rounded-[98px] border border-[#A975FF] p-10 space-y-3 shadow-purple"
                >
                  <h1 className="text-4xl font-medium text-center text-[#FFFFFF]">
                    {data.title}
                  </h1>
                  <p className="text-[#FFFFFF99] text-xl font-normal text-center">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unique