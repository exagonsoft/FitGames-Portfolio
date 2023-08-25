import React from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData.js";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selectedTestimonialindex, setSelectedTestimonialIndex] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say About Us</span>
        <motion.span
        key={selectedTestimonialindex}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}} 
        exit={{opacity:0, x:100}}
        transition={transition}
        >{testimonialsData[selectedTestimonialindex].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selectedTestimonialindex].name}
          </span>{" "}
          - {testimonialsData[selectedTestimonialindex].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
        key={selectedTestimonialindex}
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}} 
        exit={{opacity:0, x:-100}}
        transition={transition}
        src={testimonialsData[selectedTestimonialindex].image} alt="" />
        <div className="selector">
          <img
            onClick={() => {
              selectedTestimonialindex === 0
                ? setSelectedTestimonialIndex(tLength - 1)
                : setSelectedTestimonialIndex((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selectedTestimonialindex === tLength - 1
                ? setSelectedTestimonialIndex(0)
                : setSelectedTestimonialIndex((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
