const Subscribe = () => {
  return (
    <div className="bg-[#0A1C34] py-32 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="bg-[#0A1C34] border border-white rounded-[50px] p-10">
          <h1 className="text-5xl text-white font-semibold font-serif">Subscribe</h1>
          <p className="text-xl text-white/80 font-normal mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center border border-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent w-full px-6 py-3 text-sm md:text-base text-white outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 font-semibold hover:opacity-90 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
