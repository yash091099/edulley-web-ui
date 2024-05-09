import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Timer, Wallet } from "@mui/icons-material";
import { FaRupeeSign } from "react-icons/fa";
import { Tooltip } from "reactstrap";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
const label = { inputProps: { "aria-label": "Switch demo" } };



const CourseListCard = ({ course, onToggleSelection, isSelected }) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const handleToggle = () => {
    onToggleSelection(course);
  };

  return (
    <div className="course_card card" style={{ height: '400px', overflow: 'hidden', marginBottom: "8px" }}>
     
        <div className="inner_card">
        <div id={'Tooltip-' + course?._id}>
          <h5 className="fw-semibold">{course?.courseName || '--'}</h5>
          <p><img style={{ height: "2rem", width: "2rem", objectFit: "cover", marginRight: '5px' }} alt="" src={map} />{course?.universityName || '--'}</p>
          <p><img style={{ height: "2rem", width: "2rem", objectFit: "cover", marginRight: '5px' }} alt="" src={book} />{course?.overview?.slice(0, 200) || '--'}</p>
        </div>
        <Tooltip placement="top" isOpen={tooltipOpen} target={'Tooltip-' + course?._id} toggle={toggle}>
          {course?.overview || '--'}
        </Tooltip>
        <div>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span>Compare</span>
            <Switch {...label} checked={isSelected} onChange={handleToggle} />
          </div>
         
        </div>
      </div>
      <div className="course_head_new ">
        <h6 className="p-0 m-0">Level : {course?.level||'--'}</h6>
      </div>
      <div className="course_head_new">
        <h6 className="p-0 m-0">{course?.requirements?.slice(0, 200)||'--'}</h6>
      </div>
     
    <div className="d-flex  align-items-center gap-4 mt-4 flex-wrap" style={{ position: 'absolute', bottom: '16px' }}>
        <div>
          <p className="fw-bold" style={{ color: "#575656" }}><span><Wallet /></span>Fees</p>
          <p style={{ color: "#FF6477", fontWeight: "800" }}><FaRupeeSign /> {course?.uniqueCourseInfo?.fee || '--'} / year</p>
        </div>
        <div>
          <p className="fw-bold " style={{ color: "#575656" }}><Timer />Duration</p>
          <p style={{ color: "#FF6477", fontWeight: "800" }}>{course?.uniqueCourseInfo?.duration || '--'} years</p>
        </div>
        <div>
          <p className="fw-bold " style={{ color: "#575656" }}><FaRupeeSign />Application Fee</p>
          <p style={{ color: "#FF6477", fontWeight: "800" }}><FaRupeeSign /> {course?.uniqueCourseInfo?.applicationFee || '--'}</p>
        </div>
      
        <div>
        </div>
      </div>
    </div>
  );
};
export default CourseListCard;
