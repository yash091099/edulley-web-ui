import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqImg from "../../assets/30576701-7718875-1.svg";

const FAQ = () => {
  const isFAQPage = window.location.pathname === '/faq';
  return (
    <div className="most-searched-countries-container featured-university-container py-5 p" style={{ background: "rgb(255 250 250)" }}>
      <div className="container py-2 course_container">
        {isFAQPage && <div className="py-5"></div>}
        <h1 className="what-we-can-do-title" style={{ fontFamily: "Gilroy-Bold " }}> Frequently Asked Questions </h1>
        <p className="what-we-can-do-description" style={{ fontFamily: "Gilroy-Medium" }}>
          Confused about something? Here is a quick list of FAQs to help you get started. If you still need further assistance, try getting in touch with our team and we would love to assist you.
        </p>

        <div className="faq_container my-5 ">
          <div className="faq">
            <Accordion style={{ background: "rgb(255 250 250)" }} defaultExpanded className="my-faq-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Gilroy-Medium ",
                  }}
                >
                  Do I have to pay anything to apply with Edulley?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Gilroy-Medium" }}>
                  No, you don't have to pay any amount to anyone to process your application with us. However, if an institution has any application fee that might be payable at the time of application submission.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ background: "rgb(255 250 250)" }}  className="my-faq-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Gilroy-Medium"
                  }}
                >
                  How do I apply?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Gilroy-Medium" }}>
                  You can sign up, shortlist courses and submit your application to the favorite institution. We would be in between to check your application and to make sure you do it correctly.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ background: "rgb(255 250 250)" }} className="my-faq-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Gilroy-Medium"
                  }}
                >
                  How many applications I can submit at max?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Gilroy-Medium" }}>
                  You can submit up to 5 applications to different institutions. You can choose universities based on the order of your chances to get through.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ background: "rgb(255 250 250)" }} className="my-faq-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Gilroy-Medium"
                  }}
                >
                  Will Edulley help in preparing for the Visa Interview as well?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Gilroy-Medium" }}>
                  Yes, we would provide complete assistance during your visa process and prepare you for any visa interview all at no additional cost.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ background: "rgb(255 250 250)" }} className="my-faq-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Gilroy-Medium"
                  }}
                >
                  Will Edulley write my statement of purpose (SOP)?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Gilroy-Medium" }}>
                  We encourage the applicants to write their own statement; however, if you think you cannot do it yourself, you can seek advice from your dedicated expert on your profile.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <img className="faq_img" loading="lazy" alt="" src={faqImg} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
