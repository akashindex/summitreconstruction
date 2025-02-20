import { Link } from "react-router-dom";

const AdminSidebar = ({ handleLogout }) => {
  return (
    <div className="w-64 bg-indigo-800 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
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
  );
};

export default AdminSidebar;
