import React from "react";
import "./Footer.css";
import Header_data from "../Header/Header_File.json";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <h1>Manmohan Suthar</h1>
        <div className="footer_link">
          {Header_data.map((data) => {
            return (
              <>
                <a>{data.name}</a>
              </>
            );
          })}
        </div>
        <div className="footer_icon">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-regular fa-file"></i>
        </div>
        <h2>© 2023 Manmohan Suthar. All rights reserved.</h2>
      </div>
    </>
  );
};

export default Footer;
