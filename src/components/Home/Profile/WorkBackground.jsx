import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { addStudent, editStudent, getStudentDetailsById } from "../../../Services/dashboard";
import CustomLoader from "../../loader";
export default function WorkBackground() {
  const _u=JSON.parse(localStorage.getItem('_u'))
  const userId=_u?._id
  const [editMode,  setEditMode] = useState(false);
const [editModeData, setEditModeData] = useState({});
  const [loading, setLoading] = useState(false);

  const [workData, setWorkData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobSummary: "",
    joiningDate: "",
    workedTill: ""
  });
  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        console.log(res, '--------------------');
        if (res?.data?.data) {
          console.log(res?.data?.data, '-----------------------get student by id response');
          setWorkData({
            jobTitle: res?.data?.data?.workExperience[0]?.jobTitle,
            company: res?.data?.data?.workExperience[0]?.company,
            location: res?.data?.data?.workExperience[0]?.location,
            jobSummary: res?.data?.data?.workExperience[0]?.jobSummary,
            joiningDate: res?.data?.data?.workExperience[0]?.joiningDate?.split("T")[0],
            workedTill: res?.data?.data?.workExperience[0]?.workedTill?.split("T")[0],
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

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value) {
      setErrors(prev => ({ ...prev, [name]: "This field is required" }));
      return false;
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
      return true;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWorkData(prevData => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = Object.keys(workData).every((key) => validateField(key, workData[key]));
    if (!isValid) {
      toast.error('Please fill all required fields.');
      return;
    }
    const payload = {
      workExperience: [
        {
          jobTitle: workData.jobTitle,
          company: workData.company,
          location: workData.location,
          jobSummary: workData.jobSummary,
          joiningDate: workData.joiningDate,
          workedTill: workData.workedTill
        }
      ]
    };
    let response;
    if(editMode){
      payload.userId=userId
      response = editStudent(payload);

    }else{
      payload.userId=userId

      response = addStudent(payload);
    }
    if(response.error) {
      toast.error(response.message);
    } else {
      
      toast.success('Profile Data Updated successfully');

    }
    console.log("Submitted Data:", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading&&<CustomLoader/>}

      <div className="main-container">
        <h3 className="heading">Work Experience</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Job Title<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter your job title"
              value={workData.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Company Name<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={workData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Location<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={workData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Job Summary<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="jobSummary"
              placeholder="Enter job summary"
              value={workData.jobSummary}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Joining Date<span style={{ color: 'red' }}>*</span></label>
            <input
              type="date"
              name="joiningDate"
              placeholder="Enter joining date"
              value={workData.joiningDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Worked Till<span style={{ color: 'red' }}>*</span></label>
            <input
              type="date"
              name="workedTill"
              placeholder="Enter last working day or current"
              value={workData.workedTill}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="button-container mb-4 mt-3 float-end">
        <button type="submit" className="btn btn-primary">{editMode ? 'Update' : 'Submit'} Profile</button>
      </div>
      </div>
    </form>
  );
}
