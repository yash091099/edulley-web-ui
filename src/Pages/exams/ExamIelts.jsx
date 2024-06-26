import React from "react";
import IletsCard from "../../components/exams/IletsCard";
import scholar1 from "../../assets/scholarship1.png";
import cherons from "../../assets/chevrons-right.png";

import list from "../../assets/list.svg";
import { useNavigate } from "react-router-dom";

const ExamIelts = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="container-fluid ielts_container">
        <div className="ielts_content container " style={{marginTop: '200px'}}>
          <h1 style={{fontFamily: 'Gilroy-Bold'}}>IELTS EXAM</h1>
          <h2 style={{fontFamily: 'Gilroy-Medium'}}>Complete Overview</h2>
          <button className="explore-button mt-5 bg-black pull-right" style={{fontFamily: 'Gilroy-Medium'}}>
            Download IELTS Guide <img src={cherons} alt="Home" />
          </button>
        </div>
      </div>
      <div className="container py-4 course_container">
        <h3 style={{fontFamily: 'Gilroy-Medium'}} className="mb-3">IELTS Exam 2024-25</h3> 
        <div className="d-flex  justify-content-between inner_course mt-0">
          <div className="row">
            <div className="col-md-9">
              <div>
                <IletsCard />
              </div>
            </div>
            <div className="col-md-3">
              <div className="right_scholar exam-bar">
                  <div className="d-flex align-items-center gap-3">
                    <img style={{width: '2rem', height: '2rem'}} src={list} alt="" />
                    <h4 className="text-pink  mb-0 " style={{fontFamily: 'Gilroy-Medium'}}>
                      Table of Contents
                    </h4>
                  </div>
                <div className="s_img_card py-3">
                  <ul>
                    <li className="text-pink" style={{fontFamily: 'Gilroy-Medium'}}>Overview</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>Why IELTS</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Test Format</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Syllabus</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Preparation</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Eligibility</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Registration</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Exam Fee</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Exam dates 2024</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS test centres</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS E-Book</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>Band Descriptors</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Speaking test</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Reading test</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>General Reading test</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>General Writing Task</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Essay</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>IELTS Result</li>
                    <li style={{fontFamily: 'Gilroy-Medium'}}>GPA</li>
                  </ul>
                </div>
                <div className="s_img_card side-bar-img text-center">
                  <img src={scholar1} alt="" />
                  <p className="mt-2" style={{fontFamily: 'Gilroy-Bold'}}>
                    Let’s look at the scholarships available for you
                  </p>
                  <button onClick={() => navigate('/scholarship')} style={{fontFamily: 'Gilroy-Medium'}}  className="explore-button py-2 fw-light mt-2">
                    Explore All Scholarship
                  </button>
                  <p className="my-2" style={{fontFamily: 'Gilroy-Bold'}}>OR</p>
                  <a href="https://wa.me/message/SMDIYPHGQFQRC1" target="_blank"
                    
                    style={{ color: "#ff5573", cursor: "pointer",fontFamily: 'Gilroy-Medium' }}
                  >
                    Chat with us 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamIelts;
