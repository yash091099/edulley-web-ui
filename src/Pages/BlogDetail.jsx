import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import scholar1 from "../assets/scholarship1.png";
import { useLocation } from "react-router-dom";
import blog_icon from '../assets/blog_icon.png';
import { Search } from "@mui/icons-material";

const BlogDetail = () => {
  const location = useLocation();
  const blogDetails = location.state;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container py-4 course_container">
      <div className="py-5"></div>
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="font-gilroy fw-bold">
              <img src={blog_icon} className="img-fluid" alt="" />
              <span className="mt-1 ml-2" style={{ fontFamily: "Gilroy-Bold" }}>Blogs</span>
            </h1>
          </div>
          <div className="search-filter" style={{ position: "relative" }}>
            <input
              type="text"
              className="form-control"
              placeholder=" Search Blogs"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                fontFamily: "Gilroy-Medium",
                borderRadius: "20px",
                paddingLeft: "2rem"
              }}
            />
            <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}>
              <Search />
            </span>
          </div>
        </div>
        <p className="what-we-can-do-description mb-3" style={{ fontFamily: "Gilroy-Bold" }}>
          Transforming the landscape of Education with revolutionary technology
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-between inner_course mt-0">
        <div className="col-12 col-md-9">
          <BlogCard blogDetails={blogDetails} />
        </div>
        <div className="col-12 col-md-3">
          <div className="right_scholar">
            <div className="s_img_card text-center">
              <p className="mt-2" style={{ fontFamily: "Gilroy-Bold" }}>Look at all the courses at University name</p>
              <button className="explore-button py-2 fw-light mt-2" style={{ fontFamily: "Gilroy-Medium" }}>
                Explore All Courses
              </button>
              <p className="my-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</p>
              <p style={{ color: "#ff5573", cursor: "pointer", fontFamily: "Gilroy-Medium" }}>
                Chat with Our Advisor
              </p>
            </div>
            <div className="s_img_card text-center">
              <img src={scholar1} alt="" />
              <p className="mt-2" style={{ fontFamily: "Gilroy-Bold" }}>
                Let’s look at the scholarships available for you
              </p>
              <button className="explore-button py-2 fw-light mt-2" style={{ fontFamily: "Gilroy-Medium" }}>
                Explore All Scholarship
              </button>
              <p className="my-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</p>
              <p style={{ color: "#ff5573", cursor: "pointer", fontFamily: "Gilroy-Medium" }}>
                Chat with Our Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
