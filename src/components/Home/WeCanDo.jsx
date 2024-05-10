import React from "react";
import WhatCanCards from "./WhatCanCards";
import img1 from "../../assets/29658253-7605880-1.svg";
import img2 from "../../assets/19245722-6101665-1.svg";
import img3 from "../../assets/5911565-2953991-3.svg";
import img4 from "../../assets/13549587-5292742-1.svg";

const WeCanDo = () => {
  return (
    <div className="what-we-can-do container-fluid">
      <div className="container ">
        <h1 className="what-we-can-do-title  ">What we can do for you?</h1>
        <p className="what-we-can-do-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. <br></br>
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </p>
      </div>
      <div className="what-we-can-do-grid container">
        <WhatCanCards img={img1} sOPWriting="IELTS " guidance="Preparation" path='/exam-ielts' />
        <WhatCanCards
          img={img2}
          sOPWriting="SOP Writing "
          guidance="Guidance" path='/sop'
        />
        <WhatCanCards img={img3} sOPWriting="Visa " guidance="Guidance" path='/lor' />
        <WhatCanCards img={img4} sOPWriting="Financial " guidance="Aid"  path='/sop'  />
        <WhatCanCards
          img={img4}
          sOPWriting="Accommodation "
          guidance="Guidance"
          path='/lor'
        />
        <WhatCanCards img={img1} sOPWriting="IELTS " path='/exam-ielts'  guidance="Preparation" />
        <WhatCanCards
          img={img2}
          sOPWriting="SOP Writing "
          path='/sop'
          guidance="Guidance"
        />
        <WhatCanCards img={img3} sOPWriting="Visa " guidance="Guidance" path='/lor'  />
      </div>
    </div>
  );
};

export default WeCanDo;
