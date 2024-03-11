import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaGooglePlusSquare } from 'react-icons/fa';
import logo from "../../images/logo.png"
const Footer = () => {
  return (
    <div className="footer">
      
      <div className="inner-footer">
        
        <div className="footer-items">
         <img src ={logo} alt='footer-logo' className='footer-logo'/>
          {/* <p>Description of any product or motto of the company.</p> */}
        </div>
        <div className="footer-items">
          {/* <h3>Quick Links</h3> */}
          <div className="border1"> </div>
          <ul className='footer-links'>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/">Search</a></li>
            <li><a href="/contactus">Contact</a></li> */}
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/term&conditions">Term of services</a></li>
          </ul>
        </div>
       
        {/* <div className="footer-items">
          <h3>Recipes</h3>
          <div className="border1"></div>
          <ul className='footer-links'>
            <li><a href="/donor">Become donor</a></li>
            <li><a href="/event">Events</a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </div> */}
        <div className="footer-items ">
          <h3>Contact us</h3>
          <div className="border1 text-center"></div>
          <ul className='footer-links'>
  <li><FaMapMarkerAlt />Shimla, India</li>
  {/* <li><FaPhone />+91 9317606417</li> */}
  <li><FaEnvelope />info@alinspace.com</li>
</ul>
<div className="social-media" >
  <a href="#" className='footer-icon'><FaInstagram /></a>
  <a href="#" className='footer-icon'><FaFacebook /></a>
  {/* <a href="#" className='footer-icon'><FaGooglePlusSquare /></a> */}
</div>

        </div>
      </div>
      <div className="footer-bottom">
       Copyrights  &copy;Alinspace
      </div>
    </div>
  );
};

export default Footer;