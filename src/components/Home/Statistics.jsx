import React from "react";
import statis from "../../assets/statistics.svg";

const Statistics = () => {
  return (
    <div className="container">
      <div className="top-section container">
        <div className="content">
          <h1
            className="what-we-can-do-title"
            style={{ color: "#FF5573" ,fontFamily:"Gilroy-Bold"}}
          >
            Our Statistics
          </h1>
          <p  style={{fontFamily:"Gilroy-Medium",fontSize:"18px"}}>
          Our numbers speak volumes about our long-standing commitment to assisting students in their study abroad transition. With years of experience, we've helped 
countless students achieve their dreams of international education. {" "}
          </p>
        </div>
        <div className="image-container">
          <img className="main-image" src={statis} alt="Our Statistics" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
