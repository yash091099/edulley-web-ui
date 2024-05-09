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
      <h4 className="fw-semibold">
        {capitaliseFirstWord(blogDetails?.heading || '')}
      </h4>
      <p
        style={{ fontSize: "13px" }}
        className="text-secondary d-flex align-items-center gap-2"
      >
        <CalendarMonth /> {formatDate(blogDetails?.createdAt)}
      </p>
      <img
        style={{ width: "100%", height: "500px" }}
        className="rounded mt-4"
        src={blogDetails?.bannerImage || blog}
        alt="Blog banner"
      />
      <label className="fw-bold mt-3">Content:</label>
      <div
        className="fw-light blog-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
      {blogDetails?.quote && (
        <>
          <label className="fw-bold mt-2">Quote:</label>
          <div
            className="fw-light blog-quote"
            dangerouslySetInnerHTML={{ __html: sanitizedQuote }}
          ></div>
        </>
      )}
      <div className="blog-tags">
        {blogDetails?.tags.map((tag, index) => (
          <span className="badge bg-secondary me-2" key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
