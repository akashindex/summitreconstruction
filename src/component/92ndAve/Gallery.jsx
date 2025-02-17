import React from 'react';

function Gallery({ title, description, images, backgroundImage }) {
    return (
        <div>
            {/* Background Section */}
            <div 
                className="bg-cover bg-center h-[30vh] flex items-center font-worksans justify-center text-center text-white"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="z-10 px-4 w-[60%] mx-auto">
                    <h1 className="text-[48px]">{title}</h1>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-[26px] my-5">{description}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden flex justify-center">
                            <img 
                                src={image} 
                                alt={`Gallery Image ${index + 1}`} 
                                className="object-cover w-[400px] h-[300px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
