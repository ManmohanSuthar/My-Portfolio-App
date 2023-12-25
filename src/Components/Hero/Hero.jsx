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
            href="https://drive.google.com/file/d/1ELqMv9RhyQxBMC5e1TT-WxSWuhNyFcts/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Da723d92513a38853:TM%3D1703482474:C%3Dr:IP%3D2409:4051:4e00:b801:503d:b3c2:e508:d97b-:S%3DorMh1mqBPYtX3ARB_kv3NfA%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DMon,+25-Dec-2023+08:34:34+GMT"
          >
            Check Resume
          </a>
        </div>
        <div className="hero_right">
          <div className="hero_photo">
            <img src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/369620603_585695180289481_8194852975439612399_n.jpg?ccb=11-4&oh=01_AdSgOhPxq_bLHvPZukQwiqcbXdPcCFT5UQ4tX263fWbenQ&oe=6596A4F3&_nc_sid=e6ed6c&_nc_cat=106" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
