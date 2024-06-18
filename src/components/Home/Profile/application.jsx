import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import book from "../../../assets/book.svg";
import map from "../../../assets/mappin.svg";
import uni from "../../../assets/uni.svg";
import school from '../../../assets/school.svg';
import calender from '../../../assets/calendar.svg';
import university_icon from "../../../assets/shortlist.png";
import arrow_shortlist from "../../../assets/arrow-shortlist.png";
import scholar1 from "../../../assets/scholarship1.png";
import scholar2 from "../../../assets/scholarship2.png";
import CourseListCard from "../../applicationCourseListCard";
import AppliedCourseListCard from "../../appliedCourseCardListing";
import { getCourses, getApplications, getStudentDetailsById } from "../../../Services/dashboard";
import { toast } from "react-hot-toast";
import CustomLoader from "../../loader";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

const Academic = () => {
const navigate =useNavigate();
const intakeOptions = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
];
    const [activeTab, setActiveTab] = useState("apply");
    const [coursename, setcourseName] = useState("");
    const [courses, setCourses] = useState([]);
    const [applications, setApplications] = useState([]);
    const [filters, setFilters] = useState({ name: "", course: "", university: "", location: "" });
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const activeStyle = { backgroundColor: '#FF5573', color: 'white' };
    const inactiveStyle = { backgroundColor: 'white', color: 'black' };
    const _u = JSON.parse(localStorage.getItem('_u'));
    const userId = _u?._id;
    const highlightColor = "#FF5573";

    const [studentDetails, setStudentDetails] = useState({});

  const _id = _u ? _u._id : null;
  useEffect(() => {
    if (_id) {
      getStudentDetailsById(_id).then((res) => {
        setStudentDetails(res.data.data);
      });
    }
  }, [_id]);
    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await getCourses();
            const validCourses = response.data?.data;
            setCourses(validCourses);
            setFilteredCourses(validCourses);
            setLoading(false);
        } catch (error) {
            toast.error('Something went wrong');
            setLoading(false);
        }
    };

    const fetchApplications = async () => {
        setLoading(true);
        try {
            const response = await getApplications();
            const validApplications = response.data?.data;
            setApplications(validApplications);
            setFilteredApplications(validApplications);
            setLoading(false);
        } catch (error) {
            toast.error('Something went wrong');
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSelectChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setFilters({ ...filters, course: selectedValues });
    };

    const handleSearch = () => {
        if (activeTab === 'apply') {
            const filtered = courses.filter(course =>
                (filters.name ? course.courseName?.toLowerCase().includes(filters.name?.toLowerCase()) : true) &&
                (filters.course.length ? filters.course.includes(course.level) : true) &&
                (filters.university ? course.universityName?.toLowerCase().includes(filters.university?.toLowerCase()) : true) &&
                (filters.location ? course.location?.toLowerCase().includes(filters.location?.toLowerCase()) : true)
            );
            setFilteredCourses(filtered);
        } else {
            const filtered = applications.filter(application =>
                (filters.name ? application.courseName?.toLowerCase().includes(filters.name?.toLowerCase()) : true) &&
                (filters.course.length ? filters.course.includes(application.level) : true) &&
                (filters.university ? application.universityName?.toLowerCase().includes(filters.university?.toLowerCase()) : true) &&
                (filters.location ? application.location?.toLowerCase().includes(filters.location?.toLowerCase()) : true)
            );
            setFilteredApplications(filtered);
        }
    };

    const resetFilters = () => {
        setcourseName("");
        setFilters({ name: "", course: [], university: "", location: "" });
        if (activeTab === 'apply') {
            setFilteredCourses(courses);
        } else {
            setFilteredApplications(applications);
        }
    };

    useEffect(() => {
        fetchCourses();
        fetchApplications();
    }, []);

    return (
        <>
            {loading ? <CustomLoader /> : null}
            <div className="container mt-4">
                <div className="d-flex flex-row flex-wrap gap-3">
                    <button 
                        className="btn btn-lg shadow text-xl px-4 py-2 rounded-pill"
                        style={activeTab === "apply" ? activeStyle : inactiveStyle}
                        onClick={() => setActiveTab("apply")}
                    >
                        Apply to Programs
                    </button>
                    <button 
                        className="btn btn-lg shadow text-xl px-4 py-2 rounded-pill"
                        style={activeTab === "applied" ? activeStyle : inactiveStyle}
                        onClick={() => setActiveTab("applied")}
                    >
                        Applied Programs
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center p-4 ">
                    {activeTab === "apply" ? (
                        <div className="search_container container scholarship-page">
                            <h3 className="text-center" style={{ fontFamily: "Gilroy-Medium" }}>
                                Search suitable {activeTab === "apply" ? "Course" : "Application"} for you
                            </h3>
                            <div className="bg-white rounded section_inner">
                                <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={book} />
                                    <input
                                        className="text-gray-100"
                                        placeholder={activeTab === "apply" ? "Course" : "Application"}
                                        type="text"
                                        style={{ border: 'none', fontFamily: "Gilroy-Medium", color: coursename ? "#000" : "#898484" }}
                                        name="name"
                                        value={coursename}
                                        onChange={(e) => setcourseName(e.target.value)}
                                    />
                                </div>
                                <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={school} />
                                    <Select
                                        isMulti
                                        name="course"
                                        options={intakeOptions}
                                        placeholder="Intake" 
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        value={intakeOptions.filter(option => filters.course.includes(option.value))}
                                        onChange={handleSelectChange}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                border: 'none',
                                                fontFamily: "Gilroy-Medium",
                                                width: "100%",
                                                padding: "10px",
                                                background: "#fff",
                                                color: "#898484"
                                            })
                                        }}
                                    />
                                </div>
                                <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={calender} />
                                    <select
                                        className="text-gray-100"
                                        name="university"
                                        style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "100%", padding: "10px", background: "#fff", color: filters.university ? "#000" : "#898484" }}
                                        value={filters.university}
                                        onChange={handleFilterChange}
                                    >
                                        <option value="">Select Year</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                    </select>
                                </div>
                                <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={map} />
                                    <select
                                        className="text-gray-100"
                                        name="location"
                                        value={filters.location}
                                        style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "100%", padding: "10px", background: "#fff", color: filters.location ? "#000" : "#898484" }}
                                        onChange={handleFilterChange}
                                    >
                                        <option value="">Select Country</option>
                                        <option value="USA">USA</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Dubai">Dubai</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Finland">Finland</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Switzerland">Switzerland</option>
                                    </select>
                                </div>
                                <button className="button-content-2 px-4 search_btn ml-3" onClick={handleSearch}>
                                    <FaSearch />
                                </button>
                                {(filters.course.length || filters.name || filters.university || filters.location || coursename) && (
                                    <button style={{ fontFamily: "Gilroy-Medium" }} className="button-content-2 px-4 search_btn ml-3" onClick={resetFilters}>
                                        Reset
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="card mb-4" style={{ backgroundColor: '#FFF0F0', border: 'none' }}>
                            <div className="card-header" style={{ fontFamily: "Gilroy-Bold" }}>Welcome to Edulley!</div>
                            <div className="card-body">
                                <p className="card-text mb-2" style={{ color: highlightColor, fontFamily: "Gilroy-Medium" }}>You are just a few steps away from submitting your application</p>
                                <div className="d-flex justify-content-between">
                                    <span style={{ fontFamily: "Gilroy-Medium" }}>Name : {studentDetails?.fullName || JSON.parse(localStorage.getItem('_u'))?.fullName || '--'}</span>
                                    <span style={{ fontFamily: "Gilroy-Medium" }}>Email : {studentDetails?.email || JSON.parse(localStorage.getItem('_u'))?.email || '--'}</span>
                                    <span style={{ fontFamily: "Gilroy-Medium" }}>Phone : {studentDetails?.contactNumber || JSON.parse(localStorage.getItem('_u'))?.mobileNumber || '--'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="container py-4 course_container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} src={university_icon} className="img-fluid" alt="" />
                    </div>
                    <div className="col-auto mb-4">
                        <h1 className="font-gilroy fw-bold mt-4">
                            <span className="font-gilroy bold page-heading-title" style={{ fontWeight: '900' }}>{activeTab === 'apply' ? 'Courses' : 'Applications'}</span>
                        </h1>
                    </div>
                </div>

                <div className="inner_course mt-0">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                {(activeTab === 'apply' ? filteredCourses : filteredApplications).map((item, index) => (
                                    <div className="col-md-12" key={index}>
                                        {activeTab === 'apply' ? <CourseListCard course={item} /> : <AppliedCourseListCard course={item} />}
                                    </div>
                                ))}
                                {!(activeTab === 'apply' ? filteredCourses : filteredApplications).length && (
                                    <p className="text-center">No {activeTab === 'apply' ? 'Courses' : 'Applications'} found</p>
                                )}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="right_scholar">
                                <div className="s_img_card">
                                    <img src={scholar1} alt="" />
                                    <p className="mt-2" style={{ fontFamily: "Gilroy-Medium" }}>Confused about our Career path?</p>
                                    <button onClick={() => navigate('/career-path')} className="explore-button py-2 fw-light mt-2" style={{ fontFamily: "Gilroy-Medium" }}>
                                        Explore Career path finder
                                    </button>
                                </div>
                                <div className="s_img_card">
                                    <img src={scholar2} alt="" />
                                    <p className="mt-2" style={{ fontFamily: "Gilroy-Bold" }}>Let’s look at the scholarships available for you</p>
                                    <button onClick={() => navigate('/scholarship')} className="explore-button py-2 fw-light mt-2" style={{ fontFamily: "Gilroy-Medium" }}>
                                        Explore All Scholarship
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Academic;
