import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import CustomLoader from "../components/loader";
import { applyApplication, getUniversities } from "../Services/dashboard";
import { FaRupeeSign } from "react-icons/fa";
import map from "../assets/mappin.svg";
import time from "../assets/ion_time-outline.png";
import walletImage from "../assets/solar_wallet-linear.png";
import ellipse from "../assets/Ellipse.png";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

const CourseListCard = ({ course, onToggleSelection, isSelected }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
        toast.success("Applied successfully");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Application process failed."
      );
      console.error("Failed to process application:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="course_card card mb-2">
      {loading && <CustomLoader />}
      <div className="inner_card_2">
        <div className="row">
          <div className="col-md-8">
            <h5 style={{ fontFamily: "Gilroy-Bold", marginBottom: "0.5rem" }}>
              {course?.courseName || "--"}
            </h5>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <span style={{ fontFamily: 'Gilroy-Medium', marginBottom: "0.5rem" }}>Compare</span>
            <Switch
              checked={isSelected}
              onChange={() => onToggleSelection(course._id)}
              color="primary"
              sx={{ "& .MuiSwitch-thumb": { backgroundColor: "#00949B" } }}
            />
          </div>
        </div>
        <div className="row">
        <div className="col-md-8" style={{ marginBottom: "0.5rem" }}>
        <p style={{ marginBottom: "0.25rem" }}>
          <img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={ellipse}
          />
          {course?.universityName || "--"}
        </p>
        <p style={{ marginBottom: "0.25rem" }}>
          <img
            style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
            alt=""
            src={map}
          />
          {universities?.find((uni) => uni?.universityName?.trim()?.toLowerCase() === course?.universityName?.trim()?.toLowerCase())?.country || "--"},{universities?.find((uni) => uni?.universityName?.trim()?.toLowerCase() === course?.universityName?.trim()?.toLowerCase())?.city || '--'}
        </p>
      </div>
        
        <div className="col-md-4 d-flex justify-content-end align-items-center" style={{ marginBottom: "0.5rem" }}>
          <span style={{ fontFamily: 'Gilroy-Medium', marginRight: '10px' }}>Shortlist</span>
          <Switch
            checked={false}
            color="primary"
            sx={{ "& .MuiSwitch-thumb": { backgroundColor: "#00949B" } }}
          />
        </div>
      </div>
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
      <div className="d-flex align-items-center gap-3 flex-wrap" style={{ marginBottom: "0.5rem" }}>
        <div>
          <p style={{ color: "#575656", fontFamily: "Gilroy-Medium", marginBottom: "0.25rem" }}>
            <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={walletImage}
            />
            Fees
          </p>
          <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginBottom: "0.25rem" }}>
            <FaRupeeSign /> {course?.uniqueCourseInfo?.fee || "--"} / year
          </p>
        </div>
        <div>
          <p style={{ color: "#575656", fontFamily: "Gilroy-Medium", marginBottom: "0.25rem" }}>
            <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={time}
            />
            Duration
          </p>
          <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginBottom: "0.25rem" }}>
            {course?.uniqueCourseInfo?.duration || "--"} years
          </p>
        </div>
        <div>
          <p style={{ color: "#575656", fontFamily: "Gilroy-Medium", marginBottom: "0.25rem" }}>
            <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={time}
            />
            Application Fee
          </p>
          <p style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginBottom: "0.25rem" }}>
            <FaRupeeSign /> {course?.uniqueCourseInfo?.applicationFee || "--"}
          </p>
        </div>
        <div className="d-flex flex-column">
          <p className="mb-1" style={{ color: "#575656", fontFamily: "Gilroy-Medium", marginBottom: "0.25rem" }}>
            <img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={time}
            />
            Intake
          </p>
          <p className="" style={{ color: "#FF5573", fontFamily: "Gilroy-SemiBold", marginBottom: "0.25rem" }}>
            <span style={{ backgroundColor: "#CCE6E8", cursor: "pointer", color: "#00949B", padding: "5px 10px", borderRadius: "5px", marginRight: "10px" }}>
              Open
            </span>
            <span style={{ backgroundColor: "#DDDDDD", cursor: "pointer", color: "#575656", padding: "5px 10px", borderRadius: "5px" }}>
              Sep
            </span>
          </p>
        </div>
        <div>
          <button
            style={{
              fontFamily: "Gilroy-SemiBold",
              color: "#FF5573",
              padding: "7px",
              borderRadius: "8px",
              border: "1px solid #FF5573",
              background: "#fff",
              marginBottom: "0.25rem"
            }}
            onClick={() => navigate('/course-details', { state: course })}
          >
            {"View Details >>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseListCard;
