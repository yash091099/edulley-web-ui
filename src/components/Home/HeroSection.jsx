import React from "react";
import { BiChevronRight } from "react-icons/bi";
import heroImg from "../../assets/home.png";
import Search from "./Search";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="home-page-container  container-fluid">
      <div className="top-section container">
        <div className="content">
          <h1 className="title-home  mb-1" style={{ color: "#FF5573" }}>
            Your Passport to Academic Excellence :
          </h1>
          <h5 className="subtitle mt-3 mb-4 ">
            Explore, Learn, and Thrive with Study Abroad Application
          </h5>
          <Link to="/courses">
            <button className="explore-button mt-3">
              Explore Courses <BiChevronRight size={26} />
            </button>
          </Link>
        </div>
        <div className="image-container">
          <img className="main-image" src={heroImg} alt="Home" />
        </div>
      </div>

      {/* search  */}

      <Search />
    </div>
  );
};

export default HeroSection;
