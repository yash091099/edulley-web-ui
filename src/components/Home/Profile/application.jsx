import React, { useState } from "react";
const Academic = () => {

    const [activeTab, setActiveTab] = useState("apply");
    const activeStyle = { backgroundColor: '#FF6477', color: 'white' };
    const inactiveStyle = { backgroundColor: 'white', color: 'black' };
  return (
    <>
    <div className="container mt-4 d-flex flex-row flex-wrap gap-3">
    <button
      className={`btn btn-lg shadow text-xl px-4 py-2 rounded-pill`}
      style={activeTab === "apply" ? activeStyle : inactiveStyle}
      onClick={() => setActiveTab("apply")}
    >
      Apply to Programs
    </button>
    <button
      className={`btn btn-lg shadow text-xl px-4 py-2 rounded-pill`}
      style={activeTab === "applied" ? activeStyle : inactiveStyle}
      onClick={() => setActiveTab("applied")}
    >
      Applied Programs
    </button>
  </div>

<div className="container">
<div className="row justify-content-center my-3">
  <div className="col-12">
    <h5 className="text-center mb-3">Search suitable Course for you</h5>
    <div className="input-group">
      <input type="text" aria-label="Course" placeholder="Course" className="form-control" />
      <input type="text" aria-label="Intake" placeholder="Intake" className="form-control" />
      <input type="text" aria-label="Year" placeholder="Year" className="form-control" />
      <input type="text" aria-label="State/Province" placeholder="State/Province" className="form-control" />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">
        <i className="bi bi-search"></i>
      </button>
    </div>
    <button className="btn btn-link d-block mt-3 mx-auto">Advanced Search +</button>
  </div>
</div>
</div>
    </>
  );
};

export default Academic;
