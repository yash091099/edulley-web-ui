import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import book from '../../assets/book.svg';
import school from '../../assets/school.svg';
import calender from '../../assets/calendar.svg';
import course_icon from '../../assets/course.png';
import { Link, useNavigate } from 'react-router-dom';
import CustomLoader from '../loader';
import { toast } from 'react-hot-toast';
import { getCourses } from '../../Services/dashboard';

const Search = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState({ course: '', duration: '3', level: 'January' });
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
        const filled = searchTerm.course || searchTerm.duration || searchTerm.level;
        setInputFilled(filled);
        setShowMessage(filled);
        if (filled) {
            const filteredCourses = courses.filter(course =>
                course.courseName.toLowerCase().includes(searchTerm.course.toLowerCase()) &&
                course.uniqueCourseInfo.duration.toLowerCase().includes(searchTerm.duration.toLowerCase()) &&
                course.level.toLowerCase().includes(searchTerm.level.toLowerCase())
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

    const handleClick=()=>{
      const filteredCourses = courses.filter(course =>
        course.courseName.toLowerCase().includes(searchTerm.course.toLowerCase()) &&
        course.uniqueCourseInfo.duration.toLowerCase().includes(searchTerm.duration.toLowerCase()) &&
        course.level.toLowerCase().includes(searchTerm.level.toLowerCase())
    );
      // onClick={() => navigate('/courses-list')}  disabled={ (!isAvailable ||!searchTerm.course||!searchTerm.duration||!searchTerm.level)}
    //   if(!isAvailable ||!searchTerm.course||!searchTerm.duration||!searchTerm.level){
    //     toast.error('All search fields are required');
    //     return;
    //   }
      navigate('/courses');
    //   navigate('/courses-list', { state: filteredCourses.map(course => course._id) });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="cointainer">
           
        <div className="search_container container">
             
            {loading && <CustomLoader />}
            <h4 className="text-center  mb-4" style={{fontWeight:"400", fontFamily: 'Gilroy-Bold' }}>Search Courses</h4>
            <div className="bg-white rounded section_inner">
                <div className="ps-3">
                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={book} />
                    <input
                        className="text-gray-100"
                        placeholder="Course"
                        type="text"
                        style={{border: 'none',fontFamily:"Gilroy-Medium",color:"#898484"}}

                        name="course"
                        value={searchTerm.course}
                        onChange={handleChange}
                    />
                </div>
             
                <div className="ps-3">
    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={school} />
    <select
        name="level"
        value={searchTerm.level}
        style={{ border: 'none', fontFamily: "Gilroy-Medium" ,width: "234px",
        padding: "10px",
        background: "#fff",color:"#898484"
    }}
        onChange={handleChange}
    >
        <option value="">Select Intake</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
    </select>
</div>
<div className="ps-3">
    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={calender} />
    <select
        name="duration"
        style={{ border: 'none', fontFamily: "Gilroy-Medium" ,width: "234px",
        padding: "10px",
        background: "#fff",color:"#898484"
    }}
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

                <button onClick={handleClick} className={`button-content px-4 search_btn ml-3 ${!inputFilled || (!isAvailable ||!searchTerm.course||!searchTerm.duration||!searchTerm.level)? 'disabled' : ''}`} >
                    <FaSearch />
                </button>
            </div>
            {showMessage &&  searchTerm.course && (
                <div className="row mt-3">
                    {isAvailable ?
                        <div className="col-12 alert alert-success" style={{fontFamily:"Gilroy-Medium"}} role="alert">Search course is available!</div> :
                        <div className="col-12 alert alert-danger" style={{fontFamily:"Gilroy-Medium"}} role="alert">Search course is unavailable.</div>
                    }
                </div>
            )}
        </div>
        </div>
    );
};

export default Search;
