import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { addStudent ,editStudent,getStudentDetailsById} from "../../../Services/dashboard";
import CustomLoader from "../../loader";
export default function PersonalDetails() {
  const _u=JSON.parse(localStorage.getItem('_u'))
  const userId=_u?._id
  const [editMode,  setEditMode] = useState(false);
  const[loading,setLoading]=useState(false);
const [editModeData, setEditModeData] = useState({});

  const [data, setData] = useState({
    fullName: "",
    gender: "",
    contactNumber: "",
    email: "",
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
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        console.log(res, '--------------------');
        if (res?.data?.data) {
          console.log(res?.data?.data, '-----------------------get student by id response');
          setData({
            fullName: res?.data?.data?.fullName,
            gender: res?.data?.data?.gender,
            contactNumber: res?.data?.data?.contactNumber,
            email: res?.data?.data?.email,
            dob: res?.data?.data?.dob?.split("T")[0],
            maritalStatus: res?.data?.data?.maritalStatus,
            mailingAddressLine1: res?.data?.data?.mailingAddress?.addressLine1,
            mailingAddressLine2: res?.data?.data?.mailingAddress?.addressLine2,
            mailingCountry: res?.data?.data?.mailingAddress?.country,
            mailingState: res?.data?.data?.mailingAddress?.state,
            mailingCity: res?.data?.data?.mailingAddress?.city,
            mailingPincode: res?.data?.data?.mailingAddress?.pincode,
            permanentAddressLine1: res?.data?.data?.permanentAddress?.addressLine1,
            permanentAddressLine2: res?.data?.data?.permanentAddress?.addressLine2,
            permanentCountry: res?.data?.data?.permanentAddress?.country,
            permanentState: res?.data?.data?.permanentAddress?.state,
            permanentCity: res?.data?.data?.permanentAddress?.city,
            permanentPincode: res?.data?.data?.permanentAddress?.pinCode,
            passportNumber: res?.data?.data?.passportInformation?.passportNumber,
            passportIssueCountry: res?.data?.data?.passportInformation?.issueCountry,
            passportIssueDate: res?.data?.data?.passportInformation?.issueDate?.split("T")[0],
            passportExpiryDate: res?.data?.data?.passportInformation?.expiryDate?.split("T")[0],
            passportStateOfBirth: res?.data?.data?.passportInformation?.birthState,
            passportCountryOfBirth: res?.data?.data?.passportInformation?.birthCountry,
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

  const validateField = (name, value) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
      return false;
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
      return true;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = Object.keys(data).every((key) => validateField(key, data[key]));
    if (!isValid) {
      toast.error('Please fill all required fields.');
      return;
    }
    const payload = {
      fullName: data.fullName,
      gender: data.gender,
      contactNumber: data.contactNumber,
      email: data.email,
      dob: data.dob,
      maritalStatus: data.maritalStatus,
      mailingAddress: {
        addressLine1: data.mailingAddressLine1,
        addressLine2: data.mailingAddressLine2,
        country: data.mailingCountry,
        state: data.mailingState,
        city: data.mailingCity,
        pinCode: data.mailingPincode,
      },
      permanentAddress: {
        addressLine1: data.permanentAddressLine1,
        addressLine2: data.permanentAddressLine2,
        country: data.permanentCountry,
        state: data.permanentState,
        city: data.permanentCity,
        pinCode: data.permanentPincode,
      },
      passportInformation: {
        passportNumber: data.passportNumber,
        issueCountry: data.passportIssueCountry,
        issueDate: data.passportIssueDate,
        expiryDate: data.passportExpiryDate,
        birthState: data.passportStateOfBirth,
        birthCountry: data.passportCountryOfBirth,
      },
    };
    let response;
    setLoading(true);
    if(editMode){
      payload.userId=userId
      response = editStudent(...editModeData,...payload);

    }else{
      payload.userId=userId

      response = await addStudent(payload);
    }
    setLoading(false);

    if(response.error) {
      toast.error(response.message);
    } else {
      
      toast.success('Profile Data Updated successfully');

    }
    console.log("Submitted Data:", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <CustomLoader />}
        <div className="main-container">
        <h3 className="heading">Personal Information</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Full Name <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="name" value={data.fullName} placeholder="Full name" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Gender <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="gender" value={data.gender} placeholder="Gender" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Contact Number <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="contactNumber" value={data.contactNumber} placeholder="Contact number" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Email ID <span style={{ color: 'red' }}>*</span></label>
            <input type="email" name="emailID" value={data.email} placeholder="Email" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Date of Birth <span style={{ color: 'red' }}>*</span></label>
            <input type="date" name="dob" value={data.dob} onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Marital Status <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="maritalStatus" value={data.maritalStatus} placeholder="Marital status" onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <h3 className="heading">Mailing Address</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Address Line 1 <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="mailingAddressLine1" value={data.mailingAddressLine1} placeholder="Address Line 1" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Address Line 2 <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="mailingAddressLine2" value={data.mailingAddressLine2} placeholder="Address Line 2" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Country <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="mailingCountry" value={data.mailingCountry} placeholder="Country" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>State <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="mailingState" value={data.mailingState} placeholder="State" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>City <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="mailingCity" value={data.mailingCity} placeholder="City" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Pincode <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="mailingPincode" value={data.mailingPincode} placeholder="Pincode" onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <h3 className="heading">Permanent Address</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Address Line 1 <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="permanentAddressLine1" value={data.permanentAddressLine1} placeholder="Address Line 1" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Address Line 2 <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="permanentAddressLine2" value={data.permanentAddressLine2} placeholder="Address Line 2" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Country <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="permanentCountry" value={data.permanentCountry} placeholder="Country" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>State <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="permanentState" value={data.permanentState} placeholder="State" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>City <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="permanentCity" value={data.permanentCity} placeholder="City" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Pincode <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="permanentPincode" value={data.permanentPincode} placeholder="Pincode" onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <h3 className="heading">Passport Information</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Passport Number <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="passportNumber" value={data.passportNumber} placeholder="Passport Number" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Issue Country <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="passportIssueCountry" value={data.passportIssueCountry} placeholder="Issue Country" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Issue Date <span style={{ color: 'red' }}>*</span></label>
            <input type="date" name="passportIssueDate" value={data.passportIssueDate} onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Expiry Date <span style={{ color: 'red' }}>*</span></label>
            <input type="date" name="passportExpiryDate" value={data.passportExpiryDate} onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>State of Birth <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="passportStateOfBirth" value={data.passportStateOfBirth} placeholder="State of Birth" onChange={handleInputChange} />
          </div>
          <div className="col-md-6 formField">
            <label>Country of Birth <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="passportCountryOfBirth" value={data.passportCountryOfBirth} placeholder="Country of Birth" onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="button-container mb-4 mt-3 float-end">
        <button type="submit" className="btn btn-primary">{editMode ? 'Update' : 'Save'} Profile</button>
      </div>
    </form>
  );
}
