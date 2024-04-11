import React, { useState } from "react";

export default function PersonalDetails() {
  const [data, setData] = useState({
    name: "",
    gender: "",
    contactNumber: "",
    emailID: "",
    dob: "",
    maritalStatus: "",
    mailingAddressLine1: "",
    mailingAddressLine2: "",
    mailingCountry: "",
    mailingState: "",
    mailingCity: "",
    mailingPincode: "",
    permanentAddressLine1: "",
    permanentAddressLine2: "",
    permanentCountry: "",
    permanentState: "",
    permanentCity: "",
    permanentPincode: "",
    passportNumber: "",
    passportIssueCountry: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    passportStateOfBirth: "",
    passportCountryOfBirth: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
    <div className="main-container">
      <h3 className="heading">Personal Information</h3>
      <div className="row">
        {/* Personal Information Section */}
        <div className="col-md-6 formField">
          <label>Full Name</label>
          <input type="text" name="name" value={data.name} placeholder="Aditya singh" onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Gender</label>
          <input type="text" placeholder="Male" name="gender" value={data.gender} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Contact Number</label>
          <input type="text" placeholder="+91 987654321" name="contactNumber" value={data.contactNumber} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Email ID</label>
          <input type="text" name="emailID" placeholder="abc.email" value={data.emailID} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Date of Birth</label>
          <input type="text" name="dob" placeholder="26 March 1998" value={data.dob} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Marital Status</label>
          <input type="text" name="maritalStatus"  placeholder="Married" value={data.maritalStatus} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  
    <div className="main-container">
      <h3 className="heading">Mailing Address</h3>
      <div className="row">
        {/* Mailing Address Section */}
        <div className="col-md-6 formField">
          <label>Address Line 1</label>
          <input type="text" name="mailingAddressLine1" placeholder="Lorem ipsum dolor sit amet" value={data.mailingAddressLine1} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Address Line 2</label>
          <input type="text" name="mailingAddressLine2" placeholder="Lorem ipsum dolor sit amet" value={data.mailingAddressLine2} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Country</label>
          <input type="text" name="mailingCountry" placeholder="India" value={data.mailingCountry} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>State</label>
          <input type="text" name="mailingState" placeholder="Karnataka" value={data.mailingState} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>City</label>
          <input type="text" name="mailingCity" placeholder="Bengaluru" value={data.mailingCity} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Pincode</label>
          <input type="text" name="mailingPincode" placeholder="560045" value={data.mailingPincode} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  
    <div className="main-container">
      <h3 className="heading">Permanent Address</h3>
      <div className="row">
        {/* Permanent Address Section */}
        <div className="col-md-6 formField">
          <label>Address Line 1</label>
          <input type="text" name="permanentAddressLine1" placeholder="Lorem ipsum dolor sit amet" value={data.permanentAddressLine1} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Address Line 2</label>
          <input type="text" name="permanentAddressLine2" placeholder="Lorem ipsum dolor sit amet" value={data.permanentAddressLine2} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Country</label>
          <input type="text" name="permanentCountry" placeholder="India" value={data.permanentCountry} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>State</label>
          <input type="text" name="permanentState" placeholder="Karnataka" value={data.permanentState} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>City</label>
          <input type="text" name="permanentCity" placeholder="Bengaluru" value={data.permanentCity} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Pincode</label>
          <input type="text" name="permanentPincode" placeholder="560045" value={data.permanentPincode} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  
    <div className="main-container">
      <h3 className="heading">Passport Information</h3>
      <div className="row">
        {/* Passport Information Section */}
        <div className="col-md-6 formField">
          <label>Passport Number</label>
          <input type="text" name="passportNumber" placeholder="X9876543" value={data.passportNumber} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Issue Country</label>
          <input type="text" name="passportIssueCountry" placeholder="India" value={data.passportIssueCountry} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Issue Date</label>
          <input type="text" name="passportIssueDate" placeholder="00-00-2023" value={data.passportIssueDate} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Expiry Date</label>
          <input type="text" name="passportExpiryDate" placeholder="00-00-2023" value={data.passportExpiryDate} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>State of Birth</label>
          <input type="text" name="passportStateOfBirth" placeholder="Karnataka" value={data.passportStateOfBirth} onChange={handleInputChange} />
        </div>
        <div className="col-md-6 formField">
          <label>Country of Birth</label>
          <input type="text" name="passportCountryOfBirth" placeholder="India" value={data.passportCountryOfBirth} onChange={handleInputChange} />
        </div>
      </div>
    </div>

    <div className="button-container">
      {/* <button style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}   className="saveButton" >
        Next
      </button> */}
    </div>

  </>
  
  );
}
