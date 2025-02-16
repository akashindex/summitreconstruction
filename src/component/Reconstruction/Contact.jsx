import React from "react";

function Contact() {
  return (
    <section className="bg-[#ffaa06]">
    <div className=" py-16 px-6 w-[80%] mx-auto">
      <div className="flex items-center justify-around">
        {/* Description */}
        <p className="text-[26px] w-[70%]">
          Summit Reconstruction focuses on bringing damaged and defective
          buildings back to life and original working order.
        </p>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#333645] text-white px-[80px] py-4 font-semibold rounded hover:bg-white hover:text-black transition"
        >
          CONTACT US
        </a>
      </div>
    </div>
    </section>
  );
}

export default Contact;