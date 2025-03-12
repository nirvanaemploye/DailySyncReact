import client from "../../assets/client.png";

const third = [
  {
    title: "Problem",
    description:
      "In the current scenario, We have to launch every platform to post related feeds and must be available to post during busy hours. This app streamlines the process, saving your time while ensuring consistency across platforms without constant availability for posting during peak hours.",
    aosDelay: "300",
  },
  {
    title: "Solution",
    description:
      "In this app, you can draft your future posts during your spare time on a single platform for multiple apps.This feature allows you to schedule posts in advance, ensuring consistency and saving time across all your social media platforms efficiently.",
    aosDelay: "500",
  },
];

const Problem = () => {
  return (
    <section className="sm:py-32 py-16">
    <div className="container">
      <div className="grid xl:grid-cols-2 gap-x-9 gap-y-16 xl:gap-y-0">
        <div data-aos="zoom-in" className="mx-auto ">
          <img src={client} alt=" " className="h-full" />
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-rows-2 gap-3 ">
            {third.map((data) => {
              return (
                <div
                key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-4 mt-4"
                >
                  <h1 className="text-5xl text-[#FFFFFF] font-medium">
                    {data.title}
                  </h1>
                  <p className="text-[#FFFFFF99] text-xl font-normal">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Problem;
