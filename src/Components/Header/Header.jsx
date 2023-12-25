import React from "react";
import Header_data from "./Header_File.json";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="main_header">
        <div className="header_logo">
          <img src="/src/assets/logo-react-svgrepo-com.svg" alt="" />
          <h1>Portfolio</h1>
        </div>
        <div className="header_center">
          {Header_data.map((data) => {
            return (
              <>  
                <a>{data.name}</a>
              </>
            );
          })}
        </div>
        <div className="header_right">
          <div className="header_btn">
            <a target="_blank" href="https://github.com/ManmohanSuthar">
              Github Profile{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
