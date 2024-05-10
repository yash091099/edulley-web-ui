import React from "react";
import instituteImage from "../assets/institution-detail.png";
import award from "../assets/award.svg";
import { useLocation } from "react-router-dom";
import { FaAward } from "react-icons/fa";
import scholar1 from "../assets/scholarship1.png";

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
        <div className="container" style={{ maxWidth: '82vw', marginTop: '10vw' }}>
          <h1>{location.state?.universityDetails?.universityName}</h1>
          <h3>{location.state?.universityDetails?.city}, {location.state?.universityDetails?.country}</h3>
          <button onClick={() => { if (location.state?.universityDetails?.brochure) window.open(location.state?.universityDetails?.brochure, '_blank') }} className="explore-button mt-3 fw-bold pull-right mt-5">
            Download Brochure
          </button>
        </div>
      </div>
      <div className="row mr-0 ml-0" >
        <div className="col-md-9">
          <div className="container py-5">
            <h2 className="mt-3 fw-semibold">Overview</h2>
            <p>
              {location.state?.universityDetails?.overview}
            </p>
            <h2 className="mt-3 fw-semibold">Admission Requirements</h2>
            <p>{location.state?.universityDetails?.admissionReq}</p>

            <h2 className="mt-5 fw-semibold ">University Stats</h2>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap award_imgs">

              <div className="card text-center d-flex flex-column justify-content-center align-items-center p-3"
                style={{ width: '236px', height: '256px', borderRadius: '16px', backgroundColor: '#FFF', boxShadow: '0 4px 8px rgba(255, 100, 119, 0.5)' }}>
                <div className="icon mb-2" style={{ width: '54px', height: '54px', paddingTop: '4.5px' }}>
                  <FaAward size="100%" color="#FF6477" />
                </div>
                <div className="number mb-2" style={{ fontSize: '40px', lineHeight: '48px', color: '#FF6477' }}>
                  {location.state?.universityDetails?.universityStats?.studentSatisfactionRate || 0}
                </div>
                <div className="title" style={{ fontSize: '18px', lineHeight: '22px', color: '#FF6477' }}>
                  Student Satisfaction Rate
                </div>
              </div>
              <div className="card text-center d-flex flex-column justify-content-center align-items-center p-3"
                style={{ width: '236px', height: '256px', borderRadius: '16px', backgroundColor: '#FFF', boxShadow: '0 4px 8px rgba(255, 100, 119, 0.5)' }}>
                <div className="icon mb-2" style={{ width: '54px', height: '54px', paddingTop: '4.5px' }}>
                  <FaAward size="100%" color="#FF6477" />
                </div>
                <div className="number mb-2" style={{ fontSize: '40px', lineHeight: '48px', color: '#FF6477' }}>
                  {location.state?.universityDetails?.universityStats?.studentsPerStaff || 0}
                </div>
                <div className="title" style={{ fontSize: '18px', lineHeight: '22px', color: '#FF6477' }}>
                  No. of Full-Time Students per Staff
                </div>
              </div>
              <div className="card text-center d-flex flex-column justify-content-center align-items-center p-3"
                style={{ width: '236px', height: '256px', borderRadius: '16px', backgroundColor: '#FFF', boxShadow: '0 4px 8px rgba(255, 100, 119, 0.5)' }}>
                <div className="icon mb-2" style={{ width: '54px', height: '54px', paddingTop: '4.5px' }}>
                  <FaAward size="100%" color="#FF6477" />
                </div>
                <div className="number mb-2" style={{ fontSize: '40px', lineHeight: '48px', color: '#FF6477' }}>
                  {location.state?.universityDetails?.universityStats?.internationalStudentPercentage || 0}%
                </div>
                <div className="title" style={{ fontSize: '18px', lineHeight: '22px', color: '#FF6477' }}>
                  Percentage of International Students
                </div>
              </div>
              <div className="card text-center d-flex flex-column justify-content-center align-items-center p-3"
                style={{ width: '236px', height: '256px', borderRadius: '16px', backgroundColor: '#FFF', boxShadow: '0 4px 8px rgba(255, 100, 119, 0.5)' }}>
                <div className="icon mb-2" style={{ width: '54px', height: '54px', paddingTop: '4.5px' }}>
                  <FaAward size="100%" color="#FF6477" />
                </div>
                <div className="number mb-2" style={{ fontSize: '40px', lineHeight: '48px', color: '#FF6477' }}>
                  {location.state?.universityDetails?.universityStats?.fulltimeStudents || 0}
                </div>
                <div className="title" style={{ fontSize: '18px', lineHeight: '22px', color: '#FF6477' }}>
                  Total Full-Time Students
                </div>
              </div>


            </div>
            <h2 className="mt-5 fw-semibold  mb-4">
              What's unique about the university?
            </h2>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap award_imgs">
              <img className="shadow p-2" style={{ width: "150px", height: "150px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image1 || award} alt="" />
              <img className="shadow p-2" style={{ width: "150px", height: "150px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image2 || award} alt="" />
              <img className="shadow p-2" style={{ width: "150px", height: "150px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image3 || award} alt="" />
              <img className="shadow p-2" style={{ width: "150px", height: "150px" }} src={location?.state?.universityDetails?.uniqueUniversityInfo?.image4 || award} alt="" />
            </div>
            {/* <h2 className="mt-5 fw-bold text-center text-pink ">Courses</h2>
        <div className="c_category mt-3 ">
          <button className="detail_button  fw-semibold">
            Undergraduate{" "}
          </button>
          <button className="detail_button  fw-semibold">
            Postgraduate{" "}
          </button>
          <button className="detail_button  fw-semibold">Doctorate </button>
        </div> */}
          </div>

        </div>
        <div className="col-md-3 mt-5">
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
    </div>
  );
};

export default InstitutionDetail;
