import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CustomLoader from "../../components/loader";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import course_icon from '../../assets/course.png';
import carrer_path_image from '../../assets/carrer_path.png';
import book from '../../assets/book.svg';
import school from '../../assets/school.svg';
import { getUniversities, getCourses } from "../../Services/dashboard";

const CarrerPath = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [qualification, setQualification] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      if (!res?.data?.error) {
        setUniversities(res.data.data);
        console.log(res.data.data, "universities");
      } else {
        toast.error("Failed to load universities data.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching universities.");
    }
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await getCourses();
      setCourses(response.data.data || []);
      setLoading(false);
    } catch (error) {
      toast.error('Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
    fetchCourses();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleReset = () => {
    setSearchInput('');
  };

  const handleSearch = () => {
    navigate('/carrer-details', { state: { qualification, specialization } });
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="most-searched-countries-container featured-university-container py-5 section-padding" style={{backgroundColor:"#FFFBFB"}}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="font-gilroy fw-bold d-flex align-items-center">
            <img src={course_icon} className="img-fluid" alt="University Icon" />
            <span className="mt-1 ml-2" style={{ fontFamily: "Gilroy-Bold" }}>Career Path Finder</span>
          </h1>
          <div className="d-flex align-items-center">
            <div className="input-group" style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Courses and Universities"
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
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <img src={carrer_path_image} className="img-fluid" alt="Career Path" style={{ height: '400px' }} />
          </div>
          <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: '#FF5573', fontFamily: "Gilroy-Bold", marginRight: "65px" }}>Confused</h1>
            <h4 style={{ color: '#FF5573', fontFamily: "Gilroy-Regular" }}>About Your Career Path?<br />Let Us Light the Way!</h4>
          </div>
        </div>
        <div className="row">
          <div className="search_container container mb-3 mt-0">
            <h4 className="text-center mb-4" style={{ fontFamily: "Gilroy-SemiBold" }}>Search Your Career Path</h4>
            <div className="bg-white rounded section_inner">
              <div className="ps-3">
                <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={school} />
                <select
                  className="text-gray-100"
                  style={{ border: 'none', fontFamily: "Gilroy-Medium" }}
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                >
                  <option value="">Select Qualification</option>
                  <option value="12th (High School Completed)">12th (High School Completed)</option>
                  <option value="Bachelors of Technology">Bachelors of Technology</option>
                  <option value="Bachelors of Arts">Bachelors of Arts</option>
                  <option value="Bachelors of Business Administration">Bachelors of Business Administration</option>
                  <option value="Bachelors of Architecture">Bachelors of Architecture</option>
                  <option value="Bachelors of Science">Bachelors of Science</option>
                  <option value="Bachelors of Commerce">Bachelors of Commerce</option>
                  <option value="Bachelors of Law">Bachelors of Law</option>
                  <option value="MBBS">MBBS</option>
                  <option value="Bachelors of Engineering">Bachelors of Engineering</option>
                  <option value="Bachelor of Pharmacy (B.Pharm.)">Bachelor of Pharmacy (B.Pharm.)</option>
                </select>
              </div>
              <div className="ps-3">
                <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={book} />
                <select
                  className="text-gray-100"
                  style={{ border: 'none', fontFamily: "Gilroy-Medium" }}
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option value="">Select Specialization</option>
                  <option value="Business and Management">Business and Management</option>
                  <option value="Computer Science and IT">Computer Science and IT</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Social Science">Social Science</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Professional Studies">Professional Studies</option>
                  <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                  <option value="Science">Science</option>
                  <option value="Sports Studies">Sports Studies</option>
                  <option value="Fine Arts">Fine Arts</option>
                  <option value="Law">Law</option>
                  <option value="Education">Education</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Journalism and Media">Journalism and Media</option>
                  <option value="Agriculture">Agriculture</option>
                </select>
              </div>
              <button className="button-content px-4 search_btn ml-3" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerPath;
