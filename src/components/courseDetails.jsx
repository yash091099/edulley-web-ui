import React, { useState } from "react";
import instituteImage from "../assets/institution-detail.png";
import { useLocation, useNavigate } from "react-router-dom";
import scholar1 from "../assets/scholarship1.png";
import time from "../assets/ion_time-outline.png";
import walletImage from "../assets/solar_wallet-linear.png";
import { toast } from "react-hot-toast";
import CustomLoader from "./loader";
import { applyApplication } from "../Services/dashboard";
import { FaRupeeSign } from "react-icons/fa";
const CourseDetails = () =>{
    const [loading, setLoading] = useState(false);
  
  const location = useLocation();
  console.log(location.state, 'location.state');
  const backgroundImageUrl = location.state?.bannerImage || instituteImage;
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
  const navigate=useNavigate()
  const handleCreateApplication = async () => {
    const payload = { courseId: location.state?._id };
    setLoading(true);

    try {
      const response = await applyApplication(payload);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Applied successfully");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Application process failed."
      );
      console.error("Failed to process application:", error);
    } finally {
      setLoading(false);
      navigate('/courses-list')

    }
  };

  return (
    <div>
      {loading && <CustomLoader />}
      <div className="container-fluid insti_container" style={backgroundStyle}>
        <div className="container" style={{ maxWidth: '82vw', marginTop: '400px' }}>
          <div className="row align-items-center justify-content-between">
            <div className="col d-flex align-items-center">
              <div className="university-logo-circle mr-3">
                <img src={location.state?.courseLogo} alt="University Logo" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
              </div>
              <div>
                <h1 style={{ fontFamily: 'Gilroy-Bold' }}>{location.state?.courseName}</h1>
                <h3 style={{ fontFamily: 'Gilroy-Medium' }}>{location.state?.universityName}</h3>
              </div>
            </div>
            <div className="col-auto">
              <button style={{ fontFamily: 'Gilroy-Medium' }} onClick={() => handleCreateApplication()} className="explore-button mt-3 fw-bold">
                Apply Application {'>>'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mr-0 ml-0">
        <div className="col-md-9">
          <div className="container py-4 mt-3" style={{ background: "#F7F7F7", borderRadius: "10px", marginBottom: "20px" }}>
            <h2 className="mt-3" style={{ fontFamily: "Gilroy-SemiBold" }}>Overview</h2>
            <p style={{ fontFamily: "Gilroy-Medium" }}>
              {location.state?.overview}
            </p>
          </div>
          <div className="container py-4" style={{ background: "#F7F7F7", borderRadius: "10px", marginBottom: "20px" }}>
            <h2 className="mt-3" style={{ fontFamily: "Gilroy-SemiBold" }}>Requirements</h2>
            <p style={{ fontFamily: "Gilroy-Medium" }}>{location.state?.requirements}</p>
          </div>
          <div className="container py-4 mb-3" style={{ background: "#F7F7F7", borderRadius: "10px" }}>
            <h2 className="mt-5" style={{ fontFamily: "Gilroy-SemiBold" }}>Modules</h2>
            <p style={{ fontFamily: "Gilroy-Medium" }}>{location.state?.modules}</p>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <div className="right_scholar">
          <div className="s_img_card2 text-center mb-3" style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#FFF" }}>
  <div className="d-flex justify-content-start align-items-center mb-3">
    <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "10px", filter: "invert(32%) sepia(61%) saturate(3713%) hue-rotate(329deg) brightness(102%) contrast(101%)" }} alt="" src={walletImage} />
    <p style={{ color: "#575656", fontFamily: "Gilroy-Regular", margin: 0 }}>Fees</p>
    <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginLeft: "auto" }}>
      <FaRupeeSign /> {location?.state?.uniqueCourseInfo?.fee || "--"} / year
    </p>
  </div>
  <div className="d-flex justify-content-start align-items-center mb-3">
    <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "10px", filter: "invert(32%) sepia(61%) saturate(3713%) hue-rotate(329deg) brightness(102%) contrast(101%)" }} alt="" src={time} />
    <p style={{ color: "#575656", fontFamily: "Gilroy-Regular", margin: 0 }}>Duration</p>
    <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginLeft: "auto" }}>
      {location?.state?.uniqueCourseInfo?.duration || "--"} years
    </p>
  </div>
  <div className="d-flex justify-content-start align-items-center">
    <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "10px", filter: "invert(32%) sepia(61%) saturate(3713%) hue-rotate(329deg) brightness(102%) contrast(101%)" }} alt="" src={time} />
    <p style={{ color: "#575656", fontFamily: "Gilroy-Regular", margin: 0 }}>Application Deadline</p>
    <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginLeft: "auto" }}>
      {location?.state?.uniqueCourseInfo?.applicationDeadline?.split('T')[0] || "--"}
    </p>
  </div>
</div>
<div className="s_img_card2 text-center mb-3" style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#FFF" }}>
  <div className="d-flex justify-content-start align-items-center mb-3">
    <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "10px", filter: "invert(32%) sepia(61%) saturate(3713%) hue-rotate(329deg) brightness(102%) contrast(101%)" }} alt="" src={time} />
    <p style={{ color: "#575656", fontFamily: "Gilroy-Regular", margin: 0 }}>Application Fees</p>
    <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginLeft: "auto" }}>
      <FaRupeeSign /> {location?.state?.uniqueCourseInfo?.applicationFee || "--"}
    </p>
  </div>
  <div className="d-flex justify-content-start align-items-center mb-3">
    <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "10px", filter: "invert(32%) sepia(61%) saturate(3713%) hue-rotate(329deg) brightness(102%) contrast(101%)" }} alt="" src={walletImage} />
    <p style={{ color: "#575656", fontFamily: "Gilroy-Regular", margin: 0 }}>Upcoming Intakes</p>
    <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginLeft: "auto" }}>
      {location?.state?.uniqueCourseInfo?.upcomingIntake || "--"}
    </p>
  </div>
  <div className="d-flex justify-content-start align-items-center">
    <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "10px", filter: "invert(32%) sepia(61%) saturate(3713%) hue-rotate(329deg) brightness(102%) contrast(101%)" }} alt="" src={time} />
    <p style={{ color: "#575656", fontFamily: "Gilroy-Regular", margin: 0 }}>Mode of Study</p>
    <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginLeft: "auto" }}>
      {location?.state?.uniqueCourseInfo?.studyMode || "--"}
    </p>
  </div>
</div>


            <div className="s_img_card text-center mb-3">
              <p className="mt-2" style={{ fontFamily: "Gilroy-SemiBold" }}>
                Let’s look at the scholarships available for you
              </p>
              <img src={scholar1} alt="" />
              <p className="mt-2" style={{ fontFamily: "Gilroy-Bold" }}>
                Let’s look at the scholarships available for you
              </p>
              <button className="explore-button py-2 fw-light mt-2" style={{ fontFamily: "Gilroy-Medium" }}>
                Explore All Scholarship
              </button>
            </div>
            <div className="s_img_card text-center mb-3">
              <p className="mt-2" style={{ fontFamily: "Gilroy-SemiBold" }}>Look at all the courses at {location.state?.universityName}</p>
              <button className="explore-button py-2 fw-light mt-2" style={{ fontFamily: "Gilroy-Medium" }}>
                Explore All Courses
              </button>
              <p className="my-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</p>
              <p className="" style={{ color: "#ff5573", cursor: "pointer", fontFamily: "Gilroy-Medium" }}>
                Chat with Our Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default CourseDetails;
