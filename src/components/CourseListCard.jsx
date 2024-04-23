import React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };



const CourseListCard = ({ course, onToggleSelection, isSelected }) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleToggle = () => {
    onToggleSelection(course);
  };

  return (
    <div className="course_card ">
      <div className="inner_card">
        <div>
          <h5 className="fw-semibold">{course?.courseName||'--'}</h5>
          <p>{course?.universityName||'--'}</p>
          <p>{course?.overview||'--'}</p>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span>Compare</span>
            <Switch {...label} checked={isSelected} onChange={handleToggle} />
          </div>
         
        </div>
      </div>
      <div className="course_head ">
        <h6 className="p-0 m-0">Level : {course?.level||'--'}</h6>
      </div>
      <div className="course_head">
        <h6 className="p-0 m-0">{course?.requirements||'--'}</h6>
      </div>
      <div className="d-flex  align-items-center gap-5 mt-4 flex-wrap">
        <div>
          <p className="fw-bold">Fees</p>
          <p className="">$ {course?.uniqueCourseInfo?.fee||'--'} / year</p>
        </div>
        <div>
          <p className="fw-bold ">Duration</p>
          <p className="">{course?.uniqueCourseInfo?.duration||'--'} years</p>
        </div>
        <div>
          <p className="fw-bold ">Application Fee</p>
          <p>$ {course?.uniqueCourseInfo?.applicationFee||'--'}</p>
        </div>
      </div>
   
    </div>
  );
};
export default CourseListCard;
