import React from "react";
import BlogCard from "../components/BlogCard";
import scholar1 from "../assets/scholarship1.png";
import { useLocation } from "react-router-dom";

const BlogDetail = () => {
  const location=useLocation();
  const blogDetails = location.state;
  console.log(blogDetails,'location.state');

  return (
    <div className="container py-4 course_container">
       <div className="py-5"></div>
      <div className="d-flex  justify-content-between  inner_course mt-0">
        <div className="row">
          <div className="col-md-9">
          <BlogCard blogDetails={blogDetails}/>
          </div>
          <div className="col-md-3">
          <div className="right_scholar ">
          <div className="s_img_card text-center">
            <p className="mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>Look at all the courses at University name</p>
            <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
              Explore All Courses
            </button>
            <p className="my-2" style={{fontFamily:"Gilroy-Bold"}}>OR</p>
            <p
              
              style={{ color: "#ff5573", cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}
            >
              Chat with Our Advisor
            </p>
          </div>
          <div className="s_img_card text-center">
            <img src={scholar1} alt="" />
            <p className="mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>
              Let’s look at the scholarships available for you
            </p>
            <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
              Explore All Scholarship
            </button>
            <p className="my-2" style={{fontFamily:"Gilroy-Bold"}}>OR</p>
            <p
             
              style={{ color: "#ff5573", cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}
            >
              Chat with Our Advisor
            </p>
          </div>
        </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default BlogDetail;
