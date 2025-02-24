import React from 'react';
import { useParams } from 'react-router-dom';
import Testimonials from "../component/92ndAve/Testimonials";
import Gallery from '../component/92ndAve/Gallery';
import brandbg from '../assets/images/brandbg.jpg';

// Import images correctly
import new1 from '../assets/images/new-1.jpeg';
import new2 from '../assets/images/new-2.jpeg';
import new4 from '../assets/images/new-4.jpeg';
import new5 from '../assets/images/new-5.jpeg';
import new6 from '../assets/images/new-6.jpeg';
import new7 from '../assets/images/new-7.jpeg';
import new8 from '../assets/images/new-8.jpeg';
import new9 from '../assets/images/new-9.jpeg';

const projectData = {
    "92ndAve": {
        title: "Tabor Heights",
        description: "Project details for Tabor Heights...",
        images: [new1, new2, new4, new4, new5]
    },
    "Holcomb": {
        title: "Holcomb Drive",
        description: "Project details for Holcomb Drive...",
        images: [new4, new5, new6, new1, new2, new4]
    },
    "Montclair": {
        title: "MontClair Terrace",
        description: "Project details for MontClair Terrace...",
        images: [new7, new8, new9, new1, new2, new4]
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
        <div className='bg-primary py-6'>
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
