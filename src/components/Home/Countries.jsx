import React from "react";
import card1 from "../../assets/australia.png";
import card2 from "../../assets/canada.png";
import card3 from "../../assets/france.png";
import card4 from "../../assets/uk.png";
import card5 from "../../assets/usa.png";
import card6 from "../../assets/ireland.png";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const navigate=useNavigate()
  return (
    <div className=" container  py-5">
      <h1 className="what-we-can-do-title " style={{fontFamily: 'Gilroy-Bold'}}>Most Searched Countries</h1>
      <p className="what-we-can-do-description mt-2 mb-5" style={{fontFamily:"Gilroy-Medium"}}>
      Embark on a transformative journey of learning and discovery. Explore new cultures, make lifelong friendships, and gain a world-class education. 
Let us be your guide to a brighter future. Choose a country that excites you and we bring the best information to help you make an informed decision. 
      </p>
      <div className="countries-container-2 ">
     
        <div onClick={()=>navigate("/courses")} className="countries cursor-pointer">
          <img className="countries-image" src={card4} alt="Australia" />
        </div>
        <div onClick={()=>navigate("/courses")} className="countries cursor-pointer">
          <img className="countries-image" src={card5} alt="France" />
        </div>
        <div onClick={()=>navigate("/courses")} className="countries cursor-pointer">
          <img className="countries-image" src={card6} alt="Ireland" />
        </div>
        </div>
        <div className="countries-container-2 mt-3 ">
        <div onClick={()=>navigate("/courses")} className="countries cursor-pointer">
          <img className="countries-image" src={card1} alt="USA" />
        </div>
        <div onClick={()=>navigate("/courses")} className="countries cursor-pointer">
          <img className="countries-image" src={card2} alt="UK" />
        </div>
        <div onClick={()=>navigate("/courses")} className="countries cursor-pointer">
          <img className="countries-image" src={card3} alt="Canada" />
        </div>
      </div>
  
    </div>
  );
};

export default Countries;
