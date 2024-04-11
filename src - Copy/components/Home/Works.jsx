import React from "react";
import WorkCards from "./WorkCards";
import img1 from "../../assets/apply.png";
import img2 from "../../assets/find-course.png";
import img3 from "../../assets/chat-with-us.png";

const Works = () => {
  return (
    <div className="most-searched-countries-container featured-university-container container  py-5 ">
      <div className="">
        <h1 className="what-we-can-do-title ">How it works</h1>
        <p className="what-we-can-do-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </p>
      </div>
      <div className="countries-container my-5">
        <WorkCards
          image={img1}
          title="Find courses"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <WorkCards
          image={img2}
          title="Apply & Receive offers"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <WorkCards
          image={img3}
          title="Chat with us"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
    </div>
  );
};

export default Works;
