import { useState } from "react";
import logo from "../../assets/images/download.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Navtop from "./Navtop";
import { Link } from "react-router-dom";
function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-[#292b37]">
        <Navtop />
      </div>
      <nav className="font-worksans bg-[#333447]">
        <div className="md:w-[1200px] mx-auto py-[15px] max-sm:px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <img src={logo} alt="Logo" className="h-[53px] w-[100px]" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link to="/" className="text-white px-4">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center px-4">
                  <Link to="/Services" className="text-white">Services</Link>
                  <MdKeyboardArrowDown className="text-white" />
                </div>
                {openDropdown === "services" && (
                  <div className="absolute bg-white z-40 mt-2 py-2 w-[280px] border border-gray-300">
                    {[
                      "Apartment Renovation & Repair",
                      "Biohazard Disposal & Remediation",
                      "Commercial Plumbing Portland",
                      "Commercial Roofing & Siding Repair",
                      "Deck Repair & Remediation",
                      "Renovation & Repair for HOAs",
                      "Water Damage Restoration",
                      "Water, Mold, & Hazmat Remediation",
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-gray-800 px-4 py-2 transition-colors border-b border-gray-300"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* About Smith Dropdown */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center px-4">
                  <span className="text-white">About Smith</span>
                  <MdKeyboardArrowDown className="text-white" />
                </div>
                {openDropdown === "about" && (
                  <div className="absolute bg-white mt-2 z-40 py-2 w-[240px] border border-gray-300">
                    <a href="#" className="block text-gray-900 px-4 py-2 border-b border-gray-300">
                      Resources & News
                    </a>
                    <a href="#" className="block text-gray-900 px-4 py-2 border-b border-gray-300">
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
              <a href="/Contact" className="text-white px-4">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
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
        <div className={`md:hidden bg-[#292b37] ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-4 py-3 space-y-2">
            <a href="#" className="block text-white">
              Home
            </a>

            {/* Mobile Services Dropdown */}
            <div
              onClick={() => handleMobileDropdownToggle("services")}
              className="block text-white flex justify-between items-center cursor-pointer py-2"
            >
              Services <MdKeyboardArrowDown className="text-white" />
            </div>
            {openDropdown === "services" && (
              <div className="bg-white py-2 w-full">
                {[
                  "Apartment Renovation & Repair",
                  "Biohazard Disposal & Remediation",
                  "Commercial Plumbing Portland",
                  "Commercial Roofing & Siding Repair",
                  "Deck Repair & Remediation",
                  "Renovation & Repair for HOAs",
                  "Water Damage Restoration",
                  "Water, Mold, & Hazmat Remediation",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-900 px-4 py-2 border-b border-gray-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}

            {/* Mobile About Smith Dropdown */}
            <div
              onClick={() => handleMobileDropdownToggle("about")}
              className="block text-white flex justify-between items-center cursor-pointer py-2"
            >
              About Smith <MdKeyboardArrowDown className="text-white" />
            </div>
            {openDropdown === "about" && (
              <div className="bg-white py-2 w-full">
                <a href="#" className="block text-gray-900 px-4 py-2 border-b border-gray-300">
                  Resources & News
                </a>
                <a href="#" className="block text-gray-900 px-4 py-2 border-b border-gray-300">
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
