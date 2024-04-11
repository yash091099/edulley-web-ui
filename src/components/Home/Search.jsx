import React from "react";
import { FaSearch } from "react-icons/fa";
import book from "../../assets/book.svg";
import school from "../../assets/school.svg";
import calender from "../../assets/calendar.svg";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className=" search_container container py-5">
      <h4 className="text-center fw-semibold mb-4">Search Courses</h4>
      <div className="bg-white rounded section_inner  ">
        <div className=" ps-3">
          <img
            style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
            alt=""
            src={book}
          />
          <input className=" text-gray-100 " placeholder="Course" type="text" />
        </div>
        <div className="  ps-3">
          <img
            style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
            alt=""
            src={school}
          />
          <input className="text-gray-100 " placeholder="Intake" type="text" />
        </div>
        <div className="  ps-3">
          <img
            style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
            alt=""
            src={calender}
          />
          <input className="text-gray-100 " placeholder="Year" type="text" />
        </div>
        <Link className="px-4 search_btn" to="/courses-list">
          <FaSearch />
        </Link>
      </div>
    </div>
  );
};

export default Search;
