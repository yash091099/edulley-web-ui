import React, { useState } from "react";
import CourseListCard from "../components/CourseListCard";
import { Link } from "react-router-dom";
import { Range, getTrackBackground } from 'react-range';

const CourseList = () => {
    // Example state for ranges
    const [ieltsScore, setIeltsScore] = useState([6]);
    const [tuitionFee, setTuitionFee] = useState([20000]);
  
    // Dummy data for universities and program levels
    const universities = ['University A', 'University B', 'University C', 'University D', 'University E'];
    const programLevels = ['Post Graduate'];
  return (
    <div className="container py-5 course_container">
      <div className="compare_course">
        <Link to="/compare">
          <button className="explore-button mt-3 fw-bold">
            Compare Courses
          </button>
        </Link>
      </div>
      <div className="d-flex  justify-content-between inner_course">
        <div className="left_list">
          <CourseListCard />
          <CourseListCard />
          <CourseListCard />
        </div>
        <div className="right_list">
      <h5 className="fw-semibold mb-4">Eligibility</h5>

      <div className="row mb-4">
    <div className="col-12">
      <label>Highest Qualification Studies</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-md-6">
      <label>Country of Residence</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-md-6">
      <label>State of Residence</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-md-6">
      <label>Grading System (12th)</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-md-6">
      <label>Score (12th)</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-md-6">
      <label>Grading System (UG)</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-md-6">
      <label>Score (UG)</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-12">
      <label>Backlogs (if any)</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-12">
      <label>Work Experience</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-12">
      <label>English Proficiency Exam</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <div className="row mb-4">
    <div className="col-12">
      <label>Other Exam</label>
      <select className="form-select course_list" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>



      <div className="d-flex justify-content-between my-4">
        <button className="explore-button fw-semibold">Reset</button>
        <button className="explore-button fw-semibold">Apply Filter</button>
      </div>

      <h5 className="fw-semibold mb-4">Universities</h5>
      {universities.map((uni, index) => (
        <div className="form-check" key={index}>
          <input className="form-check-input" type="checkbox" value="" id={`university-${index}`} />
          <label className="form-check-label" htmlFor={`university-${index}`}>
            {uni}
          </label>
        </div>
      ))}

      <h5 className="fw-semibold mb-4">Program Level</h5>
      {programLevels.map((level, index) => (
        <div className="form-check" key={index}>
          <input className="form-check-input" type="checkbox" value="" id={`program-level-${index}`} />
          <label className="form-check-label" htmlFor={`program-level-${index}`}>
            {level}
          </label>
        </div>
      ))}

      <h5 className="fw-semibold mb-4">IELTS Score</h5>
      <Range
        values={ieltsScore}
        step={0.5}
        min={5}
        max={9}
        onChange={setIeltsScore}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
              background: getTrackBackground({
                values: ieltsScore,
                colors: ['#ccc', '#548BF4', '#ccc'],
                min: 5,
                max: 9,
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
              height: '42px',
              width: '42px',
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
              {ieltsScore[0]}
            </div>
          </div>
        )}
      />

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
              height: '36px',
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
              height: '42px',
              width: '42px',
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
    </div>
      </div>
    </div>
  );
};

export default CourseList;
