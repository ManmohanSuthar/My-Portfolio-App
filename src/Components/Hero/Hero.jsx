import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="main_hero">
        <div className="hero_left">
          <h1>
            Hi, I am <br /> Manmohan Suthar
          </h1>
          <h2>
            I am a Full <span>Stack Developer</span>
          </h2>
          <h3>
            I am a motivated and versatile individual, always eager to <br />{" "}
            take on new challenges. With a passion for learning I am dedicated
            to delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </h3>
          <a
            className="btn"
            target="_blank"
            href="https://drive.google.com/file/d/1ELqMv9RhyQxBMC5e1TT-WxSWuhNyFcts/view?usp=sharing"
          >
            Check Resume
          </a>
        </div>
        <div className="hero_right">
          <div className="hero_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/my-data-a96c2.appspot.com/o/My-DP.jpg?alt=media&token=f5939806-ce06-442c-9c4c-14c31dcd82a3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
