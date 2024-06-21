import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { addStudent, editStudent, getStudentDetailsById } from "../../../Services/dashboard";
import CustomLoader from "../../loader";
import { DocumentScanner } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import { Button, Card } from "react-bootstrap";

export default function ViewUserDocument() {
  const _u = JSON.parse(localStorage.getItem('_u'));
  const userId = _u?._id;
  const highlightColor = "#FF5573";
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [documentUrls, setDocumentUrls] = useState({
    tenthMarksheet: "",
    twelfthMarksheet: "",
    passport: "",
    statementOfPurpose: "",
    lettersOfRecommendation: "",
    ielts: "",
    degree: "",
    resume: "",
    additionalDocuments: "",
    greGmat: ""
  });
  const [activeTab, setActiveTab] = useState(0);
  const [studentDetails, setStudentDetails] = useState({});

  const _id = _u ? _u._id : null;
  useEffect(() => {
    if (_id) {
      getStudentDetailsById(_id).then((res) => {
        setStudentDetails(res.data.data);
      });
    }
  }, [_id]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        if (res?.data?.data) {
          setDocumentUrls({
            tenthMarksheet: res.data.data.documents?.tenthMarksheet,
            twelfthMarksheet: res.data.data.documents?.twelfthMarksheet,
            passport: res.data.data.documents?.passport,
            statementOfPurpose: res.data.data.documents?.statementOfPurpose,
            lettersOfRecommendation: res.data.data.documents?.lettersOfRecommendation,
            ielts: res.data.data.documents?.ielts,
            degree: res.data.data.documents?.degree,
            resume: res.data.data.documents?.resume,
            additionalDocuments: res.data.data.documents?.additionalDocuments,
            greGmat: res.data.data.documents?.greGmat
          });
          setData(res.data.data);
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

  const handleFileUpload = async (event, documentKey) => {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('https://api.mymultimeds.com/api/file/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Failed to upload file: ${response.statusText}`);
      }
      const responseData = await response.json();
      setDocumentUrls(prevUrls => ({
        ...prevUrls,
        [documentKey]: responseData.publicUrl
      }));
      toast.success('Document uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error.message);
      toast.error(`Error uploading document: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const openPdfPreview = (url) => {
    window.open(url, '_blank');
  };
  const toCapitalise = (text) => {
    console.log(text,'text')
    switch (text) {
      case 'tenth Marksheet':
        return '10th Marksheet';
      case 'twelfth Marksheet':
        return '12th Marksheet';
      default:
        return text?.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mandatoryDocuments = ['tenthMarksheet', 'twelfthMarksheet', 'degree', 'passport', 'statementOfPurpose', 'lettersOfRecommendation'];
    const isMandatoryDocumentsUploaded = mandatoryDocuments.every(doc => documentUrls[doc] !== "");
    if (!isMandatoryDocumentsUploaded) {
      toast.error("Please upload all mandatory documents before submitting.");
      return;
    }
    setLoading(true);
    const payload = { ...data, userId: userId, documents: documentUrls };
    let response;
    if (editMode) {
      response = await editStudent(payload);
    } else {
      response = await addStudent(payload);
    }
    setLoading(false);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success(editMode ? 'Profile Updated successfully' : 'Profile Added successfully');
    }
  };

  return (
    <div>
      {loading && <CustomLoader />}
      <div style={{ display: 'flex', marginTop: "10px", marginBottom: '20px' }}>
        <Button
          variant={activeTab === 0 ? 'primary' : 'light'}
          style={{
            backgroundColor: activeTab === 0 ? '#FF6477' : '#FFF',
            color: activeTab === 0 ? '#FFF' : '#000',
            borderRadius: '20px',
            fontFamily: 'Gilroy-Bold',
            marginRight: '10px',
          }}
          onClick={() => setActiveTab(0)}
        >
          Uploaded by You
        </Button>
        {/* <Button
          variant={activeTab === 1 ? 'primary' : 'light'}
          style={{
            backgroundColor: activeTab === 1 ? '#FF6477' : '#FFF',
            color: activeTab === 1 ? '#FFF' : '#000',
            borderRadius: '20px',
            fontFamily: 'Gilroy-Bold',
          }}
          onClick={() => setActiveTab(1)}
        >
          Uploaded by Edulley
        </Button> */}
      </div>
      <div className="card mb-4" style={{ backgroundColor: '#FFF0F0', border: 'none' }}>
        <div className="card-header" style={{ fontFamily: "Gilroy-Bold" }}>Welcome to Edulley!</div>
        <div className="card-body">
          <p className="card-text mb-2" style={{ color: highlightColor, fontFamily: "Gilroy-Medium" }}>You are just a few steps away from submitting your application</p>
          <div className="d-flex justify-content-between">
            <span style={{ fontFamily: "Gilroy-Medium" }}>Name : {studentDetails?.fullName || JSON.parse(localStorage.getItem('_u'))?.fullName || '--'}</span>
            <span style={{ fontFamily: "Gilroy-Medium" }}>Email : {studentDetails?.email || JSON.parse(localStorage.getItem('_u'))?.email || '--'}</span>
            <span style={{ fontFamily: "Gilroy-Medium" }}>Phone : {studentDetails?.contactNumber || JSON.parse(localStorage.getItem('_u'))?.mobileNumber || '--'}</span>
          </div>
        </div>
      </div>
      {activeTab === 0 && (
        <form onSubmit={handleSubmit}>
          <div className="main-container">
            <div className="row">
              {Object.entries(documentUrls).map(([docKey, docValue], index) => (
                <div key={index} className="col-md-6 formField" style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <label style={{ fontFamily: 'Gilroy-Medium' }}>{`${toCapitalise(docKey.replace(/([A-Z])/g, ' $1').trim())}${index < 5 ? '*' : ''}`}</label>
                    <input
                      type="file"
                      name={docKey}
                      onChange={(e) => handleFileUpload(e, docKey)}
                      style={{ margin: "10px 0", fontFamily: 'Gilroy-Medium' }}
                    />
                    {docValue && (
                      <div style={{ width: "100%", marginTop: "10px" }}>
                        {docValue.toLowerCase().endsWith('.pdf') ? (
                          <button className="btn btn-link" onClick={() => openPdfPreview(docValue)}>View Document <DocumentScanner /></button>
                        ) : (
                          <img src={docValue} alt={`${docKey}`} style={{ maxWidth: "150px", height: "150px" }} />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="button-container mb-4 mt-3 float-end">
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FF6477', borderColor: '#FF6477', fontFamily: 'Gilroy-Bold' }}>{editMode ? 'Update' : 'Add'} Profile</button>
            </div>
          </div>
        </form>
      )}
      {activeTab === 1 && (
        <div className="main-container">
          <Card style={{ backgroundColor: '#FFF0F0', border: 'none', marginBottom: '20px' }}>
            <Card.Body>
              <div style={{ fontFamily: 'Gilroy-Bold', color: '#FF6477' }}>MA by Research English Studies</div>
              <div style={{ fontFamily: 'Gilroy-Medium' }}>University Name</div>
              <div style={{ fontFamily: 'Gilroy-Medium' }}>Manchester, UK</div>
              <div style={{ fontFamily: 'Gilroy-Medium' }}>CU: Coventry</div>
              <div style={{ fontFamily: 'Gilroy-Medium', color: '#FF6477' }}>98765/23-24</div>
              <Card style={{ backgroundColor: '#FFF0F0', border: '1px solid #FF6477', borderRadius: '10px', marginTop: '10px' }}>
                <Card.Body>
                  <div style={{ fontFamily: 'Gilroy-Medium' }}>Application Submitted to Institution</div>
                  <div style={{ fontFamily: 'Gilroy-Medium' }}>Last uploaded on 23/01/2024 12:20 PM</div>
                  <div style={{ fontFamily: 'Gilroy-Medium', marginBottom: '10px' }}>CU Coventry submit.png</div>
                  <Button variant="outline-primary" style={{ borderColor: '#FF6477', color: '#FF6477', marginRight: '10px', fontFamily: 'Gilroy-Medium' }}>Add to student platform</Button>
                  <Button variant="outline-primary" style={{ borderColor: '#FF6477', color: '#FF6477', fontFamily: 'Gilroy-Medium' }}>Download all files</Button>
                </Card.Body>
              </Card>
              <Card style={{ backgroundColor: '#FFF0F0', border: '1px solid #FF6477', borderRadius: '10px', marginTop: '10px' }}>
                <Card.Body>
                  <div style={{ fontFamily: 'Gilroy-Medium' }}>Conditional Offer</div>
                  <div style={{ fontFamily: 'Gilroy-Medium' }}>Last uploaded on 23/01/2024 12:20 PM</div>
                  <div style={{ fontFamily: 'Gilroy-Medium', marginBottom: '10px' }}>Student_name_Conditionaloffersubmit.png</div>
                  <Button variant="outline-primary" style={{ borderColor: '#FF6477', color: '#FF6477', marginRight: '10px', fontFamily: 'Gilroy-Medium' }}>Add to student platform</Button>
                  <Button variant="outline-primary" style={{ borderColor: '#FF6477', color: '#FF6477', fontFamily: 'Gilroy-Medium' }}>Download all files</Button>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}
