import React from 'react';
import { useParams } from 'react-router-dom';
import Testimonials from "../component/92ndAve/Testimonials";
import Gallery from '../component/92ndAve/Gallery';
import brandbg from '../assets/images/brandbg.jpg';

const projectData = {
    "92ndAve": {
        title: "92nd Ave",
        description: "Project details for 92nd Ave...",
        images: [
            '/src/assets/images/new-1.jpeg',
            '/src/assets/images/new-2.jpeg',
            '/src/assets/images/new-4.jpeg',
            '/src/assets/images/new-4.jpeg',
            '/src/assets/images/new-5.jpeg',
            '/src/assets/images/new-6.jpeg'
        ]
    },
    "Holcomb": {
        title: "Holcomb Drive",
        description: "Project details for Holcomb Drive...",
        images: [
            '/src/assets/images/new-4.jpeg',
            '/src/assets/images/new-5.jpeg',
            '/src/assets/images/new-6.jpeg',
            '/src/assets/images/new-1.jpeg',
            '/src/assets/images/new-2.jpeg',
            '/src/assets/images/new-4.jpeg',
        ]
    },
    "Montclair": {
        title: "MontClair Terrace",
        description: "Project details for MontClair Terrace...",
        images: [
            '/src/assets/images/new-7.jpeg',
            '/src/assets/images/new-8.jpeg',
            '/src/assets/images/new-9.jpeg',
            '/src/assets/images/new-1.jpeg',
            '/src/assets/images/new-2.jpeg',
            '/src/assets/images/new-4.jpeg',
        ]
    }
};

const testimonialsData = [
  {
    name: "Robbert",
    position: "CTO, Robert Consultancy",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
  },
  {
    name: "Mia Brown",
    position: "Marketing Manager at Stech",
    quote: "Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum.",
    image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530"
  }
];

function ProjectDetails() {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <div className="text-center text-red-500">Project not found!</div>;
    }

    return (
        <div>
            <Gallery
                title={project.title}
                description={project.description}
                images={project.images}
                backgroundImage={brandbg}
            />
            <Testimonials
                title="What our clients say"
                description="Here's what our clients have to say about this project."
                testimonials={testimonialsData}
            />
        </div>
    );
}

export default ProjectDetails;
