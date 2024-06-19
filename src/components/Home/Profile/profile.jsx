import React, { useEffect, useState } from "react";
import userIcon from "../../../assets/users.svg";
import documentsIcon from "../../../assets/documents.svg";
import dollorIcon from "../../../assets/suitcase.png";
import testIcon from "../../../assets/test.png";
import PersonalDetails from "./personalDetails";
import AcademicProfile from "./AcademicProfile";
import WorkBackground from "./WorkBackground";
import TestScores from "./TestScores";
import { getStudentDetailsById } from "../../../Services/dashboard";
import { Book, ExpandMore } from "@mui/icons-material";
import { Paper } from "@mui/material";

const Profile = () => {
  const _u = JSON.parse(localStorage.getItem('_u'));
  const _id = _u ? _u._id : null;
  const [state, setState] = useState(1);
  const [studentDetails, setStudentDetails] = useState({});

  useEffect(() => {
    if (_id) {
      getStudentDetailsById(_id).then((res) => {
        setStudentDetails(res.data.data);
      });
    }
  }, [_id]);

  const highlightColor = "#FF5573"; // Your chosen color

  return (
    <div className="container d-flex flex-column h-100 bg-white pt-4 rounded">
      <div className="card mb-4" style={{ backgroundColor: '#FFF0F0', border: 'none' }}>
        <div className="card-header" style={{fontFamily:"Gilroy-Bold"}}>Welcome to Edulley!</div>
        <div className="card-body">
          <p className="card-text mb-2" style={{ color: highlightColor ,fontFamily:"Gilroy-Medium" }}>You are just a few steps away from submitting your application</p>
          <div className="d-flex justify-content-between">
            <span style={{fontFamily:"Gilroy-Medium"}}>Name : {studentDetails?.fullName||JSON.parse(localStorage.getItem('_u'))?.fullName || '--'}</span>
            <span  style={{fontFamily:"Gilroy-Medium"}} >Email : {studentDetails?.email||JSON.parse(localStorage.getItem('_u'))?.email || '--'}</span>
            <span  style={{fontFamily:"Gilroy-Medium"}} >Phone : {studentDetails?.contactNumber||JSON.parse(localStorage.getItem('_u'))?.mobileNumber || '--'}</span>
          </div>
        </div>
      </div>
      <div className="row mb-3 flex-grow-1">
        <div className="col-md-3">
          <div className="d-flex flex-column gap-3 border-end border-dark">
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(1)}>
              <img className={`p-2 rounded ${state === 1 ? "bg-highlight" : "bg-light"}`} src={userIcon} />
              <div>
                <h1 className={` small ${state === 1 ? "text-highlight" : "text-secondary"}`} style={{fontFamily:"Gilroy-Bold"}}>Personal Details</h1>
                {/* <p className="text-secondary small" style={{fontFamily:"Gilroy-Medium"}}>Complete</p> */}
              </div>
            </div>
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(2)}>
              <img className={`p-2 rounded ${state === 2 ? "bg-highlight" : "bg-light"}`} src={documentsIcon} />
              <div>
                <h1 className={`small ${state === 2 ? "text-highlight" : "text-secondary"}`} style={{fontFamily:"Gilroy-Bold"}}>Academic Profile</h1>
                {/* <p className="text-secondary small" style={{fontFamily:"Gilroy-Medium"}}>Complete</p> */}
              </div>
            </div>
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(3)}>
              <img className={`p-2 rounded ${state === 3 ? "bg-highlight" : "bg-light"}`} src={dollorIcon} />
              <div>
                <h1 className={` small ${state === 3 ? "text-highlight" : "text-secondary"}`} style={{fontFamily:"Gilroy-Bold"}}>Work Backgrounds</h1>
                {/* <p className="text-secondary small" style={{fontFamily:"Gilroy-Medium"}}>Complete</p> */}
              </div>
            </div>
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(4)}>
              <img className={`p-2 rounded ${state === 4 ? "bg-highlight" : "bg-light"}`} src={testIcon} />
              <div>
                <h1 className={` small ${state === 4 ? "text-highlight" : "text-secondary"}`} style={{fontFamily:"Gilroy-Bold"}}>Tests</h1>
                {/* <p className="text-secondary small" style={{fontFamily:"Gilroy-Medium"}}>Complete</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 right-bar-form-profile">
          {state === 1 && <PersonalDetails />}
          {state === 2 && <AcademicProfile />}
          {state === 3 && <WorkBackground />}
          {state === 4 && <TestScores />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
