import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar-logo@2x.png";
import profile from "../assets/Avatar.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-white">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img className="logo" alt="Home" src={logo} />
        </Link>{" "}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/institutions">
                Universities
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/scholarship">
                Scolarship
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exams
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/exam-ielts">
                    IELTS Exam
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/ielts-topic">
                    IELTS Topic
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/ielts-cue-card">
                    IELTS Cue Card
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/ielts-essay">
                    IELTS Essay
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <img
              //   onClick={() => navigate("/profile")}
              className="profile"
              alt="avatar"
              title="Profile"
              style={{ cursor: "pointer", objectFit: "cover" }}
              src={profile}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
