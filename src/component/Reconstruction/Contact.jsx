import React from "react";

function Contact() {
  return (
    <section className="bg-[#ffaa06] font-worksans max-sm:px-[16px]">
    <div className=" sm:py-10 sm:px-6 md:w-[85%] mx-auto max-sm:py-10">
      <div className="flex items-center max-sm:gap-[40px] justify-around max-sm:flex-col">
        {/* Description */}
        <p className="text-center text-[24px] md:text-[26px] sm:w-[70%]">
          J&R NW Construction  provide comprehensive water mitigation and restoration services that restore peace of mind and property value
        </p>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#333645] text-white text-center text-[18px] font-medium max-sm:w-full md:px-[80px] py-4 rounded hover:bg-white hover:text-black transition"
        >
          CONTACT US
        </a>
      </div>
    </div>
    </section>
  );
}

export default Contact;