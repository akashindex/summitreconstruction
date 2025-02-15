import { useState } from 'react'
import './App.css'
import Navbar from "./component/navbar/Navbar"; 
import Footer from './component/footer/Footer';
import Home from "./component/home/Home";


function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <Home />
    </>
  );
}

export default App
