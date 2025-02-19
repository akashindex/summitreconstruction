import React from 'react';
import { Link } from 'react-router-dom';  
import image1 from '/src/assets/images/92brand.jpg';
import image2 from '/src/assets/images/holcombdrive.jpg';
import image3 from '/src/assets/images/mtclair7.jpg';

const projects = [
    { image: image1, title: "92nd Ave", link: "/Avebrand" },
    { image: image2, title: "Holcomb Drive", link: "/Holcomb" },
    { image: image3, title: "MontClair Trance", link: "/Montclair" }
];

function Projects() {
    return (
        <div className="pt-[40px] text-center sm:mb-[50px] font-worksans md:w-[1200px] mx-auto">
            <div className='mb-16'>
                <h2 className="text-[36px] md:text-[46px] mb-4 text-gray-700">Recent Projects</h2>
                <div className="w-[30%] md:w-[15%] mx-auto border-b-2 border-gray-600 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-6">
                {projects.map((project, index) => (
                    <Link 
                        key={index} 
                        to={project.link} 
                        className="w-full h-[300px] bg-cover bg-center relative group"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-white text-[20px] tracking-wide capitalize text-center">{project.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
