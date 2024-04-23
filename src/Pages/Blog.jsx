import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarMonth } from '@mui/icons-material';
import blog_icon from '../assets/blog_icon.png';
import defaultBlogImage from "../assets/blog.png";
import CustomLoader from '../components/loader';
import toast from 'react-hot-toast';
import { getBlogs } from '../Services/dashboard';
import Pagination from '../components/Pagination';
import scholar1 from '../assets/scholarship1.png';

const Blog = () => {
    const navigate=useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(9);

    const getBlogsData = async () => {
        setLoading(true);
        try {
            const response = await getBlogs();
            if (!response.data?.error) {
                // Multiplying data for testing pagination
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

    useEffect(() => {
        getBlogsData();
    }, []);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container py-4 course_container">
            <div className="py-5"></div>
            <div className="row justify-content-between inner_course mt-0">
                <div className="row">
                    <div>
                        <h1 className="font-gilroy fw-bold">
                            <img src={blog_icon} className="img-fluid" alt="" />
                            <span className="mt-1 ml-2">Blogs</span>
                        </h1>
                        <p className="what-we-can-do-description">
                            Transforming the landscape of Education with revolutionary technology
                        </p>
                    </div>
                </div>
                {loading ? (
                    <CustomLoader />
                ) : (
                    <div className="col-md-9">
                        <div className="row">
                            {currentBlogs.map(blog => (
                                <div className="col-md-4" key={blog._id}>
                                    <div onClick={ () => navigate('/blog-details', { state: blog })}>
                                        <div className="countries cursor-pointer uni_card blog-card">
                                            <img src={blog.bannerImage || defaultBlogImage} alt="Blog" className="university-image" />
                                            <div className="p-3">
                                                <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: '13px' }}>
                                                    <CalendarMonth /> {new Date(blog.createdAt).toLocaleDateString('en-US')}
                                                </p>
                                                <p className="mt-2 text-truncate" style={{ maxHeight: '3rem', overflow: 'hidden' }}>
                                                    {blog.content}
                                                </p>
                                                <div className="blog-tags">
                                                    {blog.tags.map(tag => (
                                                        <span className="badge bg-secondary me-2" key={tag}>{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination
                            itemsPerPage={blogsPerPage}
                            totalItems={blogs.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                )}
                <div className="col-md-3">
                    <div className="s_img_card text-center">
                        <p>Look at all the courses at University name</p>
                        <button className="explore-button py-2 fw-light mt-2">Explore All Courses</button>
                        <p className="fw-bold my-2">OR</p>
                        <p className="fw-bold" style={{ color: "#ff5573", cursor: "pointer" }}>Chat with Our Advisor</p>
                    </div>
                    <div className="s_img_card text-center">
                        <img src={scholar1} alt="" />
                        <p>Let’s look at the scholarships available for you</p>
                        <button className="explore-button py-2 fw-light mt-2">Explore All Scholarship</button>
                        <p className="fw-bold my-2">OR</p>
                        <p className="fw-bold" style={{ color: "#ff5573", cursor: "pointer" }}>Chat with Our Advisor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
