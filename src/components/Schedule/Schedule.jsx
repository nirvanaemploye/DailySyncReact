import React from 'react'

const content = [
    {
        id: "01",
        para: "First-Ever Live Feed On A Schedule App",
        aosDelay: "0"
    },
    {
        id: "02",
        para: "First-Ever Live Feed On A Schedule App",
        aosDelay:"500"
    },
    {
        id: "03",
        para: "First-Ever Live Feed On A Schedule App",
        aosDelay: "1000"
    },
    {
        id: "04",
        para: "First-Ever Live Feed On A Schedule App",
        aosDelay: "1500"
    }
]

const Schedule = () => {
  return (
    <div className="container mt-10 md:mt-40">
      <div>
        <h1
          data-aos="fade-up"
          className="text-5xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#8C0AD9]/100 to-[#1F7EFB]/100 text-center"
        >
          Schedeule app
        </h1>
        <p
          data-aos="fade-up"
          className="text-xl md:text-2xl text-center font-normal text-[#FFFFFF99] mt-2 md:mt-6"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      {/* Grids */}
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-14 mt-2 md:mt-5'>
            {
                content.map((data) => {
                    return (
                      <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className="space-y-3 bg-[#232527] p-8 text-center rounded-[48px] border-2 border-[#0063e6] mt-12"
                      >
                        <h1 className="text-5xl font-medium text-[#E4F12E] md:text-left">
                          {data.id}
                        </h1>
                        <div className="text-[#FFFFFF] text-2xl font-medium">{data.para}</div>
                      </div>
                    );
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Schedule