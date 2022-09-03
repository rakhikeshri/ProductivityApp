import React, { useState } from "react";
import "./navbar.css";
import { FaAngellist, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div className="nav">
        <div className="logo">
            <FaAngellist className="icon"/> 
          <NavLink to="/" className="logoLink">
            <h4> Techie </h4>
          </NavLink>
        </div>
      <div className={isMobile ? "mobileNavLink" : "navLink"}
        onClick={() => setIsMobile(false)}
      >
        <ul>
          <NavLink className="home" to="/"> 
            <li>HOME</li>
          </NavLink>
          <NavLink className="notesapp" to="/notesapp"> 
            <li>My NOTES</li>
          </NavLink>
          <NavLink className="todos" to="/todos"> 
            <li>TODOs</li>
          </NavLink>
          <NavLink className="budgets" to="/budgets"> 
            <li>BUDGETs</li>
          </NavLink>
          <NavLink className="color" to="/colorpalette"> 
            <li>COLOR PALETTE</li>
          </NavLink>
          <NavLink className="accordian" to="/accordian"> 
            <li>ACCORDIAN</li>
          </NavLink>
        </ul>
      </div>
      <div className="hamburger" onClick = {() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <GiHamburgerMenu/> }
      </div>
    </div>
  );
};

export default Navbar;
