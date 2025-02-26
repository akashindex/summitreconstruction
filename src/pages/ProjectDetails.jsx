import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GalleryApi from '../component/92ndAve/Gallery'; // Adjust the path as needed
import Testimonials from '../component/92ndAve/Testimonials'; // Ensure this is correctly imported
import brandbg from '../assets/images/brandbg.jpg'; // Adjust the path as needed

const API_BASE_URL = 'http://localhost:5656';

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects/${id}`);
        setProject(response.data.project);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GalleryApi
        title={project.title}
        description={project.description}
        images={project.subImages.map(image => `${API_BASE_URL}/${image}`)}
        backgroundImage={brandbg}
      />
      <Testimonials
        projectId={id} // Pass the project ID to the Testimonials component
        title="What our clients say"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique."
        testimonials={[
          {
            name: "Robbert",
            position: "CTO, Robert Consultancy",
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus.",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          {
            name: "Mia Brown",
            position: "Marketing Manager at Stech",
            quote: "Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus.",
            image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
        ]}
      />
    </div>
  );
}

export default ProjectDetails;