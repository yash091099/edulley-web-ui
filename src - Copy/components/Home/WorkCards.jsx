import React from "react";

const WorkCards = ({ image, title, description }) => {
  return (
    <div className="countries">
      <img src={image} alt={title} className="card-image-how-it-work" />
      <div className="card-content-how-it-work">
        <h6 className="fw-bold">{title}</h6>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default WorkCards;
