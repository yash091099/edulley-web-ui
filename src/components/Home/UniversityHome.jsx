import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUniversities } from "../../Services/dashboard";
import CustomLoader from "../loader";
import toast from "react-hot-toast";
import defaultLogoImage from "../../assets/frame-1686560972@2x.png";
import { makeStyles } from "@mui/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: "#FF6477",
    fontSize: "2rem",
  },
  carouselContainer: {
    display: 'flex',
    overflowX: 'auto',
    height: '300px',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // For Chrome, Safari and Opera
    },
  },
  carouselItem: {
    flex: '0 0 auto',
    width: '25%', // Adjust this value to display more or fewer items
    scrollSnapAlign: 'start',
  },
}));

const UniversitiesHome = () => {
  const classes = useStyles();
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      console.log(res, "------------------------universities");
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

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="most-searched-countries-container featured-university-container py-5">
      <div className="container">
        <h1 className="what-we-can-do-title" style={{fontFamily:"Gilroy-Bold"}}>Featured Universities</h1>
        <p className="what-we-can-do-description" style={{fontFamily:"Gilroy-Regular"}}>
        Explore prestigious institutions known for academic excellence and innovative programs. From cutting-edge research facilities to vibrant campus life, these universities 
offer a world-class education and endless opportunities for growth. Explore some of the best universities here!
        </p>
        <div className={classes.carouselContainer}>
          {universities.map((uni, index) => (
            <div key={index} className={classes.carouselItem}>
              <Link to="/institution-details">
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
                      <h3 className="university-name" style={{fontFamily:"Gilroy-Medium"}}>
                        {uni?.universityName || "University Name"}
                      </h3>
                      <h5 className="university-location" style={{fontFamily:"Gilroy-Regular"}}>{`${uni.city}, ${uni?.country}`}</h5>
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
              </Link>
            </div>
          ))}
        </div>
        {!universities.length && <p className="text-center">No universities found.</p>}
      </div>
    </div>
  );
};

export default UniversitiesHome;
