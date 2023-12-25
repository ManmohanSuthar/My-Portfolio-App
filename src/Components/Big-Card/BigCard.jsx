import React from "react";
import "./BigCard.css";
import SmallCard from "../SmallCard/SmallCard";
import Frontend from "../Card Details/Frontend.json";
import Backend from "../Card Details/Backend.json";
import Android from "../Card Details/Android.json";
import Others from "../Card Details/Others.json";

const BigCard = () => {
  return (
    <>
      <div className="big_coneter">
        <div className="main_big_card">
          <div className="main_bigcard">
            <h1 className="bigcard_heading">Frontend</h1>
            <SmallCard Data={Frontend} />
          </div>
          <div className="main_bigcard">
            <h1 className="bigcard_heading">Backend</h1>
            <SmallCard Data={Backend} />
          </div>
        </div>
        <div className="main_big_card">
          <div className="main_bigcard">
            <h1 className="bigcard_heading">Android</h1>
            <SmallCard Data={Android} />
          </div>
          <div className="main_bigcard">
            <h1 className="bigcard_heading">Others</h1>
            <SmallCard Data={Others} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
