import React, { useEffect } from "react";
import "./Subscribe.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";



const Subscribe = () => {
  
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2> 3D RENDERING & ANIMATION BILLING !</h2>
        
        <form>
          <div className="form-control">
            {/* <input type="text" placeholder="Enter Your Email..." /> */}
            <button><a className="btn" href="mailto:akinwumisehinde@gmail.com">Click for Rendering price</a></button>
          </div>
        </form>
        <div className="social-icons">
          
          {/* <div className="social-icon">
            <FaFacebookF />
          </div> */}
          {/* <div className="social-icon">
            <FaTwitter />
          </div> */}
          <div className="social-icon">
           <a  href="https://instagram.com"><FaInstagram /></a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
