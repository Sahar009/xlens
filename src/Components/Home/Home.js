import React from 'react';
import video from '../Others/images/vid2.mp4'
import img1 from '../Others/images/homeimage.jpg'
import homelogo from '../Others/images/home_logo.jpg'
import './Home.css'
import {HiOutlineArrowNarrowRight } from 'react-icons/hi'
import {GiVirtualMarker} from 'react-icons/gi'
import {BsDisplayFill, BsFillBookmarkStarFill } from 'react-icons/bs'
import { MdAnimation, MdLocalMovies } from 'react-icons/md';
import { RiBuilding2Fill} from 'react-icons/ri'
import Subscribe from '../subscribe/Subscribe'
import Awards from './Awards/Awards';
import grid1 from '../Others/images/4.jpg'
import { AiFillBehanceCircle } from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <section id="features" >
      <div className='landing_page'></div>
      
      <div className='before_video'></div>
        <div className='home_video'>
        <video  src={video} autoPlay loop >
          <AiFillBehanceCircle size={40} className='vid-icon'/>
        </video>
        </div>
        <div className='container'> 
          <div className='grid_section'>
            <div className='grid-1'>
              
          
            <img src={grid1} className='grid-img'/>
<p className='home_p'>We create a global impactful stories through architectural
   visualization for your marketing campaign. 
We develop exceptional solutions and bring new values for your projects.</p>
            </div>
            

          </div>
        </div>
        
      <div className="container features">
        <div className="title" >
          {/* <BsFillBookmarkStarFill color="#566b00" size={30} /> */}
          <img src={homelogo} />
          <h1>Services</h1>
          <p className='title-text'>
          X-Lens is obsessed to create powerful visualization and creative project. We are communicating your Brands and Vision.
We create campaigns for any design, real estate, and development with luxury and culture.
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={img1} alt="image" />
          </div>
          <div className="features-right" >
             <ul>
        <li><BsDisplayFill color='var(--color-main)'/> STILLS RENDERING</li>
        <li><MdAnimation color='var(--color-main)'/> ANIMATION</li>
        <li><MdLocalMovies color='var(--color-main)'/> ARCHVIZ MOVIE</li>
        <li><GiVirtualMarker color='var(--color-main)'/> VIRTUAL REALITY (360 VR)</li>
        <li><RiBuilding2Fill color='var(--color-main)'/> REAL ESTATE BRANDING</li>

       </ul>
          </div>
        </div>
      </div>
    </section>
   <Awards/>
   <Subscribe/>
    </>
   
  )
}

export default Home