import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { addStudent, editStudent, getStudentDetailsById } from "../../../Services/dashboard";
import CustomLoader from "../../loader";

export default function WorkBackground() {
  const _u = JSON.parse(localStorage.getItem('_u'))
  const userId = _u?._id
  const [editMode, setEditMode] = useState(false);
  const [editModeData, setEditModeData] = useState({});
  const [loading, setLoading] = useState(false);

  const [workData, setWorkData] = useState([
    {
      jobTitle: "",
      company: "",
      location: "",
      jobSummary: "",
      joiningDate: "",
      workedTill: ""
    }
  ]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        console.log(res, '--------------------');
        if (res?.data?.data) {
          console.log(res?.data?.data, '-----------------------get student by id response');
          setWorkData(res?.data?.data?.workExperience || [{
            jobTitle: "",
            company: "",
            location: "",
            jobSummary: "",
            joiningDate: "",
            workedTill: ""
          }]);
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

  const [errors, setErrors] = useState({});

  const validateField = (name, value, index) => {
    if (!value) {
      setErrors(prev => {
        const newErrors = { ...prev };
        if (!newErrors[index]) newErrors[index] = {};
        newErrors[index][name] = "This field is required";
        return newErrors;
      });
      return false;
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        if (newErrors[index]) {
          delete newErrors[index][name];
          if (Object.keys(newErrors[index]).length === 0) {
            delete newErrors[index];
          }
        }
        return newErrors;
      });
      return true;
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setWorkData(prevData => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
    validateField(name, value, index);
  };
  useEffect(() => {
    setTimeout(() => {
      
      addWorkExperience();
    }, 2000);
    
  }, []);

  const addWorkExperience = () => {
    setWorkData(prevData => [
      ...prevData,
      {
        jobTitle: "",
        company: "",
        location: "",
        jobSummary: "",
        joiningDate: "",
        workedTill: ""
      }
    ]);
  };

  const removeWorkExperience = (index) => {
    setWorkData(prevData => prevData.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = workData.every((item, index) => Object.keys(item).every((key) => validateField(key, item[key], index)));
    if (!isValid) {
      toast.error('Please fill all required fields.');
      return;
    }
    const payload = {
      workExperience: workData
    };
    let response;
    if (editMode) {
      payload.userId = userId;
      response = await editStudent(payload);
    } else {
      payload.userId = userId;
      response = await addStudent(payload);
    }
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Profile Data Updated successfully');
    }
    console.log("Submitted Data:", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <CustomLoader />}

      {workData.map((work, index) => (
        <div key={index} className="main-container mb-3">
          <h5 className="heading" style={{ fontFamily: "Gilroy-Medium" }}>Work Experience {index + 1}</h5>
          <div className="row">
            <div className="col-md-6 formField">
              <label style={{ fontFamily: "Gilroy-Medium" }}>Job Title</label>
              <input
                style={{ fontFamily: "Gilroy-Medium" }}
                type="text"
                name="jobTitle"
                placeholder="Enter your job title"
                value={work.jobTitle}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="col-md-6 formField">
              <label style={{ fontFamily: "Gilroy-Medium" }}>Company Name</label>
              <input
                style={{ fontFamily: "Gilroy-Medium" }}
                type="text"
                name="company"
                placeholder="Enter company name"
                value={work.company}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="col-md-6 formField">
              <label style={{ fontFamily: "Gilroy-Medium" }}>Location</label>
              <input
                style={{ fontFamily: "Gilroy-Medium" }}
                type="text"
                name="location"
                placeholder="Enter location"
                value={work.location}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="col-md-6 formField">
              <label style={{ fontFamily: "Gilroy-Medium" }}>Job Summary</label>
              <input
                style={{ fontFamily: "Gilroy-Medium" }}
                type="text"
                name="jobSummary"
                placeholder="Enter job summary"
                value={work.jobSummary}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="col-md-6 formField">
              <label style={{ fontFamily: "Gilroy-Medium" }}>Joining Date</label>
              <input
                style={{ fontFamily: "Gilroy-Medium" }}
                type="date"
                name="joiningDate"
                placeholder="Enter joining date"
                value={work.joiningDate}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="col-md-6 formField">
              <label style={{ fontFamily: "Gilroy-Medium" }}>Worked Till</label>
              <input
                style={{ fontFamily: "Gilroy-Medium" }}
                type="date"
                name="workedTill"
                placeholder="Enter last working day or current"
                value={work.workedTill}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="col-md-12 text-end mt-2">
             { workData.length > 1 && <button type="button"  style={{
                            fontFamily: "Gilroy-Bold",
                            color: "#FF5573",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "1px solid #FF5573",
                            background: "#fff",
                            position: 'relative',
                            bottom:'35px',
                            marginTop:'20px'

                        }} className="btn btn-danger" onClick={() => removeWorkExperience(index)}>
                Remove
              </button>}
            </div>
          </div>
        </div>
      ))}

      <div className="button-container mb-4 mt-3">
        <button   style={{
                            fontFamily: "Gilroy-Bold",
                            color: "#FF5573",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "1px solid #FF5573",
                            background: "#fff",
                            position: 'relative',
                            bottom:'35px',
                            marginTop:'10px'

                        }} id="add-more-experience" type="button" className="btn btn-primary " onClick={addWorkExperience}>
          Add Work Experience
        </button>
        <button   style={{
                            fontFamily: "Gilroy-Bold",
                            color: "#FF5573",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "1px solid #FF5573",
                            background: "#fff",
                            position: 'relative',
                            bottom:'35px',
                            marginTop:'10px'

                        }} type="submit" className="btn btn-primary float-end">
          Next
        </button>
      </div>
    </form>
  );
}
