import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [showMenu, setShowMenu]= useState (false);
  
  return (
    <div>
      <nav className="navbar">
        {/* <img src="./src/assets/images/logo.jpeg" className='logo' alt="logo" /> */}
        <img src="/images/logo.jpeg" className='logo' alt="logo" />
        <div className="dsektopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

        }}>
            <img src="images/contact11.jpeg" alt="contact" className="desktopMenuImg" />Contact Me
          </button>

            <img src="./src/assets/images/menu1.jpeg" alt="menu" className='mobMenu'  id='mobMenuImg' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro'   spy={true}    smooth={true} offset={-100} duration={500}  className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link  activeClass='active' to='skills' spy={true}   smooth={true} offset={-50}    duration={500}    className="listItem" onClick={() => setShowMenu(false)}>About</Link>
            <Link  activeClass='active' to='works'  spy={true}   smooth={true} offset={-50}   duration={500}   className="listItem" onClick={() => setShowMenu(!showMenu)} >Portfolio</Link>
            <Link  activeClass='active' to='clients'spy={true} smooth={true} offset={-50}     duration={500}     className="listItem" onClick={() => setShowMenu(!showMenu)}>Clients</Link>
            <Link  activeClass='active' to='contact'spy={true} smooth={true} offset={-50}     duration={500}     className="listItem" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
