import React from "react";
import { FaCheck } from "react-icons/fa";

const ConstructionServices = () => {
  return (
    <>
      <div className=" pt-[40px] pb-[70px] ">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h1 className="text-[44px] font-normal">Construction Services</h1>
          <div className="w-[100%] max-w-[12%] h-[1px] bg-black"></div>
        </div>
        <div className="text-center text-[#292B37] text-[18px] flex flex-col items-center pt-[36px]">
          <h3 className=" md:w-[723px]">
            Our Reconstruction Crews are the best in Portland. They have the
            experience, training and certification to successfully execute any
            project, whether it be an emergency repair or a capital improvement.
          </h3>
          <p className="pt-[20px]">
            Below is a list of our construction services:
          </p>
        </div>
        <div className="pr-[80px] flex flex-col items-center pt-[30px]">
          <div className="">
            <div className="flex gap-[20px] pr-[270px] items-center text-[#666666] pb-[10px]">
              <FaCheck style={{ color: "yellow" }} />
              Construction Defect Repair
            </div>
            <div className="flex flex-col pr-[270px] items-start text-[#666666]">
              <div className="flex gap-[20px]">
                <FaCheck style={{ color: "yellow" }} />
                Major Rehabilitation Projects
              </div>
              <div className="md:ml-[60px]">
                <li class="list-square text-[#292B37]">
                  <span className="text-[#FFAA06]">Re-roof</span>
                </li>
                <li class="list-square text-[#292B37]">
                  <span className="text-[#FFAA06]">Re-side</span>
                </li>
                <li class="list-square text-[#292B37]">
                  <span className="text-[#FFAA06]">Re-plumb</span>
                </li>
                <li class="list-square text-[#292B37]">
                  <span className="text-[#666666]">Mechanical</span>
                </li>
                <li class="list-square text-[#292B37]">
                  <span className="text-[#666666]">Electrical</span>
                </li>
                <li class="list-square text-[#292B37]">
                  <span className="text-[#FFAA06]">Paint</span>
                </li>
              </div>
            </div>
            <div className="flex gap-[20px] pr-[270px] items-center text-[#666666] pb-[10px]">
              <FaCheck style={{ color: "yellow" }} />
              Siding & Trim Repairs
            </div>
            <div className="flex gap-[20px] pr-[270px] items-center text-[#666666] pb-[10px]">
              <FaCheck style={{ color: "yellow" }} />
              Deck Rebuilds & Waterproofing
            </div>
            <div className="flex gap-[20px] pr-[270px] items-center text-[#666666] pb-[10px]">
              <FaCheck style={{ color: "yellow" }} />
              Doors & Window Installations
            </div>
            <div className="flex gap-[20px] pr-[270px] items-center text-[#666666] pb-[10px]">
              <FaCheck style={{ color: "yellow" }} />
              Building Envelope Maintenance & Improvements
            </div>
            <div className="flex gap-[20px] pr-[270px] items-center text-[#666666] pb-[10px]">
              <FaCheck style={{ color: "yellow" }} />
              Special & Unique Projects
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionServices;
