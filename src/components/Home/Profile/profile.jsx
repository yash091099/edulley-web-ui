import React, { useState } from "react";
import userIcon from "../../../assets/users.svg";
import documentsIcon from "../../../assets/documents.svg";
import dollorIcon from "../../../assets/dollor.svg";
import PersonalDetails from "./personalDetails";
import AcademicProfile from "./AcademicProfile";
import WorkBackground from "./WorkBackground";
import TestScores from "./TestScores";

const Profile = () => {
  const [state, setState] = useState(1);

  const highlightColor = "#FF6477"; // Your chosen color

  return (
    <div className="container d-flex flex-column h-100 bg-white p-4 rounded">
      <div className="row flex-grow-1">
        <div className="col-md-3">
          <div className="d-flex flex-column gap-3 border-end border-dark">
            {/* Use .map for repetitive elements if you have more states or want cleaner code */}
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(1)}>
              <img className={`p-2 rounded ${state === 1 ? "bg-highlight" : "bg-light"}`} src={userIcon}/>
              <div>
                <h1 className={`fw-bold small ${state === 1 ? "text-highlight" : "text-secondary"}`}>Personal Details</h1>
                <p className="text-secondary small">Incomplete</p>
              </div>
            </div>
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(2)}>
              <img className={`p-2 rounded ${state === 2 ? "bg-highlight" : "bg-light"}`} src={documentsIcon}/>
              <div>
                <h1 className={`fw-bold small ${state === 2 ? "text-highlight" : "text-secondary"}`}>Academic Profile</h1>
                <p className="text-secondary small">Incomplete</p>
              </div>
            </div>
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(3)}>
              <img className={`p-2 rounded ${state === 3 ? "bg-highlight" : "bg-light"}`} src={dollorIcon}/>
              <div>
                <h1 className={`fw-bold small ${state === 3 ? "text-highlight" : "text-secondary"}`}>Work Backgrounds</h1>
                <p className="text-secondary small">Incomplete</p>
              </div>
            </div>
            <div className="cursor-pointer d-flex gap-3 align-items-center" onClick={() => setState(4)}>
              <img className={`p-2 rounded ${state === 4 ? "bg-highlight" : "bg-light"}`} src={dollorIcon}/>
              <div>
                <h1 className={`fw-bold small ${state === 4 ? "text-highlight" : "text-secondary"}`}>Tests</h1>
                <p className="text-secondary small">Incomplete</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
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
