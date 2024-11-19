import React from "react";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      percentage: "90",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      percentage: "90",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "Bootstrap",
      percentage: "70",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
      name: "Sass",
      percentage: "65",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
    },
    {
      name: "JavaScript",
      percentage: "80",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "ReactJs",
      percentage: "65",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Figma",
      percentage: "85",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Specialized In</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} />
              <h3>{skill.name}</h3>
              <div className="skill-percentage">
                <div
                  className="percentage-bar"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <span>{skill.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
