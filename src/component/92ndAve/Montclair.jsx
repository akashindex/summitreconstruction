import React from 'react'
import Gallery from '../92ndAve/Gallery';
import brandbg from '../../assets/images/brandbg.jpg';
import montclair1 from '../../assets/images/mtclair1.jpg'
import montclair2 from '../../assets/images/mtclair2.jpg'
import montclair3 from '../../assets/images/mtclair3.jpg'
import montclair4 from '../../assets/images/mtclair5.jpg'
import montclair5 from '../../assets/images/mtclair6.jpg'

const images = [montclair1, montclair2, montclair3, montclair4, montclair5];

function Montclair() {
    return (
      <Gallery 
              title="Montclair Terrace" 
              description="Project Description"
              images={images} 
              backgroundImage={brandbg} 
          />
    )
  }
  
  export default Montclair