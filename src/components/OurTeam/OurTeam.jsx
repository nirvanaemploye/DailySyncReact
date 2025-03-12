import image1 from "../../assets/Jon.png";
import image2 from "../../assets/Tom.png";
import image3 from "../../assets/Siya.png";
import aero from "../../assets/Aero.png";

const OurTeam = () => {
  return (
    <div className="sm:py-32 py-16">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-3 space-y-10">
          <div className="space-y-3 ">
            <div className="flex">
              <img
                data-aos="fade-down"
                src={aero}
                alt=""
                className="hidden xl:block h-20 w-16 pb-8 -ml-0 md:-ml-16"
              />
              <h1
                data-aos="fade-up"
                className=" pb-5 text-6xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center md:text-left"
              >
                Our Team
              </h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-xl font-normal text-[#FFFFFF99]"
            >
              Our dedicated team—Nirav Mistry (CEO), Karishma Mistry (Lead
              Developer), Roshan Tailor (Designer)—work collaboratively to
              provide seamless social media scheduling, enhancing efficiency and
              user experience for businesses and individuals alike. Each team
              member brings unique skills: Nirav's leadership, Karishma's tech
              expertise, Roshan's design vision driving Daily Sync’s mission to
              simplify digital presence management.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="flex space-x-4 md:mx-6 justify-center items-center "
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
};

export default OurTeam;
