import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { Link } from 'react-router-dom'
import logo from '../Others/images/footer5.png'

const footer = () => {
  return (
    <footer >
      <a href="#"className='footer_logo'>
        <img  src={logo}/>
      </a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <Link to='/Projects'><a>Projects</a></Link></li>
        <li> <a href="#contact">Contact</a></li>
     
     
      </ul>

      <div className='footer_socials'>
        {/* <a href="https://facebook.com"><FaFacebookF/></a> */}
        <a href="https://instagram.com"><FiInstagram/></a>
        {/* <a href="https://twitter.com"><IoLogoTwitter/></a> */}
      </div>
      <div className='footer_copyright'>
        <small>x-lens studios 2023. All rights reserved</small>
      </div>
   </footer>
  )
}

export default footer