import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUniversities } from "../../Services/dashboard";
import CustomLoader from "../loader";
import toast from "react-hot-toast";
import defaultLogoImage from "../../assets/frame-1686560972@2x.png";
import university_icon from "../../assets/university.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from "@mui/material";

const UniversitiesHome = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const universitiesPerPage = 12;
  const navigate = useNavigate();

  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      if (!res?.data?.error) {
        setUniversities(res.data.data);
        setFilteredUniversities(res.data.data);
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
    navigate("/institution-details", { state: { universityDetails: uni } });
  };

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    filterUniversities(value);
  };

  const filterUniversities = (input) => {
    const filtered = universities.filter(uni =>
      uni.universityName.toLowerCase().includes(input.toLowerCase()) ||
      uni.country.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredUniversities(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchInput('');
    setFilteredUniversities(universities);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="most-searched-countries-container featured-university-container py-5 section-padding">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="font-gilroy fw-bold d-flex align-items-center">
            <img src={university_icon} className="img-fluid" alt="University Icon" />
            <span className="mt-1 ml-2" style={{ fontFamily: "Gilroy-Bold" }}>Universities</span>
          </h1>
          <div className="d-flex align-items-center">
            <div className="input-group" style={{ position: 'relative' }}>
              <input

                type="text"
                className="form-control"
                placeholder="Search Universities and Country"
                style={{ fontFamily: "Gilroy-Medium", borderRadius: "25px 0 0 25px", paddingLeft: "35px",width:"300px" }}
                value={searchInput}
                onChange={handleSearchInputChange}
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888'
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleReset}
                  style={{
                    borderRadius: "0 25px 25px 0",
                    backgroundColor: "#FF5573",
                    color: "#FFF"
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                  <span className="ml-2">Clear</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontFamily: "Gilroy-Medium" }}>{filteredUniversities.length} Universities</p>
        <div className="countries-container gap-1 my-3 mb-5">
          {currentUniversities.map((uni, index) => (
            <div style={{ cursor: "pointer" }} className="cursor-pointer countries uni_card mb-3" key={index} onClick={() => handleUniversityClick(uni)}>
              <img src={uni.bannerImage || defaultLogoImage} alt="University" className="university-image" style={{ height: "200px", width: "100%", objectFit: "contain", background: '#fff' }} />
              <div className="card-info">
                <div>
                  <h3 className="university-name" style={{ fontFamily: "Gilroy-Medium" }} title={uni?.universityName}>{uni?.universityName?.trim()?.slice(0, 20) || "University Name"}</h3>
                  <h5 className="university-location" style={{ fontFamily: "Gilroy-Regular" }}>{`${uni.city}, ${uni?.country}`}</h5>
                </div>
                <div className="university-logo" style={{ background: "none" }}>
                  <img src={uni.universityLogo || defaultLogoImage} alt="Logo" style={{ height: "auto", width: "100%", borderRadius: "50%", objectFit: "contain" }} />
                </div>
              </div>
            </div>
          ))}
          {!currentUniversities.length && (
            <p className="text-center">No universities found.</p>
          )}
        </div>
        <Pagination
          count={Math.ceil(filteredUniversities.length / universitiesPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </div>
  );
};

export default UniversitiesHome;
