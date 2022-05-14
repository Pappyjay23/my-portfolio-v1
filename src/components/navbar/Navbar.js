import React from 'react';
import "../../styles/Navbar.css"
import {FaHome, FaLaptop} from "react-icons/fa"
import {BiBookContent, BiServer, BiEnvelope} from "react-icons/bi"
import {FiUser} from "react-icons/fi"
import { Link } from "react-scroll";
import NavLinks from './NavLinks';
  

const Navbar = ({nav, handleNav}) => {
  return (
    <nav className={nav ? 'navbar active' : "navbar"}>
        <div className="navbar-container">
            <div className="top-details">
                <img src="images/profile.jpg" alt="Main" className='profile-pic-small' />
                <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500} onClick={handleNav} to="home" className='profile-name'>Peace Jinadu-Paul</Link>
                <NavLinks handleNav={handleNav} />
            </div>
            <ul className="mid-details">
              <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500}  to="home" className='mid-links'><FaHome className='mid-icon' /><li className='mid-link' onClick={handleNav} > Home </li></Link>
              <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500}  to="about" className='mid-links'><FiUser className='mid-icon' /><li className='mid-link' onClick={handleNav} > About </li></Link>
              <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500}  to="skills" className='mid-links'><FaLaptop className='mid-icon' /><li className='mid-link' onClick={handleNav} > Skills</li></Link>
              <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500}  to="services" className='mid-links'><BiServer className='mid-icon' /><li className='mid-link' onClick={handleNav} > Services </li></Link>
              <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500}  to="works" className='mid-links'><BiBookContent className='mid-icon' /><li className='mid-link' onClick={handleNav} > Works </li></Link>
              <Link activeClass="active" spy={true} smooth={true} offset={0} duration={500}  to="contact" className='mid-links'><BiEnvelope className='mid-icon' /><li className='mid-link' onClick={handleNav} > Contact</li> </Link>
            </ul>
            <div className="copy">
              <small className='copyright'>© Copyright ©2022 <br /> All rights reserved |</small>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;
