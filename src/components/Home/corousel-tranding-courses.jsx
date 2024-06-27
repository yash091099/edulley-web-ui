import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const TrendingCoursesCarousel = ({ trendingCourses }) => {
    const navigate = useNavigate();

    const handleCardClick = (course) => {
        navigate('/course-details', { state: course });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="trending-courses-carousel mb-5">
            <Slider {...settings}>
                {trendingCourses.map((course, index) => (
                    <div key={index} className="px-2">
                        <div className="course-card" onClick={() => handleCardClick(course)} style={{ height: '300px', position: 'relative', cursor: 'pointer', margin: '0 5px' }}>
                            <img 
                                src={course.bannerImage || 'https://via.placeholder.com/300'} 
                                alt={course.courseName} 
                                className="course-card-image" 
                                style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                            <div className="course-card-content" style={{ 
                                position: 'absolute', 
                                bottom: '0', 
                                left: '0', 
                                right: '0', 
                                color: '#fff', 
                                backgroundColor: 'rgba(0,0,0,0.7)', 
                                padding: '10px', 
                                borderBottomLeftRadius: '8px', 
                                borderBottomRightRadius: '8px',
                                height: '100px', // Fixed height for all cards
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <h3 style={{fontFamily:"Gilroy-Medium", margin: '0 0 5px 0', fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{course.courseName}</h3>
                                    <p style={{fontFamily:"Gilroy-Medium", margin: '0', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{course.universityName}</p>
                                </div>
                                <button 
                                    className="view-details-button" 
                                    style={{ 
                                        backgroundColor: '#FF5573', 
                                        border: 'none', 
                                        padding: '5px 10px', 
                                        borderRadius: '5px',
                                        fontFamily:"Gilroy-Medium",
                                        fontSize: '12px',
                                        cursor: 'pointer',
                                        alignSelf: 'flex-start'
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrendingCoursesCarousel;