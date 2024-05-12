import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { addStudent, editStudent, getStudentDetailsById } from "../../../Services/dashboard";
import CustomLoader from "../../loader";
import { DocumentScanner } from "@mui/icons-material";

export default function ViewUserDocument() {
  const _u = JSON.parse(localStorage.getItem('_u'));
  const userId = _u?._id;
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [documentUrls, setDocumentUrls] = useState({
    '10th Marksheet': "",
    '12th Marksheet': "",
    'Degree (Semester wise, final degree, consolidated)': "",
    'Passport': "",
    'Statement of Purpose': "",
    'Letters of Recommendation': "",
    'IELTS': "",
    'RESUME': "",
    'ADDITIONAL DOCUMENTS': "",
    'GRE/GMAT': ""
  });

  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        if (res?.data?.data) {
          setDocumentUrls({
            '10th Marksheet': res.data.data.documents?.['10th Marksheet'],
            '12th Marksheet': res.data.data.documents?.['12th Marksheet'],
            'Degree (Semester wise, final degree, consolidated)': res.data.data.documents?.['Degree (Semester wise, final degree, consolidated)'],
            'Passport': res.data.data.documents?.Passport,
            'Statement of Purpose': res.data.data.documents?.['Statement of Purpose'],
            'Letters of Recommendation': res.data.data.documents?.['Letters of Recommendation'],
            'IELTS': res.data.data.documents?.IELTS,
            'RESUME': res.data.data.documents?.RESUME,
            'ADDITIONAL DOCUMENTS': res.data.data.documents?.['ADDITIONAL DOCUMENTS'],
            'GRE/GMAT': res.data.data.documents?.['GRE/GMAT']
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


  useEffect(()=>{
    console.log(documentUrls,'------------------------------ documentUrls- -----------------')
    console.log(documentUrls['10th Marksheet'],'------------------------------ documentUrls- -----------------')
  },[documentUrls])

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mandatoryDocuments = ['10th Marksheet', '12th Marksheet', 'Degree (Semester wise, final degree, consolidated)', 'Passport', 'Statement of Purpose', 'Letters of Recommendation'];
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
      <form onSubmit={handleSubmit}>
        <div className="main-container">
          <h3 className="heading mt-3" style={{ fontFamily: 'Gilroy-Medium' }}>Documents uploaded by Student</h3>
          <div className="row">
            {Object.entries(documentUrls).map(([docKey, docValue], index) => (
              <div key={index} className="col-md-6 formField" style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                  <label style={{ fontFamily: 'Gilroy-Regular' }}>{`${docKey}${index < 6 ? '*' : ''}`}</label>
                  <input
                    type="file"
                    name={docKey}
                    onChange={(e) => handleFileUpload(e, docKey)}
                    style={{ margin: "10px 0",fontFamily: 'Gilroy-Regular' }}
                  />
                  {docValue && (
                    <div style={{ width: "100%", marginTop: "10px" }}>
                      {docValue.toLowerCase().endsWith('.pdf') ? (
                        <button className="btn btn-link" onClick={() => openPdfPreview(docValue)}>View Document <DocumentScanner/></button>
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
            <button type="submit" className="btn btn-primary">{editMode ? 'Update' : 'Add'} Profile</button>
          </div>
        </div>
      </form>
    </div>
  );
}
