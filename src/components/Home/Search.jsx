import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import book from '../../assets/book.svg';
import school from '../../assets/school.svg';
import map from '../../assets/mappin.svg';
import calender from '../../assets/calendar.svg';
import course_icon from '../../assets/course.png';
import { useNavigate } from 'react-router-dom';
import CustomLoader from '../loader';
import { toast } from 'react-hot-toast';
import { getCourses, getUniversities } from '../../Services/dashboard';
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
    const [courses, setCourses] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState({ course: '', intake: [], year: '', country: '' });
    const [advancedFilters, setAdvancedFilters] = useState({
        disciplineArea: '',
        programLevel: [],
        requirements: [],
        duration: ''
    });
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [inputFilled, setInputFilled] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [courseResponse, universityResponse] = await Promise.all([getCourses(), getUniversities()]);
            setCourses(courseResponse.data.data || []);
            setUniversities(universityResponse.data.data || []);
            setLoading(false);
        } catch (error) {
            toast.error('Something went wrong');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleMultiSelectChange = (selectedOptions, action) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSearchTerm(prev => ({ ...prev, [action.name]: values }));
    };

    useEffect(() => {
        const filled = searchTerm.course || searchTerm.intake.length || searchTerm.year || searchTerm.country;
        setInputFilled(filled);

        if (filled) {
            const filtered = courses.filter(course => {
                const matchesCourse = !searchTerm.course || course.courseName.toLowerCase().includes(searchTerm.course.toLowerCase());
                const matchesIntake = !searchTerm.intake.length || searchTerm.intake.includes(course.uniqueCourseInfo?.upcomingIntake);
                const matchesYear = !searchTerm.year || course.uniqueCourseInfo?.duration.includes(searchTerm.year);
                const matchesCountry = !searchTerm.country || universities.find(uni => uni.universityName === course.universityName)?.country === searchTerm.country;
                
                // Advanced filters
                const matchesDiscipline = !advancedFilters.disciplineArea || course.disciplineArea === advancedFilters.disciplineArea;
                const matchesProgramLevel = !advancedFilters.programLevel.length || advancedFilters.programLevel.includes(course.level.toLowerCase());
                const matchesDuration = !advancedFilters.duration || course.uniqueCourseInfo?.duration === advancedFilters.duration;
                
                return matchesCourse && matchesIntake && matchesYear && matchesCountry && matchesDiscipline && matchesProgramLevel && matchesDuration;
            });
            setFilteredCourses(filtered);
        } else {
            setFilteredCourses(courses);
        }
    }, [searchTerm, courses, universities, advancedFilters]);

    const handleClick = () => {
        navigate('/courses-list', { state: filteredCourses.map(course => course._id) });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm(prev => ({ ...prev, [name]: value }));
    };

    const handleAdvancedFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setAdvancedFilters(prev => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter(item => item !== value)
            }));
        } else {
            setAdvancedFilters(prev => ({ ...prev, [name]: value }));
        }
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
               
                    <div className="ps-3">
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={school} />
                        <Select
                            isMulti
                            name="intake"
                            options={intakeOptions}
                            placeholder="Intake"    
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={intakeOptions.filter(option => searchTerm.intake.includes(option.value))}
                            onChange={(selectedOptions, action) => handleMultiSelectChange(selectedOptions, action)}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    border: 'none',
                                    width: "234px",
                                    padding: "10px",
                                    background: "#fff",
                                    fontFamily: "Gilroy-Medium",
                                    color: "#898484",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }),
                                multiValue: (provided) => ({
                                    ...provided,
                                }),
                                multiValueLabel: (provided) => ({
                                    ...provided,
                                }),
                            }}
                        />
                    </div>
                    <div className="ps-3 d-flex align-items-center" style={{ width: "234px" }}>
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={calender} />
                        <select
                            className="text-gray-100"
                            name="year"
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "100%", padding: "10px", background: "#fff", color: searchTerm.year ? "#000" : "#898484" }}
                            value={searchTerm.year}
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
                            value={searchTerm.country}
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "100%", padding: "10px", background: "#fff", color: searchTerm.country ? "#000" : "#898484" }}
                            onChange={handleChange}
                        >
                            <option value="">Select Country</option>
                            {Array.from(new Set(universities.map(uni => uni.country))).map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleClick} className={`button-content px-4 search_btn ml-3`}>
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
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
                        {showAdvancedFilter ? 'Close' : 'Advanced Filter +'}
                    </button>
                </div>
            </div>
            {showAdvancedFilter && (
                <div className="advanced-filter mb-4" style={{ backgroundColor: '#FFF0F0', padding: "25px" }}>
                    <hr style={{ border: "1px solid #797979" }} />
                    <div className="row ">
                        <div className="col-md-4">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontFamily: "Gilroy-Medium" }}>Discipline Area</label>
                                <select 
                                    style={{
                                        height: '40px',
                                        padding: '10px 10px',
                                        gap: '10px',
                                        borderRadius: '8px',
                                        border: "none",
                                        fontFamily: "Gilroy-Medium",
                                        marginBottom: "8px",
                                        background: "#fff"
                                    }}
                                    name="disciplineArea"
                                    value={advancedFilters.disciplineArea}
                                    onChange={handleAdvancedFilterChange}
                                >
                                    <option value="">Select</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Business Administration">Business Administration</option>
                                    <option value="Medicine">Medicine</option>
                                    <option value="Law">Law</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Environmental Studies">Environmental Studies</option>
                                    <option value="Psychology">Psychology</option>
                                    <option value="Fine Arts">Fine Arts</option>
                                    <option value="Communications">Communications</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontFamily: "Gilroy-Medium" }}>Duration</label>
                                <select
                                    style={{
                                        height: '40px',
                                        padding: '10px 10px',
                                        gap: '10px',
                                        borderRadius: '8px',
                                        border: "none",
                                        fontFamily: "Gilroy-Medium",
                                        marginBottom: "8px",
                                        background: "#fff"
                                    }}
                                    name="duration"
                                    value={advancedFilters.duration}
                                    onChange={handleAdvancedFilterChange}
                                >
                                    <option value="">Select Duration</option>
                                    <option value="1 Year">1 Year</option>
                                    <option value="2 Years">2 Years</option>
                                    <option value="3 Years">3 Years</option>
                                    <option value="4 Years">4 Years</option>
                                    <option value="5 Years">5 Years</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <label style={{ fontFamily: "Gilroy-Medium" }}>Program Level</label>
                            <div>
                                <input type="checkbox" id="ug" className="custom-checkbox" name="programLevel" value="ug" onChange={handleAdvancedFilterChange} />
                                <label htmlFor="ug" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>UG</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ug-diploma" className="custom-checkbox" name="programLevel" value="ug" onChange={handleAdvancedFilterChange} />
                                <label htmlFor="ug-diploma" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>UG Diploma/ Certificate</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pg" className="custom-checkbox" name="programLevel" value="pg" onChange={handleAdvancedFilterChange} />
                                <label htmlFor="pg" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>PG</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pg-diploma" className="custom-checkbox" name="programLevel" value="pg" onChange={handleAdvancedFilterChange} />
                                <label htmlFor="pg-diploma" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>PG Diploma/ Certificate</label>
                            </div>
                            <div>
                                <input type="checkbox" id="short-term" className="custom-checkbox" name="programLevel" value="pg" onChange={handleAdvancedFilterChange} />
                                <label htmlFor="short-term" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Short Term Programs</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label style={{ fontFamily: "Gilroy-Medium" }}>Requirements</label>
                                <div>
                                    <input type="checkbox" id="pte" className="custom-checkbox" name="requirements" value="PTE" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="pte" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>PTE</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ielts" className="custom-checkbox" name="requirements" value="IELTS" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="ielts" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>IELTS</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="toefl-ibt" className="custom-checkbox" name="requirements" value="TOEFL iBT" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="toefl-ibt" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>TOEFL iBT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="duolingo" className="custom-checkbox" name="requirements" value="Duolingo English Test" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="duolingo" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Duolingo English Test</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="sat" className="custom-checkbox" name="requirements" value="SAT" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="sat" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>SAT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="gre" className="custom-checkbox" name="requirements" value="GRE" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="gre" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>GRE</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="gmat" className="custom-checkbox" name="requirements" value="GMAT" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="gmat" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>GMAT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="without-gre" className="custom-checkbox" name="requirements" value="Without GRE" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="without-gre" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Without GRE</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="without-gmat" className="custom-checkbox" name="requirements" value="Without GMAT" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="without-gmat" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>Without GMAT</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="stem-courses" className="custom-checkbox" name="requirements" value="STEM Courses" onChange={handleAdvancedFilterChange} />
                                    <label htmlFor="stem-courses" style={{ fontFamily: "Gilroy-Medium", marginLeft: "6px" }}>STEM Courses</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <TrendingCoursesCarousel trendingCourses={courses} />
        </div>
    );
};

export default Search;