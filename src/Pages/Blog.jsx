import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarMonth, Search } from '@mui/icons-material';
import blog_icon from '../assets/blog_icon.png';
import defaultBlogImage from "../assets/blog.png";
import CustomLoader from '../components/loader';
import toast from 'react-hot-toast';
import { getBlogs } from '../Services/dashboard';
import scholar1 from '../assets/scholarship1.png';
import cherons from "../assets/chevrons-right.png";

const Blog = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(9);
    const [searchTerm, setSearchTerm] = useState('');

    const getBlogsData = async () => {
        setLoading(true);
        try {
            const response = await getBlogs();
            if (!response.data?.error) {
                setBlogs(response.data.data);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Failed to fetch blogs');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const month = d.toLocaleString("default", { month: "short" });
        const day = d.getDate();
        const year = d.getFullYear();
        return `${month} ${day}, ${year}`;
      };
    
    const capitaliseFirstWord = (str) => {
        return str
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    }

    useEffect(() => {
        getBlogsData();
    }, []);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = 0;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleLoadMore = () => setCurrentPage(prevPage => prevPage + 1);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const filteredBlogs = blogs.filter(blog => 
        blog.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4 course_container">
            <div className="py-5"></div>
            <div className="row justify-content-between inner_course mt-0">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="font-gilroy fw-bold">
                                <img src={blog_icon} className="img-fluid" alt="" />
                                <span className="mt-1 ml-2" style={{ fontFamily: "Gilroy-Bold" }}>Blogs</span>
                            </h1>
                        </div>
                        <div className="search-filter" style={{ position: "relative" }}>
    <input
        type="text"
        className="form-control"
        placeholder=" Search Blogs"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
            fontFamily: "Gilroy-Medium",
            borderRadius: "20px",
            paddingLeft: "2rem"
        }}
    />
    <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}>
       <Search/>
    </span>
</div>

                    </div>
                    <p className="what-we-can-do-description mb-3" style={{ fontFamily: "Gilroy-Bold" }}>
                        Transforming the landscape of Education with revolutionary technology
                    </p>
                </div>
                {loading ? (
                    <CustomLoader />
                ) : (
                    <div className="col-md-9">
                        <div className="row">
                            {filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog).map(blog => (
                                <div className="col-md-4" key={blog._id}>
                                    <div onClick={() => navigate('/blog-details', { state: blog })}>
                                        <div className="countries cursor-pointer uni_card blog-card">
                                            <img src={blog.bannerImage || defaultBlogImage} alt="Blog" className="university-image img-fluid" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                            <div className="p-3">
                                                <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: '13px', fontFamily: "Gilroy-Medium", color: "#8D98A4" }}>
                                                    <CalendarMonth style={{ color: "#8D98A4" }} />
                                                    {formatDate(blog?.createdAt)}
                                                    <div className="blog-tags">
                                                        {blog.tags.map(tag => (
                                                            <span className="badge mt-2 me-2 p-2" style={{ backgroundColor: "#FFF0F0", color: "#000000" }} key={tag}>{tag}</span>
                                                        ))}
                                                    </div>
                                                </p>
                                                <p className="mt-2 text-truncate" style={{ maxHeight: '3rem', overflow: 'hidden', fontFamily: "Gilroy-Medium" }} >
                                                    {capitaliseFirstWord(blog?.heading)}
                                                </p>
                                                {blog.heading.length > 30 && (
                                                    <div className="tooltip"> {/* Bootstrap tooltip */}
                                                        <span className="tooltiptext" style={{ fontFamily: "Gilroy-Medium" }}>{blog.heading}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {indexOfLastBlog < filteredBlogs.length && (
                            <div className="d-flex justify-content-center mt-4">
                                <button className="explore-button py-2 px-4" onClick={handleLoadMore} style={{ fontFamily: "Gilroy-Medium" }}>
                                    Load More <img src={cherons} alt="Home" />
                                </button>
                            </div>
                        )}
                    </div>
                )}
                <div className="col-md-3">
                    <div className="s_img_card text-center">
                        <p style={{ fontFamily: "Gilroy-Bold" }}>Look at all the courses at University name</p>
                        <button onClick={()=>{navigate("/courses")}} style={{ fontFamily: "Gilroy-Medium" }} className="explore-button py-2 fw-light mt-2">Explore All Courses</button>
                        <p className="my-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</p>
                        <p className="" style={{ color: "#ff5573", cursor: "pointer", fontFamily: "Gilroy-Medium" }} >Chat with Our Advisor</p>
                    </div>
                    <div className="s_img_card text-center">
                        <img src={scholar1} alt="" />
                        <p style={{ fontFamily: "Gilroy-Bold" }}>Let’s look at the scholarships available for you</p>
                        <button onClick={()=>{navigate("/scholarship")}} className="explore-button py-2 fw-light mt-2">Explore All Scholarship</button>
                        <p className="my-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</p>
                        <p className="" style={{ color: "#ff5573", cursor: "pointer", fontFamily: "Gilroy-Medium" }} >Chat with Our Advisor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
