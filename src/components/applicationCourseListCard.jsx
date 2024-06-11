import React, { useEffect, useState } from "react";
import {toast} from "react-hot-toast";
import CustomLoader from "../components/loader";
import { applyApplication, getUniversities } from "../Services/dashboard";
import { Tooltip } from 'reactstrap';
import { Money, Timer, Wallet } from "@mui/icons-material";
import { FaRupeeSign } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
import time from "../assets/ion_time-outline.png";
import walletImage from "../assets/solar_wallet-linear.png";
import ellipse from "../assets/Ellipse.png";
import { useNavigate } from "react-router-dom";

const CourseListCard = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
const navigate=useNavigate();
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const [universities, setUniversities] = useState([]);
  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      if (!res?.data?.error) {
        setUniversities(res.data.data);
      } else {
        toast.error("Failed to load universities data.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching universities.");
    }
  };
  useEffect(() => {
    fetchUniversities();
  }, [])
  const handleCreateApplication = async () => {
    const payload = { courseId: course?._id };
    setLoading(true);

    try {
      const response = await applyApplication(payload);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Applied successfully');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Application process failed.');
      console.error('Failed to process application:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="course_card card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', marginBottom: "8px"}}>
      {loading && <CustomLoader />}
      <div className="inner_card">
        <div id={'Tooltip-' + course?._id}>
          <h5 style={{ fontFamily: "Gilroy-Bold" }}>{course?.courseName || '--'}</h5>
          <p style={{fontFamily:"Gilroy-Medium"}}><img style={{ height: "1rem", width: "1rem", objectFit: "cover" , marginRight:'5px'}} alt="" src={ellipse} />{course?.universityName || '--'}</p>

          <p style={{ marginBottom: "0.25rem" }}>
          <img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={map}
          />
          {universities?.find((uni) => uni?.universityName?.trim()?.toLowerCase() === course?.universityName?.trim()?.toLowerCase())?.country || "--"},{universities?.find((uni) => uni?.universityName?.trim()?.toLowerCase() === course?.universityName?.trim()?.toLowerCase())?.city || '--'}
        </p>        </div>
        
        <div></div>
      </div>
      <div className="row" style={{ marginBottom: "0.5rem" }}>
        <div className="course_head_new">
          <h6 className="p-0 m-0">
            Level : {course?.level?.slice(0, 50) || "--"}
          </h6>
        </div>
        <div className="course_head_new ml-3">
          <h6 className="p-0 m-0">
            Rank : {universities?.find((uni) => uni?.universityName?.trim()?.toLowerCase() === course?.universityName?.trim()?.toLowerCase())?.ranking?.rank || "--"}
          </h6>
        </div>
      </div>
      <div className="d-flex align-items-center gap-5 mt-2 flex-wrap">
    <div>
        <p style={{color:"#575656",fontFamily:"Gilroy-Medium"}}><span></span> <img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={walletImage}
        />Fees</p>
        <p className="font-weight-bold" style={{color:"#FF5573", fontFamily: "Gilroy-Medium"}}><FaRupeeSign/> {course?.uniqueCourseInfo?.fee || '--'} / year</p>
    </div>
    <div>
        <p style={{color:"#575656",fontFamily:"Gilroy-Medium"}}><img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={time}
        />Duration</p>
        <p className="font-weight-bold" style={{color:"#FF5573", fontFamily: "Gilroy-Medium"}}>{course?.uniqueCourseInfo?.duration || '--'} years</p>
    </div>
    <div>
        <p style={{color:"#575656",fontFamily:"Gilroy-Medium"}}><img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={walletImage}
        />Application Fee</p>
        <p className="font-weight-bold" style={{color:"#FF5573", fontFamily: "Gilroy-Medium"}}><FaRupeeSign/> {course?.uniqueCourseInfo?.applicationFee || '--'}</p>
    </div>
    <div className="ml-auto"> {/* Use ml-auto to push the button to the right */}
      
    <button
            style={{
              fontFamily: "Gilroy-Medium",
              color: "#FF5573",
              padding: "7px",
              borderRadius: "8px",
              border: "1px solid #FF5573",
              background: "#fff",
            }}
            onClick={() => navigate('/course-details', { state: course })}
            >
            {"View Details >>"}
          </button>
    </div>
    <div className="ml-auto"> {/* Use ml-auto to push the button to the right */}
        <button className="btn btn-primary text-white text-bold" style={{fontFamily: "Gilroy-Medium"}} onClick={handleCreateApplication}>Add Course &gt;&gt;</button>
    </div>
</div>

        {/* <p className="Gilroy-Medium mt-3">Success Prediction</p> */}

    </div>
  );
};

export default CourseListCard;
