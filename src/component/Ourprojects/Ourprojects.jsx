import React from 'react';
import { Link } from 'react-router-dom';  
import banner from '../../assets/images/banner-home2.jpg';

import afterKitchen from '../../assets/images/92brand.jpg';
import beforeKitchen from '../../assets/images/holcombdrive.jpg';
import houseRenovation from '../../assets/images/mtclair2.jpg';
import construction from '../../assets/images/courtyard.jpg';
import sorrento from '../../assets/images/sorrento-fi.jpg';
import centralpark from '../../assets/images/centralpark3.jpg';

const images = [
    { src: afterKitchen, alt: "92brand", link: "/Avebrand" },
    { src: beforeKitchen, alt: "Holcomb Drive", link: "/Holcomb" },
    { src: houseRenovation, alt: "Montclair Terrace", link: "/Montclair" },
    { src: construction, alt: "Courtyard at Springville HOA", link: "/Courtyard" },
    { src: sorrento, alt: "Sorrento Bluff Apartment", link: "/Sorrento" },
    { src: centralpark, alt: "Central Park HOA", link: "/CentralPark" }
];

function OurProjects() {
    return (
        <section>

            <div
                className="bg-cover bg-center h-[40vh] flex items-center font-worksans justify-center text-center text-white"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="z-10 px-4 w-[60%] mx-auto">
                    <h1 className="text-[48px]">OUR PROJECTS</h1>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 text-center py-12">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                    We transform spaces and revive structures with expertise and care. Our projects
                    range from restoring the beauty of historical buildings to reconstructing damaged
                    properties, all while prioritizing quality craftsmanship and customer satisfaction.
                    We are committed to delivering exceptional results that reflect our passion for
                    excellence. Explore our services and see how we can bring your vision to life
                    through our projects!
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 px-4 mb-10">
                {images.map((image, index) => (
                    <Link key={index} to={image.link} className="relative overflow-hidden group cursor-pointer block">

                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-white text-[20px] tracking-wide capitalize text-center">
                                {image.alt}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default OurProjects;
