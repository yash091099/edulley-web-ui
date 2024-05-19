import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUniversities } from "../../Services/dashboard";
import CustomLoader from "../loader";
import toast from "react-hot-toast";
import defaultLogoImage from "../../assets/frame-1686560972@2x.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const UniversitiesHome = () => {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      if (!res?.data?.error) {
        setUniversities(res.data.data);
      } else {
        toast.error("Failed to load universities data.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching universities.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: "smooth" });
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="most-searched-countries-container featured-university-container py-5">
      <div className="container">
        <h1 className="what-we-can-do-title" style={{ fontFamily: "Gilroy-Bold" }}>Featured Universities</h1>
        <p className="what-we-can-do-description" style={{ fontFamily: "Gilroy-Medium" }}>
          Explore prestigious institutions known for academic excellence and innovative programs. From cutting-edge research facilities to vibrant campus life, these universities 
          offer a world-class education and endless opportunities for growth. Explore some of the best universities here!
        </p>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <button onClick={scrollLeft} style={{
            position: "absolute",
            left: -55,
            zIndex: 1,
            backgroundColor: "#FF5573",
            border: "none",
            borderRadius: "8px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <ArrowBackIosNewIcon style={{ color: "#FFF" }} />
          </button>
          <div ref={carouselRef} style={{
            display: 'flex',
            overflowX: 'auto',
            height: '300px',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            width: '100%',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
            {universities.map((uni, index) => (
              <div key={index} style={{
                flex: '0 0 auto',
                width: '25%',
                scrollSnapAlign: 'start',
              }}>
                <a className="cursor-pointer" onClick={() => { navigate("/institution-details", { state: { universityDetails: uni } }); }}>
                  <div className="countries uni_card">
                    <img
                      src={uni.bannerImage || defaultLogoImage}
                      alt="University"
                      className="university-image"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "contain",
                        background: "#fff",
                      }}
                    />
                    <div className="card-info">
                      <div>
                        <h3 className="university-name" style={{ fontFamily: "Gilroy-Medium" }}>
                          {uni?.universityName || "University Name"}
                        </h3>
                        <h5 className="university-location" style={{ fontFamily: "Gilroy-Regular" }}>{`${uni.city}, ${uni?.country}`}</h5>
                      </div>
                      <div className="university-logo" style={{ background: "none" }}>
                        <img
                          src={uni.universityLogo || defaultLogoImage}
                          alt="Logo"
                          style={{
                            height: "auto",
                            width: "100%",
                            borderRadius: "50%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} style={{
            position: "absolute",
            right: "-55px",
            zIndex: 1,
            backgroundColor: "#FF5573",
            border: "none",
            borderRadius: "8px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <ArrowForwardIosIcon style={{ color: "#FFF" }} />
          </button>
        </div>
        {!universities.length && <p className="text-center">No universities found.</p>}
      </div>
    </div>
  );
};

export default UniversitiesHome;
