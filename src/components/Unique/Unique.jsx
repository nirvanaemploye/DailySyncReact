import aero from "../../assets/Aero.png";

const uniqueItem = [
  {
    title: "Live Feed",
    description:
      "Draft your future posts during your spare time, with support for multiple social media apps. Plan and schedule your content effortlessly across various platforms, saving time.",
    aosDelay: "0",
  },
  {
    title: "Diverse",
    description:
      "This unique app provides the facility to post feeds to multiple apps from a single platform and helps you manage and track your past posts. Easily streamline your social media presence and stay organized.",
    aosDelay: "500",
  },
  {
    title: "Schedule Event",
    description:
      "You can schedule all your future events over the weekend, so you can save time and avoid drafting them during busy days.This helps you stay organized and ensures consistency in your posts.",
    aosDelay: "1000",
  },
];

const Unique = () => {
  return (
    <div className="sm:py-32 py-16">
      <div className="container">
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
              className="text-6xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center pb-8"
            >
              Unique Features
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-6">
            {uniqueItem.map((data) => {
              return (
                <div
                key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="bg-[#232527] rounded-[98px] border border-[#A975FF] md:p-10 p-7 space-y-3 shadow-purple"
                >
                  <h1 className="text-4xl font-medium text-center text-[#FFFFFF]">
                    {data.title}
                  </h1>
                  <p className="text-[#FFFFFF99] text-xl font-normal text-center p-1 ">
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