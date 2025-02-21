import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the toggle button

const AdminSidebar = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Small screen button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-800 text-white p-2 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar for large screens */}
      <div className="w-64 bg-primarytext-white h-screen p-6 hidden lg:block">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-6">
              <Link to="/admin/dashboard" className="text-lg hover:text-indigo-200 transition duration-300">
                Dashboard
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/admin/project" className="text-lg hover:text-indigo-200 transition duration-300">
                Projects
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/admin/services" className="text-lg hover:text-indigo-200 transition duration-300">
                Services
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/admin/message" className="text-lg hover:text-indigo-200 transition duration-300">
                Messages
              </Link>
            </li>
            <li className="mb-6">
              <button onClick={handleLogout} className="text-lg w-full text-left hover:text-indigo-200 transition duration-300">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar for small screens */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 bg-primarytext-white h-screen p-6 z-40">
        
          <h2 className="text-2xl font-bold mb-8 md:in-line hidden">Admin Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-6 mt-10">
                <Link to="/admin/dashboard" className="text-lg hover:text-indigo-200 transition duration-300" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/admin/project" className="text-lg hover:text-indigo-200 transition duration-300" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/admin/services" className="text-lg hover:text-indigo-200 transition duration-300" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/admin/message" className="text-lg hover:text-indigo-200 transition duration-300" onClick={() => setIsOpen(false)}>
                  Messages
                </Link>
              </li>
              <li className="mb-6">
                <button onClick={handleLogout} className="text-lg w-full text-left hover:text-indigo-200 transition duration-300">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
