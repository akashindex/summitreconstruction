import React from 'react';
import ContactForm from './Contactform';
import { TiSocialFacebook } from "react-icons/ti";


function Getstart() {
  return (
    <div className="p-6 font-worksans w-[1200px] mx-auto mt-[30px]">
      <p className="text-[17px] text-gray-700 w-[60%] mx-auto text-center">
        <span className="text-[#f4a62a] "> <a href="#">Contact us for a FREE estimate</a></span> so we can get started at identifying the problem,
        repairing the issue, and preventing it from happening again.
      </p>
      <div className='md:flex mt-20 justify-evenly gap-5 items-center'>
      <div className="flex flex-col ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.293993284212!2d-122.7664903846785!3d45.42349437910021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950fd71d6f6a91%3A0x8f28d5f51ed6f8b5!2sSummit%20Reconstruction%20%26%20Restoration!5e0!3m2!1sen!2sus!4v1646431357923!5m2!1sen!2sus"
          width="500"
          height="400"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="">
          <h2 className="text-[26px] my-[20px]">Summit Reconstruction</h2>
          <p className="text-gray-700 font-[20px]">7215 SW Bonita Rd</p>
          <p className="text-gray-700 font-[20px]">Tigard, OR 97224</p>
          <p className="text-gray-700 font-[20px]">503-451-3544</p>
        </div>
        <div className='bg-gray-900 w-[50px] h-[50px] rounded-full hover:bg-[#7f808b] transition duration-300 mt-5'>
        <TiSocialFacebook className='h-[45px] w-[45px] mx-auto mt-[2px] text-[#ffaa27] hover:text-[#292b37] transition duration-300' />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      </div>
    </div>
  );
}

export default Getstart;