import Navbar from "../Components/Navbar";
import React from "react";
import Footer from "../Components/Footer";
import Page6 from '../Components/Page6'


const layout = ({ children }) => {


  return (
    <div className="overflow-hidden relative">
      <Navbar />
      {children}
      <Page6/>
      <Footer/>
    </div>
  );
};

export default layout;
