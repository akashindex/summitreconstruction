import { useState } from 'react'
import './App.css'
import Navbar from "./component/navbar/Navbar"; 
import Footer from './component/footer/Footer';
import Home from "./component/home/Home";
import Reconstruction from './component/Reconstruction/Reconstruction';
import TestmonialComp from './component/testmonialComp/TestmonialComp';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Reconstruction />
      <TestmonialComp />
      <Footer />
    </>
  );
}

export default App
