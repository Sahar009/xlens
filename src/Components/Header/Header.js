import {useState}from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import './Header3.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

import logo from '../Others/images/logo2.0.png'
import { Link } from 'react-router-dom';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='container'>
    <div className='header'>
   <Link to='/'> <div className='logo_container'>
    <img  src={logo}/></div></Link>
      <div className='header_nav'  >
        <ul className="nav-links">
          
        
          <Link to='Projects'><li>Projects </li></Link>
          <Link to='Projects'> <HiOutlineArrowNarrowRight className='nav-icon' size={30} width={50} color='#819f08'/></Link>
        </ul>
      </div>
      <div className={showMenu ? 'header_nav_mobile' : 'header_nav_mobile_hide'}  >
        <ul className="nav-links">
          
          <li>Projects</li>
          <Link to='Projects'><li>Visualization</li></Link>
          
        </ul>
      </div>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </div>
    </div>
  )
}

export default Header