import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import book from '../../assets/book.svg';
import school from '../../assets/school.svg';
import calender from '../../assets/calendar.svg';
import { Link, useNavigate } from 'react-router-dom';
import CustomLoader from '../loader';
import { toast } from 'react-hot-toast';
import { getCourses } from '../../Services/dashboard';
import Select from 'react-select';

const Search = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState({ course: '', duration: '3', level: [] });
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

    useEffect(() => {
        const filled = searchTerm.course || searchTerm.duration || searchTerm.level.length > 0;
        setInputFilled(filled);
        setShowMessage(filled);
        if (filled) {
            const filteredCourses = courses.filter(course =>
                course.courseName.toLowerCase().includes(searchTerm.course.toLowerCase()) &&
                course.uniqueCourseInfo.duration.toLowerCase().includes(searchTerm.duration.toLowerCase()) &&
                searchTerm.level.some(level => course.level.toLowerCase().includes(level.toLowerCase()))
            );
            setSearchResults(filteredCourses);
            setIsAvailable(filteredCourses.length > 0);
            if (filteredCourses.length > 0) {
                console.log('Matching course IDs:', filteredCourses.map(course => course._id));
            }
        } else {
            setIsAvailable(false);
            setSearchResults([]);
        }
    }, [searchTerm, courses]);

    const handleClick = () => {
        const filteredCourses = courses.filter(course =>
            course.courseName.toLowerCase().includes(searchTerm.course.toLowerCase()) &&
            course.uniqueCourseInfo.duration.toLowerCase().includes(searchTerm.duration.toLowerCase()) &&
            searchTerm.level.some(level => course.level.toLowerCase().includes(level.toLowerCase()))
        );
        navigate('/courses');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm(prev => ({ ...prev, [name]: value }));
    };

    const handleMultiSelectChange = (selectedOptions) => {
        const levels = selectedOptions.map(option => option.value);
        setSearchTerm(prev => ({ ...prev, level: levels }));
    };

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

    return (
        <div className="cointainer">
            <div className="search_container container">
                {loading && <CustomLoader />}
                <h4 className="text-center mb-4" style={{ fontWeight: "400", fontFamily: 'Gilroy-Bold' }}>Search Courses</h4>
                <div className="bg-white rounded section_inner">
                    <div className="ps-3">
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={book} />
                        <input
                            className="text-gray-100"
                            placeholder="Course"
                            type="text"
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", color: "#898484" }}
                            name="course"
                            value={searchTerm.course}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ps-3">
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
                                    // display: "none",
                                }),
                                multiValueLabel: (provided) => ({
                                    ...provided,
                                    // display: "none",
                                }),
                            }}
                        />
                    </div>
                    <div className="ps-3">
                        <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={calender} />
                        <select
                            name="duration"
                            style={{ border: 'none', fontFamily: "Gilroy-Medium", width: "234px", padding: "10px", background: "#fff", color: "#898484" }}
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
                    <button onClick={handleClick} className={`button-content px-4 search_btn ml-3 ${!inputFilled || (!isAvailable || !searchTerm.course || !searchTerm.duration || searchTerm.level.length === 0) ? 'disabled' : ''}`}>
                        <FaSearch />
                    </button>
                </div>
                {showMessage && searchTerm.course && (
                    <div className="row mt-3">
                        {isAvailable ?
                            <div className="col-12 alert alert-success" style={{ fontFamily: "Gilroy-Medium" }} role="alert">Search course is available!</div> :
                            <div className="col-12 alert alert-danger" style={{ fontFamily: "Gilroy-Medium" }} role="alert">Search course is unavailable.</div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
