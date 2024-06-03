import React, { useState } from "react";
import StudentCard from "./StudentCard";
import profile from "../../assets/ellipse-1@2x.png";
import video from "../../assets/video-review.png";

const StudentSays = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const videoClickHandler = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="most-searched-countries-container featured-university-container br-b-0 py-5">
      <div className="container">
        <h1 className="what-we-can-do-title" style={{ fontFamily: "Gilroy-Bold" }}>What Students say about us</h1>
        <p className="what-we-can-do-description" style={{ fontFamily: "Gilroy-Medium" }}>
          Check out what our students have to say about us. We have helped thousands of students in their study abroad journey and their feedback will lighten up your day.
        </p>
      </div>
      <div className="my-5 content-container-what-student">
        <div className="">
          {isVideoPlaying ? (
            <div className="">
              <iframe
                title="YouTube video"
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/OLVUrgQ_BbA?autoplay=1&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <div className="d-flex flex-direction-col position-relative">
                <button
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                    top: "50%",
                    right: "18rem",
                    transform: "translateY(-50%)",
                  }}
                  variant="primary"
                  className="mr-2 btn btn-primary"
                  onClick={videoClickHandler}
                >
                  {"<"}
                </button>
                <div>
                  <img
                    src={video}
                    alt="Video Thumbnail"
                    className="video-thumbnail-what-student cursor-pointer"
                    onClick={videoClickHandler}
                    // style={{ borderRadius: "22px" }}
                  />
                </div>
                <button
                  style={{
                    width: "36px",
                    height: "36px",
                    position: "absolute",
                    top: "50%",
                    left: "18rem",
                    transform: "translateY(-50%)",
                  }}
                  variant="primary"
                  className="ml-2 btn btn-primary"
                  onClick={videoClickHandler}
                >
                  {">"}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="ml-5 reviews-container-what-student">
          <StudentCard
            image={profile}
            name="Esther Howard"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            stars={5}
            style={{ borderRadius: "22px" }}
          />
          <StudentCard
            image={profile}
            name="Esther Howard"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            stars={5}
            style={{ borderRadius: "22px" }}
          />
          <StudentCard
            image={profile}
            name="Courtney Henry"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            stars={5}
            style={{ borderRadius: "22px" }}
          />
          <StudentCard
            image={profile}
            name="Devon Lane"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            stars={5}
            style={{ borderRadius: "22px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentSays;
