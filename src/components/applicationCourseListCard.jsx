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
import { useNavigate } from "react-router-dom";

const CourseListCard = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
const navigate=useNavigate();
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
      <div className="d-flex align-items-center gap-5 mt-2 flex-wrap">
    <div>
        <p style={{color:"#575656",fontFamily:"Gilroy-Regular"}}><span></span> <img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={walletImage}
        />Fees</p>
        <p className="font-weight-bold" style={{color:"#FF6477", fontFamily: "Gilroy-SemiBold"}}><FaRupeeSign/> {course?.uniqueCourseInfo?.fee || '--'} / year</p>
    </div>
    <div>
        <p style={{color:"#575656",fontFamily:"Gilroy-Regular"}}><img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={time}
        />Duration</p>
        <p className="font-weight-bold" style={{color:"#FF6477", fontFamily: "Gilroy-SemiBold"}}>{course?.uniqueCourseInfo?.duration || '--'} years</p>
    </div>
    <div>
        <p style={{color:"#575656",fontFamily:"Gilroy-Regular"}}><img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={walletImage}
        />Application Fee</p>
        <p className="font-weight-bold" style={{color:"#FF6477", fontFamily: "Gilroy-SemiBold"}}><FaRupeeSign/> {course?.uniqueCourseInfo?.applicationFee || '--'}</p>
    </div>
    <div className="ml-auto"> {/* Use ml-auto to push the button to the right */}
    <button
            style={{
              fontFamily: "Gilroy-SemiBold",
              color: "#FF6477",
              padding: "7px",
              borderRadius: "8px",
              border: "1px solid #FF6477",
              background: "#fff",
            }}
            onClick={() => navigate('/course-details', { state: course })}
            >
            {"View Details >>"}
          </button>
    </div>
</div>

        <p className="Gilroy-Medium mt-3">Success Prediction</p>
        <div className="d-flex mt-2 flex-wrap">
    <div>
    </div>
    <div>
        <p style={{color:"#575656", fontFamily:"Gilroy-Regular"}}>Sep 2025</p>
        <p style={{color:"#FF6477", fontFamily: "Gilroy-Regular"}}>
            <span className="badge pt-2 pb-2" style={{width:"105px", backgroundColor: '#38DA494D', color: '#2BC93C', fontFamily: 'Gilroy-Regular' }}>High</span>
        </p>
    </div>
    <div className="ml-5">
        <p style={{color:"#575656", fontFamily:"Gilroy-Regular"}}>Sep 2025</p>
        <p style={{color:"#FF6477", fontFamily: "Gilroy-Regular"}}>
            <span className="badge pt-2 pb-2" style={{width:"105px", backgroundColor: '#CDC1F9', color: '#5932EA', fontFamily: 'Gilroy-Regular' }}>High</span>
        </p>
    </div>
    <div className="ml-5">
        <p style={{color:"#575656", fontFamily:"Gilroy-Regular"}}>Sep 2025</p>
        <p style={{color:"#FF6477", fontFamily: "Gilroy-Regular"}}>
            <span className="badge pt-2 pb-2" style={{width:"105px", backgroundColor: '#F6D2BB', color: '#E57E38', fontFamily: 'Gilroy-Regular' }}>High</span>
        </p>
    </div>
    <div className="ml-auto"> {/* Use ml-auto to push the button to the right */}
        <button className="btn btn-primary text-white text-bold" style={{fontFamily: "Gilroy-Medium"}} onClick={handleCreateApplication}>Create application &gt;&gt;</button>
    </div>
</div>

    </div>
  );
};

export default CourseListCard;
