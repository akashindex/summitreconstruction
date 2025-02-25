import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the toggle button

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Projects", path: "/admin/project" },
    { name: "Services", path: "/admin/services" },
    { name: "Messages", path: "/admin/message" },
    { name: "Unapproved Reviews", path: "/admin/unapproved-reviews" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/admin/login"); // Redirect to the login page immediately
  };

  return (
    <>
      {/* Small screen button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-800 text-white p-2 rounded-md shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar for large screens */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen p-6 hidden lg:flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className="mb-4">
                  <Link
                    to={item.path}
                    className={`block text-lg font-medium transition duration-300 ${
                      location.pathname === item.path
                        ? "text-indigo-400"
                        : "hover:text-indigo-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="text-lg font-medium w-full text-left hover:text-indigo-200 transition duration-300 mt-6"
        >
          Logout
        </button>
      </div>

      {/* Sidebar for small screens */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen p-6 z-40 shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className="mb-4">
                  <Link
                    to={item.path}
                    className={`block text-red-500 text-lg font-medium transition duration-300 ${
                      location.pathname === item.path
                        ? "text-red-600"
                        : "hover:text-red-200"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={handleLogout}
            className="text-lg font-medium w-full text-left hover:text-indigo-200 transition duration-300 mt-6"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;