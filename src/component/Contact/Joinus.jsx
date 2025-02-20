import React from 'react';
import { TiTick } from "react-icons/ti";
import bgjoinus from '../../assets/images/joinus.jpg';
import { Link } from 'react-router-dom';

const jobPositions = [
  "Skilled Carpenters",
  "Experienced Applicator",
  "Restoration Carpenter",
  "Restoration Business Developer",
  "Restoration & Mitigation Technician",
];

function Joinus() {
  return (
    <section className="font-worksans bg-gray-100 py-16 px-6 text-center" style={{ backgroundImage: `url(${bgjoinus})` }}>

      <div className="sm:w-[40%] mx-auto">
        <h2 className="sm:text-[44px] text-gray-900 uppercase">J&R NW Construction</h2>
        <div className="w-[130px] h-[2px] bg-gray-500 mx-auto my-4"></div>
        <p className="text-gray-700 sm:text-[17px] leading-relaxed">
          We are always looking for great new people to join our team. If you are
          interested in any of the following positions, please fill out the
          application below and bring it by or email it to{" "}
          <a href="#" className="text-yellow-500">
            info@J&R NW Construction.com
          </a>
        </p>

        {/* Job Listings */}
        <ul className="mt-6 space-y-3 text-left text-gray-800 ">
          {jobPositions.map((job, index) => (
            <li key={index} className="flex items-center space-x-2">
              <TiTick  className="h-6 w-8 text-yellow-500" /> 
              <span className="text-[14px] text-[#666666]">{job}</span>
            </li>
          ))}
        </ul>

        {/* Apply Button */}
        <button className="mt-6 bg-yellow-500 p-[10px] text-white text-[14px] w-full transition duration-300">
          <Link to="/contact">
          Contact Us
          </Link>
        
        </button>
      </div>
    </section>
  );
}

export default Joinus;