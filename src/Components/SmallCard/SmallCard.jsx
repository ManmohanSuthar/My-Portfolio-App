import React from "react";
import "./SmallCard.css";

const SmallCard = ({ Data }) => {
  return (
    <>
      <div className="main_smallcard">
        {Data.map((res) => {
          return (
            <>
              <div className="smallcard">
                <img src={res.img} />
                <h1>{res.name}</h1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SmallCard;
