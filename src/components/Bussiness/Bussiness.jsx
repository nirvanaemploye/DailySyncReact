import React from "react";
import aero from "../../assets/Aero_2.png";

const BussinessItem = [
  {
    title: "Approach 1",
    description:
      "The app uses monthly and yearly subscriptions to generate revenue from premium features, offering exclusive functionality and ensuring a steady income stream.",
    aosDelay: "0",
  },
  {
    title: "Approach 2",
    description:
      "Analyzing data from different social media apps to understand current user interests and improve app recommendations, ensuring better user engagement and personalized experiences.",
    aosDelay: "500",
  },
  {
    title: "Approach 3",
    description:
      "App monetization revenue is a crucial part of our business model, driving growth and sustainability while supporting continuous feature development and user engagement.",
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
            <h1
              data-aos="fade-up"
              className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center"
            >
              Business Model
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-5">
            {BussinessItem.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="rounded-full bg-[#232527] border border-[#63FF0F] shadow-green  sm:h-auto md:h-[352px] sm:w-auto md:w-[352px] px-4 py-7 m-auto"
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
