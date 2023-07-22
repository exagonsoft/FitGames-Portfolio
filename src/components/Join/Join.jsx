import React, { useRef } from "react";
import {} from "./join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const inMobile = window.innerWidth <= 768 ? true : false;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_skqalqp",
        "template_x1c23tf",
        form.current,
        "Wnhg0tFngoA1oBIWe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr></hr>
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-containner" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email"
          />
          <button className="button btn-j">{inMobile ? 'Join' : 'Join Now'}</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
