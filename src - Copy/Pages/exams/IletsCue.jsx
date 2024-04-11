import React from "react";
import TopicCard from "../../components/exams/TopicCard";
import scholar1 from "../../assets/scholarship1.png";
import list from "../../assets/list.svg";

const IletsCue = () => {
  return (
    <div className="container py-4 course_container">
      <h1>Cue Card sample Topic 1</h1>
      <div className="d-flex  justify-content-between  inner_course mt-0">
        <div>
          <TopicCard />
        </div>
        <div className="right_scholar ">
          <div className="s_img_card py-5">
            <div className="d-flex align-items-center gap-3">
              <img src={list} alt="" />
              <h4 className="text-pink fw-semibold mb-0 ">
                IELTS READING SAMPLE
              </h4>
            </div>
            <ul>
              <li className="text-pink">Overview</li>
              <li>Topic Name</li>
              <li>Topic Name</li>
              <li>Topic Name</li>
              <li>Topic Name</li>
              <li>Topic Name</li>
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
  );
};

export default IletsCue;
