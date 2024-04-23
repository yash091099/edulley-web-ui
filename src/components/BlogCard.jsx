import React from "react";
import { CalendarMonth } from "@mui/icons-material";
import blog from "../assets/blog-detail.png";

const BlogCard = ({blogDetails}) => {
  console.log(blogDetails,'blogDetails')
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  return (
    <div className="course_card mt-0">
      <h4 className="fw-semibold">
        {blogDetails?.heading}
      </h4>
      <p
        style={{ fontSize: "13px" }}
        className="text-secondary d-flex align-items-center gap-2"
      >
        <CalendarMonth /> {formatDate(blogDetails?.createdAt)}
      </p>
      <img
        style={{ width: "100%", height: "auto" }}
        className="rounded mt-4"
        src={blogDetails?.bannerImage||blog}
        alt=""
      />
     <label className="fw-bold mt-3 ">Content :</label>
      <p className="fw-light ">
        {blogDetails?.content}
      </p>
      <label className="fw-bold mt-2">Quote :</label>
      <p className="fw-light">
        {blogDetails?.quote}
      </p> 
      <div className="blog-tags">
          {blogDetails?.tags.map(tag => (
              <span className="badge bg-secondary me-2" key={tag}>{tag}</span>
          ))}
      </div>
    </div>
  );
};

export default BlogCard;
