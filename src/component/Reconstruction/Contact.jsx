import React from "react";

function Contact() {
  return (
    <section className="bg-[#ffaa06] font-worksans">
    <div className=" sm:py-10 sm:px-6 w-[85%] mx-auto max-sm:py-10">
      <div className="flex items-center justify-around max-sm:flex-col">
        {/* Description */}
        <p className="text-[26px] sm:w-[70%]">
          Summit Reconstruction focuses on bringing damaged and defective
          buildings back to life and original working order.
        </p>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#333645] text-white px-[80px] py-4 rounded hover:bg-white hover:text-black transition"
        >
          CONTACT US
        </a>
      </div>
    </div>
    </section>
  );
}

export default Contact;