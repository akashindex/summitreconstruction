import { useState } from "react";
import logo from "../../assets/images/download.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Navtop from "./Navtop";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-[#292b37]">
        <Navtop />
      </div>
      <nav className="font-worksans bg-[#333447]">
        <div className="md:w-[1220px] mx-auto py-[15px] max-sm:px-4">
          <div className="flex justify-between">
            {/* Logo */}
            <div>
              <img src={logo} alt="Logo" className="h-[53px] w-[100px]" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 items-center">
              <a href="#" className="text-white px-4">
                Home
              </a>

              {/* Services Dropdown */}
              <div
                className="relative max-md:hidden cursor-pointer"
                onClick={() => handleDropdownToggle("services")}
              >
                <div className="flex items-center px-4">
                  <span className="text-white">Services</span>
                  <MdKeyboardArrowDown className="text-white" />
                </div>
                {openDropdown === "services" && (
                  <div className="absolute bg-white z-40 mt-2 py-2 w-[280px] border border-gray-300 ">
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Apartment Renovation & Repair
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Biohazard Disposal & Remediation
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Commercial Plumbing Portland
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Commercial Roofing & Siding Repair
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Deck Repair & Remediation
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Renovation & Repair for HOAs
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2 border-b border-gray-300">
                    Water Damage Restoration
                  </a>
                  <a href="#" className="block text-gray-800 px-4 py-2">
                    Water, Mold, & Hazmat Remediation
                  </a>
                </div>
                
                )}
              </div>

              {/* About Smith Dropdown */}
              <div
                className="relative max-md:hidden cursor-pointer"
                onClick={() => handleDropdownToggle("about")}
              >
                <div className="flex items-center px-4">
                  <span className="text-white">About Smith</span>
                  <MdKeyboardArrowDown className="text-white" />
                </div>
                {openDropdown === "about" && (
                  <div className="absolute bg-gray-900 shadow-md rounded-lg mt-2 z-40 py-2 w-[240px]">
                    <a href="#" className="block text-white px-4 py-2 border-b border-gray-300">
                      Resources & News
                    </a>
                    <a href="#" className="block text-white px-4 py-2 border-b border-gray-300">
                      Meet The Team
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="text-white px-4">
                Our Project
              </a>
              <a href="#" className="text-white px-4">
                Join Our Team
              </a>
              <a href="#" className="text-white px-4">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <div onClick={toggleMobileMenu} className="text-white focus:outline-none cursor-pointer">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden font-worksans max-sm:py-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-white">
              Home
            </a>

            {/* Mobile Services Dropdown */}
            <div onClick={() => handleDropdownToggle("services")} className="block text-white w-full z-40 text-left py-2 cursor-pointer">
              Services <MdKeyboardArrowDown className="inline-block" />
            </div>
            {openDropdown === "services" && (
              <div className="bg-white py-2 w-full">
                <a href="#" className="block text-white px-4 py-2">
                  Web Development
                </a>
                <a href="#" className="block text-white px-4 py-2">
                  SEO
                </a>
                <a href="#" className="block text-white px-4 py-2">
                  Mobile Apps
                </a>
              </div>
            )}

            {/* Mobile About Smith Dropdown */}
            <div onClick={() => handleDropdownToggle("about")} className="block text-white w-full text-left py-2 cursor-pointer">
              About Smith <MdKeyboardArrowDown className="inline-block" />
            </div>
            {openDropdown === "about" && (
              <div className=" py-2 w-full">
                <a href="#" className="block text-white px-4 py-2">
                  Resources & News
                </a>
                <a href="#" className="block text-white px-4 py-2">
                  Meet The Team
                </a>
              </div>
            )}

            <a href="#" className="block text-white">
              Our Project
            </a>
            <a href="#" className="block text-white">
              Join Our Team
            </a>
            <a href="#" className="block text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
