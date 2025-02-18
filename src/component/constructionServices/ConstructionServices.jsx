import React, { useState, useEffect } from "react";

const ConstructionServices = () => {
  // State for services (initially hardcoded, can be fetched from an API)
  const [services, setServices] = useState([
    {
      title: "Construction Defect Repair",
      description: "We identify and repair construction defects to ensure the durability and safety of your building.",
      image: "/src/assets/images/holcomb6.jpg",
    },
    {
      title: "Major Rehabilitation Projects",
      description: "Complete structural rehabilitation including roofing, siding, plumbing, and electrical repairs.",
      image: "/src/assets/images/bg.jpg",
    },
    {
      title: "Siding & Trim Repairs",
      description: "Enhance your property's exterior with professional siding and trim repair services.",
      image: "/src/assets/images/download.jpg",
    },
    {
      title: "Deck Rebuilds & Waterproofing",
      description: "We construct and waterproof decks to ensure long-lasting durability and style.",
      image: "/src/assets/images/92brand.jpg",
    },
    {
      title: "Doors & Window Installations",
      description: "Professional installation of energy-efficient doors and windows for your property.",
      image: "/src/assets/images/courtyard.jpg",
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
          Our Reconstruction Crews are experts in delivering high-quality construction services.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto mt-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#292B37]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionServices;
