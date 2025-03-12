import aero from "../../assets/Aero.png";
import group from "../../assets/problem.png";

const Investment = () => {
  return (
    <div className="sm:py-32 py-16">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 gap-10 items-center space-y-0">
          <div className="flex justify-center lg:justify-start order-2 xl:order-1">
            <img src={group} alt="Investment graphic" className="max-w-full h-auto p-5 md:p-0" data-aos="zoom-in" />
          </div>
          <div className="text-center lg:text-left order-1 xl:order-2">
            <div className="">
              <img
                data-aos="fade-down"
                src={aero}
                alt="Aero Icon"
                className="absolute -ml-20 hidden xl:block h-16 w-20 -mt-6"
              />
              <h1
                data-aos="fade-down"
                className="pb-6 text-6xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9] to-[#1F7EFB]"
              >
                Investment Opportunity
              </h1>
            </div>
            <div data-aos="fade" className="text-[#FFFFFF99] text-lg sm:text-xl font-normal mt-4 space-y-4">
              <p>
                Currently, we are in the process of raising a total round of
                £7,680 for the Daily Sync App. To ensure a focused and efficient
                decision-making process, we are offering board seats to investors
                who contribute a significant amount, typically above £7,680.
              </p>
              <p>
                However, we also invite potential investors with contributions as
                small as £3,840 to join us on this exciting journey as we reshape
                the future of social media management.
              </p>
              <p>
                If youre interested in becoming part of this innovative project,
                you can reach out to us through the contact information provided
                on our website or any other designated communication channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;