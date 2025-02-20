import React from 'react';
import Gallery from '../92ndAve/Gallery';
import Testimonials from "./Testimonials";
import brandbg from '../../assets/images/brandbg.jpg';
import galler1 from '../../assets/images/gallery1.jpg';
import galler2 from '../../assets/images/gallery2.jpg';
import galler3 from '../../assets/images/gallery3.jpg';
import galler4 from '../../assets/images/gallery4.jpg';
import galler5 from '../../assets/images/gallery5.jpg';
import galler6 from '../../assets/images/gallery6.jpg';
import galler7 from '../../assets/images/gallery7.jpg';
import galler8 from '../../assets/images/gallery8.jpg';
import galler9 from '../../assets/images/gallery9.jpg';

const images = [galler1, galler2, galler3, galler4, galler5, galler6, galler7, galler8, galler9];

const testimonialsData = [
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
];

function Avebrand() {
    return (
        <div>
        <Gallery 
            title="92nd Ave" 
            description="Project Description"
            images={images} 
            backgroundImage={brandbg} 
        />
        <Testimonials 
        title="What our clients say"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique."
        testimonials={testimonialsData}
    />
    </div>
    );
}

export default Avebrand;
