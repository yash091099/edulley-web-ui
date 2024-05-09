import React, { useState } from "react";
import {toast} from "react-hot-toast";
import CustomLoader from "../components/loader";
import { applyApplication } from "../Services/dashboard";
import { Tooltip } from 'reactstrap';
import { Money, Timer, Wallet } from "@mui/icons-material";
import { FaRupeeSign } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
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
    <div className="course_card card" style={{height: '400px', overflow: 'hidden',marginBottom:"8px"}}>
      {loading && <CustomLoader />}
      <div className="inner_card">
        <div id={'Tooltip-' + course?._id}>
          <h5 className="fw-semibold">{course?.courseName || '--'}</h5>
          <p><img style={{ height: "2rem", width: "2rem", objectFit: "cover" , marginRight:'5px'}} alt="" src={map} />{course?.universityName || '--'}</p>
          <p><img style={{ height: "2rem", width: "2rem", objectFit: "cover", marginRight:'5px' }} alt="" src={book} />{course?.overview?.slice(0, 400) || '--'}</p>
        </div>
        <Tooltip placement="top" isOpen={tooltipOpen} target={'Tooltip-' + course?._id} toggle={toggle}>
          {course?.overview || '--'}
        </Tooltip>
        <div></div>
      </div>
      <div className="course_head_new">
        <h6 className="p-0 m-0">Level : {course?.level?.slice(0, 200) ||'--'}</h6>
      </div>
      <div className="course_head_new" style={{marginBottom:"10px"}}>
        <h6 className="p-0 m-0">{course?.requirements?.slice(0, 300) ||'--'}</h6>
      </div>
      <div className="d-flex  align-items-center gap-5 mt-4 flex-wrap" style={{position: 'absolute', bottom: '12px'}}>
        <div>
          <p className="fw-bold"  style={{color:"#575656"}}><span><Wallet/></span>Fees</p>
          <p  style={{color:"#FF6477",fontWeight:"800"}}><FaRupeeSign/> {course?.uniqueCourseInfo?.fee||'--'} / year</p>
        </div>
        <div>
          <p className="fw-bold "  style={{color:"#575656"}}><Timer/>Duration</p>
          <p  style={{color:"#FF6477",fontWeight:"800"}}>{course?.uniqueCourseInfo?.duration||'--'} years</p>
        </div>
        <div>
          <p className="fw-bold "  style={{color:"#575656"}}><FaRupeeSign/>Application Fee</p>
          <p style={{color:"#FF6477",fontWeight:"800"}} ><FaRupeeSign/> {course?.uniqueCourseInfo?.applicationFee||'--'}</p>
        </div>
        <div >
            <button className="btn btn-primary text-white text-bold" style={{fontWeight:"700"}} onClick={handleCreateApplication}>{'Create Application >>'}</button>
        </div>
      </div>
    </div>
  );
};

export default CourseListCard;
