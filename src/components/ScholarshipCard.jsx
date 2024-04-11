import React from "react";

const ScholarshipCard = () => {
  return (
    <div className="course_card mt-0">
      <h4 className="fw-semibold">Aauw International Fellowship</h4>
      <div className="inner_card gap-2">
        <div>
          <p className="fw-bold text-secondary">Amount</p>
          <p className="hilight-danger">$ 57.70k</p>
        </div>
        <div>
          <p className="fw-bold text-secondary">Deadline</p>
          <p className="hilight-danger">July 07, 2024</p>
        </div>
        <div>
          <p className="fw-bold text-secondary">Course</p>
          <p className="hilight-danger">UG + PG (Accelerated) Degree</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
