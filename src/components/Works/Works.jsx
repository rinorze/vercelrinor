import React from "react";
import "./Works.scss"; // Ensure this file exists and is correctly styled

// Import your images from the assets folder
import img1 from "./chrome_5lWp4MIe1K.png"; // Adjust the path if necessary
import img2 from "./chrome_oTJcyHVUvX.png";
import img3 from "./chrome_zFlzVHJNlZ.png";
import img4 from "./chrome_BDh7pU7OuH.png";
import img5 from "./chrome_F2pEvkWvbb.png";

const Works = () => {
  const projects = [
    {
      title: "EvoSchool",
      description: "A School Web Aplication",
      image: img1,
      link: "https://classy-maamoul-aabc8f.netlify.app"
    },
    {
      title: "Pathway",
      description: "A Pathway Web Application",
      image: img2,
      link: "https://lively-florentine-497084.netlify.app/"
    },
    {
      title: "Smart Home",
      description: "A Real Estate Website",
      image: img3,
      link: "https://glowing-profiterole-755770.netlify.app/"
    },
    {
      title: "Cake",
      description: "A Cake Web Application",
      image: img5,
      link: "https://glowing-cucurucho-fa007d.netlify.app/"
    },
    {
      title: "Business Casual",
      description: "A Cafe Web Application",
      image: img4,
      link: "https://iridescent-kleicha-76cf54.netlify.app"
    }
  ];

  return (
    <section id="works" className="works section">
      <div className="container">
        <h2 className="section-title">My Works</h2>
        <div className="works-grid">
          {projects.map((project, index) => (
            <div key={index} className="work-card">
              <div className="work-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="work-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
