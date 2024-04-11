import React, { useState } from "react";

export default function WorkBackground() {
  const [workData, setWorkData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobSummary: "",
    joiningDate: "",
    workedTill: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWorkData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="main-container">
      <h3 className="heading">Work Experience</h3>
      <div className="row">
        <div className="col-md-6 formField">
          <label>Job title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter your job title"
            value={workData.jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            value={workData.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={workData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
          <label>Job Summary</label>
          <input
            type="text"
            name="jobSummary"
            placeholder="Enter job summary"
            value={workData.jobSummary}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
          <label>Joining Date</label>
          <input
            type="text"
            name="joiningDate"
            placeholder="Enter joining date"
            value={workData.joiningDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
          <label>Worked till</label>
          <input
            type="text"
            name="workedTill"
            placeholder="Enter last working day or current"
            value={workData.workedTill}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
