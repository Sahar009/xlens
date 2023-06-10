import React from 'react';
import './Gallery.css';
import Img1 from '../Others/images/img1.jpg'
import Img2 from '../Others/images/img2.jpg'
import Img3 from '../Others/images/img3.jpg'
import Img4 from '../Others/images/img4.jpg'
import Img5 from '../Others/images/img5.jpg'
import Img6 from '../Others/images/img6.jpg'
import Img7 from '../Others/images/img7.jpg'
import Img8 from '../Others/images/img8.jpg'
import vid1 from '../Others/images/vid2.mp4'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


const Gallery = () => {
  return (
    <div className='main'>
          <div className='project_gallery' >
          <div className='gallery_1 gallery' >
            <img className='img' src={Img1}/>
          <h1 className='gallery_title gallery'>Facade Design</h1>
         <Link to ='/Building1'><MdOutlineDoubleArrow className='icon'  size={50} /></Link> 
          </div>
          <div className='gallery_2 gallery' >
          <img className='img' src={Img2}/>
          <h1 className='gallery_title gallery'>The grid </h1>
          <Link to ='/Building2'><MdOutlineDoubleArrow className='icon'  size={50}/></Link>
          </div>
          <div className='gallery_3 gallery' ><video src={vid1} loop autoPlay ></video>
          <h1 className='gallery_title gallery'>Building 3</h1>
          <MdOutlineDoubleArrow className='icon'  size={50}/>
          </div>
          <div className='gallery_4 gallery' >
          <img className='img' src={Img3}/>
          <h1 className='gallery_title gallery'>Building 2</h1>
          <MdOutlineDoubleArrow className='icon'  size={50}/>
          </div>
          <div className='gallery_5 gallery' >
          <img className='img' src={Img4}/>
          <h1 className='gallery_title gallery'>Building 3</h1>
          <MdOutlineDoubleArrow className='icon'  size={50}/>
          </div>
          <div className='gallery_6 gallery' >
          <img className='img' src={Img5}/>
          <h1 className='gallery_title gallery'>Building 4</h1>
          <MdOutlineDoubleArrow className='icon'  size={50}/>
          </div>
          <div className='gallery_7 gallery' >
          <img className='img' src={Img6}/>
          <h1 className='gallery_title gallery'>Building 5</h1>
          <MdOutlineDoubleArrow className='icon'  size={50}/>
          </div>
          <div className='gallery_8 gallery' >
          <img className='img' src={Img7}/>
          <h1 className='gallery_title gallery'>Building 6</h1>
          <MdOutlineDoubleArrow className='icon'  size={50}/>
          </div>
          

      </div>

      
      <div className='arrow'> <h1>Scroll Up  <HiOutlineArrowNarrowRight className='nav-icon' size={30} width={50} color='#819f08'/> </h1></div>
      
    </div>
  )
}

export default Gallery