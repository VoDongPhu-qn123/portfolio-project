import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";

const NavBar = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="deskTopMenu"></div>
      <button className="deskTopMenuBtn">
        <img src={contact} alt="contact" />
        Contact me!
      </button>
    </nav>
  );
};

export default NavBar;
