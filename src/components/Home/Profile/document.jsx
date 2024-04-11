import React, { useState } from "react";

export default function ViewUserDocument() {
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
      <h3 className="heading">Documents uploaded by Student</h3>
      <div className="row">
        <div className="col-md-6 formField">
        <label>Document 1</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Upload Pan card"
            disabled={true}

            value={workData.jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
        <label>Document 2</label>
          <input
            type="text"
            name="company"
            disabled={true}

            placeholder="Upload Pan card"
            value={workData.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
        <label>Document 3</label>
          <input
            type="text"
            disabled={true}

            name="location"
            placeholder="Upload Pan card"
            value={workData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 formField">
          <label>Document 4</label>
          <input
            type="text"
            name="jobSummary"
            placeholder="Upload Pan card"
            disabled={true}
            value={workData.jobSummary}
            onChange={handleInputChange}
          />
        </div>
     
      </div>
    </div>
  );
}
