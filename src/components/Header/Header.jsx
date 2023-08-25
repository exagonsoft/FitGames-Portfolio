import React, { useEffect, useState } from "react";
import "./Header.css";
import fglogo from "../../assets/fglogo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const inMobile = window.innerWidth <= 768 ? true : false;
  const [showMenu, setShowMenu] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const checkScroll = () => {
    if (window.scrollY > 50) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="header">
      {showBackToTop && !inMobile && (
        <div className="btn-to-top">
          <Link to="header" spy={true} smooth={true}>
            UP
          </Link>
        </div>
      )}

      <img src={fglogo} alt="Logo" className="logo"></img>
      {showMenu === false && inMobile === true ? (
        <div
          onClick={ToggleMenu}
          style={{
            backgroundColor: "var(--appColor)",
            padding: "5px",
            WebkitBorderRadius: "5px",
          }}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={ToggleMenu} to="header" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={ToggleMenu} to="programs" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={ToggleMenu} to="reasons" spy={true} smooth={true}>
              Why Us
            </Link>
          </li>
          <li>
            <Link onClick={ToggleMenu} to="plans" spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={ToggleMenu}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
