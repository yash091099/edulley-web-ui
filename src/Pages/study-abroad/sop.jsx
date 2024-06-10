import React from "react";
import scholar1 from "../../assets/scholarship1.png";
import list from "../../assets/list.svg";
import cherons from "../../assets/chevrons-right.png";
import SOPCard from "./sopcard";

const SOP = () => {
  return (
    <>
      <div className="container-fluid sop_container">
        <div className="ielts_content container">
          <h1 style={{color:"#fff",fontFamily:"Gilroy-Bold"}} >Statement of Purpose</h1>
          <h2 style={{color:"#fff",fontFamily:"Gilroy-Medium"}}>All you need to know!</h2>
         <button className="explore-button mt-3 bg-black pull-right" style={{fontFamily:"Gilroy-Medium"}} onClick={() => window.open('https://tripurapolice.gov.in/gomati/sites/default/files/uploaded-file/Sample%20Memo%20at%20Spot.pdf', '_blank')}>
            Download SOP <img src={cherons} alt="Home" />
          </button>
        </div>
      </div>
      <div className="container py-4 course_container">
        <h3 className="mb-3" style={{fontFamily:"Gilroy-Bold"}}>Statement of Purpose</h3> 
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
                    <img  style={{width:"2rem",height:"2rem"}} src={list} alt="" />
                    <h4 className="text-pink  mb-0 " style={{fontFamily:"Gilroy-Bold"}}>
                      Table of Contents
                    </h4>
                  </div>
                  <ul>
                    <li className="text-pink" style={{fontFamily:"Gilroy-Medium"}}>What is SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Why is SOP important</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>SOP Format</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Hoe to write SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>What do college look for in an SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Tips for writing SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Common mistakes to avoid in SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Importance of SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Word limit in SOP</li>
                    <li style={{fontFamily:"Gilroy-Medium"}}>Samples for SOP</li>
                 
                  </ul>
                </div>
                <div className="s_img_card py-3">
                  <div className="d-flex align-items-center gap-3">
                    <img  style={{width:"2rem",height:"2rem"}}  src={list} alt="" />
                    <h4 className="text-pink  mb-0 " style={{fontFamily:"Gilroy-Bold"}}>
                      Sample of SOP
                    </h4>
                  </div>
                  <ul>
                    <li className="text-green" style={{fontFamily:"Gilroy-Medium"}}>Sample SOP for MBA</li>
                    <li className="text-green" style={{fontFamily:"Gilroy-Medium"}}>Sample SOP for MS</li>
                    <li className="text-green" style={{fontFamily:"Gilroy-Medium"}}>Sample SOP for Bachelors</li>
                    <li className="text-green" style={{fontFamily:"Gilroy-Medium"}}>Sample SOP for PhD</li>
                    <li className="text-green" style={{fontFamily:"Gilroy-Medium"}}>Sample SOP for other courses</li>
                  
                  </ul>
                </div>
                <div className="s_img_card side-bar-img text-center">
                  <img src={scholar1} alt="" />
                  <p className="mt-2" style={{fontFamily:"Gilroy-Bold"}}>
                    Let’s look at the scholarships available for you
                  </p>
                  <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                    Explore All Scholarship
                  </button>
                  <p className="fw-bold my-2" style={{fontFamily:"Gilroy-Bold"}}>OR</p>
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
    </>
  );
};

export default SOP;
