import React from "react";
import uni from "../../assets/frame-1686560972@2x.png";
import { Link } from "react-router-dom";

const Universties = () => {
  return (
    <div className="most-searched-countries-container featured-university-container py-5 section-padding">
      <div className="container">
        <h1 className="what-we-can-do-title">Featured Universities </h1>
        <p className="what-we-can-do-description">
          {" "}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. <br></br>
          The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here.
        </p>
        <div className="countries-container universsity-page my-5">
        {[...Array(32)].map((_, index) => (
          <Link to="/institution-details">
            <div
              className="countries uni_card"
              // style={{ width: "18rem" }}
              key={index}
              // onClick={() => navigate("/institution-details")}
            >
              <img src={uni} alt="University" className="university-image" />
              <div className="card-info">
                <div>
                  <h3 className="university-name">University Name</h3>
                  <h5 className="university-location">City, State, Country</h5>
                </div>
                <div className="university-logo">Logo</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Universties;
