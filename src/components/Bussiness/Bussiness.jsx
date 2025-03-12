import aero from "../../assets/Aero.png";

const BussinessItem = [
  {
    id: "01",
    title: "Approach 1",
    description:
      "The app uses monthly and yearly subscriptions to generate revenue from premium features, offering exclusive functionality and ensuring a steady income stream.",
    aosDelay: "0",
  },
  {
    id: "02",

    title: "Approach 2",
    description:
      "Analyzing data from different social media apps to understand current user interests and improve app recommendations, ensuring better user engagement and personalized experiences.",
    aosDelay: "500",
  },
  {
    id: "03",
    title: "Approach 3",
    description:
      "App monetization revenue is a crucial part business model, driving growth and sustainability while supporting continuous feature development and user engagement.",
    aosDelay: "1000",
  },
];

const Bussiness = () => {
  return (
    <div className="sm:py-32 py-16">
      <div className="container">
        <div className="space-y-8">
          {/* heading section  */}
          <div className="flex text-center justify-center">
            <img
              data-aos="fade-down"
              src={aero}
              alt=""
              className="hidden md:block h-20 w-16 pb-8"
            />
            <h1
              data-aos="fade-up"
              className="text-6xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB] text-center"
            >
              Business Model
            </h1>
          </div>
          {/* Bussiness Data  */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-10 scale-90 md:scale-100">
            {BussinessItem.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="rounded-full bg-[#232527] border-[1px] border-[#63FF0F]/70 shadow-green mx-auto flex justify-center items-center "
                >
                  <div className="items-center justify-center text-center h-64 w-64 2xl:h-80 2xl:w-80 flex flex-col 2xl:my-3 2xl:mx-3 my-5 mx-5">
                    <h1 className="text-center text-4xl font-semibold text-[#FFFFFF] p-">
                      {data.title}
                    </h1>
                    <p className="text-center 2xl:text-xl sm:text-md font-normal leading-6 text-[#FFFFFF99] p-5">
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
