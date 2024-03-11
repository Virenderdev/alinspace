import React from 'react'
import header from "../../images/image4.jpg"
import Navbar from '../Navbar/Navbar'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <img src={header} alt="header"  className="header-background" />
      <Navbar/>
    </div>
  )
}

export default Header
