import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [users, setUsers] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const [serviceName, setServiceName] = useState("");
const [serviceDescription, setServiceDescription] = useState("");
const [serviceImages, setServiceImages] = useState([]);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
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
    const formData = new FormData();
    formData.append("name", projectName);
    formData.append("description", projectDescription);
    Array.from(projectImages).forEach((image) => {
      formData.append("images", image);
    });
  
    axios
      .post("http://localhost:5656/api/admin/projects", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Project added successfully!");
        setProjectName("");
        setProjectDescription("");
        setProjectImages([]);
        setIsProjectModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const handleAddService = () => {
    const formData = new FormData();
    formData.append("name", serviceName);
    formData.append("description", serviceDescription);
    Array.from(serviceImages).forEach((image) => {
      formData.append("images", image);
    });
  
    axios
      .post("http://localhost:5656/api/admin/services", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Service added successfully!");
        setServiceName("");
        setServiceDescription("");
        setServiceImages([]);
        setIsServiceModalOpen(false);
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
              <h1 className="text-3xl font-semibold text-gray-800">
                Welcome, {adminData.admin.email}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Manage your projects, services, and users.
              </p>
            </div>

            {/* Buttons to Open Modals */}
            <div className="flex gap-4 justify-end my-6">
              <button
                onClick={() => setIsProjectModalOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Add Project
              </button>
              <button
                onClick={() => setIsServiceModalOpen(true)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Add Service
              </button>
            </div>

            {/* All Services Table */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                All Projects
              </h2>
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
                        <td className="border border-gray-300 p-2">
                          {user.name}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {user.email}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {user.role}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-gray-600 p-4"
                      >
                        No services found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Project Modal */}
           {/* Project Modal */}
{/* Project Modal */}
{isProjectModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Add Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        className="border p-2 w-full mb-4"
      ></textarea>
      <input
        type="file"
        multiple
        onChange={(e) => setProjectImages(e.target.files)}
        className="border p-2 w-full mb-4"
      />
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsProjectModalOpen(false)}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleAddProject}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  </div>
)}



            {/* Service Modal */}
           {/* Service Modal */}
{isServiceModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Add Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        placeholder="Service Description"
        value={serviceDescription}
        onChange={(e) => setServiceDescription(e.target.value)}
        className="border p-2 w-full mb-4"
      ></textarea>
      <input
        type="file"
        multiple
        onChange={(e) => setServiceImages(e.target.files)}
        className="border p-2 w-full mb-4"
      />
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsServiceModalOpen(false)}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleAddService}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  </div>
)}

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
