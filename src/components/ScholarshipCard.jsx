import React from "react";

const ScholarshipCard = ({scholarship}) => {
  console.log(scholarship,'------------------------scholarship');
  const formatName = (name) => {
    if (name) {
      return name
        .split(" ")
        .map((word) => word.charAt(0)?.toUpperCase() + word?.slice(1))
        .join(" ");
    }
  }
  return (
    <div className="course_card mt-0">
      <h4 className="fw-semibold">{formatName(scholarship?.name)}</h4>
      <h4 className=""> {scholarship?.universityName}</h4>
      <div className="inner_card gap-2">
        <div>
          <p className="fw-bold text-secondary">Amount</p>
          <p className="hilight-danger">$ {scholarship?.amount}</p>
        </div>
        <div>
          <p className="fw-bold text-secondary">Deadline</p>
          {/* <p className="hilight-danger">July 07, 2024</p> */}
          <p className="hilight-danger">{scholarship?.deadline?.split('T')[0]}</p>
        </div>
       
        <div>
          <p className="fw-bold text-secondary">Course</p>
          <p className="hilight-danger">{scholarship?.coursesName}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
