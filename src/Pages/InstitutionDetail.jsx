import React from "react";
import stats from "../assets/university-details.png";
import award from "../assets/award.svg";

const InstitutionDetail = () => {
  return (
    <div>
      <div className="container-fluid insti_container">
        <div className="d-flex flex-column justify-content-center align-items-center container">
          <h1>University Name</h1>
          <h3>Complete Overview</h3>
          <button className="explore-button mt-3 fw-bold">
            Download Brochure
          </button>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="mt-3">Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis
          dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce
          scelerisque vel nibh eget pellentesque. Ut ac odio sed velit
          pellentesque malesuada. Donec tempor elit quis maximus convallis.
          Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis
          ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor
          Read More
        </p>
        <h2 className="mt-3">Admission Requirements</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis
          dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce
          scelerisque vel nibh eget pellentesque. Ut ac odio sed velit
          pellentesque malesuada. Donec tempor elit quis maximus convallis.
          Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis
          ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor
          Read More
        </p>
        <h2 className="mt-5 fw-semibold text-center">University Stats</h2>
        <img className="insti_img" src={stats} alt="" />
        <h2 className="mt-5 fw-semibold text-center mb-4">
          What's unique about the university?
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap award_imgs">
          <img className="shadow p-2" src={award} alt="" />
          <img className="shadow p-2" src={award} alt="" />
          <img className="shadow p-2" src={award} alt="" />
          <img className="shadow p-2" src={award} alt="" />
          <img className="shadow p-2" src={award} alt="" />
        </div>
        <h2 className="mt-5 fw-bold text-center text-pink ">Courses</h2>
        <div className="c_category mt-3 ">
          <button className="detail_button  fw-semibold">
            Undergraduate{" "}
          </button>
          <button className="detail_button  fw-semibold">
            Postgraduate{" "}
          </button>
          <button className="detail_button  fw-semibold">Doctorate </button>
        </div>
      </div>
    </div>
  );
};

export default InstitutionDetail;
