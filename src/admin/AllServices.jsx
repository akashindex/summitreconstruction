import { useState } from "react";
import { FaEdit, FaTrash, FaEye, FaTimes } from "react-icons/fa";
import image1 from "/src/assets/images/new-8.jpeg";
import image2 from "/src/assets/images/new-4.jpeg";
import image3 from "/src/assets/images/new-6.jpeg";

const AllServices = () => {
  const [services, setServices] = useState([
    { id: 1, title: "E-Commerce Website", description: "A fully functional e-commerce platform with payment integration.", images: [image1] },
    { id: 2, title: "Portfolio Website", description: "A personal portfolio website showcasing projects and skills.", images: [image2] },
    { id: 3, title: "Task Management App", description: "A productivity tool for managing daily tasks and projects.", images: [image3] },
    { id: 4, title: "Blog Website", description: "A dynamic blog website for sharing articles and news.", images: [image2] },
    { id: 5, title: "Company Landing Page", description: "A modern and responsive landing page for businesses.", images: [image1] },
    { id: 6, title: "E-Learning Platform", description: "An online learning management system with video courses.", images: [image3] },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showModal, setShowModal] = useState(false);
  const [newService, setNewService] = useState({ title: "", description: "", images: [] });

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
      alert("Service deleted successfully!");
    }
  };

  // Handle Adding New Service
  const handleAddService = () => {
    const newServiceData = {
      id: services.length + 1,
      title: newService.title,
      description: newService.description,
      images: newService.images.length > 0 ? newService.images : [image1], // Default image if none uploaded
    };

    setServices([...services, newServiceData]);
    setShowModal(false);
    setNewService({ title: "", description: "", images: [] });
  };

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setNewService((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }));
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(services.length / itemsPerPage);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">All Services</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Add New Service
        </button>
      </div>

      {/* Services Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 border text-left">Service Title</th>
              <th className="py-3 px-6 border text-left">Description</th>
              <th className="py-3 px-6 border text-left">Image</th>
              <th className="py-3 px-6 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((service) => (
                <tr key={service.id} className="border">
                  <td className="py-3 px-6">{service.title}</td>
                  <td className="py-3 px-6">{service.description}</td>
                  <td className="py-3 px-6 text-center">
                    {service.images?.length > 0 && (
                      <img
                        src={service.images[0]}
                        alt={service.title}
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
                      onClick={() => handleDelete(service.id)}
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
                  No services found
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
              <h2 className="text-xl font-semibold">Add New Service</h2>
              <button onClick={() => setShowModal(false)} className="text-red-500">
                <FaTimes size={18} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Service Title"
              className="border p-2 w-full mb-3"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="border p-2 w-full mb-3"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
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
