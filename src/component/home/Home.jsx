import { useState } from "react";
import bgimage1 from "/src/assets/images/holcomb6.jpg";
import bgimage2 from "/src/assets/images/download.jpg";
import bgimage3 from "/src/assets/images/bg.jpg";

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-[65vh]">
      {/* First Image (Row Span 2) */}
      <div
        className="bg-cover bg-center w-full flex items-center justify-center row-span-2 relative overflow-hidden"
        style={{ backgroundImage: `url(${bgimage1})` }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredIndex === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Hello</h1>
          </div>
        )}
        <h1 className="text-white text-3xl font-bold">Hello</h1>
      </div>

      {/* Second Image */}
      <div
        className="bg-cover bg-center w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${bgimage2})` }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredIndex === 1 && (
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Hello</h1>
          </div>
        )}
        <h1 className="text-white text-3xl font-bold">Hello</h1>
      </div>

      {/* Third Image */}
      <div
        className="bg-cover bg-center w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${bgimage3})` }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredIndex === 2 && (
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Hello</h1>
          </div>
        )}
        <h1 className="text-white text-3xl font-bold">Hello</h1>
      </div>
    </div>
  );
}

export default Home;