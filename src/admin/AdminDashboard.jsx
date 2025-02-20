import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [users, setUsers] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5656/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAdminData(res.data))
      .catch(() => alert("Unauthorized Access"));

    axios
      .get("http://localhost:5656/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleAddProject = () => {
    axios
      .post(
        "http://localhost:5656/api/admin/projects",
        { name: projectName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert("Project added successfully!");
        setProjectName("");
      })
      .catch((err) => console.log(err));
  };

  const handleAddService = () => {
    axios
      .post(
        "http://localhost:5656/api/admin/services",
        { name: serviceName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert("Service added successfully!");
        setServiceName("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex">
    

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        {adminData ? (
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
              <h1 className="text-3xl font-semibold text-gray-800">Welcome, {adminData.admin.email}</h1>
              <p className="mt-4 text-lg text-gray-600">Manage your projects, services, and users.</p>
            </div>

           
             <div className="flex gap-4 justify-end my-6">
             <div className="flex gap-4">
              
              <button onClick={handleAddProject} className="bg-indigo-600 text-white px-4 py-2 rounded">
                Add Project
              </button>
            </div>



        
            
            <div className="flex gap-4">
           
              <Link to="/admin/add-service" className="bg-green-600 text-white px-4 py-2 rounded">
                Add Service
              </Link>
            </div>
             </div>
             
          

          
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">All Service</h2>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">ID</th>
                    <th className="border border-gray-300 p-2">Service Name</th>
                    <th className="border border-gray-300 p-2">Description</th>
                    <th className="border border-gray-300 p-2">Created at</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id} className="text-center">
                        <td className="border border-gray-300 p-2">{user.id}</td>
                        <td className="border border-gray-300 p-2">{user.name}</td>
                        <td className="border border-gray-300 p-2">{user.email}</td>
                        <td className="border border-gray-300 p-2">{user.role}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center text-gray-600 p-4">
                        No services found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
