import React from "react";

const BussinessItem = [
  {
    title: "Approach 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard  text ever since the ",
    aosDelay: "0",
  },
  {
    title: "Approach 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard  text ever since the ",
    aosDelay: "500",
  },
  {
    title: "Approach 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard  text ever since the ",
    aosDelay: "1000",
  },
];

const Bussiness = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center">
              Bussiness Model
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-5">
            {BussinessItem.map((data) => {
              return (
                <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="rounded-full bg-[#232527] border-[0.6px] border-[#63FF0F] drop-shadow-2xl  h-80 w-80 px-4 py-7 m-auto">
                  <div className="text-center items-center justify-center space-y-7">
                    <h1 className="text-center text-4xl font-semibold text-[#FFFFFF]">
                      {data.title}
                    </h1>
                    <p className="text-center text-xl font-normal text-[#FFFFFF99]">
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
