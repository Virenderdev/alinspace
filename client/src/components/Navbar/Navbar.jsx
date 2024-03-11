// client/src/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import { NavItems } from '../constants/constant';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu)
    document.querySelector('.link').classList.toggle('active');
    document.body.classList.toggle('overflow-hidden'); 
  };
  const closeMenu = () => {
    setShowMenu(false); 
    document.querySelector('.link').classList.remove('active');
    document.body.classList.remove('overflow-hidden'); 
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="path_to_your_logo.png" alt="Logo" /> 
      </div>
      <div className={`navbar-links ${showMenu ? "active" : ""}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={showMenu ? "line line-cross" : "line"}></div>
          <div className={showMenu ? "line line-cross" : "line"}></div>
          <div className={showMenu ? "line line-cross" : "line"}></div>
        </div>
        <div className='link'>
        {NavItems.map((nav) => (
          
            <Link key ={nav.id} to={nav.links} onClick={closeMenu}>{nav.name}</Link>
            
        ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
