import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUniversities } from "../../Services/dashboard";
import CustomLoader from "../loader";
import toast from "react-hot-toast";
import defaultLogoImage from "../../assets/frame-1686560972@2x.png"; // Default logo image

const UniversitiesHome = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      console.log(res, '------------------------universities');
      if (!res?.data?.error) {
        // Adjust this according to the actual response structure
        setUniversities(res.data.data.slice(0, 4)); // Only taking the first 4 universities
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
        <h1 className="what-we-can-do-title">Featured Universities</h1>
        <p className="what-we-can-do-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
          <br />
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
        <div className="countries-container gap-1 my-5 mb-5">
          {universities.map((uni, index) => (
            <Link to="/institution-details" key={index}>
              <div className="countries uni_card">
                <img src={uni.bannerImage || defaultLogoImage} alt="University" className="university-image" style={{ height: "200px", width: "100%", objectFit: "contain", background: '#fff' }} />
                <div className="card-info">
                  <div>
                    <h3 className="university-name">{uni?.universityName || "University Name"}</h3>
                    <h5 className="university-location">{`${uni.city}, ${uni?.country}`}</h5>
                  </div>
                  <div className="university-logo" style={{ background: "none" }}>
                    {/* Ensure the university logo is styled appropriately, without borderRadius if not needed */}
                    <img src={uni.universityLogo || defaultLogoImage} alt="Logo" style={{ height: "auto", width: "100%", borderRadius: "50%", objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </Link>
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
