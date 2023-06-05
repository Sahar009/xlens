import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BiPlus } from "react-icons/bi";


const Download = () => {
  
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>XLen studios</h2>
       
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
          <div className="download-icon">
               <h3>12 years in business</h3>
               </div>
            <div className="download-icon">
               <p>1,875 <BiPlus/></p>
            </div>
            <div className="download-icon">
               <p>10,000 <BiPlus/></p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
