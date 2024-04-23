import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { addStudent, editStudent, getStudentDetailsById } from "../../../Services/dashboard";
import CustomLoader from "../../loader";

export default function ViewUserDocument() {
  const _u = JSON.parse(localStorage.getItem('_u'));
  const userId = _u?._id;
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    
  })
  const [documentUrls, setDocumentUrls] = useState({
    document1: "",
    document2: "",
    document3: "",
    document4: ""
  });

  useEffect(() => {
    const fetchDetails = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await getStudentDetailsById(userId);
        if (res?.data?.data) {
          setDocumentUrls({
            document1: res.data.data.documents?.document1,
            document2: res.data.data.documents?.document2,
            document3: res.data.data.documents?.document3,
            document4: res.data.data.documents?.document4
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!documentUrls.document1 || !documentUrls.document2 || !documentUrls.document3 || !documentUrls.document4) {
      toast.error("Please upload all documents before submitting.");
      return;
    }
    setLoading(true);
    const payload = { ...data ,userId: userId, documents: documentUrls};
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
          <h3 className="heading mt-3">Documents uploaded by Student</h3>
          <div className="row">
            {['document1', 'document2', 'document3', 'document4'].map((doc, index) => (
              <div key={index} className="col-md-6 formField">
                <label>{`Document ${index + 1}`}</label>
                <input
                  type="file"
                  name={doc}
                  onChange={(e) => handleFileUpload(e, doc)}
                />
                {editMode && documentUrls[doc] && (
                  <div style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                    <img src={documentUrls[doc]} alt={`Document ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                  </div>
                )}
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
