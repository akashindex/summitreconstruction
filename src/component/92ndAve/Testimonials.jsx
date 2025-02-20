import React, { useState, useEffect } from "react";
import axios from "axios";

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [newReview, setNewReview] = useState({ name: "", position: "", quote: "", image: "" });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments?_limit=2") 
            .then(response => {
                console.log("API Response:", response.data);

                const fetchedReviews = response.data.map(review => ({
                    name: review.email.split("@")[0], 
                    position: "Client", 
                    quote: review.body,
                    image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}` 
                }));

                setTestimonials(fetchedReviews);
            })
            .catch(error => console.error("Error fetching testimonials:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newReview.name || !newReview.quote) return alert("Name & Review are required!");

        setTestimonials([...testimonials, newReview]);
        setNewReview({ name: "", position: "", quote: "", image: "" });
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-10 w-[1200px] mx-auto">
            <div className="container px-6 mx-auto">
                <h1 className="text-[40px] font-semibold text-center text-gray-800 dark:text-white">
                    What our <span className="text-blue-500">clients</span> say
                </h1>

                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                                “{testimonial.quote}”
                            </p>
                            <div className="flex items-center mt-6">
                                <img className="object-cover rounded-full w-14 h-14" src={testimonial.image || "https://i.pravatar.cc/150"} alt={testimonial.name} />
                                <div className="mx-4">
                                    <h1 className="font-semibold text-blue-500">{testimonial.name}</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">{testimonial.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 max-w-lg mx-auto">
                    <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">Add Your Review</h2>
                    <form className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-2 mb-2 rounded" 
                            value={newReview.name} 
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} 
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Your Position (Optional)" 
                            className="w-full p-2 mb-2 rounded" 
                            value={newReview.position} 
                            onChange={(e) => setNewReview({ ...newReview, position: e.target.value })} 
                        />
                        <textarea 
                            placeholder="Your Review" 
                            className="w-full p-2 mb-2 rounded" 
                            value={newReview.quote} 
                            onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })} 
                            required
                        />
                        <input 
                            type="url" 
                            placeholder="Image URL (Optional)" 
                            className="w-full p-2 mb-2 rounded" 
                            value={newReview.image} 
                            onChange={(e) => setNewReview({ ...newReview, image: e.target.value })} 
                        />
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
