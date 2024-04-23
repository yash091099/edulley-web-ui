import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import logo from "../assets/navbar-logo@2x.png";
import profile from "../assets/Avatar.png";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-body-white navbar-fiexd">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo" alt="Home" src={logo} />
        </Link>{" "}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/institutions">
                Universities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scholarship">
                Scolarship
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exams
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/exam-ielts">
                    IELTS Exam
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ielts-topic">
                    IELTS Topic
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ielts-cue-card">
                    IELTS Cue Card
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ielts-essay">
                    IELTS Essay
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
          <form onClick={() => navigate("/profile")} className="d-flex" role="search">
            <img
              //   onClick={() => navigate("/profile")}
              className="profile"
              alt="avatar"
              title="Profile"
              style={{ cursor: "pointer"}}
              src={profile}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
