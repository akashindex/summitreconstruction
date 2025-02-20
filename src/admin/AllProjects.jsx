import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye, FaTimes } from "react-icons/fa";
import axios from "axios";
import image1 from "/src/assets/images/new-8.jpeg";
import image2 from "/src/assets/images/new-4.jpeg";
import image3 from "/src/assets/images/new-6.jpeg";

const AllServices = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform with payment integration.",
      images: [image1],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      images: [image2],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for managing daily tasks and projects.",
      images: [image3],
    },
    {
        id: 4,
        title: "Task Management App",
        description: "A productivity tool for managing daily tasks and projects.",
        images: [image2],
      },
      {
        id: 5,
        title: "Task Management App",
        description: "A productivity tool for managing daily tasks and projects.",
        images: [image1],
      },
      {
        id: 6,
        title: "Task Management App",
        description: "A productivity tool for managing daily tasks and projects.",
        images: [image3],
      },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewService] = useState({
    title: "",
    description: "",
    images: [],
  });

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

  const handleAddService = () => {
    const newProject = {
      id: projects.length + 1,
      title: newProject.title,
      description: newProject.description,
      images: newProject.images,
    };

    setProjects([...projects, newProject]);
    setShowModal(false);
    setNewService({ title: "", description: "", images: [] });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setNewService((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="md:flex justify-between items-center mb-6 md:mt-0 mt-10">
        <h1 className="text-3xl font-semibold">All Project</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition md:mt-0 mt-6"
        >
          Add New Project
        </button>
      </div>

      {/* Projects Table */}
      <div className=" bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full border border-gray-200 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 border text-left">Project Title</th>
              <th className="py-3 px-6 border text-left">Description</th>
              <th className="py-3 px-6 border text-left">Image</th>
              <th className="py-3 px-6 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((project) => (
                <tr key={project.id} className="border">
                  <td className="py-3 px-6">{project.title}</td>
                  <td className="py-3 px-6">{project.description}</td>
                  <td className="py-3 text-center">
                    {project.images?.length > 0 && (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-32 h-20 object-cover rounded-lg mx-auto"
                      />
                    )}
                  </td>
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
                <td colSpan="4" className="py-3 px-6 text-center text-gray-500">
                  No projects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Add Service Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Add New Project</h2>
              <button onClick={() => setShowModal(false)} className="text-red-500">
                <FaTimes size={18} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Service Title"
              className="border p-2 w-full mb-3"
              value={newProject.title}
              onChange={(e) => setNewService({ ...newProject, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="border p-2 w-full mb-3"
              value={newProject.description}
              onChange={(e) => setNewService({ ...newProject, description: e.target.value })}
            />
            <input type="file" multiple onChange={handleImageUpload} className="mb-3" />
            <button onClick={handleAddService} className="bg-indigo-600 text-white px-4 py-2 rounded">
              Add Service
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllServices;
