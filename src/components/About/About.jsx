import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate Frontend Developer with a keen eye for creating
            beautiful and functional web experiences. With expertise in modern
            web technologies and frameworks, I strive to build responsive and
            user-friendly applications that make a difference.
          </p>
          <p>
            My journey in web development started with a curiosity for creating
            things that live on the internet. Today, I'm confident in
            transforming ideas into reality using the latest web technologies.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Workspace"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
