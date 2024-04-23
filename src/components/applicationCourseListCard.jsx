import React, { useState } from "react";
import {toast} from "react-hot-toast";
import CustomLoader from "../components/loader";
import { applyApplication } from "../Services/dashboard";

const CourseListCard = ({ course}) => {
const [loading, setLoading]=useState(false);

const handleCreateApplication = async () => {
  console.log('Creating application...');
  const payload = { courseId: course?._id };
  setLoading(true);

  try {
    const response = await applyApplication(payload);
    if (response.error) {
      toast.error(response.message); // Show error message from the server or a default message
    } else {
      toast.success('Applied successfully');
    }
  } catch (error) {
    // This block will handle any errors that are not caught in applyApplication function
    toast.error(error?.response?.data?.message || 'Application process failed.');
    console.error('Failed to process application:', error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="course_card ">
      {loading&&<CustomLoader/>}
      <div className="inner_card">
        <div>
          <h5 className="fw-semibold">{course?.courseName||'--'}</h5>
          <p>{course?.universityName||'--'}</p>
          <p>{course?.overview||'--'}</p>
        </div>
        <div>
        
         
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
        <div>
            <button className="btn btn-primary text-white text-bold" onClick={handleCreateApplication} >Create Application</button>
        </div>
      </div>
   
    </div>
  );
};
export default CourseListCard;
