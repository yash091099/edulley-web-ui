import React, { useState } from "react";
// import "./overviewInstute.css";

export default function AcademicProfile() {
  const [data, setData] = useState({
    tenthInstitutionName: "",
    tenthBoard: "",
    tenthScore: "",
    tenthYearOfCompletion: "",
    tenthSpecialization: "",
    twelfthInstitutionName: "",
    twelfthBoard: "",
    twelfthScore: "",
    twelfthYearOfCompletion: "",
    twelfthSpecialization: "",
    ugInstitutionName: "",
    ugBoard: "",
    ugScore: "",
    ugYearOfCompletion: "",
    ugSpecialization: "",
    pgInstitutionName: "",
    pgBoard: "",
    pgScore: "",
    pgYearOfCompletion: "",
    pgSpecialization: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="main-container">
        <h3 className="heading">10th</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Institution Name</label>
            <input
              type="text"
              name="tenthInstitutionName"
              value={data.tenthInstitutionName}
              onChange={handleInputChange}
              placeholder="Enter institution name"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Board</label>
            <input
              type="text"
              name="tenthBoard"
              value={data.tenthBoard}
              onChange={handleInputChange}
              placeholder="Enter board name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Score (%)</label>
            <input
              type="text"
              name="tenthScore"
              value={data.tenthScore}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Year of Completion</label>
            <input
              type="text"
              name="tenthYearOfCompletion"
              value={data.tenthYearOfCompletion}
              onChange={handleInputChange}
              placeholder="Enter year of completion"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 formField">
            <label>Specialization</label>
            <input
              type="text"
              name="tenthSpecialization"
              value={data.tenthSpecialization}
              onChange={handleInputChange}
              placeholder="Enter specialization"
            />
          </div>
        </div>
      </div>

      <div className="main-container">
        <h3 className="heading">Senior Secondary (11th-12th)</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Institution Name</label>
            <input
              type="text"
              name="twelfthInstitutionName"
              value={data.twelfthInstitutionName}
              onChange={handleInputChange}
              placeholder="Enter institution name"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Board</label>
            <input
              type="text"
              name="twelfthBoard"
              value={data.twelfthBoard}
              onChange={handleInputChange}
              placeholder="Enter board name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Score (%)</label>
            <input
              type="text"
              name="twelfthScore"
              value={data.twelfthScore}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Year of Completion</label>
            <input
              type="text"
              name="twelfthYearOfCompletion"
              value={data.twelfthYearOfCompletion}
              onChange={handleInputChange}
              placeholder="Enter year of completion"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Specialization</label>
            <input
              type="text"
              name="twelfthSpecialization"
              value={data.twelfthSpecialization}
              onChange={handleInputChange}
              placeholder="Enter specialization"
            />
          </div>
        </div>
      </div>

      <div className="main-container">
        <h3 className="heading">UG (Undergraduate)</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Institution Name</label>
            <input
              type="text"
              name="ugInstitutionName"
              value={data.ugInstitutionName}
              onChange={handleInputChange}
              placeholder="Enter institution name"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Board</label>
            <input
              type="text"
              name="ugBoard"
              value={data.ugBoard}
              onChange={handleInputChange}
              placeholder="Enter board name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Score (%)</label>
            <input
              type="text"
              name="ugScore"
              value={data.ugScore}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Year of Completion</label>
            <input
              type="text"
              name="ugYearOfCompletion"
              value={data.ugYearOfCompletion}
              onChange={handleInputChange}
              placeholder="Enter year of completion"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Specialization</label>
            <input
              type="text"
              name="ugSpecialization"
              value={data.ugSpecialization}
              onChange={handleInputChange}
              placeholder="Enter specialization"
            />
          </div>
        </div>
      </div>

      <div className="main-container">
        <h3 className="heading">PG (Postgraduate)</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Institution Name</label>
            <input
              type="text"
              name="pgInstitutionName"
              value={data.pgInstitutionName}
              onChange={handleInputChange}
              placeholder="Enter institution name"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Board</label>
            <input
              type="text"
              name="pgBoard"
              value={data.pgBoard}
              onChange={handleInputChange}
              placeholder="Enter board name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Score (%)</label>
            <input
              type="text"
              name="pgScore"
              value={data.pgScore}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>
          <div className="col-md-6 formField">
            <label>Year of Completion</label>
            <input
              type="text"
              name="pgYearOfCompletion"
              value={data.pgYearOfCompletion}
              onChange={handleInputChange}
              placeholder="Enter year of completion"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Specialization</label>
            <input
              type="text"
              name="pgSpecialization"
              value={data.pgSpecialization}
              onChange={handleInputChange}
              placeholder="Enter specialization"
            />
          </div>
        </div>
      </div>

      <div className="button-container">
        <button style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}   className="saveButton">Next</button>
      </div>
    </>
  );
}
