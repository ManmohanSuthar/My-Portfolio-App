import React from "react";
import "./Skills.css";
import BigCard from "../../Components/Big-Card/BigCard";

const Skills = () => {
  return (
    <>
      <div className="main_skills">
        <div className="skills_heading">
          <h1>Skills</h1>
          <h2>
            Here are some of my skills on which I have been working on for the{" "}
            <br />
            past 1 years.
          </h2>
        </div>
        <div className="skills_card">
          <BigCard />
        </div>
      </div>
    </>
  );
};

export default Skills;
