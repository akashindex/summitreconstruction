import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import axios from "axios";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5656/api/projects")
      .then((res) => setProjects(res.data.projects || []))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      axios
        .delete(`http://localhost:5656/api/projects/${id}`)
        .then(() => {
          setProjects(projects.filter((project) => project.id !== id));
          alert("Project deleted successfully!");
        })
        .catch((err) => console.error("Error deleting project:", err));
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">All Projects</h1>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Add New Project
        </button>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 border text-left">Title</th>
              <th className="py-3 px-6 border text-left">Description</th>
              <th className="py-3 px-6 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr key={project.id} className="border">
                  <td className="py-3 px-6">{project.title}</td>
                  <td className="py-3 px-6">{project.description}</td>
                  <td className="py-3 px-6 text-center">
                    <button className="text-blue-500 hover:text-blue-700 mx-2">
                      <FaEye size={18} />
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-700 mx-2">
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-500 hover:text-red-700 mx-2"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 px-6 text-center text-gray-500">
                  No projects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;
