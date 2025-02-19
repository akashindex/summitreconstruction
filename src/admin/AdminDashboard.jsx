import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:5656/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAdminData(res.data))
      .catch(() => alert("Unauthorized Access"));
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white h-screen p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-6">
              <a
                href="/admin/dashboard"
                className="text-lg hover:text-indigo-200 transition duration-300"
              >
                Dashboard
              </a>
            </li>
            <li className="mb-6">
              <a
                href="/admin/settings"
                className="text-lg hover:text-indigo-200 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li className="mb-6">
              <a
                href="/admin/settings"
                className="text-lg hover:text-indigo-200 transition duration-300"
              >
                Messages
              </a>
            </li>
            <li className="mb-6">
              <button
                onClick={handleLogout}
                className="text-lg w-full text-left hover:text-indigo-200 transition duration-300"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        {adminData ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800">
              Welcome, {adminData.admin.email}
            </h1>
            <p className="mt-4 text-lg text-gray-600">You have access to manage the system.</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
