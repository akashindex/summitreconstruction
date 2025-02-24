import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/images/logobg.png"

const Footer = () => {
  return (
    <>
      <div className="bg-[#001F3F] pt-[40px] px-40 py-8 text-[white] text-[17px] font-worksans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="leading-7">
          <div>
            <img src={logo} alt="Logo" className="h-[100px] w-[auto]" />
          </div>
          <div className="flex pt-[30px] gap-[20px]">
            <div className="px-[15px] py-[15px] rounded-full bg-[white] text-[#333645]">
              <FaFacebookF />
            </div>
            <div className="px-[15px] py-[15px] rounded-full bg-[white] text-[#333645]">
              <MdOutlineEmail />
            </div>
          </div>
        </div>
        <div>
          <p className=" text-[17px] font-medium">Projects</p>
          <ul className=" text-[17px] font-normal flex flex-col pt-[20px] leading-7">
            <a href="#">Tabor Heights</a>
            <a href="#">Holcomb Drive</a>
            <a href="#">Montclair Terrace</a>
            <a href="#">Courtyard at Springville HOA</a>
            <a href="#">Sorrento Bluff Apartments</a>
            <a href="#">Central Park HOA</a>
          </ul>
        </div>
        <div>
          <p className=" text-[17px] font-medium">Services</p>
          <ul className="flex flex-col pt-[20px] text-[17px] font-normal leading-7">
            <a href="#">Mitigation and restoration </a>
            <a href="#">Flooring/carpet</a>
            <a href="#">Drywall/painting </a>
            <a href="#">Interior/exterior finishing </a>
            <a href="#">Emergency services</a>
          </ul>
        </div>
        <div className="mt-[20px] md:text-right text-[17px] font-normal">
          <p>CONTRACT NUMBER</p>
          <p>​#232708</p>
          <p>J&R NW Construction LLC</p>
          <div className="mt-20px text-[20px] font-normal">
            <p className="pt-[20px]">© 2025 J&R NW Construction LLC</p>
            <p className="pt-[5px]">5039982340</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
