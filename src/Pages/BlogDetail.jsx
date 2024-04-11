import React from "react";
import BlogCard from "../components/BlogCard";
import scholar1 from "../assets/scholarship1.png";

const BlogDetail = () => {
  return (
    <div className="container py-4 course_container">
      <div className="d-flex  justify-content-between  inner_course mt-0">
        <div>
          <BlogCard />
        </div>
        <div className="right_scholar ">
          <div className="s_img_card text-center">
            <p className="mt-2">Look at all the courses at University name</p>
            <button className="explore-button py-2 fw-light mt-2">
              Explore All Courses
            </button>
            <p className="fw-bold my-2">OR</p>
            <p
              className="fw-bold"
              style={{ color: "#ff5573", cursor: "pointer" }}
            >
              Chat with Our Advisor
            </p>
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

export default BlogDetail;
