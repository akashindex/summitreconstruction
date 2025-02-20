import { useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceImages, setServiceImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setServiceImages(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!serviceName || !serviceDescription) {
      alert("Please fill in all fields");
      return;
    }

    // Placeholder for future API integration
    console.log("Service Data:", {
      serviceName,
      serviceDescription,
      serviceImages,
    });

    alert("Service added successfully!");
    setServiceName("");
    setServiceDescription("");
    setServiceImages([]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div>
          <label className="block text-gray-700 font-medium">Service Name</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter service name"
            required
          />
        </div>

        {/* Service Description */}
        <div>
          <label className="block text-gray-700 font-medium">Service Description</label>
          <textarea
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter service description"
            rows="4"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Service Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-1"
          />
          
          {/* Image Previews */}
          {serviceImages.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {serviceImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-md border border-gray-300"
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
