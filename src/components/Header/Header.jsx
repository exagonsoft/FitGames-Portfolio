import React, { useState } from "react";
import "./Header.css";
import fglogo from "../../assets/fglogo.png";
import bars from "../../assets/bars.png";

const Header = () => {
  const inMobile = window.innerWidth <= 768 ? true : false;
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="header">
      <img src={fglogo} alt="Logo" className="logo"></img>
      {showMenu === false && inMobile === true ? (
        <div onClick={ToggleMenu} style={{backgroundColor:'var(--appColor)', padding:'5px', WebkitBorderRadius:'5px'}}>
          <img src={bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={ToggleMenu}>Home</li>
          <li onClick={ToggleMenu}>Programs</li>
          <li onClick={ToggleMenu}>Why Us</li>
          <li onClick={ToggleMenu}>Plans</li>
          <li onClick={ToggleMenu}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
