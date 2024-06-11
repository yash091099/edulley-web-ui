import React from "react";
import WhatCanCards from "./WhatCanCards";
import img1 from "../../assets/Scholarship.png";
import Study_Abroad from "../../assets/Study_Abroad.png";
import img2 from "../../assets/IELTS.png";
import SOP_Writing from "../../assets/SOP_Writing.png";
import img3 from "../../assets/Career_Path.png";
import Visa_Guidance from "../../assets/Visa_Guidance.png";
import img4 from "../../assets/Financial_Planning.png";
import Accommodation from "../../assets/Accommodation.png";
import airoplane from "../../assets/airooplane.png";

const WeCanDo = () => {
  return (
    <div className="what-we-can-do container-fluid">
      <div className="container" style={{ position: "relative" }}>
        <h1 className="what-we-can-do-title" style={{ fontFamily: 'Gilroy-Bold', display: 'inline-block' }}>
          What we can do for you?
        </h1>
        <img 
          src={airoplane} 
          alt="Airoplane" 
          style={{
            position: 'absolute',
            right: '4px',
            top: '-204px',
            height: '252px',
            zIndex: '-1',
          }} 
        />
        <p className="what-we-can-do-description" style={{ fontFamily: "Gilroy-Medium" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </p>
      </div>
      <div className="what-we-can-do-grid container">
        <WhatCanCards img={Study_Abroad} sOPWriting="Study" buttonText="Learn More" guidance="Abroad" path='/lor' />
        <WhatCanCards
          img={SOP_Writing}
          sOPWriting="SOP Writing "
          guidance="Guidance" path='/sop'
          buttonText="Learn More"
        />
        <WhatCanCards img={Visa_Guidance} sOPWriting="Visa" buttonText="Learn More" guidance="Guidance" path='/lor' />
        <WhatCanCards img={img4} sOPWriting="Financial" buttonText="Learn More" guidance="Planning" path='/sop' />
        <WhatCanCards
          img={Accommodation}
          sOPWriting="Accommodation "
          buttonText="Learn More"
          guidance="Guidance"
          path='/lor'
        />
                <WhatCanCards img={img3} buttonText="Learn More" sOPWriting="Career path " guidance="finder" path='/career-path' />

        <WhatCanCards img={img1} sOPWriting="Scholarship" buttonText="Learn More"  path='/scholarship' guidance="Finder" />
        <WhatCanCards
          img={img2}
          sOPWriting="IELTS"
          path='/exam-ielts'
          buttonText="Learn More"
          guidance="Preparation"
        />
      </div>
    </div>
  );
};

export default WeCanDo;
