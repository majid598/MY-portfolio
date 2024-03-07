import Navbar from "../Components/Navbar";
import React from "react";
import Footer from "../Components/Footer";
import Page6 from '../Components/Page6'
import Aside from "../Components/Aside";


const layout = ({ children }) => {


  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <div className="flex bg-[#EFEAE3]">
      {children}
      <Aside/>
      </div>
      {/* <Page6/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default layout;
