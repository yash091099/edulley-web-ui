import React from "react";

const ScholarshipCard = ({ scholarship, universities }) => {
  const formatName = (name) => {
    if (name) {
      return name
        .split(" ")
        .map((word) => word.charAt(0)?.toUpperCase() + word?.slice(1))
        .join(" ");
    }
  };

  const getUniversityCountry = (universityName) => {
    console.log(universities);
    console.log(universityName);
    const university = universities?.find(
      (uni) => uni?.universityName?.toLowerCase()?.trim() === universityName?.toLowerCase()?.trim()
    );
    return university ? university?.country : "";
  };

  return (
    <div className="course_card mt-0">
      <h4 style={{ fontFamily: "Gilroy-Bold" }}>{formatName(scholarship?.name)}</h4>
      <h4 style={{ fontFamily: "Gilroy-Medium" }}>{formatName(scholarship?.universityName)} <small>({getUniversityCountry(scholarship?.universityName)||'--'})</small></h4>
      {/* <p style={{ fontFamily: "Gilroy-Medium", fontSize: "14px" }}></p> */}
      <div className="inner_card gap-2">
        <div>
          <p className="text-secondary" style={{ fontFamily: "Gilroy-Bold" }}>Amount</p>
          <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>${scholarship?.amount?.toString() || 0}</p>
        </div>
        <div>
          <p className="text-secondary" style={{ fontFamily: "Gilroy-Bold" }}>Deadline</p>
          <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>{scholarship?.deadline?.split('T')[0]}</p>
        </div>
        <div>
          <p className="text-secondary" style={{ fontFamily: "Gilroy-Bold" }}>Course</p>
          <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>{scholarship?.coursesName}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;