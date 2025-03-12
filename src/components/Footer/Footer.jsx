import desktopImg from "../../assets/FooterBg.png";
import logo from "../../assets/Group427322069.png";
import { FaPhoneAlt } from "react-icons/fa";
import fb from "../../assets/Facebook.png";
import linkedIn from "../../assets/LinkedIn.png";
import twitter from "../../assets/Twitter.png";
import insta from "../../assets/Instagram.png";
import appstore from "../../assets/AppStore.png";
import googlePlay from "../../assets/GooglePlay.png";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      data-aos="fade"
      data-aos-duration="300"
      data-aos-delay="200"
      className="bg-cover text-white sm:pt-14 "
      style={{ backgroundImage: `url(${desktopImg})` }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start sm:order-1">
            <img src={logo} alt="Company Logo" className="" />
          </div>

          {/* Quick Links & About */}
          <div className="text-xl sm:order-2">
            <h2 className="text-xl font-bold pb-2">QUICK LINKS</h2>
            <ul className="space-y-1">
              <li>
                <a href="" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
            <h2 className="text-xl font-bold pt-6 pb-2">ABOUT</h2>
            <p><strong>Company Name:</strong> HIT n HAMMER</p>
            <p><strong>HQ Location:</strong> Bilimora</p>
          </div>

          {/* Contact Info */}
          <div className="text-xl sm:order-4 xl:order-3">
            <h2 className="text-xl font-bold pb-3">GET IN TOUCH</h2>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> <a href="tel:+919722278859">+91 9722278859</a>
              </li>
              <li className="flex items-center gap-2 break-all">
              <MdEmail className="text-3xl"/>
                <a href="mailto:hitnhammertechnologies0706@gmail.com">hitnhammertechnologies0706@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Download Links */}
          <div className="order-2 xl:order-4 sm:flex flex-col items-center sm:items-center xl:justify-start sm:px-8 lg:px-0">
            <div className="sm:text-center lg:text-start sm:order-2 lg:order-1">
            <h2 className="text-xl font-bold pb-2">FOLLOW US</h2>
            <div className="flex justify-start gap-4">
              <img src={fb} alt="Facebook" className="w-8 lg:w-10 hover:scale-110 duration-200" />
              <img src={linkedIn} alt="LinkedIn" className="w-8 lg:w-10 hover:scale-110 duration-200" />
              <img src={twitter} alt="Twitter" className="w-8 lg:w-10 hover:scale-110 duration-200" />
              <img src={insta} alt="Instagram" className="w-8 lg:w-10 hover:scale-110 duration-200" />
            </div>
            </div>
            <div className="sm:order-1 lg:order-2">
            <h2 className="text-xl font-bold pt-6 pb-3 sm:hidden lg:block">DOWNLOAD</h2>
            <div className="flex gap-4 sm:-mt-2 sm:mb-5 lg:mt-0 lg:mb-0">
              <a href="#">
                <img src={appstore} alt="Download on the App Store" className="w-24 hover:scale-110 duration-200" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.taskwave.dailysync&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={googlePlay} alt="Get it on Google Play" className="w-24 hover:scale-110 duration-200" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
        <hr className="border-gray-300 opacity-30" />
        <p className="text-xs text-center py-5">Copyright © 2024. Dating Solution Limited. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
