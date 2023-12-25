import React from "react";
import "./Education.css";

const Education = () => {
  const EducationData = [
    {
      school_name: "Govt Senior Secondary School",
      bord: "HBSE",
      class: "XII",
      grade: " 88%",
      sen: "2020",
      logo: "https://bseh.org.in/logo.png",
      bio: "I completed my class 12 high school education at Govt Senior Secondary School Ellenabad Sirsa Haryana 125102",
    },
    {
      school_name: "Govt Senior Secondary School",
      bord: "HBSE",
      class: "XI",
      logo: "https://bseh.org.in/logo.png",
      grade: " 66%",
      sen: "2018",
      bio: "I completed my class 10 high school education at Govt Senior Secondary School Mithanpura Ellenabad Sirsa Haryana 125102",
    },
  ];

  return (
    <>
      <div className="main_Education">
        <div className="Education_heading">
          <h1>Education</h1>
          <h2>
            My education has been a journey of self-discovery and growth. <br />{" "}
            My educational details are as follows.
          </h2>
        </div>
        {EducationData.map((res) => {
          return (
            <div className="Education_card">
              <div className="Education_cards">
                <div className="edu_img">
                  <img src={res.logo} alt="" />
                  <div>
                    <h1>{res.school_name}</h1>
                    <h2>{res.bord}</h2>
                    <h3>{res.sen}</h3>
                  </div>
                </div>
                <div>
                  <h1>Grade: {res.grade}</h1>
                  <h2>{res.bio}</h2>
                </div>
              </div>
              <div className="edu_line">
                <div className="edu_line_dot"></div>
                <div className="edu_line_line"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
