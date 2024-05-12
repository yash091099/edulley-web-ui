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
      <h4 style={{ fontFamily: "Gilroy-Bold" }}>{formatName(scholarship?.name)}</h4>
      {/* <h4 className=""> {scholarship?.universityName}</h4> */}
      <div className="inner_card gap-2">
        <div>
          <p className="text-secondary" style={{fontFamily:"Gilroy-Regular"}}>Amount</p>
          <p className="hilight-danger " style={{fontFamily:"Gilroy-SemiBold"}}>$ {scholarship?.amount}</p>
        </div>
        <div>
          <p className="text-secondary" style={{fontFamily:"Gilroy-Regular"}}>Deadline</p>
          {/* <p className="hilight-danger">July 07, 2024</p> */}
          <p className="hilight-danger"  style={{fontFamily:"Gilroy-SemiBold"}}>{scholarship?.deadline?.split('T')[0]}</p>
        </div>
       
        <div>
          <p className=" text-secondary" style={{fontFamily:"Gilroy-Regular"}}>Course</p>
          <p className="hilight-danger"  style={{fontFamily:"Gilroy-SemiBold"}}>{scholarship?.coursesName}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
