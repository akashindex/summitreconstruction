import { useState } from 'react'
import './App.css'
import Navbar from "./component/navbar/Navbar"; 
import Home from "./component/home/Home";
import Reconstruction from './component/Reconstruction/Reconstruction';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Reconstruction />
    </>
  );
}

export default App
