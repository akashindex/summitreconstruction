import React from 'react'
import Gallery from '../92ndAve/Gallery';
import brandbg from '../../assets/images/brandbg.jpg';
import holcomb1 from '../../assets/images/holcomb1.jpg'
import holcomb2 from '../../assets/images/holcomb2.jpg'
import holcomb3 from '../../assets/images/holcomb3.jpg'
import holcomb4 from '../../assets/images/holcomb4.jpg'
import holcomb5 from '../../assets/images/holcomb5.jpg'
import holcomb6 from '../../assets/images/holcomb6.jpg'
import holcomb7 from '../../assets/images/holcomb7.jpg'
import holcomb8 from '../../assets/images/holcomb8.jpg'
import holcomb9 from '../../assets/images/holcomb9.jpg'

const images = [holcomb1, holcomb2, holcomb3, holcomb4, holcomb5, holcomb6, holcomb7, holcomb8, holcomb9];

function Holcomb() {
  return (
    <Gallery 
            title="Holcomb" 
            description="Project Description"
            images={images} 
            backgroundImage={brandbg} 
        />
  )
}

export default Holcomb