import icon from "../../assets/Dailysync16.png";
// import AppStore from "../../assets/appStore.png";
import AppStore from "../../assets/AppStore.png";
import Googleplay from "../../assets/GooglePlay.png";
import ticon from "../../assets/Ellipse268.png";
import two from "../../assets/two.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container sm:pb-32 pt-16">
      <div className="bg-[#211F3C] border-2 border-[#A975FFCC]/80 rounded-[80px]">
        <div className="flex flex-col-reverse md:flex-row mx-0 sm:mx-10 xl:mx-16 my-10 sm:my-20 xl:my-36 ">
          {/* Hero Content */}
          <div className="md:w-8/12 sm:space-y-10 my-auto">
            <div className="space-y-4">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="font-extrabold text-4xl sm:text-6xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#F50592] via-[#529FFC] to-[#3333CB] text-center md:text-left"
              >
                Dailysync app
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-white text-xl lg:text-3xl text-center md:text-left w-10/12 mx-auto md:mx-0"
              >
                Streamlining tasks, enhancing communication, and keeping your
                team synced every day effortlessly.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col md:flex-row gap-3 md:gap-6 items-center py-4 md:py-2"
            >
              <a className="xl:w-auto xl:h-auto w-32 h-14">
                <img
                  src={AppStore}
                  alt=""
                  className="hover:scale-110 duration-300"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.taskwave.dailysync&hl=en"
                target="_blank"
                className="xl:w-auto xl:h-auto w-32 h-14"
              >
                <img
                  src={Googleplay}
                  alt=""
                  className="hover:scale-110 duration-300"
                  onClick="https://play.google.com/store/apps/details?id=com.taskwave.dailysync&hl=en"
                />
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <motion.div
            initial={{ scale: 0.2, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 8 }}
            data-aos-delay="600"
            className="w-4/12 right-0 mx-auto py-4 md:py-0 relative "
          >
            <motion.img
              src={icon}
              alt=""
              initial={{ scale: 0.5, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />
            <div className="animate-pulse animation-delay-300 absolute -right-5 -top-24 hidden xl:block">
              <img src={ticon} alt="" className="" />
            </div>
            <div className="absolute -left-32 bottom-4 hidden lg:block">
              <img src={two} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
