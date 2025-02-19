import React from 'react';
import Navbar from '../component/navbar/Navbar';  
import Footer from '../component/footer/Footer';  

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>{children}</main> 
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
