import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const WhatCanCards = ({ sOPWriting, guidance, img }) => {
  const navigate=useNavigate();
  return (
    <div className="frame-component rounded ">
      <img
        className="frame-component-image"
        src={img}
        alt={`${sOPWriting} ${guidance}`}
      />
      <div className="my-1">
        <h6 className="frame-component-title mb-0 pb-0 mt-2">{sOPWriting}</h6>
        <h6 className="frame-component-title mb-0 pb-0 "> {guidance}</h6>
      </div>
      {/* <p className="frame-component-guidance"></p> */}
      <button onClick={()=>navigate('/exam-ielts')}  className="frame-component-button">
        Start now <BiChevronRight size={20} />
      </button>
    </div>
  );
};

export default WhatCanCards;
