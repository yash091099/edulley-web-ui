import React, { useEffect, useState } from "react";
import CourseListCard from "../components/CourseListCard";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Range, getTrackBackground } from 'react-range';
import { toast } from "react-hot-toast";
import CustomLoader from "../components/loader";
import course_icon from '../assets/course.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getCourses } from "../Services/dashboard";
import { FaRupeeSign } from "react-icons/fa";
import cherons from "../assets/chevrons-right.png";

const CourseList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCoursesLevel, setSelectedCoursesLevel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const coursesPerPage = 5; // Number of courses per page
  const [sortOption, setSortOption] = useState('');
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  }


  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await getCourses();
      let validCourses = response.data?.data;
      if (location.state?.length) {
        validCourses = response.data?.data.filter(course => location.state.includes(course._id));
      }
      setCourses(validCourses);
      setLoading(false);
    } catch (error) {
      toast.error('Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [filter]);

  const resetFilters = () => {
    setFilter([]);
    fetchCourses();
    setSelectedCourses([]);
  };

  const handleSelectCourse = (courseId) => {
    setSelectedCourses(prevSelectedCourses =>
      prevSelectedCourses.includes(courseId)
        ? prevSelectedCourses.filter(id => id !== courseId)
        : [...prevSelectedCourses, courseId]
    );
  };

  const handleSelectLevel = (courseId) => {
    setSelectedCoursesLevel(prevSelectedCourses =>
      prevSelectedCourses.includes(courseId)
        ? prevSelectedCourses.filter(id => id !== courseId)
        : [...prevSelectedCourses, courseId]
    );
  };

  const handleCompareCourses = () => {
    if (selectedCourses.length < 5) {
      toast.error("A minimum of 5 courses are required for comparison.");
      return;
    }
    console.log(selectedCourses); // Log the selected courses
    navigate("/compare", { state: { selectedCourses } });
  };

  const [ieltsScore, setIeltsScore] = useState([6]);
  const [tuitionFee, setTuitionFee] = useState([1000]);
  const [compareCourse, setCompareCourse] = useState([]);

  const toggleCourseSelection = (course) => {
    const isAlreadySelected = compareCourse.find(c => c === course);
    if (isAlreadySelected) {
      const removeCourseIdFromCompareCourse = compareCourse.filter(c => c !== course);
      setCompareCourse(removeCourseIdFromCompareCourse);
    } else {
      setCompareCourse(current => [...current, course]);
    }
  };

  useEffect(() => {
    console.log(compareCourse)
  }, [compareCourse]);

  const handleCompareClick = () => {
    console.log(compareCourse);
    if (compareCourse.length < 5) {
      toast.error('At least 5 courses are required for comparison.');
    } else {
      console.log(compareCourse); // You might want to navigate or do something else with this data
      navigate('/compare', { state: compareCourse });
    }
  };

  // Calculate index of the first and last course for the current page
  const indexOfLastCourse = page * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container py-5 course_container">
      <div className="py-4"></div>
     
      {loading && <CustomLoader />}
      <div className="row mb-4">
    <div className="col-md-9 d-flex align-items-center">
        <p style={{ fontFamily: 'Gilroy-Medium' }}>{courses?.length || 0} Courses Found</p>
    </div>
    <div className="col-md-3 d-flex justify-content-end align-items-center">
        <span style={{ fontFamily: 'Gilroy-Medium', marginRight: '10px',width:"80px" }}>Sort by</span>
        <select
            className="form-select"
            style={{ fontFamily: 'Gilroy-Medium' }}
            value={sortOption}
            onChange={handleSortChange}
        >
            <option value="Relevance">Relevance</option>
            <option value="Deadline">Deadline</option>
            <option value="FeeHighToLow">Fee Amount (High to Low)</option>
            <option value="FeeLowToHigh">Fee Amount (Low to High)</option>
            <option value="TopRated">Top Rated</option>
            <option value="Applications">No. of Applications</option>
        </select>
    </div>
</div>
<div className="row">
    <div className="col-md-12 d-flex justify-content-end align-items-center">
        {/* <span style={{ fontFamily: 'Gilroy-Medium', marginRight: '10px' }}>Add five courses to start comparison</span> */}
        <button className="explore-button mb-3" style={{ fontFamily: 'Gilroy-SemiBold' }} onClick={handleCompareClick}>
            Compare <img src={cherons} alt="Home" />
        </button>
    </div>
</div>


      <div>
        <div className="row">
          <div className="col-md-7">
            <div className="left_list">
              {currentCourses.map((course) => (
                <CourseListCard key={course._id} course={course} onToggleSelection={toggleCourseSelection} isSelected={compareCourse.some(c => c === course._id)} />
              ))}
            </div>
            <Stack spacing={2}>
              <Pagination count={Math.ceil(courses.length / coursesPerPage)} page={page} onChange={handleChangePage} />
            </Stack>
          </div>
          <div className="col-md-5">
            <span style={{fontFamily:"Gilroy-Bold",fontSize:"22px"}}>Filters</span>
            <div className="right_list">
              <h5 className="mb-2" style={{fontFamily:"Gilroy-SemiBold",color:"#FF5573"}}>Universities</h5>
              {courses.map((course, index) => (
                <div className="form-check mb-3" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`university-${index}`}
                    onChange={() => handleSelectCourse(course._id)}
                    checked={selectedCourses.includes(course._id)}
                  />
                  <label className="form-check-label" style={{fontFamily:"Gilroy-Medium"}} htmlFor={`university-${index}`}>
                    {course.universityName || '--'}
                  </label>
                </div>
              ))}
                 <h5 style={{fontFamily:"Gilroy-SemiBold",color:"#FF5573"}} className=" mb-2">English Proficiency Exam</h5>
                 <select
            className="form-select mb-3"
            style={{ fontFamily: 'Gilroy-Medium' }}
            value={sortOption}
            onChange={handleSortChange}
        >
            <option value="Relevance">IELTS</option>
            <option value="Relevance">EXAM 1</option>
            <option value="Relevance">EXAM 2</option>
            <option value="Relevance">...</option>
         
        </select>
                 <h5 className=" mb-5" style={{fontFamily:"Gilroy-SemiBold",color:"#FF5573"}}>Tuition Fee</h5>
              <Range
                values={tuitionFee}
                step={1000}
                min={0}
                max={50000}
                onChange={setTuitionFee}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '7px',
                      marginBottom: '19px',
                      display: 'flex',
                      width: '100%',
                      background: getTrackBackground({
                        values: tuitionFee,
                        colors: ['#ccc', '#FF5573', '#ccc'],
                        min: 0,
                        max: 50000,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '25px',
                      width: '25px',
                      borderRadius: '4px',
                      backgroundColor: '#FFF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: '0px 2px 6px #AAA',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-28px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        fontFamily: 'Gilroy-Medium',
                        padding: '4px',
                        borderRadius: '4px',
                        backgroundColor: '#FF5573',
                      }}
                    >
                      <p> ${tuitionFee[0]}</p> 
                    </div>
                  </div>
                )}
              />
              <h5 style={{fontFamily:"Gilroy-SemiBold",color:"#FF5573"}} className=" mb-2">Program Level</h5>
              {courses.map((course, index) => (
                <div className="form-check mb-3" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`university-${index}`}
                    onChange={() => handleSelectLevel(course._id)}
                    checked={selectedCoursesLevel.includes(course._id)}
                  />
                  <label className="form-check-label" style={{fontFamily:"Gilroy-Medium"}} htmlFor={`university-${index}`}> {course.level || '--'}
                  </label>
                </div>
              ))}
           
           
              <button className="btn btn-primary mt-3" style={{fontFamily:"Gilroy-SemiBold"}} onClick={resetFilters}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
