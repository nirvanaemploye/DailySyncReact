import pi from "../../assets/graph.png";

const Graph = () => {
  return (
    <div className="sm:py-32 py-16">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 space-y-14">
          <div data-aos="zoom-out" className="">
            <img src={pi} alt="" />
          </div>
          <div
            data-aos="fade-up"
            className=" bg-gradient-to-r from-[#1F7EFB] to-[#8C0AD9] text-[#ffffff] text-xl sm:text-3xl h-auto lg:h-48 mx-auto lg:w-[537px] rounded-3xl xl:mx-5 lg:!mt-28"
          >
            <p data-aos="fade-up" className="p-4 text-center xl:text-left mx-auto">
              WITH £7,680, WE WILL COVER EXPANDING THE APP, MARKETING,
              ENGINEERING, AND DEVELOPMENT EXPENSES OVER A ONE-YEAR PERIOD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
