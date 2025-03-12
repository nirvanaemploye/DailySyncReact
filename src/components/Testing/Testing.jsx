import TestImg from "../../assets/TestImg.png";
import aero from "../../assets/Aero.png";

const Market = () => {
  return (
    <div className="sm:py-32 py-14">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-center gap-x-20 ">
          <div data-aos="zoom-in" className="m-auto !mt-10 xl:mt-0 xl:order-1 order-2">
            <img src={TestImg} alt="" className="max-w-full h-auto" />
          </div>
          <div data-aos="fade-up" className="space-y-4 my-auto mx-auto xl:order-2 order-1 text-center xl:text-left">
            <div className="flex justify-center xl:justify-normal">
              <img
                data-aos="fade-down"
                src={aero}
                alt=""
                className="hidden md:block h-20 w-16 pb-8 -ml-16"
              />
              <h1
                data-aos="fade-up"
                className="text-6xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1F7EFB] to-[#8C0AD9]"
              >
                Testing & Market Analysis
              </h1>
            </div>
            <p className="text-xl font-normal text-[#FFFFFF99] h-auto w-auto md:h-60 xl:w-[490px] text-justify ">
              The market for event scheduling and time management apps continues
              to grow, driven by the increasing need for efficient personal and
              business organization. Users are seeking streamlined,
              cross-platform solutions that offer seamless integration,
              automation, and flexibility. With a rising demand for productivity
              tools that simplify time management, DailySync is positioned to
              capitalize on this trend by offering a user-friendly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
