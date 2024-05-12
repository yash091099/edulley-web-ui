import React from "react";
import { CalendarMonth } from "@mui/icons-material";
import blog from "../assets/blog-detail.png"; // Make sure this path is correct for your default image
import DOMPurify from 'dompurify';

const BlogCard = ({ blogDetails }) => {
  console.log(blogDetails, 'blogDetails');

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const capitaliseFirstWord = (str) => {
    return str
      .charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Adjust the configuration for DOMPurify to allow more tags and attributes
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
    <div className="course_card mt-0" onClick={handleLinkClick}>
      <h4 style={{fontFamily:"Gilroy-Bold"}}>
        {capitaliseFirstWord(blogDetails?.heading || '')}
      </h4>
      <p
      style={{fontFamily:"Gilroy-Regular",color:"#8D98A4"}}
        className="text-secondary d-flex align-items-center gap-2"
      >
        <CalendarMonth  color="#8D98A4" /> {formatDate(blogDetails?.createdAt)}
      </p>
      <img
        style={{ width: "100%", height: "500px" }}
        className="rounded mt-4"
        src={blogDetails?.bannerImage || blog}
        alt="Blog banner"
      />
      <label className="mt-3" style={{fontFamily:"Gilroy-Bold"}}>Content:</label>
      <div
       style={{fontFamily:"Gilroy-Regular"}}
        className="fw-light blog-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
      {blogDetails?.quote && (
        <>
          <label className="mt-2" style={{fontFamily:"Gilroy-Bold"}}>Quote:</label>
          <div
          style={{fontFamily:"Gilroy-Regular"}}
            className="fw-light blog-quote"
            dangerouslySetInnerHTML={{ __html: sanitizedQuote }}
          ></div>
        </>
      )}
      <div className="blog-tags mt-3">
        {blogDetails?.tags.map((tag, index) => (
          <span className="badge me-2 p-2" style={{backgroundColor:"#FFF0F0",color:"#000000"}} key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
