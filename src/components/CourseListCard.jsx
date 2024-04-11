import React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const CourseListCard = () => {
  return (
    <div className="course_card ">
      <div className="inner_card">
        <div>
          <h5 className="fw-semibold">MA by Research English Studies</h5>
          <p>University Name</p>
          <p>Manchester, UK</p>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span>Compare</span>
            <Switch {...label} />
          </div>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span>Shortlist</span>
            <Switch {...label} />
          </div>
        </div>
      </div>
      <div className="course_head ">
        <h6 className="p-0 m-0">61 University QS World Ranking</h6>
      </div>
      <div className="course_head">
        <h6 className="p-0 m-0">61 Times Higher Education Ranking</h6>
      </div>
      <div className="d-flex  align-items-center gap-5 mt-4 flex-wrap">
        <div>
          <p className="fw-bold">Fees</p>
          <p className="">$ 57.70k / year</p>
        </div>
        <div>
          <p className="fw-bold ">Duration</p>
          <p className="">48 months</p>
        </div>
        <div>
          <p className="fw-bold ">Application Fee</p>
          <p>$ 0</p>
        </div>
      </div>
      <div className="d-flex ">
        <button className="detail_button mt-4 fw-semibold">View Detail</button>
      </div>
    </div>
  );
};
export default CourseListCard;
