import React from "react";
import down1 from "../assets/frame-1000003797@2x.png";
import down2 from "../assets/frame-1000003798@2x.png";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import logo from "../assets/4@2x.png";
import { Link } from "react-router-dom";
import { Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer  pt-4 container-fluid font-Gilroy-Medium">
      <div className="px-5 inner_footer pb-5">
      <div className="f_logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Link to="/">
    <img
      style={{ cursor: "pointer", width: "150px" }} // Increase the width as needed
      loading="lazy"
      alt=""
      src={logo}
    />
  </Link>
</div>

        <div className="f_logo">
        <div className="foot_img">
            {/* <div className="text-center" style={{fontFamily:"Gilroy-Medium",fontSize:"18px"}}>Download Now</div>
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
            </div> */}

            <h5 className="mt-5" style={{fontFamily:"Gilroy-Medium",fontSize:"18px"}}>Contact With Us</h5>
            <div className="d-flex align-items-center gap-3 mt-4">
              <a href="https://wa.me/message/SMDIYPHGQFQRC1" target="_blank" className="f_contact">
                <WhatsApp/>
              </a>
              <a href="https://www.linkedin.com/in/muskan-anni/" target="_blank" className="f_contact">
                <img style={{width:"1.5rem",height:"1.5rem"}} className="" loading="lazy" alt="" src={linkedin} />
              </a>
              <a href="https://www.instagram.com/muskan-anni/" target="_blank" className="f_contact">
                <Instagram/>
              </a>
            </div>
          </div>
          
        </div>
        <div className="f_menu">
  <ul>
    <div className="d-flex flex-column gap-3 mt-3">
      <div className="d-flex align-items-center gap-3">
        <div className="f_contact">
          <img className="" loading="lazy" alt="" src={phone} />
        </div>
        <div>
          <p style={{fontFamily:"Gilroy-Medium",fontSize:"18px"}}>Phone</p>
          <p style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }} onClick={() => window.location.href = "tel:+91-9344534128"}>+91-9344534128</p>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3 mt-3">
        <div className="f_contact">
          <img className="" loading="lazy" alt="" src={mail} />
        </div>
        <div>
          <p style={{fontFamily:"Gilroy-Medium",fontSize:"18px"}}>Mail</p>
          <p style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }} onClick={() => window.location.href = "mailto:info@edulley.com"}>info@edulley.com</p>
        </div>
      </div>
    </div>
  </ul>
</div>

        <div className="f_menu ">
          <h5 style={{fontFamily:"Gilroy-Medium"}}>Countries</h5>
          <ul>
            <li style={{fontFamily:"Gilroy-Medium"}}>The USA</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>The UK</li>
            {/* <li style={{fontFamily:"Gilroy-Medium"}}>Canada</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>Australia</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>Ireland</li> */}
          </ul>
        </div>
        <div className="f_menu">
        <h5 style={{fontFamily:"Gilroy-Medium"}}>Exams</h5>
          <ul>
            <Link to="/exam-ielts">
              <li style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }}>IELTS</li>
            </Link>
            {/* <li style={{fontFamily:"Gilroy-Medium"}}>TOEFEL</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>PTE</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>GRE</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>GMAT</li>
            <li style={{fontFamily:"Gilroy-Medium"}}>DET</li> */}
          </ul>
        </div>
        <div className="f_menu">
          <h5 style={{fontFamily:"Gilroy-Medium"}}>Company</h5>
          <ul>
          <Link to="/career-path">

            <li  style={{ cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}>
              Career
            </li>
            </Link>
            <Link to="/courses">
              <li style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }}>Courses</li>
            </Link>
            <Link to="/institutions">
              <li style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }}>Institutions</li>
            </Link>
            <Link to="/scholarship">
              <li style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }}>Scholarship</li>
            </Link>
            <Link to="faq">
              <li style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }}>FAQ</li>
            </Link>
            <Link to="blog">
              <li style={{ cursor: "pointer",fontFamily:"Gilroy-Medium" }}>Blog</li>
            </Link>
          </ul>
        </div>
       
        <div className="f_menu">
          <h5 style={{fontFamily:"Gilroy-Medium"}}>Others</h5>
          <ul>
            <Link to="/sop">
              <li style={{ cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}>Sop</li>
            </Link>
            <Link to="/lor">
              <li style={{ cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}>Lor</li>
            </Link>
            <Link to="/privacy-policy">
              <li style={{ cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}>Privacy Policy</li>
            </Link>
            <Link to="/terms-and-condition">
              <li style={{ cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}>Terms & Condition</li>
            </Link>
            <Link to="/refund-policy">
              <li style={{ cursor: "pointer" ,fontFamily:"Gilroy-Medium"}}>Refund Policy</li>
            </Link>
            
            {/* <Link>
            <li style={{ cursor: "pointer" }}>Contact Us</li>
            </Link> */}
          </ul>
        </div>
      </div>
      <p
        className="text-center text-white py-3 "
        style={{ borderTop: "1px solid white" ,fontFamily:"Gilroy-Medium"}}
      >
        Copyright © 2024 | All rights reserved by Edulley
      </p>
    </div>
  );
};

export default Footer;
