import React from "react";
import instituteImage from "../assets/institution-detail.png";
import studentPerStaf from "../assets/studentPerStaf.png";
import satisfactionRate from "../assets/satisfactionRate.png";
import fullTimeStudents from "../assets/fullTimeStudents.png";
import internationalStudent from "../assets/internationalStudent.png";
import award from "../assets/award.svg";
import { useLocation } from "react-router-dom";
import { FaAward } from "react-icons/fa";
import scholar1 from "../assets/scholarship1.png";
import course_icon from '../assets/course.png';

const InstitutionDetail = () => {
  const location = useLocation();
  console.log(location.state?.universityDetails, 'location.state');
  const backgroundImageUrl = location.state?.universityDetails?.bannerImage || instituteImage;
  const backgroundStyle = {
    width: '100%',
    height: '70vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <div>
          <div className="container-fluid insti_container" style={backgroundStyle}>
      <div className="container" style={{ maxWidth: '82vw', marginTop: '400px' }}>
        <div className="row align-items-center justify-content-between">
          <div className="col d-flex align-items-center">
            <div className="university-logo-circle mr-3">
              <img src={location.state?.universityDetails?.universityLogo} alt="University Logo" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
            </div>
            <div>
              <h1 style={{ fontFamily: 'Gilroy-Bold' }}>{location.state?.universityDetails?.universityName}</h1>
              <h3 style={{ fontFamily: 'Gilroy-Medium' }}>{location.state?.universityDetails?.city}, {location.state?.universityDetails?.country}</h3>
            </div>
          </div>
          <div className="col-auto">
            <button style={{ fontFamily: 'Gilroy-Medium' }} onClick={() => { if (location.state?.universityDetails?.brochure) window.open(location.state?.universityDetails?.brochure, '_blank') }} className="explore-button mt-3 fw-bold">
              Download Brochure {'>>'}
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className="row mr-0 ml-0" >
        <div className="col-md-9">
          <div className="container py-5">
            <h2 className="mt-3" style={{ fontFamily: 'Gilroy-SemiBold' }}>Overview</h2>
            <p style={{ fontFamily: 'Gilroy-Regular' }}>
              {location.state?.universityDetails?.overview}
            </p>
            <h2 className="mt-3 " style={{ fontFamily: 'Gilroy-SemiBold' }}>Admission Requirements</h2>
            <p style={{ fontFamily: 'Gilroy-Regular' }}>{location.state?.universityDetails?.admissionReq}</p>

            <h2 className="mt-5  " style={{ fontFamily: 'Gilroy-SemiBold' }}>University Stats</h2>
            <div className="d-flex gap-3 flex-wrap award_imgs">
  {[
    { logo: studentPerStaf, data: location.state?.universityDetails?.universityStats?.studentSatisfactionRate || 0, text: "No. of Full-Time Students per Staff" },
    { logo: fullTimeStudents, data: (location.state?.universityDetails?.universityStats?.studentsPerStaff || 0)+`+`, text: "No. of Full-Time Students" },
    { logo: internationalStudent, data: (location.state?.universityDetails?.universityStats?.internationalStudentPercentage || 0)+`%`, text: "Percentage of International Students" },
    { logo: satisfactionRate, data:( location.state?.universityDetails?.universityStats?.fulltimeStudents || 0) +`%`, text: "Total Full-Time Students" }
  ].map((item, index) => (
    <div key={index} className="card text-center d-flex flex-column justify-content-center align-items-center p-3"
      style={{ width: '230px', height: '200px', borderRadius: '16px', backgroundColor: '#FFF', boxShadow: '0 4px 8px rgba(255, 100, 119, 0.5)' }}>
      <img src={item.logo} alt="award" style={{ width: '40px', height: '40px' }} className="mb-3" />
      <div  className="number mb-2 font-gilroy-bold" style={{ fontSize: '35px', lineHeight: '48px', color: '#FF6477',fontStyle: 'normal',fontFamily: 'Gilroy-Bold' }}>
        {item.data}
      </div>
      <div className="title" style={{ fontSize: '18px', lineHeight: '22px', color: '#FF6477',fontStyle: 'normal',fontFamily: 'Gilroy-Medium  , borderRadious:"16px"'  }}>
        {item.text}
      </div>
    </div>
  ))}
</div>

            <h2 className="mt-5 mb-4" style={{ fontFamily: 'Gilroy-SemiBold' }}>
              What's unique about the university?
            </h2>
            <div className="d-flex gap-3 flex-wrap award_imgs">
  <img className="shadow p-2" style={{ width: "150px", height: "150px", borderRadius: "16px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image1 || award} alt="" />
  <img className="shadow p-2" style={{ width: "150px", height: "150px", borderRadius: "16px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image2 || award} alt="" />
  <img className="shadow p-2" style={{ width: "150px", height: "150px", borderRadius: "16px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image3 || award} alt="" />
  <img className="shadow p-2" style={{ width: "150px", height: "150px", borderRadius: "16px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image4 || award} alt="" />
</div>

<h1 className="font-gilroy fw-bold course-head mt-5">
                            <img src={course_icon} className="img-fluid" alt="" />
                            <span className="mt-1 ml-2 font-gilroy bold" style={{fontFamily:"Gilroy-Bold"}}>Courses</span>
                        </h1>        <div className=" mt-3 gap-3 flex-wrap ">
          <button className="detail_button  " style={{fontFamily:"Gilroy-SemiBold"}}>
            Undergraduate{" "}
          </button>
          <button className="detail_button" style={{fontFamily:"Gilroy-SemiBold"}}>
            Postgraduate{" "}
          </button>
          <button className="detail_button " style={{fontFamily:"Gilroy-SemiBold"}}>Doctorate </button>
        </div>
          </div>

        </div>
        <div className="col-md-3 mt-5">
          <div className="right_scholar ">
            <div className="s_img_card text-center">
              <p className="mt-2" >Look at all the courses at University name</p>
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
    </div>
  );
};

export default InstitutionDetail;
