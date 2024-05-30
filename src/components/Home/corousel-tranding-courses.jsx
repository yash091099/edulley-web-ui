import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';

const TrendingCoursesCarousel = ({ trendingCourses }) => {
    const navigate = useNavigate();

    const handleCardClick = (course) => {
       navigate('/course-details', { state: course })}    ;

    return (
        <div className="trending-courses-carousel">
            <Carousel
                // showArrows={true}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                // centerMode
                centerSlidePercentage={25}
                emulateTouch
            >
                {trendingCourses.map((course, index) => (
                    <div key={index} className="course-card" onClick={() => handleCardClick(course)} style={{ height: '300px', margin: '10px', position: 'relative' }}>
                        <img src={course.bannerImage} alt={course.courseName} className="course-card-image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        <div className="course-card-content" style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#fff' }}>
                            <h3 style={{fontFamily:"Gilroy-Medium"}}>{course.courseName}</h3>
                            <button className="view-details-button" style={{ backgroundColor: '#FF5573', border: 'none', padding: '5px 10px', borderRadius: '5px' ,fontFamily:"Gilroy-Medium"}}>View Details</button>
                        </div>
                    </div>
                ))}
                {Array.from({ length: Math.max(0, 4 - trendingCourses.length) }).map((_, index) => (
                    <div key={`empty-${index}`} className="course-card" style={{ height: '300px', margin: '10px', position: 'relative', backgroundColor: '#f0f0f0' }} />
                ))}
            </Carousel>
        </div>
    );
};

export default TrendingCoursesCarousel;
