import React from "react";
import teamimage from "/src/assets/images/team.jpg";

function Team() {
  return (
    <div className="relative bg-cover bg-center py-16 px-6" style={{ backgroundImage: `url(${teamimage})` }}>
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-70"></div> */}

      {/* Content */}
      <div className="relative w-[61%] mx-auto text-center">
        <h2 className="text-[44px] text-[#333645] uppercase">
          We Work For You
        </h2>
        <div className="w-[30%] h-1 bg-gray-800 mx-auto"></div>
        <p className="text-[#5f616f] text-[20px] mt-3">
          Summit Reconstruction & Restoration was founded in 2012 with the vision of doing things the right way. We take pride in all of our employees, which is reflected in our quality of work.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex-1 bg-[#fea905] text-[18px] text-white py-2 px-6 rounded transition">
            Learn More About Summit
          </button>
          <button className="flex-1 bg-[#fea905] text-[18px] text-white py-2 px-6 rounded transition">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
