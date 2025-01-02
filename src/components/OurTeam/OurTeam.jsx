import React from 'react'
import image1 from "../../assets/Group427322135.png";
import image2 from "../../assets/Group427322137.png";
import image3 from "../../assets/Group427322136.png";
import aero from "../../assets/Aero_2.png";

const OurTeam = () => {
  return (
    <div>
      <div className="container mt-20 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
          <div className="space-y-4">
            <div className="flex">
              <img
                data-aos="fade-down"
                src={aero}
                alt=""
                className="hidden xl:block h-20 w-16 pb-8 -ml-0 md:-ml-16"
              />
              <h1
                data-aos="fade-up"
                className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center md:text-left"
              >
                Our Team
              </h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-xl font-normal text-[#FFFFFF99]"
            >
              Our talented team—John (CEO), Sarah (Lead Developer), Alex
              (Designer), and Emma (Marketing) tirelessly at Daily Sync,
              combining expertise in technology and design to simplify social
              media scheduling for users globally.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex space-x-4 md:mx-6"
          >
            <div className="space-y-3">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
            </div>
            <div>
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam