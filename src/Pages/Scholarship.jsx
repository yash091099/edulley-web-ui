import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
import uni from "../assets/uni.svg";
import scholar1 from "../assets/scholarship1.png";
import scholarship_icon from "../assets/scholarship.png";
import scholar2 from "../assets/scholarship2.png";
import { Link, useNavigate } from "react-router-dom";
import ScholarshipCard from "../components/ScholarshipCard";
import { getScholarship } from "../Services/dashboard";
import CustomLoader from "../components/loader";
import {toast} from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import Pagination from '@mui/material/Pagination';

const Scholarship = () => {
  const [scholarship, setScholarship] = useState([]);
  const [filteredScholarship, setFilteredScholarship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ name: '', course: '', university: '' });
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [scholarshipsPerPage] = useState(9);
  const indexOfLastScholarship = currentPage * scholarshipsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - scholarshipsPerPage;
  const currentScholarships = filteredScholarship.slice(indexOfFirstScholarship, indexOfLastScholarship);
    const navigate=useNavigate();
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
    
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
    const filtered = scholarship.filter(uni => 
      uni.name.toLowerCase().includes(value.toLowerCase()) || 
      uni.universityName.toLowerCase().includes(value.toLowerCase()) || 
      uni.coursesName.toLowerCase().includes(value.toLowerCase())
  );
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
          placeholder="Search By Name, Course, University"
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
            <span className="ml-2"  style={{ fontFamily: "Gilroy-Medium" }}>Clear</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="search_container container scholarship-page">
        
        <h3 className="text-center mt-2" style={{fontFamily:"Gilroy-Medium"}}>Search Scholarships</h3>
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
            {/* <input
              className="text-gray-100"
              placeholder="Degree"
              type="text"
              style={{border: 'none',fontFamily:"Gilroy-Medium"}}

              name="course"
              value={filters.course}
              onChange={handleFilterChange}
            /> */}
            
  <select
    className="text-gray-100"
    style={{ border: 'none', fontFamily: "Gilroy-Medium" ,width:"220px", height:"40px",color:"#898484",backgroundColor:"transparent"}}
    name="course"
    value={filters.course}
    onChange={handleFilterChange}
  >
    <option value="" disabled selected>Degree</option>
    <option value="UG">UG</option>
    <option value="PG">PG</option>
  </select>
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
              <div className="d-flex justify-content-center mt-4">
          <Pagination
            count={Math.ceil(filteredScholarship.length / scholarshipsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="fill"
            shape="rounded"
            color="primary"
          />
        </div>
            </div>
            <div className="col-md-3">
              <div className="right_scholar">
                <div className="s_img_card">
                  <img src={scholar1} alt="" />
                  <p className="mt-2" style={{fontFamily:"Gilroy-Bold"}}> Let’s look at the scholarships available for you</p>
                  <button onClick={()=>{navigate("/scholarship")}} className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                    Explore all Scholarship
                  </button>
                </div>
                <div className="s_img_card">
                  <img src={scholar2} alt="" />
                  <p className="mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                  Confused about our Career path?
                  </p>
                  <button onClick={()=>{navigate("/career-path")}} className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
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
