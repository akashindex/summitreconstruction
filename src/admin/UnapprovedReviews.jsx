import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = 'http://localhost:5656'; // Adjust the base URL as needed

function UnapprovedReviews() {
    const [unapprovedReviews, setUnapprovedReviews] = useState([]);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        // Fetch unapproved reviews
        axios.get(`${API_BASE_URL}/api/unapproved-reviews`)
            .then(response => {
                setUnapprovedReviews(response.data.reviews || []);
                // Fetch project titles for each review
                const projectIds = [...new Set(response.data.reviews.map(review => review.projectId))];
                projectIds.forEach(id => {
                    axios.get(`${API_BASE_URL}/api/projects/${id}`)
                        .then(res => {
                            setProjects(prev => ({ ...prev, [id]: res.data.title }));
                        })
                        .catch(error => console.error(`Error fetching project ${id}:`, error));
                });
            })
            .catch(error => console.error("Error fetching unapproved reviews:", error));
    }, []);

    const handleApprove = async (reviewId) => {
        try {
            await axios.put(`${API_BASE_URL}/api/unapproved-reviews/${reviewId}/approve`);
            setUnapprovedReviews(unapprovedReviews.filter(review => review.id !== reviewId));
        } catch (error) {
            console.error("Error approving review:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center">Unapproved Reviews</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-5 bg-gray-200 text-left text-sm font-semibold text-gray-700">User</th>
                            <th className="py-3 px-5 bg-gray-200 text-left text-sm font-semibold text-gray-700">Position</th>
                            <th className="py-3 px-5 bg-gray-200 text-left text-sm font-semibold text-gray-700">Review</th>
                            <th className="py-3 px-5 bg-gray-200 text-left text-sm font-semibold text-gray-700">Project</th>
                            <th className="py-3 px-5 bg-gray-200 text-left text-sm font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unapprovedReviews.map((review) => (
                            <tr key={review.id} className="border-b">
                                <td className="py-3 px-5 flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-3"
                                        src={review.image ? `${API_BASE_URL}/${review.image}` : "https://i.pravatar.cc/150?img=3"}
                                        alt={review.name}
                                    />
                                    <div>
                                        <p className="text-sm font-medium">{review.name}</p>
                                    </div>
                                </td>
                                <td className="py-3 px-5 text-sm text-gray-600">{review.position}</td>
                                <td className="py-3 px-5 text-sm text-gray-600">“{review.quote}”</td>
                                <td className="py-3 px-5 text-sm text-gray-600">{projects[review.projectId] || "Loading..."}</td>
                                <td className="py-3 px-5">
                                    <button
                                        onClick={() => handleApprove(review.id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UnapprovedReviews;