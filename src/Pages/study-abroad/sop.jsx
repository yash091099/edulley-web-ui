import React from "react";
import scholar1 from "../../assets/scholarship1.png";
import list from "../../assets/list.svg";
import SOPCard from "./sopcard";

const SOP = () => {
  return (
    <>
      <div className="container-fluid sop_container">
        <div className="ielts_content container">
          <h1 style={{color:"#fff"}}>Statement of Purpose</h1>
          <h2 style={{color:"#fff"}}>All you need to know!</h2>
        
        </div>
      </div>
      <div className="container py-4 course_container">
        <h3>Statement of Purpose</h3> 
        <div className="d-flex  justify-content-between inner_course mt-0">
          <div className="row">
            <div className="col-md-9">
              <div>
                <SOPCard />
              </div>
            </div>
            <div className="col-md-3">
              <div className="right_scholar exam-bar">
                <div className="s_img_card py-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={list} alt="" />
                    <h4 className="text-pink fw-semibold mb-0 ">
                      Table of Contents
                    </h4>
                  </div>
                  <ul>
                    <li className="text-pink">What is SOP</li>
                    <li>Why is SOP important</li>
                    <li>SOP Format</li>
                    <li>Hoe to write SOP</li>
                    <li>What do college look for in an SOP</li>
                    <li>Tips for writing SOP</li>
                    <li>Common mistakes to avoid in SOP</li>
                    <li>Importance of SOP</li>
                    <li>Word limit in SOP</li>
                    <li>Samples for SOP</li>
                 
                  </ul>
                </div>
                <div className="s_img_card py-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={list} alt="" />
                    <h4 className="text-pink fw-semibold mb-0 ">
                      Sample of SOP
                    </h4>
                  </div>
                  <ul>
                    <li className="text-green">Sample SOP for MBA</li>
                    <li className="text-green">Sample SOP for MS</li>
                    <li className="text-green">Sample SOP for Bachelors</li>
                    <li className="text-green">Sample SOP for PhD</li>
                    <li className="text-green">Sample SOP for other courses</li>
                  
                  </ul>
                </div>
                <div className="s_img_card side-bar-img text-center">
                  <img src={scholar1} alt="" />
                  <p className="mt-2">
                    Let’s look at the scholarships available for you
                  </p>
                  <button className="explore-button py-2 fw-light mt-2">
                    Explore All Scholarship
                  </button>
                  <p className="fw-bold my-2">OR</p>
                  <p
                    className="fw-bold"
                    style={{ color: "#ff5573", cursor: "pointer" }}
                  >
                    Chat with Our Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOP;
