import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans">
      <div className="plans-header">
        <span className="stroke-text">Ready to start</span>
        <span>your jurney</span>
        <span className="stroke-text">now withus</span>
      </div>
      {/**Plans Header*/}
      <div className="plans-cards">
        {plansData.map((plan, id) => (
          <div key={id} className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, id) => (
                <div className="feature" key={id}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div><span>see more benefists →</span></div>
            <button className="button">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
