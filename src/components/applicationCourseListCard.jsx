import React, { useState } from "react";
import {toast} from "react-hot-toast";
import CustomLoader from "../components/loader";
import { applyApplication } from "../Services/dashboard";
import { Tooltip } from 'reactstrap';
import { Money, Timer, Wallet } from "@mui/icons-material";
import { FaRupeeSign } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
import time from "../assets/ion_time-outline.png";
import walletImage from "../assets/solar_wallet-linear.png";
import ellipse from "../assets/Ellipse.png";

const CourseListCard = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

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
          <p style={{fontFamily:"Gilroy-Regular"}}><img style={{ height: "1.5rem", width: "1.5rem", objectFit: "cover" , marginRight:'5px'}} alt="" src={ellipse} />{course?.universityName || '--'}</p>
          <p style={{fontFamily:"Gilroy-Regular"}}><img style={{ height: "1.5rem", width: "1.5rem", objectFit: "cover", marginRight:'5px' }} alt="" src={book} />{course?.overview?.slice(0, 300) || '--'}</p>
        </div>
        <Tooltip placement="top" isOpen={tooltipOpen} target={'Tooltip-' + course?._id} toggle={toggle}>
          {course?.overview || '--'}
        </Tooltip>
        <div></div>
      </div>
      <div className="course_head_new">
        <h6 className="p-0 m-0" style={{fontFamily:"Gilroy-Regular"}}>Level : {course?.level?.slice(0, 200) ||'--'}</h6>
      </div>
      <div className="course_head_new" style={{marginBottom:"10px"}}>
        <h6 className="p-0 m-0" style={{fontFamily:"Gilroy-Regular"}}>Requirements : {course?.requirements?.slice(0, 200) ||'--'}</h6>
      </div>
      <div className="d-flex align-items-center gap-5 mt-4 flex-wrap">
        <div>
          <p className="fw-bold"  style={{color:"#575656",fontFamily:"Gilroy-Regular"}}><span></span>    <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={walletImage}
            />Fees</p>
          <p  style={{color:"#FF6477", fontFamily: "Gilroy-SemiBold"}}><FaRupeeSign/> {course?.uniqueCourseInfo?.fee||'--'} / year</p>
        </div>
        <div>
          <p className="fw-bold "  style={{color:"#575656",fontFamily:"Gilroy-Regular"}}>    <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={time}
            />Duration</p>
          <p  style={{color:"#FF6477", fontFamily: "Gilroy-SemiBold"}}>{course?.uniqueCourseInfo?.duration||'--'} years</p>
        </div>
        <div>
          <p className="fw-bold "  style={{color:"#575656",fontFamily:"Gilroy-Regular"}}>    <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={walletImage}
            />Application Fee</p>
          <p style={{color:"#FF6477", fontFamily: "Gilroy-SemiBold"}} ><FaRupeeSign/> {course?.uniqueCourseInfo?.applicationFee||'--'}</p>
        </div>
        <div >
            <button className="btn btn-primary text-white text-bold" style={{fontFamily: "Gilroy-Medium"}} onClick={handleCreateApplication}>{'Apply Application >>'}</button>
        </div>
      </div>
    </div>
  );
};

export default CourseListCard;
