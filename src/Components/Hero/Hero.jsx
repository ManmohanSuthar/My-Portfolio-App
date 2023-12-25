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
            href="https://drive.google.com/file/d/1JOmg413u2QTKTzYYe1N8p_9Ew_9R5q75/view?usp=sharing"
          >
            Check Resume
          </a>
        </div>
        <div className="hero_right">
          <div className="hero_photo">
            <img src="https://lh3.googleusercontent.com/pw/ABLVV85Xwgg9sHXv6ndhq24P8drBQI-9j-CXFuh6H0i91iiFeeIVnXxFDwJLN0WPqSpv0xP5HqnZ--Jponz4ZGn0eSaFwKC2C2siwcJLdMmcKNf41iIV1eNv3bjuQ4GXbq0UxN6u20VH5_0qc-_emav_OuVCmvya7xAAZthoMQHuG8xVIsjM4DptZtbsV_3DfINafc-wc09yXfAJd7rygAWxMPbHwn61xTezBxc0bbRF9OOppD7QJDh8RQmOApAFHSXc0JE7EKGjx75Cq60n-GLGWB_b1hG0JEutCPV9CbIZ5nano1DuigDFmjcmTek5QjSiIjREYmw2crDQy-gt_86_bgefi--f6_g-rfIidam14dDF6ApnwqcKm2YQ3HexIb-zGo3ZGViE6-B-REh_fLfr3CpgYNXpdmHDGRGgEFTDuKLZaBl7HEhRYTDY8DxzbLE-lNnWrvz-7tVJlehmssyu0AkwHsw-qDTCcnELsGlzlLqWcnVNMrRA_hctD5rUUtefKt3FncI3jV9PyHnukvTOs8U9XD1lwRD56Pd6Ct819-sg0ypLmP1zaj6g0MLNbuvAIwKGuB6G8uC4dRoU-EGQS8r6ijibSOI-mCW_1LAQAFlfn7mRCiGaUp4KmLaf3hn-_XXODClNlH1vxWhvM0DXG4Ewn4SHyL6eSlPqqkQXNAfz7WhSbxyfaZWfRvQE2tk2BYk9j81lOvtgdPrs4WcSKCuQx_CgzurJLjtDXJuhGPOhjrgSVDAB62m2PnGn5LViiesvKexqsKkbx_cgMblmCueTthacA14Nrw7mtwWzm34PBzXAqZa0ooyUzaeVSVcKn3DjSJAsOx8dC1rJml9ADGBV61TgZCX2g7MrCMv64z_mqEWKk_1d-jIJQ5-9fMjxsg=w487-h487-s-no-gm?authuser=0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
