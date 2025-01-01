import React from 'react'
import client from "../../assets/Group427322555.png";
import { data } from 'autoprefixer';

const third = [
  {
    title: "Problem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean sed magna ullamcorper, scelerisque purus sit amet, pharetra sem. Praesent molestie lectus eget leo ",
    aosDelay: "0",
  },
  {
    title: "Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean sed magna ullamcorper, scelerisque purus sit amet, pharetra sem. Praesent molestie lectus eget leo ",
    aosDelay: "500",
  },
];

const Problem = () => {
  return (
    <div className='container mt-20 md:mt-44'>
        <div className="grid lg:grid-cols-2 md:mx-16">
            <div data-aos="zoom-in" className=''>
                <img src={client} alt="" />
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-rows-2 gap-3 mt-10'>
                    {
                        third.map((data) => {
                            return (
                              <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className='space-y-4 mt-4'
                              >
                                <h1 className="text-5xl text-[#FFFFFF] font-medium">
                                  {data.title}
                                </h1>
                                <p className="text-[#FFFFFF99] text-xl font-normal">
                                  {data.description}
                                </p>
                              </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Problem