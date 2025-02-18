import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("You must agree to the privacy policy.");
      return;
    }

    setIsSubmitting(true);

    console.log("Form Data Before API Call:", formData);

    // Simulating API call
    setTimeout(() => {
      console.log("Mock API Response: Success", formData);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="w-full md:max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg font-worksans">
      <h2 className="text-2xl font-worksans text-gray-900 text-center">Contact Us</h2>
      <p className="mt-2 text-gray-600 text-center">We'd love to hear from you!</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-md focus:ring focus:ring-indigo-200 outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-md focus:ring focus:ring-indigo-200 outline-none"
            required
          />
        </div>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 outline-none"
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 outline-none"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 outline-none"
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="size-5"
            required
          />
          <label className="text-sm text-gray-600">
            I agree to the <a href="#" className="text-[#f4a62a] font-semibold">privacy policy</a>.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#f4a62a] text-white py-2 rounded-md hover:bg-yellow-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
