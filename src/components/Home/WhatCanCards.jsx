import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import cherons from "../../assets/chevrons-right-grey.png";

const WhatCanCards = ({ sOPWriting, guidance, img ,path,buttonText}) => {
  const navigate=useNavigate();
  return (
    <div className="frame-component rounded ">
      <img
        className="frame-component-image"
        src={img}
        alt={`${sOPWriting} ${guidance}`}
      />
      <div className="my-1">
        <h6 className="frame-component-title mb-0 pb-0 mt-2" style={{fontFamily:"Gilroy-Medium"}}>{sOPWriting}</h6>
        <h6 className="frame-component-title mb-0 pb-0 " style={{fontFamily:"Gilroy-Medium"}}> {guidance}</h6>
      </div>
      {/* <p className="frame-component-guidance"></p> */}
      <button style={{fontFamily:"Gilroy-Medium"}} onClick={()=>navigate(path)}  className="frame-component-button">
       {buttonText}  <span style={{fontFamily:"Gilroy-Medium"}}><img src={cherons} alt="Home" /></span> 
      </button>
    </div>
  );
};

export default WhatCanCards;
