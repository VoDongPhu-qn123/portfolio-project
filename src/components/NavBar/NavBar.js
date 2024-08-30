import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="deskTopMenuList">
        <Link to="" smooth={true} duration={500} className="deskTopMenuItem">
          Home
        </Link>
        <Link to="" smooth={true} duration={500} className="deskTopMenuItem">
          About
        </Link>
        <Link to="" smooth={true} duration={500} className="deskTopMenuItem">
          Portfolio
        </Link>
        <Link to="" smooth={true} duration={500} className="deskTopMenuItem">
          Clients
        </Link>
      </div>
      <button className="deskTopMenuBtn">
        <img src={contact} alt="contact" className="deskTopMenuImg" />
        Contact me
      </button>
    </nav>
  );
};

export default NavBar;
