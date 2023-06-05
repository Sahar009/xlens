import {useState} from 'react';
import {BiMessageMinus} from 'react-icons/bi';
import {FaHome} from 'react-icons/fa';
import './nav.css'
const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={ activeNav ==='#' ? 'active' : ''}><FaHome /></a>

   
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav ==='#contact' ? 'active' : ''}><BiMessageMinus /></a>
    
    

  </nav>
  )
}

export default Nav