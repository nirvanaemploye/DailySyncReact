const Input = () => {
  return (
    <section className="py-28 px-3">
      <div
        data-aos="fade"
        className="container mx-auto min-h-[313px] rounded-[52px] sm:rounded-[84px] bg-[#0A1C34] border border-white text-center px-6 py-10 md:w-[90%] lg:w-[1039px] "
      >
        <div className="md:w-10/12 m-auto space-y-5 md:space-y-8">
          <h1
            data-aos="zoom-in"
            className="font-normal text-white text-3xl sm:text-5xl font-serif"
          >
            Subscribe
          </h1>
          <p data-aos="zoom-in" className="text-lg md:text-xl text-white/80">
            Subscribe to DailySync for the latest updates, exclusive features,
            and time-saving tips to optimize your scheduling and productivity.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="border border-white rounded-3xl flex items-center w-full lg:w-[502px] mx-auto overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent w-full px-4 py-3 text-base md:text-lg text-white outline-none"
            />
            <button
              data-aos="zoom-in"
              data-aos-duration="100"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white sm:px-6 px-4 py-2 sm:py-3 font-semibold hover:opacity-90 transition rounded-full m-[2px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input;