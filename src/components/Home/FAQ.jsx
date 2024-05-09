import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqImg from "../../assets/30576701-7718875-1.svg";

const FAQ = () => {
  return (
    <div className="most-searched-countries-container featured-university-container py-5 p">
     
     <div className="container py-2 course_container">
            <div className="py-5"></div>
        <h1 className="what-we-can-do-title"> Frequently Asked Question </h1>
        <p className="what-we-can-do-description">
          {" "}
          Confused about something? Here is a quick list of FAQs to help you get started. If you still need further assist try getting in touch with out team and we would love to assist you. 

        </p>

        <div className="faq_container my-5 ">
        <div className="faq">
          <Accordion defaultExpanded className="my-faq-accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "'Gilroy', sans-serif",
                }}
              >
                {" "}
                Can Good Design Grow your Business and Customer
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "'Gilroy', sans-serif" }}>
                Learn how to grow your business and customers to generate huge
                profits and create awareness for your brand. Best way to grow
                your business in 2023
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: "2rem 0" }}  className="my-faq-accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "'Gilroy', sans-serif",
                }}
              >
                {" "}
                How to Enhance Motivation for Better Business leads
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "'Gilroy', sans-serif" }}>
                Learn how to grow your business and customers to generate huge
                profits and create awareness for your brand. Best way to grow
                your business in 2023{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  className="my-faq-accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "'Gilroy', sans-serif",
                }}
              >
                {" "}
                7 Ways Neuromarketing Impact Marketing Campaign
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "'Gilroy', sans-serif" }}>
                Learn how to grow your business and customers to generate huge
                profits and create awareness for your brand. Best way to grow
                your business in 2023{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
        
        </div>
        <img className=" faq_img" loading="lazy" alt="" src={faqImg} />
      </div>
      </div>
     
    </div>
  );
};

export default FAQ;
