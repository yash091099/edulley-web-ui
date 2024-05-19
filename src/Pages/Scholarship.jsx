import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
import uni from "../assets/uni.svg";
import scholar1 from "../assets/scholarship1.png";
import scholarship_icon from "../assets/scholarship.png";
import scholar2 from "../assets/scholarship2.png";
import { Link } from "react-router-dom";
import ScholarshipCard from "../components/ScholarshipCard";
import { getScholarship } from "../Services/dashboard";
import CustomLoader from "../components/loader";
import {toast} from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
const Scholarship = () => {
  const [scholarship, setScholarship] = useState([]);
  const [filteredScholarship, setFilteredScholarship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ name: '', course: '', university: '' });
  const [searchInput, setSearchInput] = useState('');

  const fetchScholarship = async () => {
    setLoading(true);
    try {
      const response = await getScholarship();
      setScholarship(response.data.data);
      setFilteredScholarship(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error('Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScholarship();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    const filtered = scholarship.filter(uni => uni.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredScholarship(filtered);
  };

  const handleReset = () => {
    setSearchInput('');
    setFilteredScholarship(scholarship);
  };
  const handleSearch = () => {if(!filters.name && !filters.course && !filters.university){
    toast.error('Please enter atleast one filter');
    return;
  }
    let filteredData = scholarship.filter(item =>
      (filters.name ? item.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
      (filters.course ? item.coursesName.toLowerCase().includes(filters.course.toLowerCase()) : true) &&
      (filters.university ? item.universityName.toLowerCase().includes(filters.university.toLowerCase()) : true)
    );
    setFilteredScholarship(filteredData);
  };

  const resetFilters = () => {
    setFilters({ name: '', course: '', university: '' });
    setFilteredScholarship(scholarship);
  };

  return (
    <div className="container">
      {loading && <CustomLoader />}
      <div className="py-5"></div>
      <div className="row align-items-center mb-4">
  <div className="col-md-6 d-flex align-items-center">
    <h1 className="font-gilroy fw-bold">
      <img src={scholarship_icon} className="img-fluid" alt="Scholarship Icon" />
      <span className="mt-1 ml-2" style={{ fontFamily: "Gilroy-Bold" }}>Scholarship</span>
    </h1>
  </div>
  <div className="col-md-6">
    <div className="d-flex align-items-center justify-content-end">
      <div className="input-group" style={{ position: 'relative', maxWidth: '400px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Scholarships"
          style={{ fontFamily: "Gilroy-Medium", borderRadius: "25px 0 0 25px", paddingLeft: "35px" }}
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
</div>

      <div className="search_container container scholarship-page">
        
        <h3 className="text-center mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>Search Scholarships</h3>
        <div className="bg-white rounded section_inner">
          <div className="ps-3">
            <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={map} />
            <input
              className="text-gray-100 "
              style={{border: 'none',fontFamily:"Gilroy-Medium"}}
              placeholder="Country"
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
            />
          </div>
          <div className="ps-3">
            <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={book} />
            <input
              className="text-gray-100"
              placeholder="Degree"
              type="text"
              style={{border: 'none',fontFamily:"Gilroy-Medium"}}

              name="course"
              value={filters.course}
              onChange={handleFilterChange}
            />
          </div>
          <div className="ps-3">
            <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={uni} />
            <input
              className="text-gray-100"
              placeholder="University"
              type="text"
              name="university"
              style={{border: 'none',fontFamily:"Gilroy-Medium"}}

              value={filters.university}
              onChange={handleFilterChange}
            />
          </div>
          <button className=" button-content px-4 search_btn ml-3" onClick={handleSearch}>
            <FaSearch />
          </button>
          { (filters.name || filters.course || filters.university )&& <button className=" button-content px-4 search_btn ml-3" onClick={resetFilters}>
            <FaTimes />
          </button>}
        </div>
      </div>
      <div className="container py-4 course_container">
        <div className="inner_course mt-0">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                {filteredScholarship.map((item) => (
                  <div className="col-md-6">
                    <ScholarshipCard scholarship={item} />
                  </div>
                ))}
                {!filteredScholarship.length && (
                  <p className="text-center">No scholarship found</p>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="right_scholar">
                <div className="s_img_card">
                  <img src={scholar1} alt="" />
                  <p className="mt-2" style={{fontFamily:"Gilroy-Medium"}}> Let’s look at the scholarships available for you</p>
                  <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>
                    Explore all Scholarship
                  </button>
                </div>
                <div className="s_img_card">
                  <img src={scholar2} alt="" />
                  <p className="mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                  Confused about our Career path?
                  </p>
                  <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>
                    Explore Career path finder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
