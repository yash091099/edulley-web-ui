  import React, { useEffect, useRef, useState } from "react";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  import logo from "../assets/navbar-logo@2x.png";
  // import profile from "../assets/Avatar.png";
  import profile from "../assets/profile_1.png";
  import profile_male from "../assets/profile_male.png";
  import profile_female from "../assets/profile_female.png";
  import Button from "@mui/material/Button";
  import { Logout } from "@mui/icons-material";
  import { Tooltip } from "@mui/material";
import LoginModal from "./auth/login";

  const Navbar = () => {
    const navigate = useNavigate();
    const navbarToggleRef = useRef(null);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");
    const navbarRef = useRef(null);
    const [profileImageSrc, setProfileImageSrc] = useState(profile);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
      setActiveLink(location.pathname);
      console.log('iwowoeoejrih3irij')
      const handleOutsideClick = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          return;
        }
        setActiveLink(location.pathname);
      };
     
      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [location.pathname]);

    useEffect(() => {
      const updateProfileImage = () => {
        const profileUpdatedValue = localStorage.getItem("profileUpdated");
        if (profileUpdatedValue === "m") {
          setProfileImageSrc(profile_male);
        } else if (profileUpdatedValue === "f") {
          setProfileImageSrc(profile_female);
        } else {
          setProfileImageSrc(profile);
        }
      };
  
      updateProfileImage(); // initial load
  
      const handleStorageChange = (event) => {
        if (event.key === "profileUpdated") {
          updateProfileImage();
        }
      };
  
      window.addEventListener("storage", handleStorageChange);
  
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);
    const handleLinkClick = (link) => {
      setActiveLink(link);
      if (navbarToggleRef.current) {
        navbarToggleRef.current.click();
      }
    };

    const handleLogout = () => {
      localStorage.clear();
      window.location.href = window.location.href;
    };

    return (
      <nav
        className="navbar navbar-expand-lg bg-body-white navbar-fiexd"
        ref={navbarRef}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => handleLinkClick("/")}
          >
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
            ref={navbarToggleRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <Link
                  className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                  onClick={() => handleLinkClick("/")}
                >
                <span ></span> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/courses" ? "active" : ""
                  }`}
                  to="/courses"
                  onClick={() => handleLinkClick("/courses")}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/institutions" ? "active" : ""
                  }`}
                  to="/institutions"
                  onClick={() => handleLinkClick("/institutions")}
                >
                  Universities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/scholarship" ? "active" : ""
                  }`}
                  to="/scholarship"
                  onClick={() => handleLinkClick("/scholarship")}
                >
                  Scholarship
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/career-path" ? "active" : ""
                  }`}
                  to="/career-path"
                  onClick={() => handleLinkClick("/career-path")}
                >
                  Career Finder
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Exams
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "/exam-ielts" ? "active" : ""
                      }`}
                      to="/exam-ielts"
                      onClick={() => handleLinkClick("/exam-ielts")}
                      style={{ fontFamily: "Gilroy-Medium" }}
                    >
                      IELTS Exam
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "/ielts-topic" ? "active" : ""
                      }`}
                      to="/ielts-topic"
                      onClick={() => handleLinkClick("/ielts-topic")}
                      style={{ fontFamily: "Gilroy-Medium" }}
                    >
                      IELTS Topic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "/ielts-cue-card" ? "active" : ""
                      }`}
                      to="/ielts-cue-card"
                      onClick={() => handleLinkClick("/ielts-cue-card")}
                      style={{ fontFamily: "Gilroy-Medium" }}
                    >
                      IELTS Cue Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "/ielts-essay" ? "active" : ""
                      }`}
                      to="/ielts-essay"
                      onClick={() => handleLinkClick("/ielts-essay")}
                      style={{ fontFamily: "Gilroy-Medium" }}
                    >
                      IELTS Essay
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Application
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "/sop" ? "active" : ""
                      }`}
                      style={{ fontFamily: "Gilroy-Medium" }}
                      to="/sop"
                      onClick={() => handleLinkClick("/sop")}
                    >
                      SOP
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "/lor" ? "active" : ""
                      }`}
                      to="/lor"
                      style={{ fontFamily: "Gilroy-Medium" }}
                      onClick={() => handleLinkClick("/lor")}
                    >
                      LOR
                    </Link>
                  </li>
                      
                </ul>
              </li> */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/blog" ? "active" : ""}`}
                  to="/blog"
                  onClick={() => handleLinkClick("/blog")}
                >
                  Blog
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {JSON.parse(localStorage.getItem("_u")) &&<img
                onClick={() => navigate("/profile")}
                className="profile"
                alt="avatar"
                title="Profile"
                style={{ cursor: "pointer" }}
                src={profileImageSrc}
                />}
              {!JSON.parse(localStorage.getItem("_u")) &&
              <>
          <Button
  className="btn primary"
  style={{ color: '#ff5573', marginLeft: '10px', border: '1px solid #ff5573' }}
  onClick={() => {
    setShowLoginModal(false);

    setShowLoginModal('signin');
  }}
>
  Login
</Button>
<Button
  className="btn primary"
  style={{ color: '#ff5573', marginLeft: '10px', border: '1px solid #ff5573' }}
  onClick={() => {
    setShowLoginModal(false);

    setShowLoginModal('signup');
  }}
>
  Signup
</Button>
              </>
              }
                
              {JSON.parse(localStorage.getItem("_u")) &&  <Tooltip title="Logout" position="top"><Button  className="btn primary" style={{color:'#ff5573'}} onClick={handleLogout}>
                <Logout/>
              </Button></Tooltip>}
              {showLoginModal && (
  <LoginModal
    isOpen={showLoginModal ? true : false}
    onClose={() => setShowLoginModal(false)}
    initialTab={showLoginModal === 'signup' ? 'signup' : 'signin'}
  />
)}
            </form>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;