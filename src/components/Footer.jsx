import React from "react";
import down1 from "../assets/frame-1000003797@2x.png";
import down2 from "../assets/frame-1000003798@2x.png";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import fb from "../assets/fb.svg";
import instagaram from "../assets/instagram.svg";
import logo from "../assets/4@2x.png";
import { Link } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer  pt-4 container-fluid ">
      <div className="px-5 inner_footer pb-5">
        <div className="f_logo">
          <Link to="/">
            <img
              style={{ cursor: "pointer", width: "120px", }}
              loading="lazy"
              alt=""
              src={logo}
            />
          </Link>
          <div className="foot_img">
            <div className="text-center">Download now</div>
            <div className="d-flex flex-column mt-2 gap-2">
              <img
                style={{ cursor: "pointer" }}
                className=""
                loading="lazy"
                alt=""
                src={down1}
              />
              <img
                style={{ cursor: "pointer" }}
                className=""
                loading="lazy"
                alt=""
                src={down2}
              />
            </div>
          </div>
        </div>
        <div className="f_menu ">
          <h5 className="fw-bold">Countries</h5>
          <ul>
            <li>USA</li>
            <li>UK</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>Ireland</li>
          </ul>
        </div>
        <div className="f_menu">
          <h5 className="fw-bold">Company</h5>
          <ul>
            <li
              style={{ cursor: "pointer" }}
              //   onClick={() => navigate("/career-path")}
            >
              Career
            </li>
            <Link to="/courses">
              <li style={{ cursor: "pointer" }}>Courses</li>
            </Link>
            <Link to="/institutions">
              <li style={{ cursor: "pointer" }}>Institutions</li>
            </Link>
            <Link to="/scholarship">
              <li style={{ cursor: "pointer" }}>Scholarship</li>
            </Link>
            <Link to="faq">
              <li style={{ cursor: "pointer" }}>FAQ</li>
            </Link>
            <Link to="blog">
              <li style={{ cursor: "pointer" }}>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="f_menu">
          <h5 className="fw-bold">EXAMS</h5>
          <ul>
            <Link to="/exam-ielts">
              <li style={{ cursor: "pointer" }}>IELTS</li>
            </Link>
            <li>TOEFEL</li>
            <li>PTE</li>
            <li>GRE</li>
            <li>GMAT</li>
            <li>DET</li>
          </ul>
        </div>
        <div className="f_menu">
          <h5 className="fw-bold">Others</h5>
          <ul>
            <Link to="/privacy-policy">
              <li style={{ cursor: "pointer" }}>Privacy Policy</li>
            </Link>
            <Link to="/terms-and-condition">
              <li style={{ cursor: "pointer" }}>Terms & Condition</li>
            </Link>

            <Link to="/refund-policy">
              <li style={{ cursor: "pointer" }}>Refund Policy</li>
            </Link>
            <Link>
            <li style={{ cursor: "pointer" }}>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="f_menu">
          <h5 className="fw-bold">Connect with us</h5>
          <ul>
          
            <div className="d-flex align-items-center gap-3 mt-3">
              <div className="f_contact">
                <img className="" loading="lazy" alt="" src={mail} />
              </div>
              <div>
                <p>Muskan Anni</p>
                <p>muskan@edulley.com</p>
              </div>
            </div>
            <div className="d-flex aling-items-center gap-3 mt-4">
              <a href="https://wa.me/message/SMDIYPHGQFQRC1" target="_blank" className="f_contact">
                <WhatsApp/>
              </a>
            
              <a href="https://www.linkedin.com/in/muskan-anni/" target="_blank" className="f_contact">
                <img className="" loading="lazy" alt="" src={linkedin} />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <p
        className="text-center text-white py-3 "
        style={{ borderTop: "1px solid white" }}
      >
        Copyright © 2023 | All rights reserved by Edulley
      </p>
    </div>
  );
};

export default Footer;
