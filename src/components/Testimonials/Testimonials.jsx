import React from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData.js";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const Testimonials = () => {
  const [selectedTestimonialindex, setSelectedTestimonialIndex] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say About Us</span>
        <span>{testimonialsData[selectedTestimonialindex].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selectedTestimonialindex].name}
          </span>{" "}
          - {testimonialsData[selectedTestimonialindex].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selectedTestimonialindex].image} alt="" />
        <div className="selector">
          <img onClick={() => {
            selectedTestimonialindex === 0 ?
            setSelectedTestimonialIndex(tLength - 1) :
            setSelectedTestimonialIndex((prev) => prev - 1)
          }} src={leftArrow} alt="" />
          <img onClick={() => {
            selectedTestimonialindex === tLength - 1 ?
            setSelectedTestimonialIndex(0) :
            setSelectedTestimonialIndex((prev) => prev + 1)
          }} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
