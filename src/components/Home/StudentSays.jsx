import React, { useState } from "react";
import StudentCard from "./StudentCard";
import profile from "../../assets/ellipse-1@2x.png";
import video from "../../assets/video-review.svg";

const StudentSays = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const videoClickHandler = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="most-searched-countries-container featured-university-container br-b-0 py-5">
      <div className="container">
        <h1 className="what-we-can-do-title">What Students say about us</h1>
        <p className="what-we-can-do-description">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. <br />
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here.
        </p>
      </div>
      <div className="my-5 content-container-what-student">
        <div className="">
          {isVideoPlaying ? (
            <div className="">
              <iframe
                title="YouTube video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/OLVUrgQ_BbA?autoplay=1&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <img
                src={video}
                alt="Video Thumbnail"
                className="video-thumbnail-what-student"
                onClick={videoClickHandler}
              />
              <button className="play-button-what-student"></button>
            </>
          )}
        </div>
        <div className="reviews-container-what-student">
          <StudentCard
            image={profile}
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          <StudentCard
            image={profile}
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          <StudentCard
            image={profile}
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          <StudentCard
            image={profile}
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentSays;
