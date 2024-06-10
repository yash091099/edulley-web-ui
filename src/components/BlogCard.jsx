import React, { useEffect, useState } from "react";
import { CalendarMonth, Share } from "@mui/icons-material";
import DOMPurify from 'dompurify';
import { getBlogs } from "../Services/dashboard";
import CustomLoader from "../components/loader";
import { toast } from "react-hot-toast";
import defaultBlogImage from "../assets/blog.png";
import quoteIcon from "../assets/quote.png";
import blog from "../assets/blog-detail.png";

const BlogCard = ({ blogDetails }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  
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

  const sanitizeConfig = {
    ALLOWED_TAGS: ['strong', 'em', 'a', 'p', 'ul', 'ol', 'li', 'br', 'span', 'img'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'style'],
    ADD_TAGS: ['b']
  };

  const sanitizedContent = DOMPurify.sanitize(blogDetails?.content || '', sanitizeConfig);
  const sanitizedQuote = DOMPurify.sanitize(blogDetails?.quote || '', sanitizeConfig);

  const handleLinkClick = (e) => {
    const { target } = e;
    if (target.tagName === 'A') {
      e.preventDefault();
      const href = target.textContent;
      window.open(href, '_blank');
    }
  };

  return (
    <div className="course_card2 mt-0" onClick={handleLinkClick}>
      {loading && <CustomLoader />}
      <h4 style={{ fontFamily: "Gilroy-Bold" }}>
        {capitaliseFirstWord(blogDetails?.heading || '')}
      </h4>
      <p
        style={{ fontFamily: "Gilroy-Medium", color: "#8D98A4" }}
        className="text-secondary d-flex align-items-center gap-2"
      >
        <CalendarMonth color="#8D98A4" /> {formatDate(blogDetails?.createdAt)}
      </p>
      <div style={{ position: 'relative' }}>
        <img
          style={{ width: "100%", height: "500px", borderRadius: "16px" }}
          className="mt-4"
          src={blogDetails?.bannerImage || blog}
          alt="Blog banner"
        />
      
      </div>
      {/* <label className="mt-3" style={{ fontFamily: "Gilroy-Bold" }}>Content:</label> */}
      <div
        style={{ fontFamily: "Gilroy-Medium" }}
        className="fw-light blog-content mt-3"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
      {blogDetails?.quote && (
        <>
          {/* <label className="mt-2" style={{ fontFamily: "Gilroy-Bold" }}>Quote:</label> */}
          <div
            style={{ fontFamily: "Gilroy-Medium", backgroundColor: "#FFF0F0", padding: "15px",paddingLeft: "70px", borderRadius: "10px", position: "relative" }}
            className="fw-light blog-quote mt-3 mb-3"
          >
            <img src={quoteIcon} alt="Quote Icon" style={{ position: "absolute", top: "32px", left: "20px", width: "30px", height: "30px" }} />
            <div dangerouslySetInnerHTML={{ __html: sanitizedQuote }} />
          </div>
        </>
      )}
      <div className="blog-tags mt-3" style={{ fontFamily: "Gilroy-Medium" }}>
        Tags {blogDetails?.tags.map((tag, index) => (
          <span className="badge ml-2 p-2" style={{ backgroundColor: "#FFF0F0", color: "#000000" }} key={index}>{tag}</span>
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-start">
  {blogs.slice(0, 3).map(blog => (
    <div className="col-md-4" key={blog._id}>
      <div>
        <div className="countries cursor-pointer uni_card blog-card">
          <img src={blog.bannerImage || defaultBlogImage} alt="Blog" className="university-image img-fluid" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="p-3">
            <p className="text-secondary d-flex align-items-center gap-2" style={{ fontSize: '16px', fontFamily: "Gilroy-SemiBold", color: "#8D98A4" }}>
              <CalendarMonth style={{ color: "#8D98A4" }} />
              {formatDate(blog?.createdAt)}
              <div className="blog-tags">
                {blog.tags.map(tag => (
                  <span className="badge m-1 p-1" style={{ backgroundColor: "#FFF0F0", color: "#000000" }} key={tag}>{tag}</span>
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
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default BlogCard;
