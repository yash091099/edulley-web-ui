import React, { useEffect, useState } from "react";
import CourseListCard from "../components/CourseListCard";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Range, getTrackBackground } from 'react-range';
import { getCourses } from "../Services/dashboard";
import {toast} from "react-hot-toast";
import CustomLoader from "../components/loader";

const CourseList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCoursesLevel, setSelectedCoursesLevel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await getCourses();
      let validCourses=response.data?.data;
      if(location.state?.length){

         validCourses = response.data?.data.filter(course => location.state.includes(course._id));
      }
      setCourses(validCourses);
      setLoading(false);
    } catch (error) {
      toast.error('Something went wrong');
      setLoading(false);
    }
  }

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
  const [tuitionFee, setTuitionFee] = useState([20000]);
  const [compareCourse, setCompareCourse] = useState([]);
  const toggleCourseSelection = (course) => {
    const isAlreadySelected = selectedCourses.find(c => c._id === course._id);
    if (isAlreadySelected) {
      setCompareCourse(current => current.filter(c => c._id !== course._id));
    } else {
      setCompareCourse(current => [...current, course]);
    }
  };

  const handleCompareClick = () => {
    console.log(compareCourse);
    if (compareCourse.length < 5) {
      toast.error('At least 5 courses are required for comparison.');
    } else {
      console.log(compareCourse); // You might want to navigate or do something else with this data
      navigate('/compare', { state: compareCourse });
    }
  };

  return (
    <div className="container py-5 course_container">
      {loading && <CustomLoader />}
      <div className="py-4"></div>
      <div className="compare_course">
        <button className="explore-button mt-3 fw-bold" onClick={handleCompareClick}>
          Compare Courses
        </button>
      </div>
      <div>
        <div className="row">
          <div className="col-md-7">
            <div className="left_list">
              {courses.map((course) => (
              <CourseListCard key={course._id} course={course} onToggleSelection={toggleCourseSelection} isSelected={compareCourse.some(c => c._id === course._id)} />
            ))}
            </div>
          </div>
          <div className="col-md-5">
            <div className="right_list">
              <h5 className="fw-semibold mb-4">Eligibility</h5>
              <h5 className="fw-semibold mb-2">Universities</h5>
              {courses.map((course, index) => (
                <div className="form-check mb-4" key={index}>
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id={`university-${index}`}
                    onChange={() => handleSelectCourse(course._id)}
                    checked={selectedCourses.includes(course._id)}
                  />
                  <label className="form-check-label" htmlFor={`university-${index}`}>
                    {course.universityName||'--'}
                  </label>
                </div>
              ))}
              <h5 className="fw-semibold mb-2">Program Level</h5>
              {courses.map((course, index) => (
                <div className="form-check mb-4" key={index}>
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id={`university-${index}`}
                    onChange={() => handleSelectLevel(course._id)}
                    checked={selectedCoursesLevel.includes(course._id)}
                  />
                  <label className="form-check-label" htmlFor={`university-${index}`}>
                    {course.level||'--'}
                  </label>
                </div>
              ))}
              <h5 className="fw-semibold mb-4">Tuition Fee</h5>
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
                      height: '14px',
                      marginBottom: '19px',
                      display: 'flex',
                      width: '100%',
                      background: getTrackBackground({
                        values: tuitionFee,
                        colors: ['#ccc', '#548BF4', '#ccc'],
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
                      height: '35px',
                      width: '35px',
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
                        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                        padding: '4px',
                        borderRadius: '4px',
                        backgroundColor: '#548BF4',
                      }}
                    >
                      ${tuitionFee[0]}
                    </div>
                  </div>
                )}
              />
              <button className="btn btn-primary mt-3" onClick={resetFilters}>Reset Filters</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
