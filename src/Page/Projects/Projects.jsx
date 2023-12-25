import React from "react";
import "./Projects.css";
import Data from "./Projects Data/Data.json";

const Projects = () => {
  return (
    <>
      <div className="main_projects">
        <div className="projects_heading">
          <h1>Projects</h1>
          <h2>
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of <br /> my projects.
          </h2>
        </div>
        <div className="skills_projects">
          {Data.map((project) => (
            <div className="project_card" key={project.id}>
              <div className="cards">
                <div className="project_img">
                  <img src={project.img} alt={project.name} />
                </div>
                <div className="project_skills_card">
                  {project.skills.map((skill, index) => (
                    <h1 key={index}>{skill}</h1>
                  ))}
                </div>
                <div className="project_name">
                  <h1>{project.name}</h1>
                  <h2>{project.date}</h2>
                </div>
                <div className="project_dec">
                  <h3>{project.bio}</h3>
                </div>
                <div className="project_btn">
                  <a target="_blank" href={project.links}>
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
