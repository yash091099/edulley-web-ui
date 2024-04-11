import React from "react";
import IletsCard from "../../components/exams/IletsCard";
import scholar1 from "../../assets/scholarship1.png";
import list from "../../assets/list.svg";

const ExamIelts = () => {
  return (
    <>
      <div className="container-fluid ielts_container">
        <div className="ielts_content container">
          <h1>IELTS EXAM</h1>
          <h2>Complete Overview</h2>
          <button className="explore-button mt-3 bg-black">Download IELTS Guide</button>
        </div>
      </div>
      <div className="container py-4 course_container">
        <h1>IELTS Exam 2024-25</h1>
        <div className="d-flex  justify-content-between  inner_course mt-0">
          <div>
            <IletsCard />
          </div>
          <div className="right_scholar ">
            <div className="s_img_card py-5">
              <div className="d-flex align-items-center gap-3">
                <img src={list} alt="" />
                <h4 className="text-pink fw-semibold mb-0 ">
                  Table of Contents
                </h4>
              </div>
              <ul>
                <li className="text-pink">Overview</li>
                <li>Why IELTS</li>
                <li>IELTS Test Format</li>
                <li>IELTS Syllabus</li>
                <li>IELTS Preparation</li>
                <li>IELTS Eligibility</li>
                <li>IELTS Registration</li>
                <li>IELTS Exam Fee</li>
                <li>IELTS Exam dates 2024</li>
                <li>IELTS test centres</li>
                <li>IELTS E-Book</li>
                <li>Band Descriptors</li>
                <li>IELTS Speaking test</li>
                <li>IELTS Reading test</li>
                <li>General Reading test</li>
                <li>General Writing Task</li>
                <li>IELTS Essay</li>
                <li>IELTS Result</li>
                <li>GPA</li>
              </ul>
            </div>
            <div className="s_img_card text-center">
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
    </>
  );
};

export default ExamIelts;
