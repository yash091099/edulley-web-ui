import React from "react";
import scholar1 from "../../assets/scholarship1.png";
import list from "../../assets/list.svg";
import LORCard from "./lorCard";

const LOR = () => {
  return (
    <>
      <div className="container-fluid lor_container">
        <div className="ielts_content container">
          <h1 style={{color:"#ffff",fontFamily:"Gilroy-Bold"}}>Letter of Recommendation</h1>
          <h2 style={{color:"#ffff",fontFamily:"Gilroy-Medium"}}>All you need to know!</h2>
          {/* <button className="explore-button mt-3 bg-black pull-right">
            Download IELTS Guide
          </button> */}
        </div>
      </div>
      <div className="container py-4 course_container">
        <h3 style={{fontFamily:"Gilroy-Bold"}} className="mb-3">Letter of Recommendation</h3> 
        <div className="d-flex  justify-content-between inner_course mt-0">
          <div className="row">
            <div className="col-md-9">
              <div>
                <LORCard />
              </div>
            </div>
            <div className="col-md-3">
              <div className="right_scholar exam-bar">
                <div className="s_img_card py-3">
                  <div className="d-flex align-items-center gap-3">
                    <img  style={{width:"2rem",height:"2rem"}} src={list} alt="" />
                    <h4 className="text-pink  mb-0 " style={{fontFamily:"Gilroy-Bold"}}>
                      Table of Contents
                    </h4>
                  </div>
                  <ul>
                    <li className="text-pink" style={{fontFamily:"Gilroy-Medium"}}>Overview</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Why IELTS</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Test Format</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Syllabus</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Preparation</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Eligibility</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Registration</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Exam Fee</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Exam dates 2024</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS test centres</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS E-Book</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Band Descriptors</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Speaking test</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Reading test</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>General Reading test</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>General Writing Task</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Essay</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>IELTS Result</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>GPA</li>
                  </ul>
                </div>
              
                <div className="s_img_card side-bar-img text-center">
                  <img src={scholar1} alt="" />
                  <p className="mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                    Let’s look at the scholarships available for you
                  </p>
                  <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                    Explore All Scholarship
                  </button>
                  <p className="fw-bold my-2" style={{fontFamily:"Gilroy-Bold"}}>OR</p>
                  <p
                    className="fw-bold"
                    style={{ color: "#ff5573", cursor: "pointer" ,fontFamily:"Gilroy-Medium" }}
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

export default LOR;
