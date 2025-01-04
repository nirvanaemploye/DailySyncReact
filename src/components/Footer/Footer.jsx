import React from "react";
import desktopImg from "../../assets/Rectangle12441.png";
import logo from "../../assets/Group427322069.png";
import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import fb from "../../assets/Group427322091.png";
import linkedIn from "../../assets/Group427322089.png";
import twitter from "../../assets/Group427322088.png";
import insta from "../../assets/Group427322090.png";
import appstore from "../../assets/Group427321985.png";
import googlePlay from "../../assets/Group427321986.png";

const Footer = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-cover"
      style={{ backgroundImage: `url(${desktopImg})` }}
    >
      <div className="container mt-20 md:mt-36">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-4 space-x-5 lg:grid-cols-4 justify-between pt-4 md:pt-24"
        >
          <div data-aos="zoom-in" className="mx-auto text-center 2xl:-ml-3">
            <img src={logo} alt="" />
          </div>
          <div className="space-y-6">
            <div>
              <ul>
                <h1 className="text-2xl font-bold text-[#FFFFFF]">
                  QUICK LINKS
                </h1>
                <li className="text-2xl font-normal text-[#FFFFFF]">
                  Privacy Policy
                </li>
                <li className="text-2xl font-normal text-[#FFFFFF]">
                  Terms & Condition
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h1 className="text-2xl font-bold text-[#FFFFFF]">
                  GET IN TOUCH
                </h1>
                <li className="text-2xl font-normal text-[#FFFFFF]">
                  <a href="tel:+919722278859" className="flex gap-x-2">
                    <FaPhoneAlt className="mt-1" /> +91 9722278859
                  </a>
                </li>
                <li className="break-all text-2xl font-normal text-[#FFFFFF]">
                  <a
                    href="mailto:hitnhammertechnologies0706@gmail.com"
                    className="flex gap-x-2"
                  >
                    <TbMailFilled className="mt-1 text-7xl md:text-5xl" />
                    hitnhammertechnologies0706@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <ul>
              <h1 className="text-2xl font-bold text-[#FFFFFF]">ABOUT</h1>
              <li className="text-2xl font-normal text-[#FFFFFF]">
                <strong>COMPANY NAME : </strong>HIT n HAMMER
              </li>
              <li className="text-2xl font-normal text-[#FFFFFF]">
                <strong>HQ LOCATION : </strong>Bilimora
              </li>
            </ul>
          </div>
          <div className="space-y-7 2xl:ml-16">
            <div className="space-y-3">
              <div className="grid sm:flex sm:space-x-0 lg:space-x-3 justify-center 2xl:-ml-14">
                <img src={fb} alt="" />
                <img src={linkedIn} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#FFFFFF] text-center md:text-left">
                  DOWNLOAD
                </h1>
              </div>
            </div>
            <div className="flex space-x-2 justify-center lg:justify-start">
              <a>
                <img src={appstore} alt="" className="" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.taskwave.dailysync&hl=en"
                target="_blank"
              >
                <img src={googlePlay} alt="" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4 md:mt-20 text-[#E2DFDF] opacity-20" />
      <p className="text-xs text-[#FFFFFF] text-center font-normal py-5 font-Poppins">
        Copyright2024. Dating solution Limited. All right reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
