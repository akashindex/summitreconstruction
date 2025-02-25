import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = 'http://localhost:5656'; // Adjust the base URL as needed

function Testimonials({ projectId }) {
    const [testimonials, setTestimonials] = useState([]);
    const [newReview, setNewReview] = useState({ name: "", position: "", quote: "", image: "" });
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (projectId) {
            // Fetch only approved reviews for the project
            axios.get(`${API_BASE_URL}/api/projects/${projectId}/reviews`)
                .then(response => {
                    const testimonialsWithFullImagePath = response.data.reviews.map(review => ({
                        ...review,
                        image: review.image ? `${API_BASE_URL}/${review.image}` : "https://i.pravatar.cc/150"
                    }));
                    setTestimonials(testimonialsWithFullImagePath);
                })
                .catch(error => console.error("Error fetching testimonials:", error));
        }
    }, [projectId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newReview.name || !newReview.quote) {
            setMessage({ type: 'error', text: "Name & Review are required!" });
            return;
        }

        const formData = new FormData();
        formData.append('name', newReview.name);
        formData.append('position', newReview.position);
        formData.append('quote', newReview.quote);
        if (newReview.image) {
            formData.append('image', newReview.image);
        }

        try {
            await axios.post(`${API_BASE_URL}/api/projects/${projectId}/reviews`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setNewReview({ name: "", position: "", quote: "", image: "" });
            setMessage({ type: 'success', text: 'Review submitted for approval!' });
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage({ type: 'error', text: 'Failed to submit review' });
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-10 w-[1170px] rounded-md py-4 mx-auto max-sm:w-[100%] font-worksans">
            <div className="container px-6 mx-auto">
                <h1 className="text-[40px] text-center text-gray-800 dark:text-white">
                    What our <span className="text-[#ffaa06]">clients</span> say
                </h1>
                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                                “{testimonial.quote}”
                            </p>
                            <div className="flex items-center mt-6">
                                <img className="object-cover rounded-full w-14 h-14" src={testimonial.image} alt={testimonial.name} />
                                <div className="mx-4">
                                    <h1 className="text-blue-500">{testimonial.name}</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">{testimonial.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 md:w-[100%] mx-auto">
                    <h2 className="text-[28px] text-start text-gray-800 dark:text-white">Add Your Review</h2>
                    {message && (
                        <div className={`p-2 mb-4 text-center rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {message.text}
                        </div>
                    )}
                    <form className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-2 mb-2 rounded outline-none " 
                            value={newReview.name} 
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} 
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Your Position (Optional)" 
                            className="w-full p-2 mb-2 rounded outline-none" 
                            value={newReview.position} 
                            onChange={(e) => setNewReview({ ...newReview, position: e.target.value })} 
                        />
                        <textarea 
                            placeholder="Your Review" 
                            className="w-full p-2 mb-2 rounded outline-none resize-none" 
                            value={newReview.quote} 
                            onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })} 
                            required
                        />
                        <input 
                            type="file" 
                            accept="image/*"
                            className="w-full p-2 mb-2 rounded outline-none" 
                            onChange={(e) => setNewReview({ ...newReview, image: e.target.files[0] })} 
                        />
                        <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-blue-600">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;