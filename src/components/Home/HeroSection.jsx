import React from "react";
import { BiChevronRight } from "react-icons/bi";
import heroImg from "../../assets/Home2.png";
// import heroImg from "../../assets/home.png";

import cherons from "../../assets/chevrons-right.png";
import Search from "./searchWithoutHeading";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const _u = JSON.parse(localStorage.getItem('_u'));
  let token = _u?.token;
  return (
    <div className="home-page-container container-fluid">
      <div className="top-section container d-flex align-items-center justify-content-between">
        <div className="content" style={{ flex: 1 }}>
          <h1 className="title-home mb-1 mt-4" style={{ color: "#FF5573", fontFamily: 'Gilroy-Bold' }}>
            Your Gateway to Global Excellence !
          </h1>
          <h5 className="subtitle mt-3 mb-4" style={{ fontFamily: 'Gilroy-Medium' }}>
            Explore, Learn, and Thrive with Study Abroad Application
          </h5>
          <Link to="/courses">
            <button className="explore-button mt-3" style={{ fontFamily: 'Gilroy-Medium' }}>
              Explore Courses <img src={cherons} alt="Home" />
            </button>
          </Link>
        </div>
        <div className="image-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img className="main-image" src={heroImg} alt="Home" style={{ width: '80%', height: 'auto' }} />
        </div>
      </div>

      {/* search  */}

      {token && <Search />}
    </div>
  );
};

export default HeroSection;
