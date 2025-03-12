import aero from "../../assets/Aero.png";

const content = [
  {
    id: "01",
    para: "Multiple Apps on a single Platform",
    aosDelay: "0",
  },
  {
    id: "02",
    para: "Schedule your Feeds and Plans",
    aosDelay: "500",
  },
  {
    id: "03",
    para: "Recieve on time Notification",
    aosDelay: "1000",
  },
  {
    id: "04",
    para: "Launch Feed on a single Click",
    aosDelay: "1500",
  },
];

const Schedule = () => {
  return (
    <div className="container sm:py-32 py-16">
      <div className="space-y-4">
        <div className="flex text-center justify-center">
          <img
            data-aos="fade-down"
            src={aero}
            alt=""
            className="hidden xl:block h-20 w-16 pb-8"
          />
          <h1
            data-aos="fade-up"
            className="text-6xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center"
          >
            Schedule app
          </h1>
        </div>
        <p
          data-aos="fade-up"
          className="text-xl text-center font-normal text-[#FFFFFF99] mt-2 md:mt-6 w-8/12 mx-auto"
        >
          Helps you effortlessly plan, organize, and automate social media posts
          across multiple platforms, saving time while ensuring consistent
          content delivery every day.
        </p>
      </div>
      {/* Grids */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-2  mt-5">
          {content.map((data) => {
            return (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-2 bg-[#232527] 2xl:p-8 px-5 py-6 text-center rounded-[48px] border border-[#0063e6] shadow-all-sides mt-6"
              >
                <h1 className="2xl:text-5xl text-4xl font-medium text-[#E4F12E] text-center md:text-left">
                  {data.id}
                </h1>
                <div className="text-[#FFFFFF] md:text-2xl xl:text-3xl text-xl font-medium text-center md:text-left">
                  {data.para}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
