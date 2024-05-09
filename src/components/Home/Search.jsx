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
    const [searchTerm, setSearchTerm] = useState({ course: '', duration: '', level: '' });
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
      navigate('/courses-list', { state: filteredCourses.map(course => course._id) });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="cointainer">
              <div className="row">
                    <div>
                        <h1 className="font-gilroy fw-bold">
                            <img src={course_icon} className="img-fluid" alt="" />
                            <span className="mt-1 ml-2 font-gilroy bold" style={{fontWeight: '900'}}>Courses</span>
                        </h1>
                        {/* <p className="what-we-can-do-description">
                            Transforming the landscape of Education with revolutionary technology
                        </p> */}
                    </div>
                </div>
        <div className="search_container container">
             
            {loading && <CustomLoader />}
            <h4 className="text-center fw-semibold mb-4">Search Courses</h4>
            <div className="bg-white rounded section_inner">
                <div className="ps-3">
                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={book} />
                    <input
                        className="text-gray-100"
                        placeholder="Course"
                        type="text"
                        style={{border: 'none'}}
                        name="course"
                        value={searchTerm.course}
                        onChange={handleChange}
                    />
                </div>
                <div className="ps-3">
                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={school} />
                    <input
                        className="text-gray-100"
                        placeholder="Duration"
                        type="text"
                        name="duration"
                        value={searchTerm.duration}
                        style={{border: 'none'}}

                        onChange={handleChange}
                    />
                </div>
                <div className="ps-3">
                    <img style={{ height: '2rem', width: '2rem', objectFit: 'cover' }} alt="" src={calender} />
                    <input
                        className="text-gray-100"
                        placeholder="Level"
                        type="text"
                        name="level"
                        style={{border: 'none'}}

                        value={searchTerm.level}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick} className={`px-4 search_btn ml-3 ${!inputFilled || (!isAvailable ||!searchTerm.course||!searchTerm.duration||!searchTerm.level)? 'disabled' : ''}`} >
                    <FaSearch />
                </button>
            </div>
            {showMessage && (
                <div className="row mt-3">
                    {isAvailable ?
                        <div className="col-12 alert alert-success" role="alert">Search course is available!</div> :
                        <div className="col-12 alert alert-danger" role="alert">Search course is unavailable.</div>
                    }
                </div>
            )}
        </div>
        </div>
    );
};

export default Search;
