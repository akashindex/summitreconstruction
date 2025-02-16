import React from "react";

function Banner() {
  return (
    <div className="text-center py-10 width-[80%] mx-auto">
      <h1 className="text-[44px]  text-[#333645]">
        Summit Reconstruction & Restoration
      </h1>
      <div className="mt-6">
      <p className="text-orange-500 font-[17px] uppercase">
        Office Line | 24/7 Emergency Line
      </p>
      <a
        href="tel:5034513544"
        className="text-2xl md:text-3xl font-semibold text-gray-600 mt-1 block"
      >
        503.451.3544
      </a>
      </div>
    </div>
  );
}

export default Banner;
