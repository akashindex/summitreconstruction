import React from 'react';
import Gallery from '../92ndAve/Gallery';
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

function Avebrand() {
    return (
        <Gallery 
            title="92nd Ave" 
            description="Project Description"
            images={images} 
            backgroundImage={brandbg} 
        />
    );
}

export default Avebrand;
