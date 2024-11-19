import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Hero.scss";
import img from "../Hero/IMG_3566.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi!</h1>
          <h1>I'am Rinor Zeqiri</h1>
          <p>Frontend Developer & UI/UX Designer</p>
          <div className="social-links">
            <a
              href="https://github.com/rinorze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rinor-zeqiri-a65432270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rinorze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <button className="btn btn-primary">Contact Me</button>
        </div>
        <div className="hero-image">
          <img src={img} alt="Rinor Zeqiri" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
