
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { addStudent, editStudent, getStudentDetailsById } from "../../../Services/dashboard";
import CustomLoader from "../../loader";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TestScores() {
  const _u = JSON.parse(localStorage.getItem('_u'))
  const userId = _u?._id
  const [editMode, setEditMode] = useState(false);
  const [editModeData, setEditModeData] = useState({});
  const [loading, setLoading] = useState(false);
  const [testScores, setTestScores] = useState({
    ieltsOverall: "",
    ieltsQuantitative: "",
    ieltsAnalytical: "",
    ieltsVerbal: "",
    ieltsDateOfExam: "",
    ieltsYetToTake: false,
    ieltsLookingForWaiver: false,
    greOverall: "",
    greQuantitative: "",
    greAnalytical: "",
    greVerbal: "",
    greDateOfExam: "",
    greYetToTake: false,
    greLookingForWaiver: false,
  });

  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        if (res?.data?.data) {
          setTestScores({
            ieltsOverall: res?.data?.data?.tests?.ieltsOverall,
            ieltsQuantitative: res?.data?.data?.tests?.ieltsQuantitative,
            ieltsAnalytical: res?.data?.data?.tests?.ieltsAnalytical,
            ieltsVerbal: res?.data?.data?.tests?.ieltsVerbal,
            ieltsDateOfExam: res?.data?.data?.tests?.ieltsDateOfExam?.split("T")[0],
            ieltsYetToTake: res?.data?.data?.tests?.ieltsYetToTake,
            ieltsLookingForWaiver: res?.data?.data?.tests?.ieltsLookingForWaiver,
            greOverall: res?.data?.data?.tests?.greOverall,
            greQuantitative: res?.data?.data?.tests?.greQuantitative,
            greAnalytical: res?.data?.data?.tests?.greAnalytical,
            greVerbal: res?.data?.data?.tests?.greVerbal,
            greDateOfExam: res?.data?.data?.tests?.greDateOfExam?.split("T")[0],
            greYetToTake: res?.data?.data?.tests?.greYetToTake,
            greLookingForWaiver: res?.data?.data?.tests?.greLookingForWaiver
          });
          setEditModeData(res?.data?.data)
          setEditMode(true);
        } else {
          setEditMode(false);
        }
      } catch (error) {
        console.error('Error fetching student details:', error);
        setEditMode(false);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTestScores(prevScores => ({ ...prevScores, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTestScores(prevScores => ({ ...prevScores, [name]: checked }));
  };

  const validateFields = () => {
    const { ieltsOverall, greOverall, ieltsDateOfExam, greDateOfExam } = testScores;
    if (!ieltsOverall || !greOverall || !ieltsDateOfExam || !greDateOfExam) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFields()) {
      toast.error("Please fill all required fields before submitting.");
      return;
    }
    const payload = {
      tests: {
        ...testScores
      }
    };
    let response;
    if (editMode) {
      payload.userId = userId
      response = await editStudent(payload);

    } else {
      payload.userId = userId
      response = await addStudent(payload);
    }
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Profile Data Updated successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <CustomLoader />}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography style={{ fontFamily: "Gilroy-Medium" }}>IELTS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="overview-container mb-4">
            <div className="row">
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Overall Score<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="ieltsOverall"
                  placeholder="Enter your overall score"
                  value={testScores.ieltsOverall}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Date of Exam<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="ieltsDateOfExam"
                  placeholder="Date of Exam"
                  value={testScores.ieltsDateOfExam}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Quantitative<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="ieltsQuantitative"
                  placeholder="Enter quantitative score"
                  value={testScores.ieltsQuantitative}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Verbal<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="ieltsVerbal"
                  placeholder="Enter verbal score"
                  value={testScores.ieltsVerbal}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Analytical Writing<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="ieltsAnalytical"
                  placeholder="Enter analytical writing score"
                  value={testScores.ieltsAnalytical}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12 formField" style={{ fontFamily: "Gilroy-Regular" }}>
                <label style={{ fontFamily: "Gilroy-Regular" }}>
                  <input
                    style={{ fontFamily: "Gilroy-Regular" }}
                    type="checkbox"
                    name="ieltsYetToTake"
                    className="mr-2"
                    checked={testScores.ieltsYetToTake}
                    onChange={handleCheckboxChange}
                  />
                  Yet to take this test
                </label>
              </div>
              <div className="col-md-12 formField" style={{ fontFamily: "Gilroy-Regular" }}>
                <label style={{ fontFamily: "Gilroy-Regular" }}>
                  <input
                    type="checkbox"
                    style={{ fontFamily: "Gilroy-Regular" }}
                    className="mr-2"
                    name="ieltsLookingForWaiver"
                    checked={testScores.ieltsLookingForWaiver}
                    onChange={handleCheckboxChange}
                  />
                  Looking for a Waiver
                </label>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-3">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography style={{ fontFamily: "Gilroy-Medium" }}>GRE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="overview-container">
            <div className="row">
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Overall Score<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="greOverall"
                  placeholder="Enter your overall score"
                  value={testScores.greOverall}
                  onChange={handleInputChange}
                />
              </div>
              <div className

="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Date of Exam<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="date"
                  name="greDateOfExam"
                  value={testScores.greDateOfExam}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Quantitative<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="greQuantitative"
                  placeholder="Enter quantitative score"
                  value={testScores.greQuantitative}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Verbal<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="greVerbal"
                  placeholder="Enter verbal score"
                  value={testScores.greVerbal}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>Analytical Writing<span style={{ color: 'red' }}>*</span></label>
                <input
                  style={{ fontFamily: "Gilroy-Regular" }}
                  type="text"
                  name="greAnalytical"
                  placeholder="Enter analytical writing score"
                  value={testScores.greAnalytical}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>
                  <input
                    style={{ fontFamily: "Gilroy-Regular" }}
                    type="checkbox"
                    name="greYetToTake"
                    className="mr-2"
                    checked={testScores.greYetToTake}
                    onChange={handleCheckboxChange}
                  />
                  Yet to take this test
                </label>
              </div>
              <div className="col-md-6 formField">
                <label style={{ fontFamily: "Gilroy-Regular" }}>
                  <input
                    style={{ fontFamily: "Gilroy-Regular" }}
                    type="checkbox"
                    className="mr-2"
                    name="greLookingForWaiver"
                    checked={testScores.greLookingForWaiver}
                    onChange={handleCheckboxChange}
                  />
                  Looking for a Waiver
                </label>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="button-container mb-4 mt-3 float-end">
        <button style={{ fontFamily: "Gilroy-Medium" }} type="submit" className="btn btn-primary">{editMode ? 'Update' : 'Submit'} Profile</button>
      </div>
    </form>
  );
}
