import React from 'react';
import ContactForm from './Contactform';
import { TiSocialFacebook } from "react-icons/ti";


function Getstart() {
  return (
    <div className="md:py-20 py-10 font-worksans bg-primary ">
      <p className="text-[17px] text-white sm:w-[60%] mx-auto text-center">
        <span className="text-white "> Get a FREE estimate today! Let us assess the issue, provide expert repairs, and ensure it never happens again.</span>
      </p>
      <div className='flex mt-20 max-w-6xl mx-auto justify-evenly gap-5 items-center md:flex-row max-sm:flex-col max-md:flex-col'>
        <div className="flex flex-col mx-auto sm:w-[60%] max-sm:w-[100%]">
          <div class="sm:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] max-md:mx-auto">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.293993284212!2d-122.7664903846785!3d45.42349437910021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950fd71d6f6a91%3A0x8f28d5f51ed6f8b5!2sSummit%20Reconstruction%20%26%20Restoration!5e0!3m2!1sen!2sus!4v1646431357923!5m2!1sen!2sus"
              class="w-full h-full border-0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className=" max-md:mx-auto">
            <h2 className="text-[26px] text-white my-[20px]">J&R NW Constructionn</h2>
            <p className="text-white font-[20px]">7215 SW Bonita Rd</p>
            <p className="text-white font-[20px]">Tigard, OR 97224</p>
            <p className="text-white font-[20px]">503-451-3544</p>
          </div>
          <div className='bg-gray-900 w-[50px] h-[50px] rounded-full hover:bg-[#7f808b] transition duration-300 mt-5 max-md:mx-auto'>
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