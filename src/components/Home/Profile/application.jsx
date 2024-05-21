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

const Academic = () => {
    const [activeTab, setActiveTab] = useState("apply");
    const [courses, setCourses] = useState([]);
    const [applications, setApplications] = useState([]);
    const [filters, setFilters] = useState({ name: "", course: "", university: "",location:"" });
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
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        if (activeTab === 'apply') {
            const filtered = courses.filter(course =>
                (filters.name ? course.courseName?.toLowerCase().includes(filters.name?.toLowerCase()) : true) &&
                (filters.course ? course.level?.toLowerCase().includes(filters.course?.toLowerCase()) : true) &&
                (filters.university ? course.universityName?.toLowerCase().includes(filters.university?.toLowerCase()) : true)
            );
            setFilteredCourses(filtered);
        } else {
            const filtered = applications.filter(application =>
                (filters.name ? application.courseName?.toLowerCase().includes(filters.name?.toLowerCase()) : true) &&
                (filters.course ? application.level?.toLowerCase().includes(filters.course?.toLowerCase()) : true) &&
                (filters.university ? application.universityName?.toLowerCase().includes(filters.university?.toLowerCase()) : true)
            );
            setFilteredApplications(filtered);
        }
    };

    const resetFilters = () => {
        setFilters({ name: "", course: "", university: "" });
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
        style={{
            ...activeTab === "apply" ? activeStyle : inactiveStyle,
            fontFamily: "Gilroy-Regular"
        }}
        onClick={() => setActiveTab("apply")}
    >
        Apply to Programs
    </button>
    <button 
        className="btn btn-lg shadow text-xl px-4 py-2 rounded-pill"
        style={{
            ...activeTab === "applied" ? activeStyle : inactiveStyle,
            fontFamily: "Gilroy-Regular"
        }}
        onClick={() => setActiveTab("applied")}
    >
        Applied Programs
    </button>
</div>

            </div>
            <div className="container">
                <div className="row justify-content-center p-4 ">
                   {activeTab === "apply" ? <div className="search_container container scholarship-page">
                        <h3 className="text-center" style={{fontFamily:"Gilroy-SemiBold"}}>Search suitable {activeTab === "apply" ? "Course" : "Application"} for you</h3>
                        <div className="bg-white rounded section_inner">
                            <div className="ps-3">
                                <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={book} />
                                <input style={{border: 'none',fontFamily:"Gilroy-Medium"}} className="text-gray-100" placeholder={activeTab === "apply" ? "Course" : "Application"} type="text" name="name" value={filters.name} onChange={handleFilterChange} />
                            </div>
                            <div className="ps-3">
                                <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={school} />
                                <input style={{border: 'none',fontFamily:"Gilroy-Medium"}} className="text-gray-100" placeholder="Intake" type="text" name="course" value={filters.course} onChange={handleFilterChange} />
                            </div>
                            <div className="ps-3">
                                <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={calender} />
                                <input style={{border: 'none',fontFamily:"Gilroy-Medium"}} className="text-gray-100" placeholder="Year" type="text" name="university" value={filters.university} onChange={handleFilterChange} />
                            </div>
                            <div className="ps-3">
                                <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} alt="" src={book} />
                                <input style={{border: 'none',fontFamily:"Gilroy-Medium"}} className="text-gray-100" placeholder="State/Country" type="text" name="university" value={filters.location} onChange={handleFilterChange} />
                            </div>
                            <button className="button-content-2 px-4 search_btn ml-3" onClick={handleSearch}>
                                <FaSearch />
                            </button>
                           { (filters?.course || filters?.name || filters?.university) && <button style={{fontFamily:"Gilroy-Medium"}} className="button-content-2 px-4 search_btn ml-3" onClick={resetFilters}>
                                Reset
                            </button>}
                        </div>
                    </div>: <div className="card mb-4" style={{ backgroundColor: '#FFF0F0', border: 'none' }}>
        <div className="card-header" style={{fontFamily:"Gilroy-Bold"}}>Welcome to Edulley!</div>
        <div className="card-body">
          <p className="card-text" style={{ color: highlightColor ,fontFamily:"Gilroy-SemiBold" }}>You are just a few steps away from submitting your application</p>
          <div className="d-flex justify-content-between">
            <span style={{fontFamily:"Gilroy-SemiBold"}}>Name : {studentDetails?.fullName||JSON.parse(localStorage.getItem('_u'))?.fullName || '--'}</span>
            <span  style={{fontFamily:"Gilroy-SemiBold"}} >Email : {studentDetails?.email||JSON.parse(localStorage.getItem('_u'))?.email || '--'}</span>
            <span  style={{fontFamily:"Gilroy-SemiBold"}} >Phone : {studentDetails?.contactNumber || '--'}</span>
          </div>
        </div>
      </div>}
                </div>
            </div>
            <div className="container py-4 course_container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <img style={{ height: "2rem", width: "2rem", objectFit: "cover" }} src={university_icon} className="img-fluid" alt="" />
                    </div>
                    <div className="col-auto">
                        <h1 className="font-gilroy fw-bold m-0">
                            <span className="font-gilroy bold page-heading-title" style={{ fontWeight: '900' }}>{activeTab === 'apply' ? 'Courses' : 'Applications'}</span>
                            <img  src={arrow_shortlist} className="img-fluid arrow-image" style={{ marginBottom: '19px', marginLeft: '-120px', marginTop: '56px'}} alt="" />
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
                                    <p className="mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>Confused about our Career path?</p>
                                    <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
                                        Explore Career path finder
                                    </button>
                                </div>
                                <div className="s_img_card">
                                    <img src={scholar2} alt="" />
                                    <p className="mt-2" style={{fontFamily:"Gilroy-SemiBold"}}>Let’s look at the scholarships available for you</p>
                                    <button className="explore-button py-2 fw-light mt-2" style={{fontFamily:"Gilroy-Medium"}}>
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
