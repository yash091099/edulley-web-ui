import React, { useState } from "react";

export default function TestScores() {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTestScores((prevScores) => ({ ...prevScores, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTestScores((prevScores) => ({ ...prevScores, [name]: checked }));
  };

  return (
    <div className="test-scores-container">
      <div className="overview-container mb-4">
        <h3>IELTS</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Overall Score</label>
            <input
              type="text"
              name="ieltsOverall"
              placeholder="Enter your overall score"
              value={testScores.ieltsOverall}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Date of Exam</label>
            <input
              type="text"
              placeholder="Date of Exam"
              name="ieltsDateOfExam"
              value={testScores.ieltsDateOfExam}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Quantitative</label>
            <input
              type="text"
              name="ieltsQuantitative"
              placeholder="Enter quantitative score"
              value={testScores.ieltsQuantitative}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Verbal</label>
            <input
              type="text"
              name="ieltsVerbal"
              placeholder="Enter verbal score"
              value={testScores.ieltsVerbal}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Analytical Writing</label>
            <input
              type="text"
              name="ieltsAnalytical"
              placeholder="Enter analytical writing score"
              value={testScores.ieltsAnalytical}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>
              <input
                type="checkbox"
                name="ieltsYetToTake"
                className="mr-2"
                checked={testScores.ieltsYetToTake}
                onChange={handleCheckboxChange}
              />
              Yet to take this test
            </label>
            <label>
              <input
                type="checkbox"
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

      <div className="overview-container">
        <h3>GRE</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Overall Score</label>
            <input
              type="text"
              name="greOverall"
              placeholder="Enter your overall score"
              value={testScores.greOverall}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Date of Exam</label>
            <input
              type="date"
              name="greDateOfExam"
              value={testScores.greDateOfExam}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Quantitative</label>
            <input
              type="text"
              name="greQuantitative"
              placeholder="Enter quantitative score"
              value={testScores.greQuantitative}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Verbal</label>
            <input
              type="text"
              name="greVerbal"
              placeholder="Enter verbal score"
              value={testScores.greVerbal}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Analytical Writing</label>
            <input
              type="text"
              name="greAnalytical"
              placeholder="Enter analytical writing score"
              value={testScores.greAnalytical}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>
              <input
                type="checkbox"
                name="greYetToTake"
                className="mr-2"

                checked={testScores.greYetToTake}
                onChange={handleCheckboxChange}
              />
              Yet to take this test
            </label>
            <label>
              <input
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
    </div>
  );
}
