import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import book from '../../assets/book.svg';
import school from '../../assets/school.svg';
import map from '../../assets/mappin.svg';
import calender from '../../assets/calendar.svg';
import course_icon from '../../assets/course.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomLoader from '../loader';
import { toast } from 'react-hot-toast';
import { getCourses } from '../../Services/dashboard';
import TrendingCoursesCarousel from './corousel-tranding-courses';
import Select from 'react-select';

const Search = () => {
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
    const location = useLocation();
    const [courses, setCourses] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(location?.state?.country || "");
    const [loading, setLoading] = useState(false);
    const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState({ course: '', duration: '', level: [] });
    const [searchResults, setSearchResults] = useState([]);
    const [isAvailable, setIsAvailable] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [inputFilled, setInputFilled] = useState(false);

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
        fetchCourses();
    }, []);

    const handleMultiSelectChange = (selectedOptions) => {
        const levels = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSearchTerm(prev => ({ ...prev, level: levels }));
    };

    useEffect(() => {
        const filled = searchTerm.course || searchTerm.duration || searchTerm.level.length;
        setInputFilled(filled);
        setShowMessage(filled);
        if (filled) {
            const filteredCourses = courses?.filter(course =>
                (!searchTerm.course || course?.courseName?.toLowerCase().includes(searchTerm?.course?.toLowerCase())) &&
                (!searchTerm.duration || course?.uniqueCourseInfo?.duration?.toLowerCase().includes(searchTerm?.duration?.toLowerCase())) &&
                (!searchTerm.level.length || searchTerm.level.includes(course?.level?.toLowerCase()))
            );
            setSearchResults(filteredCourses);
            setIsAvailable(filteredCourses.length > 0);
        } else {
            setIsAvailable(false);
            setSearchResults([]);
        }
    }, [searchTerm, courses]);

    const handleClick = () => {
        const filteredCourses = courses.filter(course =>
            course.courseName.toLowerCase().includes(searchTerm.course.toLowerCase()) &&
            course.uniqueCourseInfo.duration.toLowerCase().includes(searchTerm.duration.toLowerCase()) &&
            searchTerm.level.includes(course.level.toLowerCase())
        );
        navigate('/courses-list', { state: filteredCourses.map(course => course._id) });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div>
                    <h1 style={{ marginTop: "75px" }} className="font-gilroy fw-bold course-head">
                        <img src={course_icon} className="img-fluid" alt="" />
                        <span className="mt-1 ml-2 font-gilroy bold" style={{ fontFamily: "Gilroy-Bold" }}>Courses</span>
                    </h1>
                </div>
            </div>
            <div className="search_container container mb-3">
                {loading && <CustomLoader />}
                <h4 className="text-center mb-4" style={{ fontFamily: "Gilroy-Medium" }}>Search suitable Course for you</h4>
                <div className="bg-white rounded section_inner">
                    <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={book} />
                        <input
                            className="text-gray-100"
                            placeholder="Course"
                            type="text"
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", color: searchTerm.course ? "#000" : "#898484" }}
                            name="course"
                            value={searchTerm.course}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={school} />
                        <Select
                            isMulti
                            name="level"
                            options={intakeOptions}
                            placeholder="Intake" 
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={intakeOptions.filter(option => searchTerm.level.includes(option.value))}
                            onChange={handleMultiSelectChange}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    border: 'none',
                                    fontFamily: "Gilroy-Medium",
                                    padding: "10px",
                                    background: "#fff",
                                    color: "#898484",
                                    width:"170px"
                                })
                            }}
                        />
                    </div>
                    <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={calender} />
                        <select
                            className="text-gray-100"
                            name="duration"
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "100%", padding: "10px", background: "#fff", color: searchTerm.duration ? "#000" : "#898484" }}
                            value={searchTerm.duration}
                            onChange={handleChange}
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
                            name="country"
                            value={selectedCountry}
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "100%", padding: "10px", background: "#fff", color: selectedCountry ? "#000" : "#898484" }}
                            onChange={(e) => setSelectedCountry(e.target.value)}
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
                    <button onClick={handleClick} className={`button-content px-4 search_btn ml-3 ${!inputFilled || (!isAvailable || !searchTerm.course || !searchTerm.duration || !searchTerm.level.length) ? 'disabled' : ''}`}>
                        <FaSearch />
                    </button>
                </div>
                {showMessage && searchTerm.course ? (
                    <div className="row mt-3">
                        {isAvailable ?
                            <div className="col-12 alert alert-success" role="alert">Search course is available!</div> :
                            <div className="col-12 alert alert-danger" role="alert">Search course is unavailable.</div>
                        }
                    </div>
                ): ""}
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    {!showAdvancedFilter ? (
                        <button
                            style={{
                                fontFamily: "Gilroy-Bold",
                                color: "#FF5573",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "1px solid #FF5573",
                                background: "#fff",
                                position: 'relative',
                                bottom: '35px'
                            }}
                            onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
                        >
                            {'Advanced Filter +'}
                        </button>
                    ) : ""}
                </div>
            </div>
            {showAdvancedFilter && (
                <div className="advanced-filter" style={{ backgroundColor: '#FFF0F0', padding: "25px" }}>
                    <hr style={{ border: "1px solid #797979" }} />

                    <div className="row">
                        <div className="col-md-4">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontFamily: "Gilroy-Medium" }}>Discipline Area</label>
                                <select style={{
                                    height: '40px',
                                    padding: '10px 10px',
                                    gap: '10px',
                                    borderRadius: '8px',
                                    border: "none",
                                    fontFamily: "Gilroy-Medium",
                                    marginBottom: "8px",
                                    background: "#fff"
                                }}>
                                    <option>Select</option>
                                    <option>Engineering</option>
                                    <option>Computer Science</option>
                                    <option>Business Administration</option>
                                    <option>Medicine</option>
                                    <option>Law</option>
                                    <option>Architecture</option>
                                    <option>Environmental Studies</option>
                                    <option>Psychology</option>
                                    <option>Fine Arts</option>
                                    <option>Communications</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontFamily: "Gilroy-Medium" }}>Duration</label>
                                <select style={{
                                    height: '40px',
                                    padding: '10px 10px',
                                    gap: '10px',
                                    borderRadius: '8px',
                                    fontFamily: "Gilroy-Medium",
                                    border: "none",
                                    marginBottom: "8px",
                                    background: "#fff"
                                }}>
                                    <option>Select</option>
                                    <option>1 year</option>
                                    <option>2 years</option>
                                    <option>3 years</option>
                                    <option>4 years</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <label style={{ fontFamily: "Gilroy-Medium" }}>Program Level</label>
                            <div>
                                <input type="checkbox" id="ug" className="custom-checkbox" />
                                <label htmlFor="ug" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>UG</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ug-diploma" className="custom-checkbox" />
                                <label htmlFor="ug-diploma" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>UG Diploma/ Certificate</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pg" className="custom-checkbox" />
                                <label htmlFor="pg" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>PG</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pg-diploma" className="custom-checkbox" />
                                <label htmlFor="pg-diploma" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>PG Diploma/ Certificate</label>
                            </div>
                            <div>
                                <input type="checkbox" id="short-term" className="custom-checkbox" />
                                <label htmlFor="short-term" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Short Term Programs</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label style={{ fontFamily: "Gilroy-Medium" }}>Requirements</label>
                                <div>
                                    <input type="checkbox" id="pte" className="custom-checkbox" />
                                    <label htmlFor="pte" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>PTE</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ielts" className="custom-checkbox" />
                                    <label htmlFor="ielts" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>IELTS</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="toefl-ibt" className="custom-checkbox" />
                                    <label htmlFor="toefl-ibt" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>TOEFL iBT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="duolingo" className="custom-checkbox" />
                                    <label htmlFor="duolingo" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Duolingo English Test</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="sat" className="custom-checkbox" />
                                    <label htmlFor="sat" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>SAT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="gre" className="custom-checkbox" />
                                    <label htmlFor="gre" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>GRE</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="gmat" className="custom-checkbox" />
                                    <label htmlFor="gmat" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>GMAT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="without-gre" className="custom-checkbox" />
                                    <label htmlFor="without-gre" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Without GRE</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="without-gmat" className="custom-checkbox" />
                                    <label htmlFor="without-gmat" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Without GMAT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="stem-courses" className="custom-checkbox" />
                                    <label htmlFor="stem-courses" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>STEM Courses</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
             <div className="d-flex justify-content-center">
                {showAdvancedFilter ? (
                    <button
                        style={{
                            fontFamily: "Gilroy-Bold",
                            color: "#FF5573",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "1px solid #FF5573",
                            background: "#fff",
                            position: 'relative',
                            bottom: '54px'
                        }}
                        onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
                    >
                        {'Close'}
                    </button>
                ) : ""}
            </div>
            <TrendingCoursesCarousel trendingCourses={courses} />
           
        </div>
    );
};

export default Search;
