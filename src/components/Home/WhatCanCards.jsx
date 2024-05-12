import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const WhatCanCards = ({ sOPWriting, guidance, img ,path}) => {
  const navigate=useNavigate();
  return (
    <div className="frame-component rounded ">
      <img
        className="frame-component-image"
        src={img}
        alt={`${sOPWriting} ${guidance}`}
      />
      <div className="my-1">
        <h6 className="frame-component-title mb-0 pb-0 mt-2" style={{fontFamily:"Gilroy-Regular"}}>{sOPWriting}</h6>
        <h6 className="frame-component-title mb-0 pb-0 " style={{fontFamily:"Gilroy-Regular"}}> {guidance}</h6>
      </div>
      {/* <p className="frame-component-guidance"></p> */}
      <button style={{fontFamily:"Gilroy-Bold"}} onClick={()=>navigate(path)}  className="frame-component-button">
        Start now <span style={{fontFamily:"Gilroy-Medium",marginLeft:"7px",marginTop:"2px"}}> {'  >>'}</span> 
      </button>
    </div>
  );
};

export default WhatCanCards;
