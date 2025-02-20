import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ConstructionServices = () => {
  const [services, setServices] = useState([
    {
      title: "Mitigation and restoration",
      description: "We assess and resolve construction issues to enhance the strength, safety, and longevity of your building.",
      image: "./src/assets/images/image0.jpeg",
    },
    {
      title: "Flooring/carpet",
      description: "We offer expert installation and restoration of flooring and carpets, ensuring durability, style, and comfort for your space",
      image: "./src/assets/images/image1.jpeg",
    },
    {
      title: "Drywall/painting",
      description: "We provide professional drywall installation, repairs, and painting services to create a flawless and polished finish for your space",
            image: "./src/assets/images/image2.jpeg",
    },
    {
      title: "Interior/exterior finishing",
      description: "We deliver high-quality finishing touches for both interiors and exteriors, enhancing aesthetics, durability, and overall appeal",
            image: "./src/assets/images/image3.jpeg",
    },
    {
      title: "Framing",
      description: "We build strong and precise structural frameworks to ensure stability, durability, and seamless construction for your project",
            image: "./src/assets/images/image4.jpeg",
    },
    
    {
      title: "Emergency services",
      description: "We provide rapid response solutions for urgent repairs and disaster recovery, ensuring safety and minimizing damage",
      image: "./src/assets/images/image5.jpeg",
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
    <div className="pt-10 pb-16 font-worksans">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold">Our Best Services</h1>
        <div className="w-12 h-[2px] bg-black my-2"></div>
        <p className="text-[#292B37] text-lg max-w-lg px-4">
        Our Reconstruction Crews specialize in providing top-tier construction services with expertise and precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto mt-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#292B37]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <Link to="/contact"> <button className="my-2 bg-[#36366d] text-white text-center text-[18px] font-medium max-sm:w-full md:px-[40px] py-2 rounded ">Contact Us</button> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionServices;
