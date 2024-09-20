import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Get In Touch With Us</h1>
        <form>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
          ></input>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your e-mail"
          ></input>
          <label>Your Message</label>
          <textarea
            rows="6"
            type="message"
            name="email"
            placeholder="Please enter your message"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
