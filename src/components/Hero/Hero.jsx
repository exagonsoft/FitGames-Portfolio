import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const inMobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* best-trainer-ad */}
        <div className="best-trainer">
          <motion.div
            initial={{ left: inMobile ? "150px" : "220px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness coach in town</span>
        </div>
        {/* Hero Header */}
        <div className="hero-heading">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              I will be happy to help you to shape and build your ideal body and
              live up your live to fullest
            </span>
          </div>
        </div>
        {/* Hero Decos */}
        <div className="hero-decos">
          <div>
            <span>+140</span>
            <span>Workout Routines</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+20</span>
            <span>Years of experience</span>
          </div>
        </div>
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="button">Get Started</button>
          <button className="button">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="button">Join Now</button>
        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={heart} alt="Heart" className=""></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/**Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/**Calories Deco */}
        <motion.div
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          className="hero-calories"
        >
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
