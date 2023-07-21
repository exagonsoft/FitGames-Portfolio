import React from "react";
import "./Header.css";
import  fglogo  from "../../assets/fglogo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={fglogo} alt="Logo" className="logo"></img> 
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
