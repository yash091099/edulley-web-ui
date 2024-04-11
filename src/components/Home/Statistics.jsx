import React from "react";
import statis from "../../assets/statistics.png";

const Statistics = () => {
  return (
    <div className="container">
      <div className="top-section container">
        <div className="content">
          <h1
            className="what-we-can-do-title"
            style={{ color: "#FF5573" }}
          >
            Our Statistics
          </h1>
          <p className="subtitle ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.  <br></br>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here{" "}
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
