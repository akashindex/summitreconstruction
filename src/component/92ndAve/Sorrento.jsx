import React from 'react'
import Gallery from '../92ndAve/Gallery';
import brandbg from '../../assets/images/brandbg.jpg';
import Sorrento1 from '../../assets/images/Sorrento1.jpg'
import Sorrento2 from '../../assets/images/Sorrento2.jpg'
import Sorrento3 from '../../assets/images/Sorrento3.jpg'
import Courtyard4 from '../../assets/images/courtyard4.jpg'
import Courtyard5 from '../../assets/images/courtyard5.jpg'
import Courtyard6 from '../../assets/images/courtyard6.jpg'
import Courtyard7 from '../../assets/images/courtyard7.jpg'
import Courtyard8 from '../../assets/images/courtyard8.jpg'

const images = [Sorrento1, Sorrento2, Sorrento3, Courtyard4, Courtyard5,Courtyard6,Courtyard7,Courtyard8];

function Sorrento() {
  return (
    <Gallery 
              title="Courtyard at Springville HOA" 
              description="Project Description"
              images={images} 
              backgroundImage={brandbg} 
          />
  )
}

export default Sorrento