import React from "react";
import starImg from "../../assets/star.svg";

const StudentCard = ({ image, name, review, stars }) => {
  const starElements = Array.from({ length: stars }, (_, index) => (
    <img
      key={index}
      src={starImg}
      alt="Star"
      className="star-image-what-student"
    />
  ));

  return (
    <div className="student-review-card-what-student">
      <img src={image} alt={name} className="student-image-what-student" />
      <div className="review-content-what-student">
        <h3 className="student-name-what-student">{name}</h3>
        <div className="stars-what-student">{starElements}</div>
        <p className="student-review-what-student">{review}</p>
      </div>
    </div>
  );
};

export default StudentCard;
