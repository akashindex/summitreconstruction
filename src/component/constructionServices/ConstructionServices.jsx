import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/image0.jpeg"
import image2 from "../../assets/images/fire.jpeg"
import image3 from "../../assets/images/image2.jpeg"
import image4 from "../../assets/images/image3.jpeg"
import image5 from "../../assets/images/image4.jpeg"
import image6 from "../../assets/images/image5.jpg"
import { Link } from "react-router-dom";



const ConstructionServices = () => {
  const [services, setServices] = useState([
    {
      title: "Mitigation and restoration",
      description:
        "We identify and repair construction defects to ensure the durability and safety of your building.",
      image: image4,
    },
    {
      title: "fire damage restoration",
      description:
        "Repairing or rebuilding damaged structures, replacing drywall, flooring, and repainting to restore the property to its pre-fire condition.",
      image: image2,
    },
    {
      title: "Drywall/painting",
      description:
        "Enhance your property's exterior with professional siding and trim repair services.",
      image: image5,
    },
    {
      title: "Interior/exterior finishing",
      description:
        "We construct and waterproof decks to ensure long-lasting durability and style.",
      image: image1,
    },
    // {
    //   title: "Framing",
    //   description:
    //     "Professional installation of energy-efficient doors and windows for your property.",
    //   image: image5,
    // },

    {
      title: "Emergency services",
      description:
        "Professional installation of energy-efficient doors and windows for your property.",
      image: image6,
    },
  ]);

  // Future API integration
  // useEffect(() => {
  //   fetch("YOUR_API_ENDPOINT")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data))
  //     .catch((err) => console.error("Error fetching services:", err));
  // }, []);

  return (
    <div className="pt-10 pb-16 font-worksans bg-primary text-white">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold">Our Services</h1>
        <div className="w-12 h-[2px] bg-white my-2"></div>
        <p className="text-white text-lg max-w-lg px-4">
        Our Reconstruction Crews specialize in providing top-tier construction services with expertise and precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto mt-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#292B37]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <Link to="/contact"> <button className="my-2 bg-primary text-white text-center text-[18px] font-medium max-sm:w-full md:px-[40px] py-2 rounded ">Contact Us</button> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionServices;
