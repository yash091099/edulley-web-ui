import React from "react";
import { CalendarMonth } from "@mui/icons-material";
import blog from "../assets/blog-detail.png";

const BlogCard = () => {
  return (
    <div className="course_card mt-0">
      <h4 className="fw-semibold">
        Transforming the landscape of Education with revolutionary technology
      </h4>
      <p
        style={{ fontSize: "13px" }}
        className="text-secondary d-flex align-items-center gap-2"
      >
        <CalendarMonth /> 12 June 2023
      </p>
      <img
        style={{ width: "100%", height: "auto" }}
        className="rounded mt-4"
        src={blog}
        alt=""
      />
      <p className="fw-light mt-4">
        Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
        neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras
        ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet
        nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
        neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
      </p>
    </div>
  );
};

export default BlogCard;
