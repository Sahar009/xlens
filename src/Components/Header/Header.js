import {useState}from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import './Header2.css'
import logo from '../Others/images/log.png'
import { Link } from 'react-router-dom';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='header'>
   <Link to='/'> <div className='logo_container'>
    <img  src={logo}/></div></Link>
      <div className='header_nav'  >
        <ul className="nav-links">
          
          <li>Projects</li>
          <Link to='Projects'><li>Visualization</li></Link>
          
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
  )
}

export default Header