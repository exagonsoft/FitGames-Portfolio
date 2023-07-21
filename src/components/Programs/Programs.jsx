import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/**Programs Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      {/**Programs Categories */}
      <div className="programs-categories">
        {programsData.map((program, id) => (
          <div key={id} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="rightArrow" /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
