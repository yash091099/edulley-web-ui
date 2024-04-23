import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUniversities } from "../../Services/dashboard";
import CustomLoader from "../loader";
import toast from "react-hot-toast";
import defaultLogoImage from "../../assets/frame-1686560972@2x.png";
import university_icon from "../../assets/university.png"; // Default logo image

const UniversitiesHome = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleUniversityClick = (uni) => {
    console.log(uni,'---------------------university details from function')
    navigate("/institution-details", { state: { universityDetails: uni } });
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="most-searched-countries-container featured-university-container py-5 section-padding">
      <div className="container">
      <h1 className="font-gilroy fw-bold">
                            <img src={university_icon} className="img-fluid" alt="" />
                            <span className="mt-1 ml-2 font-gilroy bold" style={{fontWeight: '900'}}>Universities</span>
                        </h1>             <p className="what-we-can-do-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.<br></br>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
        <div className="countries-container gap-1 my-5 mb-5">
          {universities.map((uni, index) => (
            <div style={{ cursor: "pointer" }} className="cursor-pointer countries uni_card" key={index} onClick={() => handleUniversityClick(uni)}>
              <img src={uni.bannerImage || defaultLogoImage} alt="University" className="university-image" style={{ height: "200px", width: "100%", objectFit: "contain", background: '#fff' }} />
              <div className="card-info">
                <div>
                  <h3 className="university-name">{uni?.universityName || "University Name"}</h3>
                  <h5 className="university-location">{`${uni.city}, ${uni?.country}`}</h5>
                </div>
                <div className="university-logo" style={{ background: "none" }}>
                  <img src={uni.universityLogo || defaultLogoImage} alt="Logo" style={{ height: "auto", width: "100%", borderRadius: "50%", objectFit: "contain" }} />
                </div>
              </div>
            </div>
          ))}
          {!universities.length && (
            <p className="text-center">No universities found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversitiesHome;
