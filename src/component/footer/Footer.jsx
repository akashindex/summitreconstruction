import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
    return (
       <>
       <div className='bg-[#36366d] pt-[40px] px-3 text-[white] text-[17px] font-worksans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        <div className='leading-7'>
            <p className=''>7215 SW Bonita Rd</p>
            <p className=''>​Tigard, OR 97224</p>
            <p className=''>503-451-3544</p>
            <div className='flex pt-[30px] gap-[20px]'>
            <div className='px-[15px] py-[15px] rounded-full bg-[white] text-[#333645]'>
                <FaFacebookF/>
            </div>
            <div className='px-[15px] py-[15px] rounded-full bg-[white] text-[#333645]'>
            <MdOutlineEmail/>
            </div>
            </div>
        </div>
        <div>
            <p className=' text-[17px] font-medium'>Projects</p>
            <ul className=' text-[17px] font-normal flex flex-col pt-[20px] leading-7'>
                <a href='#'>92nd Ave</a>
                <a href='#'>Holcomb Drive</a>
                <a href='#'>Montclair Terrace</a>
                <a href='#'>Courtyard at Springville HOA</a>
                <a href='#'>Sorrento Bluff Apartments</a>
                <a href='#'>Central Park HOA</a>
            </ul>
        </div>
        <div>
        <p className=' text-[17px] font-medium'>Services</p>
        <ul className='flex flex-col pt-[20px] text-[17px] font-normal leading-7'>
                <a href='#'>Mitigation and restoration </a>
                <a href='#'>Flooring/carpet</a>
                <a href='#'>Drywall/painting </a>
                <a href='#'>Interior/exterior finishing </a>
                <a href='#'>Framing</a>
                <a href='#'>Emergency services</a>
              
            </ul>
        </div>
        <div className='mt-[20px] md:text-right text-[17px] font-normal'>
            <p>OREGON LICENSE
            </p>
            <p>​#199636
            </p>
            <p>WASHINGTON LICENSE
            </p>
            <p>
            ​#SUMMIRI878JT
            </p>
            <div className='mt-20px text-[20px] font-normal'>
                <p className='pt-[20px]'>© 2025 J&R NW Construction</p>
                <p>Reconstruction</p>
            </div>
        </div>
       </div>
       </>
    );
};

export default Footer;
