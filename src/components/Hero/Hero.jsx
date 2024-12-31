import React from "react";
import icon from "../../assets/Dailysync16.png";
import AppStore from "../../assets/Group427321985.png";
import Googleplay from "../../assets/Group427321986.png";
import ticon from "../../assets/Ellipse268.png";
import two from '../../assets/two.png';

const Hero = () => {
  return (
    <div className="container pt-24">
      <div className="bg-[#211F3C] w-auto h-auto xl:w-[1240px] xl:h-[618px] border-2 border-[#A975FFCC]/80 mx-auto rounded-[80px]">
        <div className="flex flex-col-reverse md:flex-row md:p-24 md:pb-0 md:pt-40">
          {/* Hero Content */}
          <div className="md:w-8/12 md:space-y-10 md:pt-12">
            <div className="space-y-4">
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="font-extrabold text-4xl lg:text-6xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#F50592] via-[#529FFC] to-[#3333CB] text-center md:text-left"
              >
                Dailysync app
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-white text-xl lg:text-3xl text-center md:text-left w-4/5 mx-auto md:mx-0"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col md:flex-row gap-3 md:gap-6 items-center py-4 md:py-0"
            >
              <button className="md:w-auto md:h-auto w-28 h-10">
                <img src={AppStore} alt="" />
              </button>
              <button className="md:w-auto md:h-auto w-28 h-10">
                <img src={Googleplay} alt="" />
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="w-4/12 right-0 mx-auto py-4 md:py-0 relative"
          >
            <img src={icon} alt="" />
            <div className="absolute -right-12 -top-28 hidden lg:block">
              <img src={ticon} alt="" className="" />
            </div>
            <div className="absolute -left-32 bottom-4 hidden xl:block">
              <img src={two} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
