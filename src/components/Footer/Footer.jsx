import React from "react";
import "./footer.css";
import fglogo from "../../assets/fglogo.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="social-f">
        <div className="social-links">
          <img src={github} alt="" />
          <a href="https://www.linkedin.com/in/felix-sunkel-197886214"><img src={linkedin} alt="" /></a>
          <img src={instagram} alt="" />
        </div>
        <div className="logo-f">
          <img src={fglogo} alt="" />
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
