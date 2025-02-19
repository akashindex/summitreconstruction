import React from "react";

function Banner() {
  return (
    <div className="text-center pt-[35px] pb-[30px] width-[90%] mx-auto font-worksans">
      <h1 className="text-[36px] md:text-[44px] my-[35px] text-[#333645]">
      J&R NW Construction
      </h1>
      <div className="mt-6">
      <p className="text-[#ffaa06] text-[17px] uppercase">
        Office Line | 24/7 Emergency Line
      </p>
      <a
        href="#"
        className="text-[16px] md:text-3xl font-semibold text-gray-600 mt-1 block"
      >
        503.451.3544
      </a>
      </div>
    </div>
  );
}

export default Banner;
