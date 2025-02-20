import React from 'react'
import Testimonials from "./Testimonials";
import Gallery from '../92ndAve/Gallery';
import brandbg from '../../assets/images/brandbg.jpg';
import montclair1 from '../../assets/images/mtclair1.jpg'
import montclair2 from '../../assets/images/mtclair2.jpg'
import montclair3 from '../../assets/images/mtclair3.jpg'
import montclair4 from '../../assets/images/mtclair5.jpg'
import montclair5 from '../../assets/images/mtclair6.jpg'

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

const images = [montclair1, montclair2, montclair3, montclair4, montclair5];

function Montclair() {
  return (
    <div>
      <Gallery
        title="Montclair Terrace"
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
  )
}

export default Montclair