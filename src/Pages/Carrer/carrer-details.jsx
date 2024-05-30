import React, { useEffect, useState } from "react";
import CustomLoader from "../../components/loader";
import toast from "react-hot-toast";
import { getBlogs } from '../../Services/dashboard';
import ellipse from "../../assets/Ellipse.png";
import { getUniversities, getCourses } from "../../Services/dashboard";
import list from "../../assets/list.svg";
import defaultBlogImage from "../../assets/blog.png";
import course_icon from "../../assets/course.png";
import time from "../../assets/ion_time-outline.png";
import walletImage from "../../assets/solar_wallet-linear.png";
import { CalendarMonth } from "@mui/icons-material";

const CarrerPathDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("Undergraduate");

  const fetchUniversities = async () => {
    try {
      const res = await getUniversities();
      if (!res?.data?.error) {
        setUniversities(res.data.data);
        console.log(res.data.data, "universities");
      } else {
        toast.error("Failed to load universities data.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching universities.");
    }
  };

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

  useEffect(() => {
    fetchUniversities();
    fetchCourses();
    getBlogsData();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const capitaliseFirstWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container py-5 course_container" style={{ backgroundColor: "#FFFBFB" }}>
      <div className="py-4"></div>
      {loading && <CustomLoader />}
      <div className="row mb-4">
        <div className="col-md-9 d-flex align-items-center">
          <p style={{ fontFamily: 'Gilroy-Medium' }}>Courses & University suitable paths for you</p>
        </div>
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <span style={{ fontFamily: 'Gilroy-Medium', marginRight: '10px', width: "80px" }}>Sort by</span>
          <select className="form-select" style={{ fontFamily: 'Gilroy-Medium' }}>
            <option value="Relevance">Relevance</option>
            <option value="Deadline">Deadline</option>
            <option value="FeeHighToLow">Fee Amount (High to Low)</option>
            <option value="FeeLowToHigh">Fee Amount (Low to High)</option>
            <option value="TopRated">Top Rated</option>
            <option value="Applications">No. of Applications</option>
          </select>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {courses.map((scholarship, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="course_card p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h4 style={{ fontFamily: "Gilroy-Bold" }}>{scholarship?.courseName}</h4>
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <p className="text-secondary" style={{ fontFamily: "Gilroy-Regular" }}>Fees</p>
                        <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>$ {scholarship?.uniqueCourseInfo?.fee}/Year</p>
                      </div>
                      <div className="ml-3">
                        <p className="text-secondary" style={{ fontFamily: "Gilroy-Regular" }}>Duration</p>
                        <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>{scholarship?.uniqueCourseInfo?.duration} Years</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h1 className="course-head mt-5">
                <span className="mt-1 ml-2" style={{ fontFamily: "Gilroy-Bold", color: "#FF5573" }}>Popular Courses</span>
              </h1>
              <div className="mt-3 gap-3 flex-wrap">
                <button
                  className={`detail_button ${activeTab === "Undergraduate" ? "active-tab-course" : ""}`}
                  style={{ fontFamily: "Gilroy-SemiBold" }}
                  onClick={() => handleTabClick("Undergraduate")}
                >
                  Undergraduate
                </button>
                <button
                  className={`detail_button ${activeTab === "Postgraduate" ? "active-tab-course" : ""}`}
                  style={{ fontFamily: "Gilroy-SemiBold" }}
                  onClick={() => handleTabClick("Postgraduate")}
                >
                  Postgraduate
                </button>
                <div className="row mt-3">
                  {courses?.map((course, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                      <div className="course_card p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                        <h4 style={{ fontFamily: "Gilroy-Bold" }}>{course?.courseName}</h4>
                        <h6 style={{ fontFamily: "Gilroy-Medium" }}>
                          <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }} alt="" src={ellipse} />
                          {course?.universityName}
                        </h6>
                        <div className="gap-2 d-flex align-items-center">
                          <div>
                            <p className="text-secondary" style={{ fontFamily: "Gilroy-Regular" }}>
                              <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }} alt="" src={walletImage} />
                              Fees($)
                            </p>
                            <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>$ {course?.uniqueCourseInfo?.fee}</p>
                          </div>
                          <div className="ml-5">
                            <p className="text-secondary" style={{ fontFamily: "Gilroy-Regular" }}>
                              <img style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }} alt="" src={time} />
                              Duration
                            </p>
                            <p className="hilight-danger" style={{ fontFamily: "Gilroy-Medium" }}>{course?.uniqueCourseInfo?.applicationDeadline?.split('T')[0]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="s_img_card text-center mb-4 p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
              <p style={{ fontFamily: "Gilroy-SemiBold" }}>Look at all the courses at University name</p>
              <button style={{ fontFamily: "Gilroy-Medium" }} className="explore-button py-2 fw-light mt-2">Explore All Courses</button>
              <p className="my-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</p>
              <p className="" style={{ color: "#ff5573", cursor: "pointer", fontFamily: "Gilroy-Medium" }}>Chat with Our Advisor</p>
            </div>
            <div className="s_img_card2 p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
              <p className="mt-2" style={{ fontFamily: "Gilroy-SemiBold", color: "#FF6477" }}>
                <img style={{ width: '2rem', height: '2rem', marginRight: "5px" }} src={list} alt="" />
                Related Blogs
              </p>
              <div>
                {blogs?.splice(0, 2)?.map((blog, index) => (
                  <div className="countries cursor-pointer uni_card blog-card mb-3" key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={blog.bannerImage || defaultBlogImage} alt="Blog" className="university-image img-fluid" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div className="p-3">
                      <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: '16px', fontFamily: "Gilroy-Regular", color: "#8D98A4" }}>
                        <CalendarMonth style={{ color: "#8D98A4" }} />
                        {formatDate(blog?.createdAt)}
                        <div className="blog-tags">
                          {blog.tags.map(tag => (
                            <span className="badge me-2 p-2" style={{ backgroundColor: "#FFF0F0", color: "#000000" }} key={tag}>{tag}</span>
                          ))}
                        </div>
                      </p>
                      <p className="mt-2 text-truncate" style={{ maxHeight: '3rem', overflow: 'hidden' }}>
                        {capitaliseFirstWord(blog?.heading)}
                      </p>
                      {blog.heading.length > 30 && (
                        <div className="tooltip">
                          <span className="tooltiptext" style={{ fontFamily: "Gilroy-Medium" }}>{blog.heading}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerPathDetails;
