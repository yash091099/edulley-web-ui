import React from "react";
import { FaSearch } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
import uni from "../assets/uni.svg";
import scholar1 from "../assets/scholarship1.png";
import scholar2 from "../assets/scholarship2.png";
import { Link } from "react-router-dom";
import ScholarshipCard from "../components/ScholarshipCard";

const Scholarship = () => {
  return (
    <div>
      {/* search Scholarship  */}
    

      <div className=" search_container container">
        <h3 className="text-center">Search Scholarships</h3>
        <div className="bg-white rounded section_inner  ">
          <div className=" ps-3">
            <img
              style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
              alt=""
              src={book}
            />
            <input
              className=" text-gray-100 "
              placeholder="Degree"
              type="text"
            />
          </div>
          <div className="  ps-3">
            <img
              style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
              alt=""
              src={map}
            />
            <input
              className="text-gray-100 "
              placeholder="Country"
              type="text"
            />
          </div>
          <div className="  ps-3">
            <img
              style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
              alt=""
              src={uni}
            />
            <input
              className="text-gray-100 "
              placeholder="University"
              type="text"
            />
          </div>
          <Link className="px-4 search_btn" to="/courses-list">
            <FaSearch />
          </Link>
        </div>
      </div>

      {/* section  */}
      <div className="container py-4 course_container">
        <div className="d-flex  justify-content-between  inner_course mt-0">
          <div className="row">
            <div className="col-md-6"><ScholarshipCard /></div>
            <div className="col-md-6"><ScholarshipCard /></div>
            <div className="col-md-6"><ScholarshipCard /></div>
            <div className="col-md-6"><ScholarshipCard /></div>
            <div className="col-md-6"><ScholarshipCard /></div>
            <div className="col-md-6"><ScholarshipCard /></div>
            
          
          </div>
          <div className="right_scholar ">
            <div className="s_img_card">
              <img src={scholar1} alt="" />
              <p className="mt-2">Confused about our Career path?</p>
              <button className="explore-button py-2 fw-light mt-2">
                Explore Career path finder
              </button>
            </div>
            <div className="s_img_card">
              <img src={scholar2} alt="" />
              <p className="mt-2">
                Let’s look at the scholarships available for you
              </p>
              <button className="explore-button py-2 fw-light mt-2">
                Explore All Scholarship
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
