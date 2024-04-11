import React from "react";
import blog from "../assets/blog.png";
import { CalendarMonth, CalendarMonthOutlined, CalendarViewWeek } from "@mui/icons-material";
import { Link } from "react-router-dom";
import scholar1 from "../assets/scholarship1.png";
import blog_icon from "../assets/blog_icon.png";

const Blog = () => {
  return (
    <div className="container py-4 course_container">
      <div className="row justify-content-between inner_course mt-0">
        <div className="row">
          <div>
           
        <h1 className="font-gilroy fw-bold "> <img src={blog_icon} className="img-fluid" alt="" /><span className="mt-1 ml-2">Blogs</span> </h1>
          </div>
          <div>
              
          </div>
        </div>
      <div className="mb-3">
        <p className="what-we-can-do-description">
          {" "}
          Transforming the landscape of Education with revolutionary technology
        </p>
        <small style={{color:"grey"}}><CalendarMonthOutlined /> 12, June 2023</small>
      </div>
        <div className="col-md-8">
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div className="col-md-4" key={index}>
                <Link to="/blog-details">
                  <div className="countries cursor-pointer uni_card">
                    <img src={blog} alt="University" className="university-image" />
                    <div className="p-3">
                      <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: "13px" }}>
                        <CalendarMonth /> 12 June 2023
                      </p>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facere.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div className="col-md-4" key={index}>
                <Link to="/blog-details">
                  <div className="countries cursor-pointer uni_card">
                    <img src={blog} alt="University" className="university-image" />
                    <div className="p-3">
                      <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: "13px" }}>
                        <CalendarMonth /> 12 June 2023
                      </p>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facere.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div className="col-md-4" key={index}>
                <Link to="/blog-details">
                  <div className="countries cursor-pointer uni_card">
                    <img src={blog} alt="University" className="university-image" />
                    <div className="p-3">
                      <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: "13px" }}>
                        <CalendarMonth /> 12 June 2023
                      </p>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facere.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 right_scholar">
          <div className="s_img_card text-center">
            <p className="mt-2">Look at all the courses at University name</p>
            <button className="explore-button py-2 fw-light mt-2">
              Explore All Courses
            </button>
            <p className="fw-bold my-2">OR</p>
            <p className="fw-bold" style={{ color: "#ff5573", cursor: "pointer" }}>
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
            <p className="fw-bold" style={{ color: "#ff5573", cursor: "pointer" }}>
              Chat with Our Advisor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
